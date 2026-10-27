import Card from "../components/Card";
import type { Style } from "../data";
import type { Route } from "../App";

type Props = {
  results: Style[]; saved: Record<string, true>;
  onOpen: (s: Style) => void; onSave: (n: string) => void; go: (r: Route) => void;
};

export default function Results({ results, saved, onOpen, onSave, go }: Props) {
  return (
    <>
      <p className="font-hand text-[26px] text-electric">girl, here are five.</p>
      <h1 className="font-display text-[clamp(40px,9vw,80px)] font-extrabold lowercase leading-[.95] tracking-tighter text-electric">pick one.</h1>
      <div className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((s, i) => (
          <Card key={s.name} s={s} i={i} saved={!!saved[s.name]} onOpen={() => onOpen(s)} onSave={() => onSave(s.name)} />
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-2.5">
        <button onClick={() => go("quiz")} className="rounded-full bg-navy px-6 py-3.5 font-bold text-white">start over</button>
        <button onClick={() => go("browse")} className="rounded-full border-2 border-navy px-6 py-3 font-bold text-navy">see everything</button>
      </div>
    </>
  );
}
