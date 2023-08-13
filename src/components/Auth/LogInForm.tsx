"use client";
import { useState } from "react";
import { logInputs } from "@/lib/common/commont";
import { InputLabel } from "@/lib/types/types";
import FormInput from "@components/Auth/FormInput";
import GoogleBtn from "./GoogleBtn";
import Email from "../svg/Email";
import LoadingButton from "../Layout/LoadingButton";
import { signIn } from "next-auth/react";
import { HandleValidationErrors, LoginDto } from "@/lib/dto";
import { combinedErrorMap } from "@/lib/utils/utils";

const LogInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading,setLoading]=useState(false)

  //input handler
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
  };
  //login handler
  const logInHandler=async ()=>{
    try {
      setLoading(true);
      const validatedUser = await LoginDto.safeParseAsync(user);
      if (!validatedUser.success) throw combinedErrorMap(validatedUser.error);
      const result = await signIn("credentials", {
        email: validatedUser.data.email,
        password: validatedUser.data.password,
        redirect: false,
      });
      if (result?.error) throw Error("Invalid Credentials, try again!");
    } catch (error) {
      HandleValidationErrors(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      {logInputs.map((input: InputLabel) => (
        <FormInput
          key={input.name}
          value={user[input.name as keyof typeof user]}
          changed={inputHandler}
          {...input}
        />
      ))}
      <div className="text-center">
        <LoadingButton
          clicked={logInHandler}
          loading={loading}
          style="btn-outline md:btn-md rounded-full"
          type="secondary"
        >
          <Email />
          Continue to login
        </LoadingButton>
      </div>
      <div className="divider">OR</div>
      <div className="text-center">
        <GoogleBtn size="md" />
      </div>
    </div>
  );
};

export default LogInForm
