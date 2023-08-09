import { z } from "zod";
import { Prisma } from "@prisma/client";
import { UserDbInput } from "../db/validation";
import { ValidationErrors } from "../utils/utils";
import { toast } from "react-hot-toast";

export const LoginDto = z.object({
  email: z.string().nonempty({message:"Invalid Email"}).email({ message: "Invalid Email Address!" }),
  password: z.string().trim().min(5, { message: "Password too weak!" }),
});
export const JoinDto = UserDbInput.pick({ name: true, currency: true }).merge(
  LoginDto.extend({})
) satisfies z.Schema<Prisma.UserCreateInput>;

export const EmailDto = LoginDto.pick({ email: true });
export const OtpDto = z.object({
  otp: z.string().trim().min(6),
});

export const MessageDto=JoinDto.pick({email:true,name:true}).merge(z.object({
  message:z.string().nonempty({message:"Message can't be empty"}).min(20,{message:"message should be 20 characters long!"}).trim()
}))
export type CreateUserType = z.infer<typeof JoinDto>;

export const HandleValidationErrors = (error: any) => {
  if (error instanceof ValidationErrors) {
    error.errors.forEach((message) => {
      toast.error(message);
    });
  } else if (error instanceof Error) {
    toast.error(error.message);
  }
};
