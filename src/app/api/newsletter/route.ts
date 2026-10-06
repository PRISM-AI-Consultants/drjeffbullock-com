import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveToGhl, sourceTag } from "@/lib/ghl";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400, headers: CORS }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Newsletter signup is temporarily unavailable." },
        { status: 500, headers: CORS }
      );
    }

    const resend = new Resend(apiKey);

    // "waitlist" (default, unreleased books) or "download" (free lead magnet for a released book)
    const isDownload = body.kind === "download";
    const cleanSource = typeof source === "string" ? source.trim().slice(0, 120) : "";
    const tags = ["drjeffbullock-site", isDownload ? "lead-magnet" : "book-waitlist"];
    if (cleanSource) tags.push(`book-${sourceTag(cleanSource)}`);
    const listed = Boolean(await saveToGhl(email, tags));

    // Notify Jeff of new subscriber
    const listLine = listed ? "Added to GHL automatically." : "NOT added to GHL, add to your newsletter list by hand.";
    // Resend returns { error } instead of throwing, so check it or a failed send looks like success.
    const { error: sendError } = await resend.emails.send({
      from: "DrJeffBullock.com <contact@drjeffbullock.com>",
      to: "info@prismaiconsultants.com",
      subject: !cleanSource
        ? `[Newsletter Signup] ${email}`
        : isDownload
          ? `[Free Download: ${cleanSource}] ${email}`
          : `[Book Waitlist: ${cleanSource}] ${email}`,
      text: !cleanSource
        ? `New newsletter subscriber from DrJeffBullock.com:\n\n${email}\n\n${listLine}`
        : isDownload
          ? `New free download signup from DrJeffBullock.com:\n\nEmail: ${email}\nSource: ${cleanSource}\n\n${listLine}`
          : `New book waitlist signup from DrJeffBullock.com:\n\nEmail: ${email}\nBook: ${cleanSource}\n\nNotify this person when "${cleanSource}" releases. ${listLine}`,
    });
    // Fail only if nothing captured the signup: no GHL contact AND no notification email.
    if (sendError && !listed) {
      console.error("Newsletter signup send failed:", sendError);
      return NextResponse.json(
        { error: "We couldn't save that just now. Please try again." },
        { status: 502, headers: CORS }
      );
    }
    if (sendError) console.error("Newsletter notify email failed (contact saved in GHL):", sendError);

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to the newsletter." },
      { status: 200, headers: CORS }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500, headers: CORS }
    );
  }
}
