import { useState } from "react";
import { okEmail } from "../data";

type Props = { label: string; done?: string };

// TODO: send the email to your list provider (Buttondown, MailerLite, Beehiiv).
export default function EmailForm({ label, done = "Done. See you next issue. 💌" }: Props) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div className="mt-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        aria-label="Email address"
        className="mb-2 w-full rounded-lg border-2 border-navy bg-white p-3.5"
      />
      <button
        onClick={() => setMsg(okEmail(email) ? done : "That email does not look right, babe.")}
        className="rounded-full bg-electric px-6 py-3.5 font-bold text-white"
      >
        {label}
      </button>
      <p className="mt-2 text-xs text-ink/60">{msg}</p>
    </div>
  );
}
