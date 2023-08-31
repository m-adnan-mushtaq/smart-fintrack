// export const dynamic = "force-cache";
import GraphLoader from "@/components/Ui/GraphLoader";
import { SITE_TITLE } from "@/lib/common/commont";
import type { Metadata } from "next";
const AdminComponent = async () => {
  return (
    <div className="h-screen flex justify-center items-center">
      WELCOME TO DASHBOARD
    </div>
  );
};

export const metaDate:Metadata={
  title:SITE_TITLE+'Dashboard'
}

const page = async () => {
  return (
    <GraphLoader>
      <AdminComponent />
    </GraphLoader>
  );
};

export default page;

export const revalidate = "force-cache";
