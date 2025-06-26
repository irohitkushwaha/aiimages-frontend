// pages/api/blocked.js (or app/api/blocked/route.js for App Router)

export default function handler(req, res) {
    const host = req.headers.host;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const referer = req.headers.referer;
  
    // Log the security violation
    console.log('🚨 SECURITY ALERT: Unauthorized domain access blocked');
    console.log(`   Blocked Host: ${host}`);
    console.log(`   Client IP: ${ip}`);
    console.log(`   User Agent: ${userAgent}`);
    console.log(`   Referer: ${referer}`);
    console.log(`   Request URL: ${req.url}`);
    console.log(`   Method: ${req.method}`);
    console.log(`   Timestamp: ${new Date().toISOString()}`);
    console.log('----------------------------------------');
  
    // Set security headers
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  
    // Return 403 Forbidden
    return res.status(403).json({
      error: 'Access Denied',
      message: 'This domain is not authorized to access this service',
      code: 'UNAUTHORIZED_DOMAIN',
      timestamp: new Date().toISOString(),
      // Remove host info for security in production
    });
  }