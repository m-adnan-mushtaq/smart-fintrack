import { cleanEnv, email, port, str, url } from "envalid";
/***********************************/
/* VALIDATE ENV FILE */
/***********************************/

const env = cleanEnv(process.env, {
  NEXTAUTH_SECRET: str(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),
  GOOGLE_REDIRECT_LOCAL_URL: url(),
  REDIS_LCOAL_HOST: str(),
  REDIS_LOCAL_PORT: port(),
  EMAIL_ADDRESS: email(),
  EMAIL_PASSWORD: str(),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: str(),
  LOCAL_URL: str(),
  PASSWORD_HASH: str(),
});

export { env };
