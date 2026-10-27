import { EFFORT, price, type Style } from "../data";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants } from "../motion";

type Props = { s: Style; i: number; saved: boolean; onOpen: () => void; onSave: () => void };

const pictureFiles: Record<string, string> = {
  "All-back cornrows": new URL("../pictures/straight back cornrows.jfif", import.meta.url).href,
  "Knotless braids": new URL("../pictures/knotless braids.jfif", import.meta.url).href,
  "Boho braids": new URL("../pictures/boho knotless braids.jfif", import.meta.url).href,
  "Fulani braids": new URL("../pictures/fulani cornrows.jfif", import.meta.url).href,
  "Ghana weaving": new URL("../pictures/Ghana weaving.jfif", import.meta.url).href,
  "Stitch braids": new URL("../pictures/Stich braids.jfif", import.meta.url).href,
  "Classic box braids": new URL("../pictures/box braids.jfif", import.meta.url).href,
  "Two-strand twists": new URL("../pictures/two strands twists.jfif", import.meta.url).href,
  "Wash-and-go curls": new URL("../pictures/wash and go, naturak afro.jfif", import.meta.url).href,
  "Mini twists": new URL("../pictures/mini twists.jfif", import.meta.url).href,
  "Afro puff": new URL("../pictures/afro piff.jfif", import.meta.url).href,
  "Irun kiko (African threading)": new URL("../pictures/irun kiko, thrwad.jfif", import.meta.url).href,
  "Faux locs": new URL("../pictures/faux locs.jfif", import.meta.url).href,
  "Straight wig / bone straight": new URL("../pictures/staight bone straight.jfif", import.meta.url).href,
  "Curly wig": new URL("../pictures/curly wig.jfif", import.meta.url).href,
  "Sleek low ponytail": new URL("../pictures/sleek ponytail.jfif", import.meta.url).href,
  "High ponytail": new URL("../pictures/high ponytail.jfif", import.meta.url).href,
  "Bob weave or wig": new URL("../pictures/bob weave.jfif", import.meta.url).href,
  "Silk press": new URL("../pictures/silk press.jfif", import.meta.url).href,
  "Tapered natural cut": new URL("../pictures/tapered natural haicut.jfif", import.meta.url).href,
  "Bantu knots": new URL("../pictures/bantu nuts.jfif", import.meta.url).href,
  "Shuku": new URL("../pictures/shuku yoruba.jfif", import.meta.url).href,
  "Pixie cut": new URL("../pictures/pixie cut short.jfif", import.meta.url).href,
};

export const pictureFor = (s: Style) => pictureFiles[s.name];

export default function Card({ s, i, saved, onOpen, onSave }: Props) {
  const picture = pictureFor(s);
  const prefersReducedMotion = useReducedMotion();
  const vibes = { s: "Soft", b: "Bold", n: "Neat", l: "Lowkey" } as const;

  return (
    <motion.div
      custom={i % 10}
      variants={fadeUpVariants}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={prefersReducedMotion ? undefined : "visible"}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      className={`relative flex min-h-[440px] flex-col overflow-hidden rounded-xl border border-navy/10 bg-white text-left shadow-[0_8px_24px_rgba(32,43,114,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(32,43,114,0.18)] ${s.y2k ? "y2k-card" : ""}`}
      style={{ rotate: `${((i % 3) - 1) * 0.6}deg` }}
    >
      <div className="relative">
        {picture ? (
          <img src={picture} alt={`${s.name} hairstyle`} className="h-56 w-full object-cover" />
        ) : (
          <div className={`h-56 bg-linear-to-br from-bubble ${i % 2 ? "to-chrome" : "to-cotton"}`} aria-label={`${s.name} hairstyle`} />
        )}
        {s.y2k && <span aria-hidden="true" className="y2k-sparkle absolute left-3 top-3 text-2xl text-white">✦</span>}
        {s.y2k && <span className="absolute bottom-3 left-3 rounded-full bg-electric px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">y2k archive</span>}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[.16em] text-electric">{s.category}</span>
            <h3 className="mt-1 font-display text-2xl font-extrabold lowercase leading-[.95] tracking-tight">{s.name}</h3>
          </div>
          <span className="shrink-0 rounded-full bg-electric px-2.5 py-1 text-xs font-bold text-white">{price(s)}</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/70">{s.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-navy/20 px-2.5 py-1 text-xs font-medium text-navy">{EFFORT[s.effort]} effort</span>
          {s.vibes.split("").map((v) => (
            <span key={v} className="rounded-full bg-cotton px-2.5 py-1 text-xs font-medium text-navy">{vibes[v as keyof typeof vibes]}</span>
          ))}
          {s.lasts && <span className="rounded-full border border-navy/20 px-2.5 py-1 text-xs font-medium text-navy">{s.lasts}</span>}
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-ink/55">
          Estimated range{ s.note ? ` · ${s.note}` : " · confirm inclusions before booking" }
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <button onClick={onOpen} className="rounded-full bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-electric focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2">
            View details
          </button>
          <button
            aria-label={saved ? `Unsave ${s.name}` : `Save ${s.name}`}
            aria-pressed={saved}
            onClick={onSave}
            className="min-h-11 min-w-11 rounded-full border border-electric text-2xl leading-none text-electric transition hover:bg-cotton focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2"
          >
            {saved ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
