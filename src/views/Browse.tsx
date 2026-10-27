import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { BROWSE_STYLES, type Style } from "../data";

type Props = { saved: Record<string, true>; onOpen: (s: Style) => void; onSave: (n: string) => void };

function Chips<T extends string | number>({ items, value, onPick }: {
  items: [string, T][]; value: T | null; onPick: (v: T | null) => void;
}) {
  return (
    <div className="my-3.5 flex flex-wrap gap-2">
      {items.map(([label, v]) => (
        <motion.button
          key={label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onPick(value === v ? null : v)}
          className={`rounded-full border-2 px-4 py-2.5 text-sm font-medium ${value === v ? "border-electric bg-electric text-white" : "border-navy text-navy"}`}
        >
          {label}
        </motion.button>
      ))}
    </div>
  );
}

export default function Browse({ saved, onOpen, onSave }: Props) {
  const [q, setQ] = useState("");
  const [budget, setBudget] = useState<number | null>(null);
  const [vibe, setVibe] = useState<string | null>(null);
  const [effort, setEffort] = useState<number | null>(null);
  const [y2kOnly, setY2kOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [turning, setTurning] = useState<"next" | "prev" | null>(null);
  const touchStart = useRef<number | null>(null);

  const list = BROWSE_STYLES.filter((s) =>
    (!y2kOnly || s.y2k === true) &&
    (budget === null || s.min <= budget) &&
    (vibe === null || s.vibes.includes(vibe)) &&
    (effort === null || s.effort === effort) &&
    s.name.toLowerCase().includes(q.toLowerCase()));
  const pageCount = Math.max(1, Math.ceil(list.length / 10));
  const safePage = Math.min(page, pageCount);
  const pageStyles = (p: number) => list.slice((p - 1) * 10, p * 10);

  useEffect(() => {
    setPage(1);
    setTurning(null);
  }, [q, budget, vibe, effort, y2kOnly]);

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [page, pageCount]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") turn("next");
      if (e.key === "ArrowLeft") turn("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const turn = (direction: "next" | "prev") => {
    if (turning || (direction === "next" && safePage === pageCount) || (direction === "prev" && safePage === 1)) return;
    setTurning(direction);
  };

  const finishTurn = () => {
    if (turning) setPage((p) => p + (turning === "next" ? 1 : -1));
    setTurning(null);
  };

  const displayedPage = turning ? safePage + (turning === "next" ? 1 : -1) : safePage;
  const visibleStyles = pageStyles(displayedPage);

  return (
    <>
      <h1 className="font-display text-[clamp(40px,9vw,80px)] font-extrabold lowercase leading-[.95] tracking-tighter text-electric">all styles</h1>
      <p className="text-xs text-ink/60">Prices are estimates in naira and change with city, braider and hair quality.</p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="search a style, e.g. knotless"
        aria-label="Search styles"
        className="mt-3 w-full rounded-lg border-2 border-navy bg-white p-3.5"
      />
      <Chips items={[["under ₦15k", 15], ["under ₦30k", 30], ["under ₦60k", 60]]} value={budget} onPick={setBudget} />
      <Chips items={[["soft", "s"], ["bold", "b"], ["neat", "n"], ["lowkey", "l"]]} value={vibe} onPick={setVibe} />
      <Chips items={[["low effort", 0], ["medium", 1], ["high", 2]]} value={effort} onPick={setEffort} />
      <Chips items={[["✦ y2k archive", "y2k"]]} value={y2kOnly ? "y2k" : null} onPick={(value) => setY2kOnly(value === "y2k")} />
      <div className="mt-4" onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }} onTouchEnd={(e) => {
        if (touchStart.current === null) return;
        const distance = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 50) turn(distance < 0 ? "next" : "prev");
        touchStart.current = null;
      }}>
        {list.length === 0 ? <p className="font-hand text-2xl text-electric">nothing matches. loosen a filter, babe.</p> : (
          <>
            <div className="relative perspective-[1200px]">
              <div className="grid min-h-[470px] grid-cols-1 content-start gap-7 rounded-md border-2 border-dashed border-bubble/40 bg-paper p-4 shadow-[0_8px_24px_var(--color-bubble)] sm:grid-cols-2 sm:min-h-[920px] lg:grid-cols-3 lg:min-h-[930px]">
                {visibleStyles.map((s, i) => (
                  <Card key={`${s.name}-${i}`} s={s} i={BROWSE_STYLES.indexOf(s)} saved={!!saved[s.name]} onOpen={() => onOpen(s)} onSave={() => onSave(s.name)} />
                ))}
              </div>
              {turning && (
                <div onAnimationEnd={finishTurn} className={`absolute inset-0 grid grid-cols-1 content-start gap-7 rounded-md border-2 border-dashed border-bubble/40 bg-paper p-4 shadow-[0_8px_24px_var(--color-bubble)] transform-3d backface-hidden sm:grid-cols-2 lg:grid-cols-3 ${turning === "next" ? "page-turn-next" : "page-turn-prev"}`}>
                  {pageStyles(safePage).map((s, i) => (
                    <Card key={`${s.name}-${i}`} s={s} i={BROWSE_STYLES.indexOf(s)} saved={!!saved[s.name]} onOpen={() => onOpen(s)} onSave={() => onSave(s.name)} />
                  ))}
                </div>
              )}
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <button disabled={safePage === 1 || !!turning} onClick={() => turn("prev")} aria-label="Previous page" className="rounded-full border-2 border-navy px-4 py-2 font-bold text-navy disabled:cursor-not-allowed disabled:opacity-40">←</button>
              <p aria-live="polite" className="text-sm font-bold text-navy">page {safePage} of {pageCount}</p>
              <button disabled={safePage === pageCount || !!turning} onClick={() => turn("next")} aria-label="Next page" className="rounded-full border-2 border-navy px-4 py-2 font-bold text-navy disabled:cursor-not-allowed disabled:opacity-40">→</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
