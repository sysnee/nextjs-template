// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token');

  const url = req.nextUrl.clone();
  const isLoginPage = url.pathname.startsWith('/login');

  if (!token && (url.pathname.startsWith('/profile'))) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  if (token && isLoginPage) {
    url.pathname = '/profile';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/profile/:path*'],
};
