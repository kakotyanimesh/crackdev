// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  
  // Get the pathname of the request
  const { pathname } = req.nextUrl;
  
  // Public routes that don't require authentication
  const publicRoutes = ['/', '/signin', '/signup'];
  
  // Check if the requested path is a public route
  const isPublicRoute = publicRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`));
  
  // Check if the request is for a NextAuth API endpoint
  const isNextAuthRoute = pathname.startsWith('/api/auth');
  
  // Check if the request is for any other API endpoint
  const isApiRoute = pathname.startsWith('/api') && !isNextAuthRoute;
  
  // If the user is not authenticated and the route is not public and not a NextAuth route
  if (!token && !isPublicRoute && !isNextAuthRoute) {
    // For API routes, return unauthorized status
    if (isApiRoute) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }
    
    // For non-API routes, redirect to signin page
    const url = new URL('/signin', req.url);
    url.searchParams.set("callbackUrl", encodeURI(pathname));
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    // Match all routes except for _next, static, and public files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
  ],
};