import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 미들웨어 함수
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /editor 경로에 접근하면 /editor/~ 로 리다이렉트
  if (pathname === '/editor') {
    return NextResponse.redirect(new URL('/editor/~', request.url));
  }

  // /signup 경로에 접근하면 /login 으로 리다이렉트
  if (pathname === '/signup') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 다른 경로는 그대로 처리
  return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: ['/editor', '/signup'],
};
