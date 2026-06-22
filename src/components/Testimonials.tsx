import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { use3DTilt } from "@/hooks/use3DTilt";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { elementRef, tiltStyle, glareStyle } = use3DTilt({
    max: 6,
    scale: 1.015,
    glare: true,
    maxGlare: 0.1,
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-14 tracking-tight">
          What Our <span className="text-brand italic">Customers</span> Say
        </h2>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center px-12 sm:px-16 perspective-1000">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-0 text-foreground/80 hover:text-brand hover:scale-110 active:scale-95 transition-all p-2 cursor-pointer z-10 bg-white shadow-md border border-border/60 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Testimonial Card */}
          <div
            ref={elementRef}
            style={tiltStyle}
            className="w-full bg-white border border-border/80 rounded-[32px] p-5 sm:p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center min-h-[280px] relative overflow-hidden preserve-3d"
          >
            <div style={glareStyle} />
            {/* Stars */}
            <div className="flex justify-center gap-1 text-yellow-400 select-none mb-6 translate-z-10 animate-fade-in whitespace-nowrap shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 shrink-0" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed text-center mb-8 max-w-2xl mx-auto font-semibold translate-z-5 line-clamp-4">
              "{currentTestimonial.quote}"
            </p>

            {/* Author Name Box */}
            <div className="flex justify-center translate-z-15">
              <div className="inline-block border border-border/80 rounded-[12px] px-8 py-2 text-sm font-semibold bg-white text-foreground shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
                {currentTestimonial.name}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-0 text-foreground/80 hover:text-brand hover:scale-110 active:scale-95 transition-all p-2 cursor-pointer z-10 bg-white shadow-md border border-border/60 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
