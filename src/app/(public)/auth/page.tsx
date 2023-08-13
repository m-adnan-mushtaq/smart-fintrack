import LogInForm from "@/components/Auth/LogInForm";
import VerifyInfo from "@/components/Auth/VerifyInfo";
import Link from "next/link";

const AuthPage = () => {
  return (
    <>
      <h1 className="text-3xl text-center mt-2 text-secondary font-extrabold uppercase">
        Welcome Back!
      </h1>
      <LogInForm  />
      <p className="mt-4 text-center">Not have an account Yet? <Link className="link link-primary link-hover uppercase" href="/auth/join">JOIN</Link></p>
      <VerifyInfo/>
    </>
  );
};

export default AuthPage;
