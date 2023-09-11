import { z } from "zod";
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
  PUSHER_APPID: z.string().nonempty(),
  PUSHER_KEY: z.string().nonempty(),
  PUSHER_SECRET: z.string().nonempty(),
  PUSHER_CLUSTER: z.string().nonempty(),
  PRODUCTION_URL:z.string().nonempty(),
});

export type EnvSchemaType = z.infer<typeof envSchema>;

const parseEnv = envSchema.safeParse(process.env)

if (!parseEnv.success) {
  throw Error("Env file invalid!")
}
export const env = parseEnv.data;
