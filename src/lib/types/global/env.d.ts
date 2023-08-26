import { type EnvSchemaType } from "@/lib/config";

declare global {
  namespace NodeJS {
      interface ProcessEnv extends EnvSchemaType {}
  }
}