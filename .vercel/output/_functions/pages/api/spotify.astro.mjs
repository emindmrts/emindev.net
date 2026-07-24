export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET({ request }) {
  const url = new URL(request.url);
  const trackId = url.searchParams.get("track_id");
  if (!trackId) {
    return new Response(JSON.stringify({ error: "Missing track_id" }), { status: 400 });
  }
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
  return new Response(JSON.stringify({ error: "No preview url found" }), { status: 404 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
