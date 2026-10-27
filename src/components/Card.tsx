import { EFFORT, price, type Style } from "../data";

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

export default function Card({ s, i, saved, onOpen, onSave }: Props) {
  const picture = pictureFiles[s.name];

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      className={`relative bg-white p-2 pb-3 text-left shadow-md shadow-bubble/40 ${s.y2k ? "y2k-card" : ""}`}
      style={{ rotate: `${((i % 3) - 1) * 1.6}deg` }}
    >
      <span className="absolute -right-1.5 top-3.5 rotate-3 bg-electric px-2 py-0.5 text-xs font-bold text-white">
        {price(s)}
      </span>
      {s.y2k && <span aria-hidden="true" className="y2k-sparkle absolute left-1 top-1 text-xl text-electric">✦</span>}
      {picture ? (
        <img src={picture} alt="" className="mb-2 h-32 w-full object-cover" />
      ) : (
        <div className={`mb-2 h-32 bg-linear-to-br from-bubble ${i % 2 ? "to-chrome" : "to-cotton"}`} />
      )}
      <span className="mb-1 inline-block rounded-full bg-cotton px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-navy">{s.category}</span>
      {s.y2k && <span className="ml-1 inline-block -rotate-2 rounded-full bg-electric px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">y2k</span>}
      <h3 className="font-display text-lg font-extrabold lowercase leading-none tracking-tight">{s.name}</h3>
      <p className="mt-1 text-[13px] text-ink/60">
        {s.time ? `${s.time} · ` : ""}{EFFORT[s.effort].toLowerCase()} effort
      </p>
      <button
        aria-label={saved ? "Unsave" : "Save"}
        onClick={(e) => { e.stopPropagation(); onSave(); }}
        className="absolute bottom-2 right-2 text-2xl text-electric"
      >
        {saved ? "♥" : "♡"}
      </button>
    </div>
  );
}
