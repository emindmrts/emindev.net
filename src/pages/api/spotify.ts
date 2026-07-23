export const prerender = false;

export async function GET({ request }) {
  const url = new URL(request.url);
  const trackId = url.searchParams.get("track_id");

  if (!trackId) {
    return new Response(JSON.stringify({ error: "Missing track_id" }), { status: 400 });
  }

  // Fallback: If no .env is provided, we can fetch from the Spotify embed directly (No API key needed!)
  // This extracts the previewUrl without any authentication.
  try {
    const embedRes = await fetch(`https://open.spotify.com/embed/track/${trackId}`);
    if (embedRes.ok) {
      const html = await embedRes.text();
      const match = html.match(/"audioPreview":{"url":"(.*?)"/);
      if (match && match[1]) {
        return new Response(JSON.stringify({ previewUrl: match[1] }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }
    }
  } catch (e) {
    console.error("Embed fetch failed", e);
  }

  // If you want to use official Spotify API via .env:
  // Add SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET to your Vercel Environment Variables
  const clientId = import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.SPOTIFY_CLIENT_SECRET;

  if (clientId && clientSecret) {
    try {
      // 1. Get access token
      const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
        },
        body: "grant_type=client_credentials",
      });

      const tokenData = await tokenRes.json();
      
      if (tokenData.access_token) {
        // 2. Fetch track info
        const trackRes = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
          headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
          },
        });
        const trackData = await trackRes.json();
        
        if (trackData.preview_url) {
          return new Response(JSON.stringify({ previewUrl: trackData.preview_url }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        }
      }
    } catch (e) {
      console.error("Spotify API error", e);
    }
  }

  return new Response(JSON.stringify({ error: "No preview url found" }), { status: 404 });
}
