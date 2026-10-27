import { EFFORT, price, type Style } from "../data";
import EmailForm from "./EmailForm";

export function StyleDetail({ s, saved, onSave }: { s: Style; saved: boolean; onSave: () => void }) {
  const facts: [string, string][] = [
    ["Estimated total", price(s)], ...(s.time ? [["Time", s.time] as [string, string]] : []),
    ["Effort", EFFORT[s.effort]], ...(s.lasts ? [["Lasts", s.lasts] as [string, string]] : []),
  ];
  return (
    <>
      <h2 className="font-display text-4xl font-extrabold lowercase leading-none tracking-tight">{s.name}</h2>
      <span className="mt-2 inline-block rounded-full bg-cotton px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-navy">{s.category}</span>
      <p className="mt-3">{s.blurb}</p>
      {s.note && <p className="text-xs text-ink/60">{s.note}</p>}
      <div className="my-4 grid grid-cols-2 gap-2">
        {facts.map(([k, v]) => (
          <div key={k} className="rounded-md border border-dashed border-electric bg-cotton/60 p-2 text-[13px]">
            <b className="block text-[10px] font-bold uppercase tracking-widest text-ink/60">{k}</b>
            {v}
          </div>
        ))}
      </div>
      {s.tip && <p className="font-hand text-2xl text-electric">{s.tip}</p>}
      <p className="my-3 text-xs text-ink/60">Estimate only. Confirm the price with your braider before you book.</p>
      <button onClick={onSave} className="rounded-full bg-electric px-6 py-3.5 font-bold text-white">
        {saved ? "♥ saved" : "♡ save this"}
      </button>
    </>
  );
}

export function SaveNudge({ onClose }: { onClose: () => void }) {
  return (
    <>
      <h2 className="font-display text-4xl font-extrabold lowercase leading-none tracking-tight">save your picks?</h2>
      <p className="mt-3">Drop your email and we will keep them for you and send the weekly issue. No spam, we pinky promise.</p>
      <EmailForm label="save my picks" done="Done. Your picks are safe. 💌" />
      <button onClick={onClose} className="mt-3 text-sm underline">not now</button>
    </>
  );
}
