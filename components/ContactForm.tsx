"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Message failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full border-0 border-b border-neutral-400 bg-transparent px-0 py-3 text-base outline-none transition placeholder:text-neutral-500 focus:border-neutral-950";

  return (
    <form onSubmit={submit} className="border-t border-neutral-400 pt-5" aria-label="Contact form">
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-neutral-500">Your name</span>
          <input className={field} name="name" required maxLength={80} placeholder="Jane Smith" />
        </label>
        <label className="block">
          <span className="eyebrow text-neutral-500">Your email</span>
          <input className={field} type="email" name="email" required maxLength={120} placeholder="jane@company.com" />
        </label>
      </div>
      <label className="mt-6 block">
        <span className="eyebrow text-neutral-500">What should we talk about?</span>
        <textarea className={field + " min-h-28 resize-y"} name="message" required maxLength={3000} placeholder="A project, role, collaboration, research idea..." />
      </label>
      <div className="mt-7 flex flex-wrap items-center gap-5">
        <button disabled={status === "sending"} className="border border-neutral-900 bg-neutral-900 px-6 py-3 text-sm text-white transition hover:-translate-y-0.5 hover:bg-transparent hover:text-neutral-900 disabled:cursor-wait disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message ↗"}
        </button>
        <p className="text-sm text-neutral-500" aria-live="polite">
          {status === "sent" && "Message sent — I’ll get back to you soon."}
          {status === "error" && "Something went wrong. Please email me directly instead."}
          {status === "idle" && "Your message goes directly to my inbox."}
        </p>
      </div>
    </form>
  );
}
