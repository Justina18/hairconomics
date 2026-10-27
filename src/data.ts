export type Effort = 0 | 1 | 2;

export type Style = {
  name: string;
  min: number;
  max: number;
  plus?: boolean;
  note?: string;
  vibes: string;
  hair: string;
  effort: Effort;
  category: string;
  blurb: string;
  time?: string;
  lasts?: string;
  tip?: string;
  y2k?: boolean;
  era?: string;
};

const braidCategory = "Braids, cornrows and protective styles";
const naturalCategory = "Natural hairstyles and twists";
const wigCategory = "Wigs, weaves and sleek styles";
const statementCategory = "Classic, short and statement styles";

export const STYLES: Style[] = [
  { name: "All-back cornrows", min: 4, max: 20, vibes: "n", hair: "nrs", effort: 0, category: braidCategory, blurb: "Simple, practical, clean, and easy to wear casually or professionally.", lasts: "usually 2–8 weeks" },
  { name: "Knotless braids", min: 15, max: 60, plus: true, vibes: "sn", hair: "nr", effort: 0, category: braidCategory, blurb: "Versatile, lightweight-looking braids that work with casual, feminine, and corporate outfits.", lasts: "usually 2–8 weeks" },
  { name: "Boho braids", min: 25, max: 70, plus: true, vibes: "sb", hair: "nr", effort: 2, category: braidCategory, blurb: "Romantic, textured, and effortless-looking. The loose curls need detangling and extra care.", lasts: "usually 2–8 weeks" },
  { name: "Fulani braids", min: 15, max: 40, plus: true, vibes: "b", hair: "nr", effort: 1, category: braidCategory, blurb: "Distinctive centre parts, decorative braids, and optional beads. A strong cultural and fashion-forward look.", lasts: "usually 2–8 weeks" },
  { name: "Ghana weaving", min: 10, max: 30, vibes: "n", hair: "nr", effort: 0, category: braidCategory, blurb: "Defined, structured cornrows with a fuller appearance than basic all-back braids.", lasts: "usually 2–8 weeks" },
  { name: "Stitch braids", min: 8, max: 35, vibes: "nb", hair: "nr", effort: 0, category: braidCategory, blurb: "Crisp, graphic parting and a sleek finish. Great for sporty, minimalist, or streetwear-inspired looks.", lasts: "usually 2–8 weeks" },
  { name: "Classic box braids", min: 12, max: 35, plus: true, vibes: "ls", hair: "nr", effort: 0, category: braidCategory, blurb: "A timeless everyday option. Short and medium lengths are often easier to manage than very long braids.", lasts: "usually 2–8 weeks" },
  { name: "Two-strand twists", min: 7, max: 30, vibes: "sl", hair: "n", effort: 1, category: naturalCategory, blurb: "Natural, understated, and versatile. Can be worn loose, pinned up, or unravelled into a twist-out." },
  { name: "Wash-and-go curls", min: 5, max: 25, vibes: "s", hair: "n", effort: 1, category: naturalCategory, blurb: "Defined natural curls with a fresh, effortless look. Daily moisture and curl refreshes may be necessary." },
  { name: "Mini twists", min: 15, max: 50, plus: true, vibes: "sn", hair: "n", effort: 1, category: naturalCategory, blurb: "Small, delicate twists that create a fuller natural look. Installation can be lengthy, but day-to-day styling is simple." },
  { name: "Afro puff", min: 2, max: 10, vibes: "bl", hair: "ns", effort: 1, category: naturalCategory, blurb: "A beautiful, simple natural style. Easy to achieve at home, although sleek edges and moisture need attention." },
  { name: "Irun kiko (African threading)", min: 2, max: 15, vibes: "lb", hair: "nr", effort: 0, category: naturalCategory, blurb: "Traditional, affordable, and protective. Particularly useful for stretching natural hair without heat." },
  { name: "Faux locs", min: 20, max: 50, plus: true, vibes: "bl", hair: "nr", effort: 1, category: naturalCategory, blurb: "Bohemian, artistic, and textured. They last for weeks but need scalp care and gentle washing." },
  { name: "Straight wig / bone straight", min: 10, max: 40, plus: true, note: "for styling or installation", vibes: "nl", hair: "w", effort: 1, category: wigCategory, blurb: "Sleek, classic, and professional. The wig itself may cost considerably more, particularly if it is human hair." },
  { name: "Curly wig", min: 10, max: 40, plus: true, note: "for styling or installation", vibes: "sb", hair: "w", effort: 2, category: wigCategory, blurb: "Adds softness and volume. Curly textures need regular detangling, moisture, and careful storage." },
  { name: "Sleek low ponytail", min: 5, max: 25, plus: true, vibes: "ns", hair: "nrs", effort: 1, category: wigCategory, blurb: "Minimal, elegant, and office-friendly. Can be achieved with natural hair or extensions; frequent tight styling can stress the hairline." },
  { name: "High ponytail", min: 8, max: 30, plus: true, vibes: "bn", hair: "nrs", effort: 1, category: wigCategory, blurb: "Lifts the face visually and gives a confident, glam finish. Requires some upkeep to maintain sleekness." },
  { name: "Bob weave or wig", min: 15, max: 45, plus: true, note: "for installation", vibes: "nb", hair: "wrs", effort: 1, category: wigCategory, blurb: "Chic and structured, with a clean silhouette that suits casual outfits and formal occasions." },
  { name: "Silk press", min: 15, max: 35, plus: true, vibes: "sn", hair: "rn", effort: 2, category: wigCategory, blurb: "A silky, straight finish without a chemical relaxer. Humidity can reverse the result, and excessive heat may cause damage." },
  { name: "Tapered natural cut", min: 5, max: 20, plus: true, vibes: "bl", hair: "ns", effort: 1, category: statementCategory, blurb: "Confident, modern, and easy to style each morning. Regular trims keep the shape defined." },
  { name: "Bantu knots", min: 5, max: 20, plus: true, vibes: "b", hair: "n", effort: 1, category: statementCategory, blurb: "Sculptural and playful. Wear the knots as a style or unravel them into defined curls." },
  { name: "Shuku", min: 8, max: 25, plus: true, vibes: "nb", hair: "nr", effort: 0, category: statementCategory, blurb: "A raised braided updo that is elegant, practical, and culturally rooted." },
  { name: "Pixie cut", min: 5, max: 20, plus: true, note: "per cut or styling visit", vibes: "bn", hair: "s", effort: 1, category: statementCategory, blurb: "A short, statement-making look. It requires periodic trims and may need daily shaping." },
];

