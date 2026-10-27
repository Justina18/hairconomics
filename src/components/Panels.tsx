import { EFFORT, price, type Style } from "../data";
import { pictureFor } from "./Card";
import EmailForm from "./EmailForm";

export function StyleDetail({ s, saved, onSave }: { s: Style; saved: boolean; onSave: () => void }) {
  const facts: [string, string][] = [
    ["Estimated total", price(s)], ...(s.time ? [["Time", s.time] as [string, string]] : []),
    ["Effort", EFFORT[s.effort]], ...(s.lasts ? [["Lasts", s.lasts] as [string, string]] : []),
  ];
  const vibes = { s: "Soft", b: "Bold", n: "Neat", l: "Lowkey" } as const;
  return (
    <>
      {pictureFor(s) && <img src={pictureFor(s)} alt={`${s.name} hairstyle`} className="mb-5 h-56 w-full rounded-lg object-cover sm:h-72" />}
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[.16em] text-electric">{s.category}</span>
          <h2 className="mt-1 font-display text-4xl font-extrabold lowercase leading-none tracking-tight">{s.name}</h2>
        </div>
        <button onClick={onSave} aria-label={saved ? `Unsave ${s.name}` : `Save ${s.name}`} aria-pressed={saved} className="min-h-11 min-w-11 rounded-full border-2 border-electric text-2xl leading-none text-electric">
          {saved ? "♥" : "♡"}
        </button>
      </div>
      <p className="mt-4 text-base leading-relaxed">{s.blurb}</p>
      <div className="mt-5 space-y-2">
        <details open className="group rounded-lg border border-navy/15 bg-white/70 p-4">
          <summary className="cursor-pointer list-none font-bold text-navy marker:hidden">At a glance <span className="float-right text-electric group-open:rotate-45">+</span></summary>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {facts.map(([k, v]) => (
              <div key={k} className="rounded-md border border-dashed border-electric bg-cotton/60 p-2 text-[13px]">
                <b className="block text-[10px] font-bold uppercase tracking-widest text-ink/60">{k}</b>
                {v}
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {s.vibes.split("").map((v) => <span key={v} className="rounded-full bg-cotton px-2.5 py-1 text-xs font-medium text-navy">{vibes[v as keyof typeof vibes]}</span>)}
          </div>
        </details>
        <details className="group rounded-lg border border-navy/15 bg-white/70 p-4">
          <summary className="cursor-pointer list-none font-bold text-navy marker:hidden">Price notes <span className="float-right text-electric group-open:rotate-45">+</span></summary>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">The displayed {price(s)} is an estimate for planning. {s.note ? `This range is ${s.note}.` : "The price basis is not specified, so confirm what is included before booking."} Hair bundles, attachments, colouring and accessories may cost extra.</p>
        </details>
        {(s.tip || s.lasts) && (
          <details className="group rounded-lg border border-navy/15 bg-white/70 p-4">
            <summary className="cursor-pointer list-none font-bold text-navy marker:hidden">Care and wear <span className="float-right text-electric group-open:rotate-45">+</span></summary>
            {s.lasts && <p className="mt-3 text-sm"><b>Estimated lifespan:</b> {s.lasts}</p>}
            {s.tip && <p className="mt-2 font-hand text-2xl text-electric">{s.tip}</p>}
          </details>
        )}
      </div>
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
