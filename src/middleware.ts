export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/api/admin", "/api/admin/:id*"],
};
