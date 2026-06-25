import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import projectsHero from "@/assets/projects_hero.webp";
import {
  MapPin,
  Building2,
  Award,
  CheckCircle2,
  LayoutGrid,
  Heart,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Our Projects — Landedge Group" },
      { name: "description", content: "Explore Landedge's residential, investment, farmhouse and commercial plots in Jaipur." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const categories = [
    { name: "All Projects", icon: LayoutGrid },
    { name: "JDA Approved", icon: Award },
    { name: "RERA Approved", icon: ShieldCheck },
    { name: "Government Approved", icon: CheckCircle2 },
  ];



  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter((p) => {
        const categoryKey = activeCategory.toLowerCase();
        const approvedText = p.approved.toLowerCase();
        
        if (categoryKey.includes("jda")) return approvedText.includes("jda");
        if (categoryKey.includes("rera")) return approvedText.includes("rera");
        if (categoryKey.includes("government")) return approvedText.includes("government");
        
        return false;
      });

  const stats = [
    {
      icon: (
        <svg className="w-11 h-11 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="10" width="6" height="11" rx="0.5" />
          <rect x="9" y="4" width="6" height="17" rx="0.5" />
          <rect x="16" y="8" width="6" height="13" rx="0.5" />
          <path d="M4 13h2M4 16h2M11 7h2M11 10h2M11 13h2M11 16h2M18 11h2M18 14h2M18 17h2" />
        </svg>
      ),
      title: "20+",
      line1: "Projects",
      line2: "Delivered",
    },
    {
      icon: (
        <svg className="w-11 h-11 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "10+",
      line1: "Prime",
      line2: "Locations",
    },
    {
      icon: (
        <svg className="w-11 h-11 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "5000+",
      line1: "Happy",
      line2: "Customers",
    },
    {
      icon: (
        <svg className="w-11 h-11 text-brand shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="14" width="4" height="7" rx="0.5" />
          <rect x="10" y="9" width="4" height="12" rx="0.5" />
          <rect x="17" y="5" width="4" height="16" rx="0.5" />
          <path d="M2 17l6-6 4 3 9-9" />
          <path d="M16 5h5v5" />
        </svg>
      ),
      title: "100%",
      line1: "Clear Titles &",
      line2: "Transparency",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[450px] md:h-[560px] flex items-center">
        {/* Background Image Wrapper to prevent image overflowing */}
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <img
            src={projectsHero}
            alt="Our Projects Hero"
            className="w-full h-full object-cover select-none"
          />
          {/* Subtle dark gradient overlay to keep it vivid but readable */}
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 md:px-16 flex flex-col justify-center h-full pb-16 md:pb-20">
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-black tracking-wide drop-shadow-sm uppercase mb-4 animate-fade-in">
            OUR PROJECTS
          </h1>
          <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-[450px] font-medium leading-relaxed drop-shadow-sm animate-slide-up">
            Thoughtfully planned spaces that<br className="hidden sm:inline" />
            inspire living and drive lasting value.
          </p>
        </div>

        {/* Stats Overlay Card (overflows the bottom of the section without being clipped) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[90%] max-w-[1250px] z-20">
          <div className="bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-border/40 p-6 md:p-8 lg:p-10 grid grid-cols-2 lg:flex lg:items-center lg:justify-between gap-6 lg:gap-4">
            {stats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 px-2 lg:px-4 justify-start flex-1">
                <div className="w-12 h-12 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl md:text-3xl font-black text-foreground leading-none mb-1.5 tracking-tight">
                    {item.title}
                  </span>
                  <span className="text-[11px] md:text-xs text-muted-foreground font-semibold leading-tight">
                    {item.line1}
                    <br />
                    {item.line2}
                  </span>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block w-[1px] h-12 bg-border/80 shrink-0 ml-auto" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Block Section */}
      <section className="pt-28 md:pt-36 pb-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="bg-muted/30 border border-border/30 rounded-[32px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
            {/* Left Box */}
            <div className="lg:col-span-5 space-y-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground leading-snug">
                At Landedge, we build more than plots,
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand italic">
                we build possibilities.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 border-r border-border/80 h-16 justify-self-center" />

            {/* Right Box */}
            <div className="lg:col-span-6 space-y-4">
              <p className="font-bold text-foreground text-sm md:text-base">
                Our projects are designed to suit every need –
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm font-bold text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span>Residential Plots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span>Farmhouse Land</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span>Investment Plots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                  <span>Commercial Plots</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/40">
                Each project is strategically located in high-growth areas, ensuring a perfect blend of lifestyle and long-term returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col items-center mb-8">
            <span className="text-brand text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2">
              EXPLORE
            </span>
            <div className="flex items-center justify-center gap-4 w-full max-w-xl">
              <div className="h-[1px] bg-border/80 flex-1 relative after:content-[''] after:absolute after:w-2 after:h-2 after:bg-brand after:rounded-full after:top-1/2 after:-translate-y-1/2 after:right-0" />
              <h2 className="text-3xl md:text-4xl font-black text-foreground shrink-0">
                Our <span className="text-brand font-black">Projects</span>
              </h2>
              <div className="h-[1px] bg-border/80 flex-1 relative after:content-[''] after:absolute after:w-2 after:h-2 after:bg-brand after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 mb-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`rounded-full border px-6 py-2.5 flex items-center gap-2 text-xs md:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-brand text-white border-brand shadow-lg shadow-brand/15"
                      : "bg-background text-muted-foreground border-border hover:text-brand hover:border-brand/40"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-brand"}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          {(() => {
            const ongoingProjects = filteredProjects.filter((p) => p.status === "Ongoing");
            const completedProjects = filteredProjects.filter((p) => p.status === "Completed");

            if (filteredProjects.length === 0) {
              return (
                <div className="text-center py-16 border border-dashed border-border rounded-[28px] bg-muted/10">
                  <p className="text-muted-foreground text-sm font-medium">No projects found in this category.</p>
                </div>
              );
            }

            return (
              <div className="space-y-16">
                {/* Ongoing Projects Section */}
                {ongoingProjects.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-6 rounded-full bg-brand" />
                      <h3 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-wide">
                        Ongoing Projects
                      </h3>
                      <span className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full font-bold">
                        {ongoingProjects.length} Active
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {ongoingProjects.map((project) => {
                        const isFavorited = !!favorites[project.slug];
                        return (
                          <Link
                            key={project.slug}
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            className="group block bg-white border border-border/40 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                          >
                            {/* Image Section */}
                            <div className="relative overflow-hidden aspect-[4/3] rounded-t-[28px]">
                              <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                              {/* Top Right Wishlist */}
                              <button
                                onClick={(e) => toggleFavorite(project.slug, e)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer transition-transform duration-200 active:scale-95 hover:bg-neutral-50 z-10"
                                aria-label="Add to wishlist"
                              >
                                <Heart
                                  className={`w-4 h-4 transition-colors duration-200 ${
                                    isFavorited ? "text-red-500 fill-red-500 stroke-red-500" : "text-neutral-600"
                                  }`}
                                />
                              </button>

                              {/* Project Name Overlay */}
                              <div className="absolute bottom-5 left-6 right-6">
                                <span className="text-white text-lg md:text-xl font-extrabold tracking-tight drop-shadow-md block">
                                  {project.name}
                                </span>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                              {/* Location */}
                              <div className="flex items-start gap-2.5 text-xs md:text-sm">
                                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                <span className="text-muted-foreground leading-relaxed line-clamp-2">
                                  {project.location}
                                </span>
                              </div>

                              <div className="border-t border-border/50" />

                              {/* Approval Status & Link Row */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Award className="w-5 h-5 text-brand shrink-0" />
                                  <span className="font-extrabold text-foreground text-sm md:text-base">
                                    {project.approved}
                                  </span>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-brand text-brand flex items-center justify-center bg-white group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Completed Projects Section */}
                {completedProjects.length > 0 && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-6 rounded-full bg-neutral-400" />
                      <h3 className="text-xl md:text-2xl font-black text-foreground uppercase tracking-wide">
                        Completed Projects
                      </h3>
                      <span className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full font-bold">
                        {completedProjects.length} Delivered
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {completedProjects.map((project) => {
                        const isFavorited = !!favorites[project.slug];
                        return (
                          <Link
                            key={project.slug}
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            className="group block bg-white border border-border/40 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                          >
                            {/* Image Section */}
                            <div className="relative overflow-hidden aspect-[4/3] rounded-t-[28px]">
                              <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              {/* Gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                              {/* Top Right Wishlist */}
                              <button
                                onClick={(e) => toggleFavorite(project.slug, e)}
                                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md cursor-pointer transition-transform duration-200 active:scale-95 hover:bg-neutral-50 z-10"
                                aria-label="Add to wishlist"
                              >
                                <Heart
                                  className={`w-4 h-4 transition-colors duration-200 ${
                                    isFavorited ? "text-red-500 fill-red-500 stroke-red-500" : "text-neutral-600"
                                  }`}
                                />
                              </button>

                              {/* Project Name Overlay */}
                              <div className="absolute bottom-5 left-6 right-6">
                                <span className="text-white text-lg md:text-xl font-extrabold tracking-tight drop-shadow-md block">
                                  {project.name}
                                </span>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                              {/* Location */}
                              <div className="flex items-start gap-2.5 text-xs md:text-sm">
                                <MapPin className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                                <span className="text-muted-foreground leading-relaxed line-clamp-2">
                                  {project.location}
                                </span>
                              </div>

                              <div className="border-t border-border/50" />

                              {/* Approval Status & Link Row */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Award className="w-5 h-5 text-brand shrink-0" />
                                  <span className="font-extrabold text-foreground text-sm md:text-base">
                                    {project.approved}
                                  </span>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-brand text-brand flex items-center justify-center bg-white group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                                  <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      {/* CTA Footer Banner Section */}
      <section className="py-12 bg-background mb-8">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="bg-brand-deep rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                <Building2 className="w-7 h-7 text-brand" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                  Looking for the perfect plot?
                </h3>
                <p className="text-xs md:text-sm text-white/80 mt-1 leading-relaxed max-w-md">
                  Let our experts help you find the right property that matches your goals.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <Link
              to="/contact"
              className="bg-white hover:bg-neutral-50 text-brand-deep font-bold rounded-xl px-8 py-3.5 text-xs md:text-sm flex items-center gap-2 transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer shrink-0"
            >
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
