"use client";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { logInputs } from "@client/common";
import FormInput from "@components/Form/FromInput";
import GoogleBtn from "./GoogleBtn";
import Email from "@svg/Email";
import LoadingButton from "../Layout/LoadingButton";
import { signIn } from "next-auth/react";
import { HandleValidationErrors, LoginDto,  LoginUserType } from "@/lib/dto";
import { zodResolver } from "@hookform/resolvers/zod";

const LogInForm = () => {
  const {
    reset,
    register,
    formState: { errors, isLoading, isSubmitting, isValidating },
    handleSubmit,
  } = useForm<LoginUserType>({ resolver: zodResolver(LoginDto) });

  //handle loading state
  const loading: boolean = useMemo(() => {
    return isLoading || isSubmitting || isValidating;
  }, [isLoading, isSubmitting, isValidating]);

  //login handler
  const logInHandler = async (data: LoginUserType) => {
    try {
      const { email, password } = data;
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) throw Error("Invalid Credentials, try again!");
      reset();
    } catch (error) {
      HandleValidationErrors(error);
    }
  };
  return (
    <div>
      <div className="text-center">
        <form onSubmit={handleSubmit(logInHandler)}>
          {logInputs.map((input) => (
            <FormInput
              key={input.name}
              {...input}
              register={register}
              errorFeedback={errors[input.name]}
            />
          ))}
          <LoadingButton
            loading={loading}
            style="btn-outline md:btn-md rounded-full"
            type="secondary"
            btnType="submit"
          >
            <Email />
            Continue to login
          </LoadingButton>
        </form>
      </div>
      <div className="divider">OR</div>
      <div className="text-center">
        <GoogleBtn size="md" />
      </div>
    </div>
  );
};

export default LogInForm;
