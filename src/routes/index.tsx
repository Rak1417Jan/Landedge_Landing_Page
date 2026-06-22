import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { projects, type Project } from "@/data/projects";
import { blogs } from "@/data/blogs";
import residentialVideo from "@/assets/hero2.mp4";
import logoImg from "@/assets/logo.webp";
import heroPoster from "@/assets/hero-home.webp";
import { use3DTilt } from "@/hooks/use3DTilt";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import React, { useState, useEffect } from "react";
import { MapPin, Award, ArrowRight, X, Building2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landedge Group — Build Your Dreams on the Perfect Land" },
      { name: "description", content: "Trusted partner in land investment. RERA & JDA approved residential plots across Jaipur." },
    ],
    links: [
      { rel: "preload", href: heroPoster, as: "image", type: "image/webp" },
      { rel: "preload", href: logoImg, as: "image", type: "image/webp" },
    ],
  }),
  component: Home,
});

type ModalStatus = "Ongoing" | "Completed" | null;

function ProjectsModal({ status, onClose }: { status: ModalStatus; onClose: () => void }) {
  const filtered = projects.filter((p) => p.status === status);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const isOngoing = status === "Ongoing";
  const badgeBg = isOngoing ? "bg-brand/10 text-brand" : "bg-emerald-50 text-emerald-700";
  const dotColor = isOngoing ? "bg-brand" : "bg-emerald-500";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

      {/* Modal Panel */}
      <div
        className="relative z-10 w-full max-w-[1300px] mx-auto max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[32px] sm:rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-border/50 shrink-0">
          <div className="flex items-center gap-3">
            <span className={`w-3 h-7 rounded-full ${dotColor}`} />
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-foreground uppercase tracking-wide">
                {status} Projects
              </h2>
              <p className="text-xs text-muted-foreground font-semibold mt-0.5">
                {filtered.length} {status === "Ongoing" ? "Active" : "Delivered"} · Landedge Group
              </p>
            </div>
            <span className={`ml-2 text-xs px-3 py-1 rounded-full font-bold ${badgeBg}`}>
              {filtered.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-muted/60 hover:bg-muted flex items-center justify-center transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Scrollable Project Grid */}
        <div className="overflow-y-auto flex-1 px-6 sm:px-10 py-8 [scrollbar-width:thin]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project) => (
              <ModalProjectCard key={project.slug} project={project} onClose={onClose} />
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="shrink-0 border-t border-border/50 px-6 sm:px-10 py-4 flex items-center justify-between bg-muted/20">
          <p className="text-xs text-muted-foreground font-semibold">
            Click any project to view full details
          </p>
          <Link
            to="/projects"
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-black text-brand hover:text-brand-dark transition-colors"
          >
            View All Projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ModalProjectCard({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      onClick={onClose}
      className="group block bg-white border border-border/40 rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] rounded-t-[24px]">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        {/* Status badge */}
        <span
          className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
            project.status === "Ongoing"
              ? "bg-brand text-white"
              : "bg-emerald-500 text-white"
          }`}
        >
          {project.status}
        </span>
        {/* Project Name */}
        <div className="absolute bottom-4 left-5 right-5">
          <span className="text-white text-base md:text-lg font-extrabold tracking-tight drop-shadow-md block">
            {project.name}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="flex items-start gap-2 text-xs">
          <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
          <span className="text-muted-foreground leading-relaxed line-clamp-2">
            {project.location}
          </span>
        </div>
        <div className="border-t border-border/50" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-brand shrink-0" />
            <span className="font-bold text-foreground text-xs">{project.approved}</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-brand text-brand flex items-center justify-center bg-white group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function Home() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>(null);

  const ongoingCount = projects.filter((p) => p.status === "Ongoing").length;
  const completedCount = projects.filter((p) => p.status === "Completed").length;

  const openModal = (status: ModalStatus) => setModalStatus(status);
  const closeModal = () => setModalStatus(null);

  return (
    <Layout>
      {/* Projects Modal */}
      {modalStatus && <ProjectsModal status={modalStatus} onClose={closeModal} />}

      {/* Hero Section */}
      <section className="relative w-full h-[500px] sm:h-[560px] md:h-[600px] lg:h-[650px] flex items-center overflow-visible">
        {/* Background Video Wrapper */}
        <div className="absolute inset-0 overflow-hidden w-full h-full bg-black">
          <video
            src={residentialVideo}
            poster={heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Overlay Intro Card */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[20%] sm:translate-y-[25%] w-[92%] max-w-[1200px] z-20">
          <div className="bg-white border border-border/80 rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center">
            {/* Left Side: Scaled Logo */}
            <div className="hidden md:flex lg:col-span-3 justify-center">
              <img
                src={logoImg}
                alt="Landedge Group Logo"
                fetchPriority="high"
                className="h-24 md:h-32 lg:h-36 w-auto object-contain bg-white/95 p-4 rounded-[28px] border border-white"
              />
            </div>

            {/* Right Side: Content + Stats Widget */}
            <div className="col-span-1 lg:col-span-9 space-y-3 sm:space-y-4">
              <div className="text-center lg:text-left space-y-2 sm:space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
                  At Land<span className="text-brand">edge</span>
                </h2>
                <p className="text-brand font-black text-xs sm:text-sm tracking-wide uppercase">
                  Your Trusted Partner in Land Investments
                </p>
                <p className="text-xs sm:text-sm md:text-base text-foreground font-bold leading-relaxed">
                  We help you discover the right land for your dreams and investments. At Landedge, every plot is selected with care so you can invest with confidence.
                </p>
              </div>

              {/* Ongoing + Completed Widget Row */}
              <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-1">
                {/* Ongoing */}
                <button
                  id="hero-ongoing-btn"
                  onClick={() => openModal("Ongoing")}
                  className="group flex-1 flex items-center gap-4 bg-brand/5 hover:bg-brand hover:text-white border border-brand/20 hover:border-brand rounded-2xl px-5 py-4 transition-all duration-300 cursor-pointer text-left shadow-sm hover:shadow-lg hover:shadow-brand/20 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand/10 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Building2 className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-black text-brand group-hover:text-white transition-colors duration-300 leading-none">
                      {ongoingCount}
                    </div>
                    <div className="text-xs font-bold text-foreground/70 group-hover:text-white/80 transition-colors duration-300 mt-1 uppercase tracking-wider">
                      Ongoing Projects
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-brand/30 group-hover:border-white/40 flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                </button>

                {/* Divider */}
                <div className="hidden sm:block w-px bg-border/60 self-stretch" />

                {/* Completed */}
                <button
                  id="hero-completed-btn"
                  onClick={() => openModal("Completed")}
                  className="group flex-1 flex items-center gap-4 bg-emerald-50/60 hover:bg-emerald-500 hover:text-white border border-emerald-200/60 hover:border-emerald-500 rounded-2xl px-5 py-4 transition-all duration-300 cursor-pointer text-left shadow-sm hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/80 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <svg className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-black text-emerald-600 group-hover:text-white transition-colors duration-300 leading-none">
                      {completedCount}
                    </div>
                    <div className="text-xs font-bold text-foreground/70 group-hover:text-white/80 transition-colors duration-300 mt-1 uppercase tracking-wider">
                      Completed Projects
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-emerald-300/50 group-hover:border-white/40 flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </button>
              </div>

              {/* Read More Link */}
              <div className="text-center lg:text-left">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-white font-extrabold rounded-full px-6 sm:px-8 py-2 sm:py-2.5 text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer bg-white/40"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="pt-44 md:pt-52 pb-16 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-10">
          <ScrollReveal animation="fade-in">
            <div className="flex flex-row flex-wrap justify-between items-end gap-x-4 gap-y-2">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Our <span className="text-brand italic font-black">Projects</span>
              </h2>
              <Link
                to="/projects"
                className="text-xs sm:text-sm md:text-base font-bold text-brand hover:text-brand-dark flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                View All Projects <span className="text-sm sm:text-lg">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal animation="scale-up" delay={150}>
          <ProjectCarousel items={projects} />
        </ScrollReveal>
      </section>

      {/* Stats */}
      <ScrollReveal animation="fade-in" delay={100}>
        <section className="py-16 bg-muted/30 my-8 rounded-[32px] max-w-5xl mx-auto border border-border/40">
          <div className="mx-auto max-w-3xl px-4 grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-5xl font-black text-brand">
                <AnimatedCounter value={13} />
              </div>
              <div className="text-sm text-muted-foreground font-bold mt-2">Completed Projects</div>
            </div>
            <div>
              <div className="text-5xl font-black text-brand">
                <AnimatedCounter value={9} />
              </div>
              <div className="text-sm text-muted-foreground font-bold mt-2">Ongoing Projects</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <WhyChoose />

      {/* Property Gallery */}
      <section className="py-20 bg-muted/10">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-3 tracking-tight">Property Gallery</h2>
            <p className="text-center text-sm text-muted-foreground font-bold mb-12 max-w-xl mx-auto">
              Experience the beauty and elegance of Landedge Group through our curated gallery of property images.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p, idx) => (
              <GalleryItem key={p.slug} p={p} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <ScrollReveal animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-black text-center text-foreground mb-12 tracking-tight">Latest Blogs</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((b, idx) => (
              <BlogCard key={b.slug} b={b} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </Layout>
  );
}

function GalleryItem({ p, idx }: { p: typeof projects[0]; idx: number }) {
  const { elementRef, tiltStyle, glareStyle } = use3DTilt({
    max: 8,
    scale: 1.03,
    glare: true,
    maxGlare: 0.15,
  });

  return (
    <ScrollReveal animation="scale-up" delay={idx * 100} className="perspective-1000">
      <div
        ref={elementRef}
        style={tiltStyle}
        className="relative overflow-hidden rounded-[20px] shadow-lg border border-border/40 aspect-[4/3] preserve-3d group"
      >
        <div style={glareStyle} />
        <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-black tracking-widest text-xs uppercase bg-brand px-5 py-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
            View Project
          </span>
        </div>
      </div>
    </ScrollReveal>
  );
}

function BlogCard({ b, idx }: { b: typeof blogs[0]; idx: number }) {
  const { elementRef, tiltStyle, glareStyle } = use3DTilt({
    max: 8,
    scale: 1.03,
    glare: true,
    maxGlare: 0.15,
  });

  return (
    <ScrollReveal animation="scale-up" delay={idx * 100} className="perspective-1000 h-full">
      <article
        ref={elementRef}
        style={tiltStyle}
        className="bg-white border border-border/85 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative preserve-3d h-full flex flex-col group"
      >
        <div style={glareStyle} />
        <div className="overflow-hidden aspect-[16/10] shrink-0">
          <img
            src={b.image}
            alt={b.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow justify-between gap-5 translate-z-10 bg-white">
          <div className="space-y-2.5">
            <h3 className="text-lg font-black text-foreground leading-snug line-clamp-2">
              {b.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-semibold line-clamp-3">
              {b.excerpt}
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/blog/$slug"
              params={{ slug: b.slug }}
              className="inline-flex items-center justify-center border border-brand text-brand hover:bg-brand hover:text-white font-black rounded-full px-6 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-300 cursor-pointer bg-transparent"
            >
              Read More
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
