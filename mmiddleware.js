// // middleware.js (place in your NextJS root directory)
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const host = request.headers.get('host');
//   const allowedHosts = [
//     'aigeneratedimagess.com',
//     'images.aigeneratedimagess.com',
//     'localhost:3000', // for development
//     'localhost:3001', // alternative dev port
//   ];

//   // Check if the host is allowed
//   if (!allowedHosts.includes(host)) {
//     const ip = request.ip || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    
//     console.log(`🚫 BLOCKED Frontend Access: ${host} - IP: ${ip}`);
    
//     // Detailed logging for security monitoring
//     console.log({
//       timestamp: new Date().toISOString(),
//       blocked_host: host,
//       ip: ip,
//       user_agent: request.headers.get('user-agent'),
//       url: request.url,
//       method: request.method,
//       referer: request.headers.get('referer'),
//       country: request.geo?.country || 'unknown',
//     });

//     // Return 403 Forbidden with security headers
//     return new NextResponse('Access Denied - Unauthorized Domain', {
//       status: 403,
//       headers: {
//         'Content-Type': 'text/plain',
//         'X-Frame-Options': 'DENY',
//         'X-Content-Type-Options': 'nosniff',
//         'Cache-Control': 'no-store, no-cache, must-revalidate',
//         'Pragma': 'no-cache',
//       },
//     });
//   }

//   // Add security headers to allowed requests
//   const response = NextResponse.next();
  
//   // Additional security headers for legitimate requests
//   response.headers.set('X-Frame-Options', 'SAMEORIGIN');
//   response.headers.set('X-Content-Type-Options', 'nosniff');
//   response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

//   return response;
// }

// // Configure which paths the middleware should run on
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes) - these go to your Express backend
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - robots.txt, sitemap.xml (SEO files)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
//   ],
// };