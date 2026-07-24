import type { APIRoute } from "astro";
import { verifyPassword, createToken, setTokenCookie } from "@lib/auth";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const password = formData.get("password")?.toString() ?? "";

  if (!verifyPassword(password)) {
    return redirect("/admin/login?error=1", 302);
  }

  const token = createToken();
  setTokenCookie(cookies, token);
  return redirect("/admin", 302);
};
