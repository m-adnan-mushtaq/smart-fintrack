"use client";
import { securityInputs } from "@/lib/common/commont";
import { SecurityDto, SecurityI } from "@/lib/dto";
import { useForm } from "react-hook-form";
import FromInput from "../Form/FromInput";
import LoadingButton from "../Layout/LoadingButton";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { useAuthStore } from "@/store";
import { handleActionResponse } from "@/lib/utils/utils";
import { updateSecurityCredentials } from "@/lib/actions";
import { signOut } from "next-auth/react";

const SecurityForm = () => {
  const { user } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting, isValidating },
  } = useForm<SecurityI>({ resolver: zodResolver(SecurityDto) });

  const passwordChangeHandler = async (payload: SecurityI) => {
    try {
      const message = await handleActionResponse(
        updateSecurityCredentials(
          user?.id as string,
          payload.confirmPassword,
        )
      );
      toast.success(message);
      await signOut()
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  const loading = useMemo(() => {
    return isLoading || isValidating || isSubmitting;
  }, [isLoading, isSubmitting, isValidating]);
  return (
    <form
      className="max-w-screen-sm flex flex-col gap-4 mt-8"
      onSubmit={handleSubmit(passwordChangeHandler)}
    >
      {securityInputs.map((input) => (
        <FromInput
          key={input.name}
          {...input}
          register={register}
          errorFeedback={errors[input.name]}
        />
      ))}
      <div className="text-right">
        <LoadingButton type="primary" btnType="submit" loading={loading}>
          Update Password
        </LoadingButton>
      </div>
    </form>
  );
};

export default SecurityForm;
