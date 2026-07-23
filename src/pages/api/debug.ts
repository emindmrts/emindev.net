export const prerender = false;

export async function GET() {
  const hasSecret = !!process.env.KEYSTATIC_SECRET;
  const secretLength = process.env.KEYSTATIC_SECRET ? process.env.KEYSTATIC_SECRET.length : 0;
  const nodeEnv = process.env.NODE_ENV;
  
  // Try reading from import.meta.env
  let metaEnvSecret = false;
  try {
    metaEnvSecret = !!import.meta.env.KEYSTATIC_SECRET;
  } catch (e) {}

  return new Response(JSON.stringify({ 
    hasSecret, 
    secretLength,
    nodeEnv,
    metaEnvSecret,
    currentTime: Date.now()
  }), {
    headers: { 'content-type': 'application/json' }
  });
}
