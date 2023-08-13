import dynamic from "next/dynamic";
const AuthLinks =dynamic(()=>import("@components/Home/AuthLinks"),{ssr:false,loading:()=> <span className="loading loading-ring loading-lg"></span>})


const Hero = () => {
  return (
    <div
      className=" bg-neutral p-4 text-center capitalize gap-2 flex items-center justify-center flex-col"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <h1 className=" text-3xl md:text-5xl font-bold  ">
        Empowering Your Financial Future with Us
      </h1>
      <h1 className=" text-4xl md:text-6xl md:leading-[1.5]   drop-shadow-lg font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
        Navigate Towards Financial Success
      </h1>
        <AuthLinks />
    </div>
  );
};

export default Hero;
