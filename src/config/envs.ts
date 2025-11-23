import { z } from "zod";

const CONFIG_ENV_SCHEMA = z.object({
  NEXT_BASE_URL_API: z.string().url(),
  GOOGLE_API_KEY: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_SECRET: z.string().min(1),
  NEXTAUTH_JWT_SECRET: z.string().min(1),
});

export const env = CONFIG_ENV_SCHEMA.parse(process.env);