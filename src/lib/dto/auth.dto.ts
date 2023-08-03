import { z } from "zod";
import { Prisma } from "@prisma/client";
import { UserDbInput } from "../db/validation";

export const LoginDto = z.object({
  email: z.string().email({ message: "Invalid Email Address!" }),
  password: z.string().min(5, { message: "Password too weak!" }),
});
export const JoinDto = UserDbInput.pick({ name: true, currency: true }).merge(
  LoginDto.extend({})
) satisfies z.Schema<Prisma.UserCreateInput>;
