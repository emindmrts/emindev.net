import type { APIRoute } from "astro";
import { clearTokenCookie } from "@lib/auth";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  clearTokenCookie(cookies);
  return redirect("/admin/login", 302);
};
