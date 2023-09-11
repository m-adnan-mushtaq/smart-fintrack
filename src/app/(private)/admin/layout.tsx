import AdminNav from "@/components/Admin/AdminNav";
import EnsureAuth from "@/components/Admin/EnsureAuth";
import SidebarLayout from "@/components/Admin/Sidebar";
import QueryProvider from "@/components/Provider/QueryProvider";
import { AuxProps } from "@client/types";

const layout = ({ children }: AuxProps) => {
  return (
    <>
      <QueryProvider>
        <EnsureAuth>
          <SidebarLayout>
            <AdminNav />
            <main
              className="p-4 overflow-y-auto overflow-x-hidden"
              style={{ height: "calc(100vh - 4.5rem)" }}
            >
              {children}
            </main>
          </SidebarLayout>
        </EnsureAuth>
      </QueryProvider>
    </>
  );
};

export default layout;
