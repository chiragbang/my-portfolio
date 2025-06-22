import { PointerHighlight } from "./ui/pointer-highlighter";

export function Quote2() {
  return (
    <section className="bg-neutral-950 py-28 px-6 flex items-center justify-center">
      <PointerHighlight>
        <h2 className="text-center max-w-7xl text-3xl md:text-5xl font-semibold md:font-bold text-white tracking-tight leading-snug animate-fade-in">
          🧑‍💻 Code. ☕ Chai. 🔥 Chaos. 🔁 Repeat — Fullstack Life.
        </h2>
      </PointerHighlight>
    </section>
  );
}
