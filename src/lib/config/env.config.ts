import { z } from "zod";
import { combinedErrorMap } from "../utils/utils";
/***********************************/
/* VALIDATE ENV FILE  SERVER SIDE */
/***********************************/

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "staging"]),
  NEXTAUTH_SECRET: z.string().nonempty(),
  GOOGLE_CLIENT_ID: z.string().nonempty(),
  GOOGLE_CLIENT_SECRET: z.string().nonempty(),
  GOOGLE_REDIRECT_LOCAL_URL: z.string().nonempty(),
  REDIS_LCOAL_HOST: z.string().nonempty(),
  REDIS_LOCAL_PORT: z.string().nonempty(),
  EMAIL_ADDRESS: z.string().nonempty(),
  EMAIL_PASSWORD: z.string().nonempty(),
  LOCAL_URL: z.string().nonempty(),
  PASSWORD_HASH: z.string().nonempty(),
});

export type EnvSchemaType = z.infer<typeof envSchema>;

const parseEnv = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  EMAIL_ADDRESS: process.env.EMAIL_ADDRESS,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_LOCAL_URL: process.env.GOOGLE_REDIRECT_LOCAL_URL,
  LOCAL_URL: process.env.LOCAL_URL,
  PASSWORD_HASH: process.env.PASSWORD_HASH,
  REDIS_LCOAL_HOST: process.env.REDIS_LCOAL_HOST,
  REDIS_LOCAL_PORT: process.env.REDIS_LOCAL_PORT,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
} as EnvSchemaType);

if (!parseEnv.success) {
  throw Error("Env file invalid!")
}
export const env = parseEnv.data;
