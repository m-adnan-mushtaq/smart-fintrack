// export const dynamic = "force-cache";
import GraphLoader from "@/components/Ui/GraphLoader";
const AdminComponent = async () => {
  return (
    <div className="h-screen flex justify-center items-center">
      WELCOME TO DASHBOARD
    </div>
  );
};

const page = async () => {
  return (
    <GraphLoader>
      <AdminComponent />
    </GraphLoader>
  );
};

export default page;

export const revalidate = "force-cache";
