import SidebarLayout from "@/components/Admin/Sidebar";
import { AuxProps } from "@/lib/types";

const layout = ({ children }: AuxProps) => {
  return <SidebarLayout>{children}</SidebarLayout>;
};

export default layout;
