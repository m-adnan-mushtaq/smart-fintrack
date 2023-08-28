import { Prisma } from "@prisma/client";
import { z } from "zod";
import {
  currenciesEnum,
  defaultAavatarUrl,
  defaultCurrency,
} from "../../common/commont";

const currenciesArr = currenciesEnum();
export const UserDbInput = z.object({
  name: z.string().nonempty({message:"Name can't be empty"}).trim().min(3,{message:"Name sould have minimum 3 characters"}).regex(/^[A-Za-z\s]+$/,{message:"Name should contain only letters and spaces!"}),
  email: z.string().email({ message: "Invalid Email Address!" }),
  googleId: z.string().optional(),
  password: z.string().trim().min(5, { message: "Password too weak!" }).optional(),
  picUrl: z.string().default(defaultAavatarUrl),
  verified: z.boolean().default(false),
  currency: z
    .enum(currenciesArr as [string, ...string[]], {
      errorMap: (issue, _ctx) => {
        switch (issue.code) {
          case "invalid_type":
            return { message: "Invalid currency value" };
          case "invalid_enum_value":
            return { message: "Given currency value is not allowed!" };
          default:
            return {
              message:
                "Invalid currency, please choose from the given options!",
            };
        }
      },
    })
    .default(defaultCurrency),
}) satisfies z.Schema<Prisma.UserCreateInput>;

export type DbUser = z.infer<typeof UserDbInput>;