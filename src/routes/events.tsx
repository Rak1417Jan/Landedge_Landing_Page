import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import eventsHero from "@/assets/events_hero.webp";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2 
} from "lucide-react";

import event1 from "@/assets/og_assets/Frame 4 (9).webp";
import event2 from "@/assets/og_assets/Frame 4 (10).webp";
import event3 from "@/assets/og_assets/Frame 4 (11).webp";
import event4 from "@/assets/og_assets/Frame 4 (12).webp";
import event5 from "@/assets/og_assets/Frame 4 (13).webp";
import event6 from "@/assets/og_assets/Frame 4 (14).webp";
import event7 from "@/assets/og_assets/Frame 4 (15).webp";
import event8 from "@/assets/og_assets/Frame 4 (16).webp";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Seminars — Landedge Group" },
      { name: "description", content: "Explore the memorable highlights, seminars, summits, and property expos organized by Landedge Group." }
    ]
  }),
  component: Events,
});

const eventsData = [
  { id: 1, image: event1 },
  { id: 2, image: event2 },
  { id: 3, image: event3 },
  { id: 4, image: event4 },
  { id: 5, image: event5 },
  { id: 6, image: event6 },
  { id: 7, image: event7 },
  { id: 8, image: event8 },
];

function Events() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? eventsData.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === eventsData.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <Layout>
      <PageHero image={eventsHero} title="Events" />

      {/* Intro section */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-brand bg-brand-light px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            Our Events
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Moments of <span className="text-brand italic">Success & Togetherness</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            From our major real estate launches and investor seminars to channel partner meets and awards nights, explore the landmarks of the Landedge journey.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <div
                key={event.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-border/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-pointer bg-neutral-900"
              >
                <img
                  src={event.image}
                  alt={`Event Photo ${event.id}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-darkest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          {/* Close Area */}
          <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

          {/* Top Bar inside modal */}
          <div className="absolute top-0 inset-x-0 h-16 flex items-center justify-between px-6 z-10 bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <span>{lightboxIndex + 1} / {eventsData.length}</span>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Left Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            className="absolute left-4 md:left-8 z-10 text-white/80 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Content Area */}
          <div className="relative max-w-5xl w-full max-h-[85vh] px-4 md:px-12 flex flex-col items-center justify-center gap-4 z-0">
            <img
              src={eventsData[lightboxIndex].image}
              alt={`Event Photo ${eventsData[lightboxIndex].id}`}
              className="max-w-full max-h-[78vh] md:max-h-[82vh] object-contain rounded-2xl shadow-2xl select-none animate-fade-in"
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            className="absolute right-4 md:right-8 z-10 text-white/80 hover:text-white hover:bg-white/10 p-3 rounded-full transition-colors cursor-pointer"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </Layout>
  );
}
