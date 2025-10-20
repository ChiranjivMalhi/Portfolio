import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND);

function buildCORSHeaders(request: NextRequest) {
  const origin = request.headers.get('origin') || process.env.TRACKING_ALLOWED_ORIGIN || '*';
  // If TRACKING_ALLOWED_ORIGIN is set and not '*', only allow that origin
  const allowed = process.env.TRACKING_ALLOWED_ORIGIN && process.env.TRACKING_ALLOWED_ORIGIN !== '*'
    ? (origin === process.env.TRACKING_ALLOWED_ORIGIN ? origin : null)
    : origin;

  return {
    'Access-Control-Allow-Origin': 'https://swift-everything-703987.framer.app',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-tracking-key',
  } as Record<string, string>;
}

export async function OPTIONS(request: NextRequest) {
  const headers = buildCORSHeaders(request);
  // If origin is explicitly disallowed, return 403 without CORS headers
  if (!headers['Access-Control-Allow-Origin'] || headers['Access-Control-Allow-Origin'] === 'null') {
    return new NextResponse(JSON.stringify({ message: 'Origin not allowed' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }

  return new NextResponse(null, { status: 204, headers });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Optional TRACKING_KEY enforcement
    const trackingKey = process.env.TRACKING_KEY;
    if (trackingKey) {
      const supplied = request.headers.get('x-tracking-key');
      if (!supplied || supplied !== trackingKey) {
        const headers = buildCORSHeaders(request);
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401, headers });
      }
    }

    // If origin not allowed, block
    const preflightHeaders = buildCORSHeaders(request);
    if (!preflightHeaders['Access-Control-Allow-Origin'] || preflightHeaders['Access-Control-Allow-Origin'] === 'null') {
      return NextResponse.json({ message: 'Origin not allowed' }, { status: 403 });
    }

    const ipAddr = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || (body.ipAddress as string) || "unknown";

    const geoLocation = await axios.get(`http://ip-api.com/json/${ipAddr}`);

    const data = {
      ipAddr,
      country: geoLocation?.data?.country,
      countryCode: geoLocation?.data?.countryCode,
      region: geoLocation?.data?.region,
      regionName: geoLocation?.data?.regionName,
      city: geoLocation?.data?.city,
      zip: geoLocation?.data?.zip,
      isp: geoLocation?.data?.isp,
      timestamp: new Date().toISOString(),
      headers: {
        userAgent: request.headers.get("user-agent"),
        referer: request.headers.get("referer"),
      },
    };
  console.log(data)
   const res =  await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'cmalhi03@gmail.com',
        subject: 'Geolocation Data',
        html: `
          <h1>Geolocation Data</h1>
          <ul>
            <li><strong>IP Address:</strong> ${data.ipAddr}</li>
            <li><strong>Country:</strong> ${data.country}</li>
            <li><strong>Country Code:</strong> ${data.countryCode}</li>
            <li><strong>Region:</strong> ${data.region}</li>
            <li><strong>Region Name:</strong> ${data.regionName}</li>
            <li><strong>City:</strong> ${data.city}</li>
            <li><strong>ZIP Code:</strong> ${data.zip}</li>
            <li><strong>ISP:</strong> ${data.isp}</li>
            <li><strong>Timestamp:</strong> ${data.timestamp}</li>
            <li><strong>User-Agent:</strong> ${data.headers.userAgent}</li>
            <li><strong>Referer:</strong> ${data.headers.referer}</li>
          </ul>
        `
      });
  const headers = buildCORSHeaders(request);
  return NextResponse.json({ success: true, message: 'Page load tracked successfully' }, { status: 200, headers });
  } catch (error) {
    console.error("Click tracking error:", error);
  const headers = buildCORSHeaders(request as NextRequest);
  return NextResponse.json({ message: 'Error tracking page load', error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500, headers });
  }
}
