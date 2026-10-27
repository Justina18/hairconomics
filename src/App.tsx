import { useState } from "react";
import Dialog from "./components/Dialog";
import { SaveNudge, StyleDetail } from "./components/Panels";
import type { Style } from "./data";
import Browse from "./views/Browse";
import Landing from "./views/Landing";
import Quiz from "./views/Quiz";
import Results from "./views/Results";
import Updates from "./views/Updates";

export type Route = "home" | "quiz" | "results" | "browse" | "updates";
type Panel = { kind: "style"; s: Style } | { kind: "save" } | null;

const HASHED: Route[] = ["home", "quiz", "browse", "updates"];
const fromHash = (): Route => {
  const h = location.hash.slice(1) as Route;
  return HASHED.includes(h) ? h : "home";
};
const NAV: [string, Route][] = [["home", "home"], ["pick my hair", "quiz"], ["all styles", "browse"], ["updates", "updates"]];

export default function App() {
  const [route, setRoute] = useState<Route>(fromHash);
  const [menu, setMenu] = useState(false);
  const [results, setResults] = useState<Style[]>([]);
  const [panel, setPanel] = useState<Panel>(null);
  const [saved, setSaved] = useState<Record<string, true>>(() => {
    try { return JSON.parse(localStorage.getItem("hc") ?? "{}"); } catch { return {}; }
  });

  const go = (r: Route) => {
    setRoute(r); setMenu(false); window.scrollTo(0, 0);
    if (HASHED.includes(r)) history.replaceState(null, "", "#" + r);
  };

  const toggle = (name: string) => {
    const next = { ...saved };
    const first = Object.keys(saved).length === 0 && !saved[name];
    if (saved[name]) delete next[name]; else next[name] = true;
    setSaved(next);
    try { localStorage.setItem("hc", JSON.stringify(next)); } catch { /* storage blocked */ }
    if (first) setPanel({ kind: "save" });
  };

  const onOpen = (s: Style) => setPanel({ kind: "style", s });
  const close = () => setPanel(null);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 pb-3 pt-[calc(12px+env(safe-area-inset-top,0px))]">
        <button onClick={() => go("home")} aria-label="Home" className="pointer-events-auto p-1.5 font-display text-2xl font-extrabold text-electric">h—c</button>
        <button onClick={() => setMenu(!menu)} aria-expanded={menu} className={`pointer-events-auto p-1.5 font-display text-2xl font-extrabold ${menu ? "text-white" : "text-electric"}`}>
          {menu ? "close" : "menu"}
        </button>
      </header>

      {menu && (
        <nav className="fixed inset-0 z-40 flex flex-col justify-center gap-1.5 bg-electric p-6" aria-label="Menu">
          {NAV.map(([label, r]) => (
            <button key={r} onClick={() => go(r)} className="text-left font-display text-[clamp(40px,12vw,84px)] font-extrabold lowercase leading-none tracking-tighter text-white">
              {label}
            </button>
          ))}
        </nav>
      )}

      {route === "home" ? (
        <Landing go={go} />
      ) : (
        <main className="mx-auto min-h-screen max-w-5xl px-4 pb-16 pt-20">
          {route === "quiz" && <Quiz onDone={(r) => { setResults(r); go("results"); }} />}
          {route === "results" && <Results results={results} saved={saved} onOpen={onOpen} onSave={toggle} go={go} />}
          {route === "browse" && <Browse saved={saved} onOpen={onOpen} onSave={toggle} />}
          {route === "updates" && <Updates onOpen={onOpen} />}
        </main>
      )}

      <Dialog open={panel !== null} onClose={close}>
        {panel?.kind === "style" && <StyleDetail s={panel.s} saved={!!saved[panel.s.name]} onSave={() => toggle(panel.s.name)} />}
        {panel?.kind === "save" && <SaveNudge onClose={close} />}
      </Dialog>
    </>
  );
}
