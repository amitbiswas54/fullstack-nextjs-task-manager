import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request ) {

  const authToken = request.cookies.get('logintoken')?.value;

  const pathname = request.nextUrl.pathname;

  const isAuthPage =
    pathname === '/login' ||
    pathname === '/signup';

  // Login/Signup page
  if (isAuthPage) {

    if (authToken) {
      return NextResponse.redirect(
        new URL('/profile', request.url)
      );
    }

    return NextResponse.next();
  }

  // Protected pages
  if (!authToken) {
    return NextResponse.redirect(
      new URL('/', request.url)
    );
  }

  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
"/login",
    "/signup",
    "/profile/:path*",
    "/addTask",
    "/task",
    "/dashboard/:path*",
  ],
}