const y2k = (name: string, min: number, max: number, effort: Effort, vibes: string, era: string, note?: string): Style => ({
  name, min, max, effort, vibes, hair: "nrsw", category: era, era, y2k: true,
  note, blurb: `A ${vibes.includes("b") ? "statement-making" : "playful"} throwback look from the ${era.toLowerCase()} era.`,
});

export const Y2K_STYLES: Style[] = [
  y2k("Butterfly clips and mini claw clips", .5, 5, 0, "s", "2000–2005"),
  y2k("Baby braids / face-framing braids", 2, 10, 0, "s", "2000–2005"),
  y2k("Crimped hair", 5, 20, 1, "b", "2000–2005"),
  y2k("Zigzag parting", 3, 12, 1, "b", "2000–2005"),
  y2k("Chunky highlights / contrasting streaks", 10, 40, 2, "b", "2000–2005", "colouring; extensions extra"),
  y2k("Pin-straight hair with centre part", 5, 25, 1, "n", "2000–2005", "styling; hair extra"),
  y2k("Flipped-out ends", 5, 15, 1, "s", "2000–2005"),
  y2k("Half-up, half-down with a hair bump", 5, 20, 1, "b", "2000–2005"),
  y2k("Two mini buns / space buns", 3, 12, 1, "b", "2000–2005"),
  y2k("Coloured clip-in extensions", 2, 15, 0, "b", "2000–2005"),
  y2k("Long, layered weave-on", 10, 35, 1, "s", "2000–2005", "installation; hair extra"),
  y2k("Bandana or scarf headwrap", 1, 8, 0, "l", "2000–2005"),
  y2k("Spiky updo with loose ends", 4, 15, 1, "b", "2000–2005"),
  y2k("Sleek high ponytail", 5, 20, 1, "b", "2000–2005"),
  y2k("Side-swept bangs", 5, 20, 1, "s", "2000–2005"),
  y2k("Deep side-part weave", 10, 35, 1, "n", "2006–2010", "installation; hair extra"),
  y2k("Side-swept fringe with curls", 8, 30, 1, "s", "2006–2010", "hair extra"),
  y2k("Big barrel curls", 5, 20, 2, "b", "2006–2010", "styling"),
  y2k("Voluminous crown / teased hair", 5, 18, 2, "b", "2006–2010"),
  y2k("Feathered layers and flicked ends", 5, 20, 1, "s", "2006–2010"),
  y2k("Curly weave with a zigzag part", 10, 35, 1, "b", "2006–2010", "installation; hair extra"),
  y2k("Side ponytail", 4, 15, 0, "s", "2006–2010"),
  y2k("Bump-it / raised front hairstyle", 3, 12, 1, "b", "2006–2010"),
  y2k("Scene-inspired coloured streaks", 5, 25, 2, "b", "2006–2010"),
  y2k("Relaxed hair with a side fringe", 5, 20, 1, "n", "2006–2010"),
  y2k("Pixie cut", 5, 25, 1, "b", "2006–2010"),
  y2k("Straw curls / defined spiral curls", 10, 30, 2, "s", "2006–2010"),
  y2k("Half-up curly weave", 8, 25, 1, "s", "2006–2010", "styling; hair extra"),
  y2k("Long straight hair with face-framing pieces", 8, 30, 1, "n", "2006–2010", "styling; hair extra"),
  y2k("Brazilian body-wave weave", 15, 40, 1, "s", "2011–2015", "installation; hair extra"),
  y2k("Bone-straight weave", 15, 40, 1, "n", "2011–2015", "installation; hair extra"),
  y2k("Packing gel / sleek ponytail", 5, 20, 1, "n", "2011–2015"),
  y2k("Swoop ponytail with side fringe", 8, 25, 1, "b", "2011–2015"),
  y2k("Ombre extensions", 10, 40, 2, "b", "2011–2015", "colouring; hair extra"),
  y2k("High bun / top knot", 3, 15, 0, "n", "2011–2015"),
  y2k("Messy bun with tendrils", 3, 12, 0, "s", "2011–2015"),
  y2k("Crochet braids", 10, 35, 0, "l", "2011–2015", "hair extra"),
  y2k("Kinky twists", 12, 35, 0, "l", "2011–2015", "attachment may be extra"),
  y2k("Senegalese twists", 15, 40, 0, "n", "2011–2015", "attachment may be extra"),
  y2k("Natural twist-out", 5, 20, 1, "s", "2011–2015"),
  y2k("Bantu knot-out", 5, 15, 1, "b", "2011–2015"),
  y2k("High puff / afro puff", 2, 10, 1, "l", "2011–2015"),
  y2k("Ghana weaving with extensions", 8, 25, 0, "n", "2011–2015", "attachment may be extra"),
  y2k("Box braids / million braids", 12, 35, 0, "b", "2011–2015", "attachment may be extra"),
  y2k("Full lace or closure wig", 15, 40, 1, "n", "2011–2015", "installation; wig extra"),
  y2k("Deep side-part curls", 8, 25, 1, "s", "2011–2015", "styling; hair extra"),
  y2k("Lace frontal wig", 25, 50, 1, "b", "2016–2020", "installation; wig extra"),
  y2k("Closure wig with middle part", 15, 35, 1, "n", "2016–2020", "installation; wig extra"),
  y2k("Bone-straight middle part", 10, 35, 1, "n", "2016–2020", "styling; hair extra"),
  y2k("Laid baby hairs / swooped edges", 2, 8, 1, "b", "2016–2020", "styling add-on"),
  y2k("Extra-long sleek ponytail", 10, 30, 1, "b", "2016–2020", "hair extra"),
  y2k("Half-up, half-down sew-in", 15, 35, 1, "s", "2016–2020", "installation; hair extra"),
  y2k("Water-wave / deep-wave wig", 10, 30, 2, "s", "2016–2020", "styling; wig extra"),
  y2k("Ombre or coloured frontal", 20, 50, 2, "b", "2016–2020", "styling; hair extra"),
  y2k("Lemonade braids", 12, 35, 0, "b", "2016–2020", "attachment may be extra"),
  y2k("Feed-in braids", 10, 30, 0, "n", "2016–2020", "attachment may be extra"),
  y2k("Tribal / Fulani-inspired braids", 15, 40, 1, "b", "2016–2020", "attachment may be extra"),
  y2k("Faux locs", 20, 50, 1, "l", "2016–2020", "attachment may be extra"),
  y2k("Knotless braids", 15, 40, 0, "s", "2016–2020", "attachment may be extra"),
  y2k("Defined beach waves", 8, 25, 2, "s", "2016–2020", "styling; hair extra"),
  y2k("Blunt bob wig or weave", 15, 35, 1, "n", "2016–2020", "installation; hair extra"),
  y2k("Silk press", 15, 35, 2, "s", "2016–2020"),
  y2k("Natural hair with defined edges", 3, 12, 1, "l", "2016–2020"),
  y2k("High braided bun / braided updo", 8, 25, 1, "n", "2016–2020"),
];

