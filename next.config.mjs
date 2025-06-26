/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "*",
        },
      ],
    },
  };
  
  
  
  export default nextConfig;
  

// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Security Headers
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Frame-Options',
//             value: 'DENY',
//           },
//           {
//             key: 'X-Content-Type-Options',
//             value: 'nosniff',
//           },
//           {
//             key: 'X-XSS-Protection',
//             value: '1; mode=block',
//           },
//           {
//             key: 'Referrer-Policy',
//             value: 'strict-origin-when-cross-origin',
//           },
//           {
//             key: 'Permissions-Policy',
//             value: 'camera=(), microphone=(), geolocation=()',
//           },
//           {
//             key: 'Content-Security-Policy',
//             value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: aigeneratedimagess.com images.aigeneratedimagess.com; font-src 'self' data:; connect-src 'self' aigeneratedimagess.com;",
//           },
//         ],
//       },
//     ];
//   },

//   // Redirect unauthorized domains
//   async redirects() {
//     return [
//       // Block fashionx.in and other unauthorized domains
//       {
//         source: '/(.*)',
//         has: [
//           {
//             type: 'host',
//             value: 'fashionx.in',
//           },
//         ],
//         destination: '/blocked',
//         permanent: false,
//         statusCode: 403,
//       },
//       // Redirect www version to non-www
//       {
//         source: '/(.*)',
//         has: [
//           {
//             type: 'host',
//             value: 'www.aigeneratedimagess.com',
//           },
//         ],
//         destination: 'https://aigeneratedimagess.com/:path*',
//         permanent: true,
//       },
//     ];
//   },

//   // Host validation through rewrites
//   async rewrites() {
//     return {
//       beforeFiles: [
//         // Block unauthorized hosts
//         {
//           source: '/:path*',
//           destination: '/api/blocked',
//           has: [
//             {
//               type: 'host',
//               value: '(?!^aigeneratedimagess\\.com$|^images\\.aigeneratedimagess\\.com$|^localhost:3000$).*',
//             },
//           ],
//         },
//       ],
//     };
//   },

//   // Secure image configuration
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'aigeneratedimagess.com',
//       },
//       {
//         protocol: 'https',
//         hostname: 'images.aigeneratedimagess.com',
//       },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '3000',
//       },
//       // Remove the wildcard "*" for security
//       // Only allow specific trusted domains
//     ],
//     formats: ['image/webp', 'image/avif'],
//     minimumCacheTTL: 60,
//     dangerouslyAllowSVG: false,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },

//   // Production optimizations
//   compiler: {
//     removeConsole: true, // Always remove console logs in production builds
//   },

//   // Disable x-powered-by header
//   poweredByHeader: false,

//   // Compression
//   compress: true,

//   // Only in production, disable source maps for security
//   productionBrowserSourceMaps: false,

//   // Strict mode
//   reactStrictMode: true,

//   // Experimental security features
//   experimental: {
//     serverComponentsExternalPackages: [],
//   },
// };

// export default nextConfig;