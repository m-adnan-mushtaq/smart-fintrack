import { z } from "zod";
import { Prisma } from "@prisma/client";
import { UserDbInput } from "../db/validation/user.validation";
import { ValidationErrors } from "../utils/utils";
import { toast } from "react-hot-toast";

const PasswordDto = z
  .string()
  .nonempty("Password coudn't be empty!")
  .trim()
  .min(5, { message: "Password too weak!" });
export const LoginDto = z.object({
  email: z
    .string()
    .nonempty({ message: "Email should not be empty" })
    .email({ message: "Invalid Email Address!" }),
  password: PasswordDto,
});
export const JoinDto = UserDbInput.pick({ name: true, currency: true }).merge(
  LoginDto.extend({})
) satisfies z.Schema<Prisma.UserCreateInput>;

export const EmailDto = LoginDto.pick({ email: true });
export const OtpDto = z.object({
  otp: z.string().trim().min(6),
});

export const MessageDto = JoinDto.pick({ email: true, name: true }).merge(
  z.object({
    message: z
      .string()
      .nonempty({ message: "Message can't be empty" })
      .trim()
      .min(20, { message: "message should be 20 characters long!" }),
  })
);

export const SecurityDto = z.object({
  newPassword: PasswordDto,
  confirmPassword: PasswordDto,
}).refine(({newPassword,confirmPassword})=>{
  return newPassword===confirmPassword
},{message:"Password must be same",path:["confirmPassword"]});

export const NameDto=UserDbInput.pick({name:true})
export type CreateUserType = z.infer<typeof JoinDto>;
export type LoginUserType = z.infer<typeof LoginDto>;
export type LoginKeys = keyof LoginUserType;
export type CreateUserKeys = keyof CreateUserType;
export type SecurityI = z.infer<typeof SecurityDto>;
export type SecurityKeys=keyof SecurityI

export const HandleValidationErrors = (error: any) => {
  if (error instanceof ValidationErrors) {
    error.errors.forEach((message) => {
      toast.error(message);
    });
  } else if (error instanceof Error) {
    toast.error(error.message);
  }
};
