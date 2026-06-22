import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import newsHero from "@/assets/news_hero.webp";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Newspaper,
  Calendar,
  ExternalLink
} from "lucide-react";

import newsClip1 from "@/assets/og_assets/Frame 4 (17).webp";
import newsClip2 from "@/assets/og_assets/Frame 4 (18).webp";
import newsClip3 from "@/assets/og_assets/Frame 4 (19).webp";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Media — Landedge Group" },
      { name: "description", content: "Latest news, newspaper clippings, press releases, and media coverage of Landedge Group." },
    ],
  }),
  component: News,
});

const pressClippings = [
  {
    id: 1,
    image: newsClip1,
    title: "Prime JDA Schemes Launch Feature",
    source: "Dainik Bhaskar",
    date: "March 12, 2026",
  },
  {
    id: 2,
    image: newsClip2,
    title: "Growth & Trust in plotted developments",
    source: "Rajasthan Patrika",
    date: "April 05, 2026",
  },
  {
    id: 3,
    image: newsClip3,
    title: "Landedge Annual Success Summit Highlights",
    source: "Patrika Real Estate",
    date: "March 08, 2026",
  },
];

function News() {
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
    setLightboxIndex(prev => (prev === 0 ? pressClippings.length - 1 : (prev as number) - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === pressClippings.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <Layout>
      <PageHero image={newsHero} title="News & Press" />

      {/* Intro section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-brand bg-brand-light px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" /> Media Presence
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">
            Landedge In The <span className="text-brand italic">Headlines</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-semibold">
            Catch up on the latest publications, press releases, and print media coverage highlighting our growth, client trust, and project updates.
          </p>
        </div>
      </section>

      {/* Press Clippings Gallery */}
      <section className="pb-16 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 md:px-12 -translate-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressClippings.map((clip, index) => (
              <div
                key={clip.id}
                onClick={() => setLightboxIndex(index)}
                className="group bg-white rounded-3xl overflow-hidden border border-border/70 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col h-full"
              >
                {/* Image Container with Paper Effect */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 shrink-0 border-b border-border/40">
                  <img
                    src={clip.image}
                    alt={clip.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-darkest/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold">
                      <Calendar className="w-3.5 h-3.5 text-brand" />
                      <span>{clip.date}</span>
                    </div>
                    <h3 className="text-base font-black text-foreground group-hover:text-brand transition-colors duration-300 leading-snug">
                      {clip.title}
                    </h3>
                  </div>
                  <div className="pt-2 flex items-center text-xs font-black text-brand uppercase tracking-wider gap-1 group-hover:gap-2 transition-all duration-300">
                    Read Clipping <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Lightbox Modal for Publications */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-opacity duration-300">
          {/* Close Area */}
          <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />

          {/* Top Bar inside modal */}
          <div className="absolute top-0 inset-x-0 h-16 flex items-center justify-between px-6 z-10 bg-gradient-to-b from-black/60 to-transparent">
            <div className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <span>{lightboxIndex + 1} / {pressClippings.length}</span>
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
          <div className="relative max-w-4xl w-full max-h-[85vh] px-4 md:px-12 flex flex-col items-center justify-center gap-4 z-0">
            <img
              src={pressClippings[lightboxIndex].image}
              alt={pressClippings[lightboxIndex].title}
              className="max-w-full max-h-[72vh] md:max-h-[76vh] object-contain rounded-xl shadow-2xl select-none animate-fade-in"
            />
            
            {/* Details Panel inside modal */}
            <div className="text-center max-w-xl space-y-1 text-white px-4 md:px-0">
              <h4 className="text-lg font-black tracking-tight">
                {pressClippings[lightboxIndex].title}
              </h4>
              <p className="text-xs text-gray-400 font-semibold">
                Published on {pressClippings[lightboxIndex].date}
              </p>
            </div>
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
