"use client";

import { securityInputs } from "@/lib/common/commont";
import { SecurityI } from "@/lib/dto";
import { useForm } from "react-hook-form";
import FromInput from "../Form/FromInput";
import LoadingButton from "../Layout/LoadingButton";
import { useMemo } from "react";

const SecurityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting, isValidating },
  } = useForm<SecurityI>();
  const passwordChangeHandler = (payload: SecurityI) => {};
  const loading = useMemo(() => {
    return isLoading || isValidating || isSubmitting;
  }, [isLoading, isSubmitting, isValidating]);
  return (
    <form className="max-w-screen-sm flex flex-col gap-4 mt-8" onSubmit={handleSubmit(passwordChangeHandler)}>
      {securityInputs.map((input) => (
        <FromInput
          key={input.name}
          {...input}
          register={register}
          errorFeedback={errors[input.name]}
        />
      ))}
      <LoadingButton type="primary" btnType="submit" loading={loading}>
        Update Password
      </LoadingButton>
    </form>
  );
};

export default SecurityForm;