export const BROWSE_STYLES = [...STYLES, ...Y2K_STYLES];

export const price = (s: Style) => `₦${s.min}–${s.max}k${s.plus ? "+" : ""}`;
export const EFFORT = ["Low", "Medium", "High"] as const;
export const okEmail = (e: string) => /^\S+@\S+\.\S+$/.test(e.trim());

export type Opt = { label: string; v: string | number };
export const QUESTIONS: { q: string; opts: Opt[] }[] = [
  { q: "what is the budget?", opts: [
    { label: "under ₦15k", v: 15 }, { label: "under ₦30k", v: 30 },
    { label: "under ₦60k", v: 60 }, { label: "money is not the problem", v: 999 } ] },
  { q: "what is the mood?", opts: [
    { label: "soft and girly", v: "s" }, { label: "bold, I want attention", v: "b" },
    { label: "neat and classy", v: "n" }, { label: "lowkey", v: "l" } ] },
  { q: "what are we working with?", opts: [
    { label: "natural hair", v: "n" }, { label: "relaxed hair", v: "r" },
    { label: "short hair", v: "s" }, { label: "I will wear a wig", v: "w" } ] },
  { q: "how much effort?", opts: [
    { label: "none, I am tired", v: 0 }, { label: "some", v: 1 }, { label: "I will sit for hours", v: 2 } ] },
];

export function rank(a: (string | number)[]): Style[] {
  const [budget, vibe, hair, effort] = a as [number, string, string, number];
  return STYLES.map((s) => {
    let p = 0;
    if (s.min > budget) p -= 100;
    p += s.vibes.includes(vibe) ? 3 : 0;
    p += s.hair.includes(hair) ? 4 : -5;
    p += s.effort <= effort ? 2 : -2;
    return { s, p };
  })
    .sort((x, y) => y.p - x.p)
    .slice(0, 5)
    .map((x) => x.s);
}
