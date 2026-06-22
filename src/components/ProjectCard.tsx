import { Link } from "@tanstack/react-router";
import { MapPin, Building2, Award } from "lucide-react";
import type { Project } from "@/data/projects";
import { use3DTilt } from "@/hooks/use3DTilt";

export function ProjectCard({ project }: { project: Project }) {
  const { elementRef, tiltStyle, glareStyle } = use3DTilt({ max: 8, scale: 1.03 });

  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block perspective-1000"
    >
      <div
        ref={elementRef}
        style={tiltStyle}
        className="relative overflow-hidden rounded-[20px] bg-white border border-border/70 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300 preserve-3d"
      >
        {/* Glare effect */}
        <div style={glareStyle} />

        <div className="relative overflow-hidden aspect-[4/3] rounded-t-[20px]">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 text-left translate-z-20">
            <span className="text-white text-lg md:text-xl font-black tracking-tight drop-shadow-md block">
              {project.name}
            </span>
          </div>
        </div>

        <div className="p-5 space-y-3.5 bg-white translate-z-10">
          <div className="flex items-start gap-2 text-sm">
            <span className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold text-foreground/80 leading-snug">{project.location}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3.5 border-t border-border/50 text-xs">
            <div className="flex items-center gap-1.5 text-muted-foreground font-semibold">
              <Building2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <span>{project.area}</span>
            </div>
            <div className="flex items-center gap-1.5 justify-end text-brand font-black">
              <Award className="w-3.5 h-3.5 text-brand shrink-0" />
              <span>{project.approved}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
