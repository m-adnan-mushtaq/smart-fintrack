import Email from "@svg/Email";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className=" bg-neutral pb-4 text-center capitalize gap-2 flex items-center justify-end flex-col"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <h1 className=" text-3xl md:text-5xl font-bold  ">
        Empowering Your Financial Future with Us
      </h1>
      <h1 className=" text-4xl md:text-6xl md:leading-[1.5]   drop-shadow-lg font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        Navigate Towards Financial Success
      </h1>
      <p className="mt-10 text-xl">
        Get Your <span className="font-bold">free account today</span>
      </p>
      <div className="pt-4">
        <Link
          href="/auth/join"
          className="btn btn-secondary btn-outline md:btn-lg rounded-full"
        >
          <Email />
          Continue with Email
        </Link>
      </div>
      <p className="text-slate-400 mt-4">No Credit Card Required</p>
    </div>
  );
};

export default Hero;
