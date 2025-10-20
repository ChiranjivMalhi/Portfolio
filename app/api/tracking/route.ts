import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND);

function buildCORSHeaders(request: NextRequest) {
  return {
    'Access-Control-Allow-Origin': 'https://chiranjiv.in',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, x-tracking-key',
  } as Record<string, string>;
}

export async function OPTIONS(request: NextRequest) {
  const headers = buildCORSHeaders(request);
  return new NextResponse(null, { status: 204, headers });
}

export async function POST(request: NextRequest) {
  const headers = buildCORSHeaders(request);
  
  try {
    console.log('Received POST request:', {
      origin: request.headers.get('origin'),
      method: request.method,
      contentType: request.headers.get('content-type')
    });

    const body = await request.json();
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

    console.log('Tracking data:', data);

    await resend.emails.send({
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

    return NextResponse.json(
      { success: true, message: 'Page load tracked successfully' },
      { status: 200, headers }
    );
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json(
      { 
        message: 'Error tracking page load',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500, headers }
    );
  }
}