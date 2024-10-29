// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import api from './lib/api';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const isLoginPage = url.pathname.startsWith('/login');

  if (isLoginPage) {
    console.log('its login page, redirecting to /home')
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }
  
  // try {
  //   const response = await api.get('')
  //   console.log('response', response)
  // } catch (error) {
  //   const statusCode = Number(JSON.parse((error as any).message).statusCode)
  //   console.log('error', statusCode)
  // }
    
    // if (statusCode === 401) {
    //   url.pathname = '/login';
    //   return NextResponse.redirect(url);
    // }



  // if (!token && (url.pathname.startsWith('/home'))) {
  
  // }


  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*'],
};
