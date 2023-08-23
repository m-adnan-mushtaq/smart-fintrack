import { pbkdf2 } from "crypto";
import { promisify } from "util";
import { env } from "../config/env.config";

const hashGenerator = promisify(pbkdf2);
export class PasswordServie {
  private static iterations: number = 100_000;
  private static keyLength: number = 64;
  private static digest: string = "sha512";
  private static salt: string = env.PASSWORD_HASH;

  //generate hash for passwords
  static async generateHash(password: string): Promise<string> {
    const hash = await hashGenerator(
      password,
      PasswordServie.salt,
      PasswordServie.iterations,
      PasswordServie.keyLength,
      PasswordServie.digest
    );
    return hash.toString("hex");
  }

  //generates verify passwords

  static async verifyPassword(
    password: string,
    hash: string
  ): Promise<boolean> {
    const cHash = await PasswordServie.generateHash(password);
    return cHash === hash;
  }
}
