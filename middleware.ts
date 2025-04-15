// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import { auth } from './auth';

// // export default NextAuth(authConfig).auth;
// export default auth;

 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };
import { auth } from './auth';

export default auth;

export const config = {
  matcher: [
    // 認証ルートを明示的に除外
    '/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.png$).*)',
  ],
};