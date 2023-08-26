"use client";
import { useTransition } from "react";
import { joinInputs } from "@/lib/common/commont";
import FormInput from "@components/Form/FromInput";
import GoogleBtn from "@components/Auth/GoogleBtn";
import Email from "@components/svg/Email";
import CurrencyOptions from "../Layout/CurrencyOptions";
import { createUser } from "@/lib/actions";
import {  CreateUserType, HandleValidationErrors, JoinDto } from "@/lib/dto";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import LoadingButton from "../Layout/LoadingButton";
import { useForm, FormProvider} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@/store";

const JoinFrom = () => {
  const router = useRouter();
  const [isPending, startTransaction] = useTransition();
  const methods = useForm<CreateUserType>({resolver:zodResolver(JoinDto)});
  const {updateVerifyEmail} = useAuthStore()
  const createNewUserHandler = (data:CreateUserType) => {
    startTransaction(async () => {
      try {
        const response = await createUser(data);
        if (!response.success) throw Error(response.message);
        toast.success("Your account is created!");
        updateVerifyEmail(data.email)
        router.replace("/auth/verify");
      } catch (error) {
        HandleValidationErrors(error);
      }
    });
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(createNewUserHandler)} className="grid justify-center grid-cols-1 my-4 gap-2 md:grid-cols-2">
          {joinInputs.map(input=>(
            <FormInput
              key={input.name}
              {...input}
              register={methods.register}
              errorFeedback={methods.formState.errors[input.name as keyof CreateUserType]}            />
          ))}
          <CurrencyOptions />
          <div className="text-center col-span-2">
            <LoadingButton
              loading={isPending}
              style="btn-outline md:btn-md rounded-full"
              type="secondary"
              btnType="submit"
            >
              <Email />
              Create My Account
            </LoadingButton>
          </div>
        </form>
      </FormProvider>
      <div className="divider">OR</div>
      <div className="text-center">
        <GoogleBtn size="md" />
      </div>
    </>
  );
};

export default JoinFrom;
