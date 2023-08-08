"use client";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { RootState } from "@/store";
import PublicPageLoader from "../Layout/PublicPageLoader";

interface Props {
  childType: "navbar" | "page";
}
// 👇 REFERNCE FOR HOC IN TYPESCRIPT
//https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
const WithRedirectAuth =
  <T extends Props = Props>(WrappedComponent: React.ComponentType<T>) =>
  (props: T) => {
    const { user, loading } = useSelector((state: RootState) => state.auth);
    if (loading) {
      if (props.childType === "navbar") {
        return <div className="loading loading-ring loading-lg"></div>;
      }
      return <PublicPageLoader />;
    }
    if (user && user.email) {
      if (props.childType === "page") {
        const redirectPath = user.verified ? "/admin" : "/auth/verify";
        redirect(redirectPath);
      }
    }
    return <WrappedComponent {...props} />;
  };

export default WithRedirectAuth;
