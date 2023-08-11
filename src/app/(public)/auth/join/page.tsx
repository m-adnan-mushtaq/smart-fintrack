import JoinForm from "@/components/Auth/JoinForm";
import VerifyInfo from "@/components/Auth/VerifyInfo";
import WithRedirectAuth from "@/components/HOC/withRedirectAuth";
import { SITE_TITLE } from "@/lib/common/commont";
import { Metadata } from "next";
import Link from "next/link";
export const metadata:Metadata={
  title:SITE_TITLE+"Create New Account"
}
const JoinPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center capitalize mt-1 text-secondary font-extrabold ">
        Navigate Towards Financial Success
      </h1>
        <JoinForm childType="page" />
      <p className="mt-4 text-center">
        Already have an account&nbsp;
        <Link className="link link-primary link-hover uppercase" href="/auth">
          Login
        </Link>
      </p>
      <VerifyInfo/>
    </div>
  );
};

export default JoinPage;
