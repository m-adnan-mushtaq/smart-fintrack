// export const dynamic = "force-cache";
import GraphLoader from "@/components/Ui/GraphLoader";
import { TOUR_ENDPOINT } from "@/lib/common/server-common";
import { getRequestHelper } from "@/lib/utils/server-utils";

const AdminComponent = async () => {
  const response = await getRequestHelper(TOUR_ENDPOINT, { tags: ["TOUR"] });
  console.log({ response });
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
