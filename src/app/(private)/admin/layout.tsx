import SidebarLayout from "@/components/Admin/Sidebar";
import ServerAuth from "@/components/Provider/ServerAuth";
import { AuxProps } from "@/lib/types";

const layout = ({ children }: AuxProps) => {
  return (
    <>
      <ServerAuth />
      <SidebarLayout>{children}</SidebarLayout>
    </>
  );
};

export default layout;
