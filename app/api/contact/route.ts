import { NextResponse } from "next/server";

const TO_EMAIL = "esmat.tariq4747@gmail.com";

function clean(value: unknown, max: number) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char] as string));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (body.website) return NextResponse.json({ ok: true });

    const name = clean(body.name, 80);
    const email = clean(body.email, 120);
    const message = clean(body.message, 3000);

    if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#111">
            <p style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#666">New portfolio message</p>
            <h1 style="font-size:28px;margin:18px 0">${escapeHtml(name)}</h1>
            <p><strong>Reply to:</strong> ${escapeHtml(email)}</p>
            <div style="margin-top:28px;padding-top:22px;border-top:1px solid #ccc;white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      console.error("Resend error:", await response.text());
      return NextResponse.json({ error: "Email could not be sent" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
