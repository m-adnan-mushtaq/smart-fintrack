import { z } from "zod";
import {
  currenciesEnum,
  defaultAavatarUrl,
  defaultCurrency,
} from "../common/commont";
import { Prisma } from "@prisma/client";

const currenciesArr = currenciesEnum();
export const UserDbInput = z.object({
  name: z.string().regex(/^[A-Za-z0-9\s]+/, {
    message: "Only letters ans spaces are allowed!",
  }),
  email: z.string().email({ message: "Invalid Email Address!" }),
  googleId: z.string().optional(),
  password: z.string().min(5, { message: "Password too weak!" }).optional(),
  picUrl: z.string().default(defaultAavatarUrl),
  verified: z.boolean().default(false),
  currency: z
    .enum(currenciesArr as [string, ...string[]])
    .default(defaultCurrency),
}) satisfies z.Schema<Prisma.UserCreateInput>;


export type UserType = z.infer<typeof UserDbInput>;
