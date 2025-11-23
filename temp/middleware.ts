import { auth } from "@/lib/better-auth/auth";
import { APP_ROUTES } from "@/lib/utils/routes";

import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = [
  { path: "/admin", roles: ["ADMIN"] },
  { path: "/app", roles: ["ADMIN", "MEMBER"] },
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/admin') {
    return NextResponse.redirect(new URL(APP_ROUTES.ADMIN.DASHBOARD.path, request.url));
  }

  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route.path),
      );

      if (isProtectedRoute) {
        return NextResponse.redirect(
          new URL(APP_ROUTES.AUTH.SIGN_IN.path, request.url),
        );
      }

      return NextResponse.next();
    }

    if (session) {
      const isGuestPath = Object.values(APP_ROUTES.AUTH).some(
        (route) => route.path === pathname,
      );
      if (isGuestPath) {
        return NextResponse.redirect(
          new URL(APP_ROUTES.APP.APP.path, request.url),
        );
      }

      const protectedRoute = protectedRoutes.find((route) =>
        pathname.startsWith(route.path),
      );

      if (protectedRoute) {
        const userRole = (session.user as any).role;
        if (!protectedRoute.roles.includes(userRole)) {
          return NextResponse.redirect(
            new URL(APP_ROUTES.APP.APP.path, request.url),
          );
        }
      }

      return NextResponse.next();
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware Error:", error);
    return NextResponse.next();
  }
}

export const config = {
  runtime: 'nodejs',
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\.ico|sitemap\.xml|robots\.txt|images|.*\.(?:png|jpg|jpeg|gif|webp|svg|css|js)$).*)",
  ],
};
