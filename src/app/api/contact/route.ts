import { NextRequest, NextResponse } from "next/server";

const GHL_API_URL = "https://services.leadconnectorhq.com/contacts/";

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

    const apiKey = process.env.GHL_API_KEY;
    if (!apiKey) {
      console.error("GHL_API_KEY is not configured");
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable." },
        { status: 500 }
      );
    }

    // Build the tag based on the subject category
    const subjectSlug = (subject || "general").toLowerCase().replace(/\s+/g, "-");
    const tag = `drjeffbullock-contact-${subjectSlug}`;

    // Split name into first and last
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    // Build the notes content with subject and message
    const notes = `[DrJeffBullock.com Contact Form]\nSubject: ${subject || "general"}\n\n${message}`;

    const ghlResponse = await fetch(GHL_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        tags: [tag],
        source: "DrJeffBullock.com Contact Form",
        customFields: [],
      }),
    });

    if (!ghlResponse.ok) {
      const errorData = await ghlResponse.text();
      console.error("GHL API error:", ghlResponse.status, errorData);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    // After creating/updating the contact, add the note via the notes endpoint
    const contactData = await ghlResponse.json();
    const contactId = contactData?.contact?.id;

    if (contactId) {
      try {
        await fetch(
          `https://services.leadconnectorhq.com/contacts/${contactId}/notes`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
              Version: "2021-07-28",
            },
            body: JSON.stringify({ body: notes }),
          }
        );
      } catch (noteError) {
        // Log but do not fail the request if the note fails
        console.error("Failed to add note to GHL contact:", noteError);
      }
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
