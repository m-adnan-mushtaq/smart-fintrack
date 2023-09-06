import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
//middleware to protect user routes
export default withAuth(async function middleware(req: NextRequestWithAuth) {
  //checked auth status
  const isAuthenticated = await getToken({ req });
  if (!isAuthenticated) {
    return NextResponse.json({ message: "Access Denied" }, { status: 403 });
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/api/admin", "/api/admin/:id*"],
};
