import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { saveToGhl, sourceTag } from "@/lib/ghl";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Name is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    // Save the message in GHL first, so it is never lost even if the email below fails.
    const cleanSubject = typeof subject === "string" ? subject.trim().slice(0, 160) : "";
    const savedId = await saveToGhl(email, ["drjeffbullock-site", "contact-form", ...(cleanSubject ? [`form-${sourceTag(cleanSubject)}`] : [])], {
      name,
      note: `Contact form on DrJeffBullock.com\nSubject: ${cleanSubject || "General"}\nName: ${name}\nEmail: ${email}\n\n${message}`,
    });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      if (savedId) return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 200 });
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Resend returns { error } instead of throwing, so check it or a failed send looks like success.
    const { error: sendError } = await resend.emails.send({
      from: "DrJeffBullock.com <contact@drjeffbullock.com>",
      to: "info@prismaiconsultants.com",
      replyTo: email,
      subject: `[Contact Form] ${subject || "General"} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "General"}\n\n${message}`,
    });
    if (sendError && savedId) console.error("Contact email failed (message saved in GHL):", sendError);
    if (sendError && !savedId) {
      console.error("Contact form send failed:", sendError);
      return NextResponse.json(
        { error: "We couldn't send that just now. Please email info@prismaiconsultants.com." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
