import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Newsletter signup is temporarily unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Notify Jeff of new subscriber
    await resend.emails.send({
      from: "DrJeffBullock.com <contact@drjeffbullock.com>",
      to: "info@prismaiconsultants.com",
      subject: `[Newsletter Signup] ${email}`,
      text: `New newsletter subscriber from DrJeffBullock.com:\n\n${email}\n\nAdd to your newsletter list.`,
    });

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
