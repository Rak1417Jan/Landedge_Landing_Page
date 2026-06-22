import { CheckCircle, MapPin, FileText, Tag, Headphones, BookCheck } from "lucide-react";
import aerial from "@/assets/aerial-plots.jpg";
import { use3DTilt } from "@/hooks/use3DTilt";
import { ScrollReveal } from "./ScrollReveal";

const items = [
  { icon: CheckCircle, title: "Verified Plots", desc: "All our plots are legally verified with clear titles and proper documentation, ensuring a safe and secure property investment." },
  { icon: MapPin, title: "Prime Locations", desc: "Our plots are located in rapidly developing areas with excellent connectivity." },
  { icon: FileText, title: "Clear Documentation", desc: "We ensure transparent paperwork and provide full legal support during the buying process." },
  { icon: Tag, title: "Affordable Pricing", desc: "Our plots are priced competitively, making land investment accessible for everyone." },
  { icon: Headphones, title: "Customer Support", desc: "Our team guides you at every step from inquiry to final documentation." },
  { icon: BookCheck, title: "Easy Booking Process", desc: "A simple and quick booking process helps you secure your desired plot easily." },
];

export function WhyChoose() {
  return (
    <section className="relative py-20 overflow-hidden">
      <img src={aerial} alt="Plots" className="absolute inset-0 w-full h-full object-cover scale-102" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/40 backdrop-blur-[2px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 z-10">
        <ScrollReveal animation="fade-in">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-14 text-foreground tracking-tight">
            Why Choose Our <span className="text-brand italic">Plots</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <WhyChooseCard key={it.title} it={it} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseCard({ it, idx }: { it: typeof items[0]; idx: number }) {
  const { elementRef, tiltStyle, glareStyle } = use3DTilt({
    max: 8,
    scale: 1.025,
    glare: true,
    maxGlare: 0.12,
  });

  return (
    <ScrollReveal animation="scale-up" delay={idx * 80} className="perspective-1000">
      <div
        ref={elementRef}
        style={tiltStyle}
        className="group bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden preserve-3d"
      >
        <div style={glareStyle} />
        
        <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 translate-z-10 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          <it.icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-black mb-2.5 text-foreground translate-z-10">
          {it.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-semibold translate-z-5">
          {it.desc}
        </p>
      </div>
    </ScrollReveal>
  );
}
