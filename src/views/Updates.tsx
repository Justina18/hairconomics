import { useState } from "react";
import EmailForm from "../components/EmailForm";
import { STYLES, type Style } from "../data";

const POLL = ["soft girl braids", "sleek and neat", "money is not the problem"];

export default function Updates({ onOpen }: { onOpen: (s: Style) => void }) {
  const [vote, setVote] = useState<string | null>(null);
  const panel = "rounded-md bg-white p-4 shadow-md shadow-bubble/30";
  const h3 = "font-display text-xl font-extrabold lowercase tracking-tight";
  return (
    <>
      <p className="font-hand text-[26px] text-electric">the weekly plug 💌</p>
      <h1 className="font-display text-[clamp(40px,9vw,80px)] font-extrabold lowercase leading-[.95] tracking-tighter text-electric">updates</h1>
      <div className="my-5 rounded-md border-2 border-navy bg-cotton p-5">
        <span className="text-xs text-ink/60">ISSUE 01</span>
        <h2 className="mb-2.5 mt-1.5 font-display text-4xl font-extrabold lowercase leading-none tracking-tight">so, what are we making?</h2>
        <p className="mb-3">This week’s main character is <b>boho braids</b>. Soft, pretty, slightly expensive-looking, and about ₦25k–₦70k all in.</p>
        <button onClick={() => onOpen(STYLES.find((s) => s.name === "Boho braids")!)} className="rounded-full bg-electric px-6 py-3.5 font-bold text-white">see the style</button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <div className={panel}>
          <h3 className={h3}>we are loving…</h3>
          <p className="my-1.5 font-hand text-[22px] text-electric">braider name goes here</p>
          <p className="text-xs text-ink/60">Lagos · ₦XX–₦XX · @____<br />A discovery, not a ranking.</p>
        </div>
        <div className={panel}>
          <h3 className={h3}>hair joke of the week</h3>
          <p className="mt-2">My braider said “two hours.” I have been here since morning. Time is a hairstyle too.</p>
        </div>
        <div className={panel}>
          <h3 className={h3}>be honest…</h3>
          <div className="my-3 flex flex-wrap gap-2">
            {POLL.map((p) => (
              <button key={p} onClick={() => setVote(p)}
                className={`rounded-full border-2 px-4 py-2.5 text-sm ${vote === p ? "border-electric bg-electric text-white" : "border-navy text-navy"}`}>
                {p}
              </button>
            ))}
          </div>
          <p className="text-xs text-ink/60">{vote ? "Noted. Judged lovingly." : "Tap one."}</p>
        </div>
        <div className={panel}>
          <h3 className={h3}>get the next issue</h3>
          <EmailForm label="send it to me" />
        </div>
      </div>
    </>
  );
}
