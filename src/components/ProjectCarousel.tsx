import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  Award,
} from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCarousel({
  items,
  defaultSlug,
}: {
  items: Project[];
  defaultSlug?: string;
}) {
  const defaultIdx = defaultSlug ? items.findIndex((p) => p.slug === defaultSlug) : -1;
  const [activeProjIdx, setActiveProjIdx] = useState(defaultIdx !== -1 ? defaultIdx : 0);
  const activeProject = items[activeProjIdx];

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrevProj = () => {
    setActiveProjIdx((prev) => (prev - 1 + items.length) % items.length);
  };
  
  const handleNextProj = () => {
    setActiveProjIdx((prev) => (prev + 1) % items.length);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNextProj();
    } else if (distance < -minSwipeDistance) {
      handlePrevProj();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextProj();
    }, 6000); // changes slides every 6 seconds
    return () => clearInterval(timer);
  }, [activeProjIdx, items.length]);

  if (!activeProject) return null;

  const getFormattedLocation = (loc: string) => {
    const parts = loc.split(",");
    if (parts.length > 1) {
      const city = parts[parts.length - 1].trim();
      const street = parts.slice(0, parts.length - 1).join(", ").trim();
      return (
        <div className="flex flex-col text-left">
          <span className="text-[10px] sm:text-xs md:text-[13px] font-black text-neutral-900 leading-tight">{street}</span>
          <span className="text-[10px] sm:text-xs md:text-[13px] font-black text-neutral-900 leading-tight">{city}</span>
        </div>
      );
    }
    return (
      <span className="text-[10px] sm:text-xs md:text-[13px] font-black text-neutral-900 text-left leading-tight">
        {loc}
      </span>
    );
  };

  return (
    <div 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/8.5] min-h-[600px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] overflow-hidden rounded-[32px] border border-border/80 shadow-2xl bg-neutral-900 group"
    >
      
      {/* Background Slides with Opacity Crossfade Transition */}
      <div className="absolute inset-0 z-0">
        {items.map((project, idx) => (
          <img
            key={project.slug}
            src={project.image}
            alt={project.name}
            className={`absolute inset-0 w-full h-full object-cover select-none transition-opacity duration-[900ms] ease-in-out ${
              idx === activeProjIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          />
        ))}
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/15 z-20" />
      </div>

      {/* Frosted Glass Overlay Card */}
      <div 
        key={`card-${activeProject.slug}`}
        className="absolute left-1/2 bottom-4 md:bottom-8 -translate-x-1/2 w-[94%] max-w-[1150px] bg-white/75 backdrop-blur-md rounded-[32px] border border-white/20 p-4 sm:p-6 lg:p-8 shadow-2xl flex flex-col items-center text-center text-neutral-950 z-10 transition-all duration-500 animate-slide-up"
      >
        {/* Project Title */}
        <Link 
          to="/projects/$slug" 
          params={{ slug: activeProject.slug }}
          className="hover:text-brand transition-colors duration-300"
        >
          <h3 className="text-xl sm:text-2xl md:text-5xl font-black text-neutral-950 tracking-tight leading-none mb-1">
            {activeProject.name}
          </h3>
        </Link>

        {/* Project Description */}
        <p className="text-[10px] sm:text-xs md:text-sm text-neutral-900 leading-relaxed font-black max-w-2xl mt-2 mb-3 sm:mt-3 sm:mb-4">
          {activeProject.description || activeProject.tagline}
        </p>

        {/* Features Row */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full py-3 sm:py-4 border-t border-black/10">
          
          {/* Residential Type */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-md shrink-0 border border-neutral-100">
              <Building2 className="w-4 h-4 sm:w-5.5 sm:h-5.5 text-neutral-800" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-[13px] font-black text-neutral-900 leading-none">
              {activeProject.area || "Residential Plots"}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-md shrink-0 border border-neutral-100">
              <MapPin className="w-4 h-4 sm:w-5.5 sm:h-5.5 text-neutral-800" />
            </div>
            {getFormattedLocation(activeProject.location)}
          </div>

          {/* Approval Categorization */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-md shrink-0 border border-neutral-100">
              <Award className="w-4 h-4 sm:w-5.5 sm:h-5.5 text-neutral-800" />
            </div>
            <span className="text-[10px] sm:text-xs md:text-[13px] font-black text-neutral-900 leading-none">
              {activeProject.approved}
            </span>
          </div>
        </div>

        {/* Dynamic Approval Badge Button & Mobile Navigation */}
        <div className="mt-1 flex items-center justify-between sm:justify-center w-full gap-4">
          <div className="flex gap-2 sm:hidden shrink-0">
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevProj(); }}
              className="w-8 h-8 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-neutral-950 shadow-sm border border-neutral-200 cursor-pointer active:scale-95 transition-all"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5px]" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNextProj(); }}
              className="w-8 h-8 rounded-full bg-white/60 hover:bg-white flex items-center justify-center text-neutral-950 shadow-sm border border-neutral-200 cursor-pointer active:scale-95 transition-all"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
            </button>
          </div>

          <Link
            to="/projects/$slug"
            params={{ slug: activeProject.slug }}
            className="inline-block bg-white hover:bg-neutral-50 text-neutral-950 font-black text-[10px] sm:text-xs px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg shadow-sm border border-neutral-100 transition-all duration-300 hover:scale-102 uppercase tracking-wide truncate max-w-[200px] sm:max-w-none text-center"
          >
            Explore Project
          </Link>
        </div>
      </div>

      {/* Navigation Chevrons (Desktop/Tablet) */}
      <button
        onClick={(e) => { e.stopPropagation(); handlePrevProj(); }}
        className="hidden sm:block absolute left-3 md:left-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-12 h-12 md:w-16 md:h-16 stroke-[2.5px]" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); handleNextProj(); }}
        className="hidden sm:block absolute right-3 md:right-6 top-1/2 -translate-y-1/2 text-white/90 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-12 h-12 md:w-16 md:h-16 stroke-[2.5px]" />
      </button>
    </div>
  );
}
