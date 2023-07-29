"use client";
import { useState } from "react";
import { logInputs } from "@/lib/common/commont";
import { InputLabel } from "@/lib/types/types";
import FormInput from "@components/Auth/FormInput";
import GoogleBtn from "./GoogleBtn";
import Email from "../svg/Email";

const LogInForm = () => {
  const [user, setUser] = useState({
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
    <form>
      {logInputs.map((input: InputLabel) => (
        <FormInput
          key={input.name}
          value={user[input.name as keyof typeof user]}
          changed={inputHandler}
          {...input}
        />
      ))}
      <div className="text-center">
        <button type="submit" className="btn btn-secondary btn-outline md:btn-md rounded-full">
          <Email />
          Continue to login
        </button>
      </div>
      <div className="divider">OR</div>
      <div className="text-center">
        <GoogleBtn size="md" />
      </div>
    </form>
  );
};

export default LogInForm;
