import { NextRequest, NextResponse } from "next/server";

const GHL_API_URL = "https://services.leadconnectorhq.com/contacts/";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GHL_API_KEY;
    if (!apiKey) {
      console.error("GHL_API_KEY is not configured");
      return NextResponse.json(
        { error: "Newsletter signup is temporarily unavailable." },
        { status: 500 }
      );
    }

    const ghlResponse = await fetch(GHL_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        email,
        tags: ["drjeffbullock-newsletter"],
        source: "DrJeffBullock.com Newsletter",
      }),
    });

    if (!ghlResponse.ok) {
      const errorData = await ghlResponse.text();
      console.error("GHL API error:", ghlResponse.status, errorData);
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to the newsletter." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
