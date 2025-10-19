import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND);

const CORS = {
  "Access-Control-Allow-Origin": process.env.TRACKING_ALLOWED_ORIGIN ?? "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, x-tracking-key"
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function POST(request: NextRequest) {
  try {
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
    return NextResponse.json(
      {
        success: true,
        message: "Page load tracked successfully",
      },
      {
        status: 200,
        headers: CORS,
      }
    );
  } catch (error) {
    console.error("Click tracking error:", error);

    return NextResponse.json(
      {
        message: "Error tracking page load",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
        headers: CORS,
      }
    );
  }
}
