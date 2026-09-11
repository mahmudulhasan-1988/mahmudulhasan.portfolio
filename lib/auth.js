import { betterAuth } from "better-auth";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET || "portfolio-better-auth-secret-key-9999",
  baseURL: process.env.NEXT_PUBLIC_APP_URL || "https://mahmudulhasan-portfolio.vercel.app",
  emailAndPassword: {
    enabled: true,
  },
});
