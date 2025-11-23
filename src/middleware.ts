import { APP_ROUTES } from "@/lib/utils/routes";

import { NextRequest, NextResponse } from "next/server";
import { adminRouteProxy } from "./lib/proxy/admin";
import { authRouteProxy } from "./lib/proxy/auth";
import { globalRouteProxy } from "./lib/proxy/global";

export async function middleware(request: NextRequest) {
  try {
    let response: NextResponse | undefined;

    response = await globalRouteProxy(request);
    if (response) {
      return response;
    }

    response = await adminRouteProxy(request);
    if (response) {
      return response; 
    }

    response = await authRouteProxy(request);
    if (response) {
      return response;
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.redirect(
      new URL(APP_ROUTES.AUTH.SIGN_IN.path, request.url),
    );
  }
}

export const config = {
  runtime: "nodejs",
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\.ico|sitemap\.xml|robots\.txt|images|.*\.(?:png|jpg|jpeg|gif|webp|svg|css|js)$).*)",
  ],
};
