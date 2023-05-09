import { authMiddleware } from "@clerk/nextjs/dist/server-helpers.server";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
