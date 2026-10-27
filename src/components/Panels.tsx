import { useState, type ReactNode } from "react";
import { EFFORT, price, type Style } from "../data";
import { pictureFor } from "./Card";
import EmailForm from "./EmailForm";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

function Accordion({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) {
  const [expanded, setExpanded] = useState(open);
  const prefersReducedMotion = useReducedMotion();
  return (
    <div className="rounded-lg border border-navy/15 bg-white/70 p-4">
      <button
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between text-left font-bold text-navy focus:outline-none focus:ring-2 focus:ring-electric"
      >
        {title}
        <span className={`text-xl text-electric transition-transform duration-200 ${expanded ? "rotate-45" : ""}`}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { height: "auto", opacity: 1, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0, transition: { duration: 0.16 } }}
            className="overflow-hidden"
          >
            <div className="pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
        <Accordion title="At a glance" open>
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
        </Accordion>
        <Accordion title="Price notes">
          <p className="mt-3 text-sm leading-relaxed text-ink/70">The displayed {price(s)} is an estimate for planning. {s.note ? `This range is ${s.note}.` : "The price basis is not specified, so confirm what is included before booking."} Hair bundles, attachments, colouring and accessories may cost extra.</p>
        </Accordion>
        {(s.tip || s.lasts) && (
          <Accordion title="Care and wear">
            {s.lasts && <p className="mt-3 text-sm"><b>Estimated lifespan:</b> {s.lasts}</p>}
            {s.tip && <p className="mt-2 font-hand text-2xl text-electric">{s.tip}</p>}
          </Accordion>
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
