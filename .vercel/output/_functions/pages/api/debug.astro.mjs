export { renderers } from '../../renderers.mjs';

const prerender = false;
async function GET() {
  const hasSecret = !!process.env.KEYSTATIC_SECRET;
  const secretLength = process.env.KEYSTATIC_SECRET ? process.env.KEYSTATIC_SECRET.length : 0;
  const nodeEnv = process.env.NODE_ENV;
  let metaEnvSecret = false;
  try {
    metaEnvSecret = !!undefined                                ;
  } catch (e) {
  }
  return new Response(JSON.stringify({
    hasSecret,
    secretLength,
    nodeEnv,
    metaEnvSecret,
    currentTime: Date.now()
  }), {
    headers: { "content-type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
