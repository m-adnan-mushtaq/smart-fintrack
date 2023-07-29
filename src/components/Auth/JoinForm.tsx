"use client";
import { useState } from "react";
import { joinInputs } from "@/lib/common/commont";
import FormInput from "@components/Auth/FormInput";
import { InputLabel } from "@/lib/types/types";
import GoogleBtn from "@components/Auth/GoogleBtn";
import Email from "@components/svg/Email";
import CurrencyOptions from "../Layout/CurrencyOptions";

const JoinForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  //input handler
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      [event.target.name]: event.target.value,
    }));
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
        <CurrencyOptions/>
      </form>
      <div className="text-center">
        <button type="submit" className="btn btn-secondary btn-outline md:btn-md rounded-full">
          <Email />
          Create My Account
        </button>
      </div>
      <div className="divider">OR</div>
      <div className="text-center">
        <GoogleBtn size="md" />
      </div>
    </>
  );
};

export default JoinForm;
