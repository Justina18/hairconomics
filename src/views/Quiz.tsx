import { useState } from "react";
import { QUESTIONS, rank, type Style } from "../data";

export default function Quiz({ onDone }: { onDone: (r: Style[]) => void }) {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<(string | number)[]>([]);
  const q = QUESTIONS[step];

  const pick = (v: string | number) => {
    const next = [...ans, v];
    if (step + 1 < QUESTIONS.length) { setAns(next); setStep(step + 1); }
    else onDone(rank(next));
  };

  return (
    <>
      <div className="my-3.5 h-2 overflow-hidden rounded-full bg-cotton">
        <div className="h-full bg-electric transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
      </div>
      <p className="font-hand text-2xl text-electric">question {step + 1} of {QUESTIONS.length}</p>
      <h1 className="font-display text-[clamp(40px,9vw,80px)] font-extrabold lowercase leading-[.95] tracking-tighter text-electric">
        {q.q}
      </h1>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {q.opts.map((o) => (
          <button
            key={o.label}
            onClick={() => pick(o.v)}
            className="min-h-24 rounded-2xl border-2 border-navy bg-white p-4 text-left font-display text-[clamp(18px,4.4vw,26px)] font-extrabold lowercase leading-tight tracking-tight shadow-[4px_4px_0_var(--color-bubble)] transition hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            {o.label}
          </button>
        ))}
      </div>
    </>
  );
}
