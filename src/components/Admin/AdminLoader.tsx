import Image from "next/image";
import loadingSvg from "@/media/loading.svg";

const AdminLoader = () => {
  return (
    <div className="min-h-screen h-screen fixed bg-base-100 top-0 left-0 z-[1000] flex w-screen items-center justify-center">
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

export default AdminLoader;
