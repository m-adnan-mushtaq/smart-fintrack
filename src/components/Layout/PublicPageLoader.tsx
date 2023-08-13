import Image from "next/image";
import loadingSvg from "@/media/public-loading.svg";

const PublicPageLoader = () => {
  return (
    <div  className="min-h-screen h-screen fixed bg-base-100 left-0 top-0 z-[1000] flex w-screen items-center justify-center">
      <Image
        priority
        src={loadingSvg}
        alt="loading..."
        className="mx-auto w-auto h-auto"
        width={200}
        height={200}
      />
    </div>
  );
};

export default PublicPageLoader;
