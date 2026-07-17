import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().default(4000),
  DATABASE_URL: z.string().optional(),
  REDIS_URL: z.string().optional(),
  JWT_SECRET: z.string().default("dev-secret"),
  JWT_REFRESH_SECRET: z.string().default("dev-refresh-secret"),
  CLIENT_ORIGIN: z.string().default("http://localhost:3000"),
});

export const env = envSchema.parse(process.env);