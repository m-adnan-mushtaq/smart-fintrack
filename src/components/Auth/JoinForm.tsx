"use client";
import { useState, useTransition } from "react";
import { joinInputs } from "@/lib/common/commont";
import FormInput from "@components/Auth/FormInput";
import { InputLabel } from "@/lib/types/types";
import GoogleBtn from "@components/Auth/GoogleBtn";
import Email from "@components/svg/Email";
import CurrencyOptions from "../Layout/CurrencyOptions";
import { createUser } from "@/lib/actions";
import { CreateUserType, HandleValidationErrors, JoinDto } from "@/lib/dto";
import { combinedErrorMap } from "@/lib/utils/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import LoadingButton from "../Layout/LoadingButton";
import { useDispatch } from "react-redux";
import { setVerifyEmail } from "@/store/slices/auth.slice";
import WithRedirectAuth from "../HOC/withRedirectAuth";

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState<CreateUserType>({
    name: "",
    email: "",
    password: "",
    currency: "",
  });
  const [isPending, startTransaction] = useTransition();

  //input handler
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };

  const createNewUserHandler = () => {
    startTransaction(async () => {
      try {
        const parsedUser = await JoinDto.safeParseAsync(user);
        if (!parsedUser.success) throw combinedErrorMap(parsedUser.error);
        const response = await createUser(user);
        if (!response.success) throw Error(response.message);
        dispatch(setVerifyEmail(parsedUser.data.email));
        toast.success("Your account is created!");
        router.replace("/auth/verify");
      } catch (error) {
        HandleValidationErrors(error);
      }
    });
  };
  return (
    <>
      <form className="grid grid-cols-1 my-4 gap-2 md:grid-cols-2">
        {joinInputs.map((input: InputLabel) => (
          <FormInput
            key={input.name}
            value={user[input.name as keyof typeof user]}
            changed={inputHandler}
            {...input}
          />
        ))}
        <CurrencyOptions setUser={setUser} />
      </form>
      <div className="text-center">
        <LoadingButton
          clicked={createNewUserHandler}
          loading={isPending}
          style="btn-outline md:btn-md rounded-full"
          type="secondary"
        >
          <Email />
          Create My Account
        </LoadingButton>
      </div>
      <div className="divider">OR</div>
      <div className="text-center">
        <GoogleBtn size="md" />
      </div>
    </>
  );
};

const JoinForm = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default WithRedirectAuth(JoinForm);
