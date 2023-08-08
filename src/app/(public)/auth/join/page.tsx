import JoinForm from "@/components/Auth/JoinForm";
import Link from "next/link";
const JoinPage = () => {
  return (
    <div>
      <h1 className="text-3xl text-center capitalize mt-1 text-secondary font-extrabold ">
        Navigate Towards Financial Success
      </h1>
      {/* <JoinForm childType="page"/> */}
      <JoinForm />
      <p className="mt-4 text-center">
        Already have an account&nbsp;
        <Link className="link link-primary link-hover uppercase" href="/auth">
          Login
        </Link>
      </p>
    </div>
  );
};

export default JoinPage;
