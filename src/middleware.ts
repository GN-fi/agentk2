import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 미들웨어 함수
export function middleware(request: NextRequest) {
  // /editor 경로에 접근하면 /editor/~ 로 리다이렉트
  if (request.nextUrl.pathname === '/editor') {
    return NextResponse.redirect(new URL('/editor/~', request.url));
  }

  // 다른 경로는 그대로 처리
  return NextResponse.next();
}

// 미들웨어가 실행될 경로 설정
export const config = {
  matcher: ['/editor'],
};
