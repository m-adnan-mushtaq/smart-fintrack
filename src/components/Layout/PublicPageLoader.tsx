import Image from "next/image";
import loadingSvg from "@/media/public-loading.svg";

const PublicPageLoader = () => {
  return (
    <div className="h-screen fixed bg-primary top-0 z-[1000] flex w-screen items-center justify-center">
      <Image
        src={loadingSvg}
        alt="loading..."
        className="mx-auto"
        width={200}
        height={200}
      />
    </div>
  );
};

export default PublicPageLoader;
