import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
//middleware to protected user routes
export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    //checked auth status
    const isAuthenticated = await getToken({ req });
    if (!isAuthenticated) {
      return NextResponse.json({ message: "Access Denied" }, { status: 403 });
    }
    return NextResponse.next();
  },
  // {
  //   callbacks: {
  //     authorized: () => true,
  //   },
  // }
);

export const config = {
  matcher: ["/api/v1/admin/(.*)"],
};
