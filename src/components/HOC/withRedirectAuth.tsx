"use client";
import { useSession } from "next-auth/react";
import PublicPageLoader from "@components/Layout/PublicPageLoader";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/slices/auth.slice";
import { useRouter } from "next/navigation";
import { UserType } from "@/lib/types";

// 👇 REFERNCE FOR HOC IN TYPESCRIPT
//https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
type ChildType = "navbar" | "page";
interface Props {
  childType: ChildType;
}
const WithRedirectAuth =
  <T extends Props = Props>(WrappedComponent: React.ComponentType<T>) =>
  (props: T) => {
    const {childType} = props
    const session = useSession();
    const router = useRouter();
    const dispatch = useDispatch();
    if (session.status === "loading") {
      return childType === "navbar" ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <PublicPageLoader />
      );
    }
    if (session.status === "authenticated") {
      dispatch(setAuth(session.data.user as UserType));
      if (childType === "page") {
        router.replace("/admin");
        return null
      }
    }
    return <WrappedComponent {...props} />;
  };

export default WithRedirectAuth;
