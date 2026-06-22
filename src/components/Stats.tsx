import park from "@/assets/park-stats.jpg";

export function Stats() {
  return (
    <section className="relative w-full h-[280px] md:h-[360px] overflow-hidden">
      <img src={park} alt="Park" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative h-full mx-auto max-w-5xl px-4 grid grid-cols-2 items-end pb-10 text-white">
        <div>
          <div className="text-5xl md:text-7xl font-bold">13</div>
          <div className="text-lg md:text-2xl">Completed Project</div>
        </div>
        <div>
          <div className="text-5xl md:text-7xl font-bold">9</div>
          <div className="text-lg md:text-2xl">Ongoing Projects</div>
        </div>
      </div>
    </section>
  );
}
