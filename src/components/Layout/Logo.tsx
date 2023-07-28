import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="px-0 ml-2 ">
      <div className="w-[4rem]  sm:w-[7rem] h-[3rem] relative">
        <Image
          src="/assets/logo.svg"
          alt="Smart FinTrack"
          title="Smart FinTrack"
          loading="lazy"
          fill
        />
      </div>
    </Link>
  );
};

export default Logo;
