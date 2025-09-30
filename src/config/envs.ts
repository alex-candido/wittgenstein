import { z } from "zod";

const CONFIG_ENV_SCHEMA = z.object({
  NEXT_BASE_URL_API: z.string(),
  GOOGLE_API_KEY: z.string(),
})

export const env = CONFIG_ENV_SCHEMA.parse(process.env)

