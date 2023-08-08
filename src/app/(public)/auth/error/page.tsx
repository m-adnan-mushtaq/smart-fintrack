import ErrorCard from "@/components/Auth/ErrorCard";

const page = () => {
  return (
    <div
      className=" text-center capitalize gap-2 flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
     <ErrorCard/>
    </div>
  );
};

export default page;
