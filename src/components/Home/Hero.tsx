import Image from "next/image";
import Email from "@svg/Email";

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
    <div className="flex gap-2 pt-4 flex-col md:flex-row items-center  justify-center">
      <button className="btn  shadow-lg btn-outline flex justify-around md:btn-lg rounded-full">
        <Image
          src="/assets/google.svg"
          alt="google"
          loading="lazy"
          width={30}
          height={30}
        />
        Continue with Google
      </button>
      <div className="divider lg:divider-horizontal">OR</div> 
      <button className="btn btn-secondary btn-outline md:btn-lg rounded-full">
        <Email/>
        Continue with Email
      </button>
    </div>
    <p className="text-slate-400 mt-4">
      No Credit Card Required
    </p>
  </div>
  )
}

export default Hero