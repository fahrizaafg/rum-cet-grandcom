import { NextResponse } from 'next/server';

export function middleware() {
  const res = NextResponse.next();

  // CSP (sesuaikan dengan kebutuhan)
  res.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://placehold.co; connect-src 'self' https://*.vercel-insights.com wss:; font-src 'self' data:; require-trusted-types-for 'script';"
  );

  res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  res.headers.set('X-Frame-Options', 'DENY');
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Cache Control for bfcache
  res.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

  return res;
}

export const config = {
  matcher: '/((?!api|_next/static|favicon.ico).*)',
};
