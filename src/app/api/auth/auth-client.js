import { createAuthClient } from "better-auth/client";

// Exposes unified, high-utility sign-in methods and hooks globally to Client Components
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
});
