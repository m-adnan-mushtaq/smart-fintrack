import EnsureAuth from "@/components/Admin/EnsureAuth";
import SidebarLayout from "@/components/Admin/Sidebar";
import { AuxProps } from "@/lib/types";

const layout = ({ children }: AuxProps) => {
  return (
    <>
      <EnsureAuth>
        <SidebarLayout>{children}</SidebarLayout>
      </EnsureAuth>
    </>
  );
};

export default layout;
