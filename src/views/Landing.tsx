import type { CSSProperties } from "react";
import type { Route } from "../App";

type Photo = { style: CSSProperties; back?: boolean; delay?: string };

// Every polaroid lives on the right side. "back" ones tuck behind the wordmark, the rest layer on top.
const photos: Photo[] = [
  { back: true, style: { right: "28%", top: "7%", width: "20vw", maxWidth: 190, aspectRatio: "4/3", rotate: "3deg" } },
  { back: true, style: { right: "3%", top: "4%", width: "28vw", maxWidth: 250, aspectRatio: "3/4", rotate: "5deg" } },
  { back: true, style: { right: "-4%", top: "30%", width: "26vw", maxWidth: 230, aspectRatio: "1", rotate: "-5deg" } },
  { back: true, style: { right: "26%", top: "47%", width: "24vw", maxWidth: 220, aspectRatio: "3/4", rotate: "-4deg" } },
  { delay: "-3s", style: { right: "2%", top: "52%", width: "28vw", maxWidth: 260, aspectRatio: "3/4", rotate: "3deg" } },
  { delay: "-5s", style: { right: "14%", top: "68%", width: "22vw", maxWidth: 200, aspectRatio: "1", rotate: "-7deg" } },
];

export default function Landing({ go }: { go: (r: Route) => void }) {
  return (
    <section className="relative h-svh overflow-hidden">
      {photos.map((p, i) => (
        <div
          key={i}
          className={`absolute bg-white p-1.5 pb-4 shadow-lg shadow-bubble/50 transition-transform hover:z-30 hover:scale-105 motion-safe:animate-float ${p.back ? "z-0" : "z-20"}`}
          style={{ ...p.style, animationDelay: p.delay }}
        >
          <span aria-hidden className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 -rotate-3 bg-chrome/70" />
          {/* swap this for <img src="/photos/xyz.jpg" alt="" className="size-full object-cover" /> */}
          <div className="size-full bg-linear-to-br from-bubble to-chrome" />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-x-0 top-[15%] z-10 px-[3vw]">
        <div className="font-display font-extrabold lowercase tracking-tighter text-electric">
          <div className="leading-[.9]" style={{ fontSize: "min(36vw, 36vh)" }}>hair</div>
          <div className="-mt-[.04em] leading-[.9]" style={{ fontSize: "min(19.5vw, 19.5vh)" }}>conomics</div>
        </div>

        <div className="mt-3 max-w-[42%] md:mt-5 md:max-w-sm lg:max-w-md">
          <p className="font-hand text-xl leading-none text-navy md:text-3xl">cut the cost. cut the stress.</p>
          <p className="mt-1.5 text-[13px] leading-snug text-ink md:text-base lg:text-lg">
            Too many hairstyles, not enough answers. Tell us your budget and your mood, and we will tell you what to make and what it costs.
          </p>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-[calc(22px+env(safe-area-inset-bottom,0px))] z-40 flex flex-wrap items-center gap-2.5">
        <button onClick={() => go("quiz")} className="rounded-full bg-electric px-6 py-4 font-bold text-white">
          so, what are we making? →
        </button>
        <button onClick={() => go("browse")} className="rounded-full border-2 border-navy px-6 py-3.5 font-bold text-navy">
          just let me browse
        </button>
      </div>
    </section>
  );
}