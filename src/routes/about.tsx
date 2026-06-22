import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import {
  CheckCircle2,
  MapPin,
  Tag,
  Headphones,
  ShieldCheck,
  Award,
  IndianRupee,
  Users,
  Flag,
  ChevronLeft,
  ChevronRight,
  Home,
  Target,
  Building2,
  Eye,
  Play,
  LayoutGrid,
  Star,
} from "lucide-react";
import officeVideo from "@/assets/Landedge_Group_office.mp4";
import director from "@/assets/director.jpg";
import park from "@/assets/park-stats.webp";
import landPlots from "@/assets/land_plots.webp";
import maheshImg from "@/assets/og_assets/photo.webp";
import goriImg from "@/assets/og_assets/photo (1).webp";
import narenderImg from "@/assets/og_assets/photo (2).webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Landedge Group" },
      {
        name: "description",
        content:
          "Landedge is a Jaipur-based real estate company providing premium residential plots in prime locations.",
      },
    ],
    links: [
      { rel: "preload", href: landPlots, as: "image", type: "image/webp" },
    ],
  }),
  component: About,
});

function About() {
  const [activeDirectorIdx, setActiveDirectorIdx] = useState(0);

  const directors = [
    {
      name: "Mr. Mahesh Sharma",
      title: "Director's Message",
      image: maheshImg,
      message: [
        "At Landedge Group, we specialize in providing premium plot options that meet the needs of modern investors and families. Our team works with dedication to identify the best locations and ensure that every project meets high standards of quality and legality.",
        "We strongly believe in ethical business practices and customer satisfaction. Our mission is to help clients make smart investment decisions and achieve long-term growth through real estate."
      ]
    },
    {
      name: "Mr. Gorishankar Sharma",
      title: "Director's Message",
      image: goriImg,
      message: [
        "“Success in real estate comes from trust, commitment, and delivering beyond expectations.”",
        "At Landedge Group, we specialize in providing premium plot options that meet the needs of modern investors and families. Our team works with dedication to identify the best locations and ensure that every project meets high standards of quality.",
        "We strongly believe in ethical business practices and customer satisfaction. Our mission is to help clients make smart investment decisions and achieve long-term growth through real estate."
      ]
    },
    {
      name: "Mr. Narender Jangir",
      title: "Director's Message",
      image: narenderImg,
      message: [
        "“Our mission is to turn land investments into valuable opportunities for our customers.”",
        "At Landedge Group, we aim to create a seamless and trustworthy platform for buying and selling plots. We understand the importance of investing in the right property, and that's why we focus on offering verified, well-located, and future-ready plots.",
        "Through innovation, dedication, and strong market understanding, we strive to deliver the best results for our clients. Customer satisfaction and trust remain the core values of our company."
      ]
    }
  ];

  const handlePrevDirector = () => {
    setActiveDirectorIdx((prev) => (prev - 1 + directors.length) % directors.length);
  };

  const handleNextDirector = () => {
    setActiveDirectorIdx((prev) => (prev + 1) % directors.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextDirector();
    }, 7000);
    return () => clearInterval(timer);
  }, [activeDirectorIdx]);

  return (
    <Layout>


      {/* Hero Section */}
      <section className="relative py-12 lg:py-0 lg:h-[620px] bg-background flex items-center overflow-hidden">
        {/* Desktop Background Video (Parallelogram) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[55%] h-full overflow-hidden z-0">
          <div className="w-full h-full [clip-path:polygon(15%_0%,100%_0%,100%_100%,0%_100%)] select-none">
            <video
              src={officeVideo}
              poster={landPlots}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover select-none"
            />
          </div>

          {/* Overlay Card on Desktop */}
          <div className="absolute bottom-8 left-12 right-12 bg-white rounded-[24px] shadow-2xl border border-border/50 p-6 grid grid-cols-4 gap-4 items-center z-10 animate-slide-up">
            {[
              { icon: ShieldCheck, title: "100%", sub: "Verified Plots" },
              { icon: MapPin, title: "Prime", sub: "Locations" },
              { icon: Award, title: "RERA & JDA", sub: "Approved" },
              { icon: Tag, title: "Affordable", sub: "Pricing" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center relative px-2">
                <div className="w-15 h-15 rounded-full bg-brand-light flex items-center justify-center mb-2">
                  <item.icon className="w-7 h-7 text-brand" />
                </div>
                <span className="text-2xl font-extrabold text-foreground block leading-tight">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-sm text-muted-foreground font-semibold leading-none mt-0.5 block">
                  {item.sub}
                </span>
                {idx < 3 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-border/80" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content Container */}
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 h-full">
          {/* Left Column (Content) */}
          <div className="lg:col-span-5 space-y-6 lg:pr-6">
            <span className="font-black text-m md:text-m tracking-widest text-foreground text-semibold block">
              About <span className="text-brand italic">LandEdge</span>
            </span>
            <h1 className="text-4xl sm:text-3xl md:text-6xl font-black text-foreground leading-[1.15] tracking-tight">
              Building Dreams,<br />
              <span className="text-brand">Creating Futures</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
              At Landedge, we help you find the perfect plots to build your dreams and secure your future.
            </p>

            <div className="pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2.5 bg-brand text-white font-bold rounded-lg px-8 py-3.5 text-xs sm:text-sm hover:bg-brand-dark transition-all duration-300 shadow-md shadow-brand/10 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Projects
                <span className="text-sm font-black">→</span>
              </Link>
            </div>

            {/* Customers Section (No divider line, directly under button) */}
            <div className="pt-4 max-w-md">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    className="w-11 h-11 rounded-full border-2 border-background object-cover animate-fade-in"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer 1"
                  />
                  <img
                    className="w-11 h-11 rounded-full border-2 border-background object-cover animate-fade-in [animation-delay:150ms]"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer 2"
                  />
                  <img
                    className="w-11 h-11 rounded-full border-2 border-background object-cover animate-fade-in [animation-delay:300ms]"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                    alt="Customer 3"
                  />
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-semibold">
                  <span className="text-foreground font-black block text-sm sm:text-base">
                    200+ Happy Customers
                  </span>
                  Who Trust <span className="text-brand italic">Us</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Video (Stacked below left content on mobile) */}
          <div className="lg:hidden col-span-1 mt-10">
            <div className="aspect-[1.58] rounded-[24px] overflow-hidden shadow-xl border border-border/40">
              <video
                src={officeVideo}
                poster={landPlots}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover select-none"
              />
            </div>

            {/* Overlay Grid for Mobile (stacked instead of wide row overlay) */}
            <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-4 mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: ShieldCheck, title: "100%", sub: "Verified Plots" },
                { icon: MapPin, title: "Prime", sub: "Locations" },
                { icon: Award, title: "RERA & JDA", sub: "Approved" },
                { icon: Tag, title: "Affordable", sub: "Pricing" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-2 border border-border/40 rounded-xl bg-muted/10">
                  <item.icon className="w-5 h-5 text-brand mb-1" />
                  <span className="text-xs font-black text-foreground block">{item.title}</span>
                  <span className="text-[10px] text-muted-foreground font-semibold mt-0.5">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro Bar Section */}
      <section className="py-10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="bg-[#f8faf8] border border-border/50 rounded-3xl py-6 px-10 text-center shadow-sm">
            <p className="text-lg md:text-2xl font-bold text-foreground">
              At <span className="text-brand">Landedge</span>, We Help You Find The Perfect Plots To
              Build Your Dreams And Your Future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-12">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Who Are You Card */}
          <div className="bg-white border border-border rounded-3xl p-10 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-8 right-8 h-[5px] bg-brand/10 group-hover:bg-brand transition-colors duration-300 rounded-b" />
            <div className="flex flex-col sm:flex-row gap-8 items-start mt-2">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-brand-light/70 flex items-center justify-center text-brand">
                <Users className="w-10 h-10" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-foreground">Our Mission</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-semibold">
                  Our mission is to provide high quality, legally secure, and well-planned residential and commercial plots that help people turn their dream of owning land into reality. We aim to deliver transparency, trust, and long-term value in every project we offer.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white border border-border rounded-3xl p-10 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
            {/* Decorative top bar */}
            <div className="absolute top-0 left-8 right-8 h-[5px] bg-brand/10 group-hover:bg-brand transition-colors duration-300 rounded-b" />
            <div className="flex flex-col sm:flex-row gap-8 items-start mt-2">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-brand-light/70 flex items-center justify-center text-brand">
                <Flag className="w-10 h-10" />
              </div>
              <div className="space-y-4 w-full">
                <h3 className="text-xl font-extrabold text-foreground">Our Vision</h3>
                <div>
                  <p className="text-sm md:text-base text-muted-foreground font-semibold leading-relaxed">
                    Our vision is to become a trusted name in the real estate industry by developing modern, well-connected, and future-ready plotted developments. We strive to create communities where people can build homes, grow families, and invest with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-[1px] bg-border" />
            <h2 className="text-3xl font-extrabold text-brand tracking-tight text-center px-4 shrink-0">
              Why Choose Us
            </h2>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: ShieldCheck, title: "100%", desc: "Verified Plots" },
              { icon: MapPin, title: "Prime", desc: "Locations" },
              { icon: IndianRupee, title: "Affordable", desc: "Pricing" },
              { icon: Award, title: "RERA & JDA", desc: "Approved" },
              { icon: Headphones, title: "Customer", desc: "Support" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-border rounded-3xl p-8 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-light/80 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-brand" />
                </div>
                <h4 className="text-base font-extrabold text-foreground leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground font-bold mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Projects Section */}
      <section className="py-16 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 mb-10">
          <div className="flex flex-row flex-wrap justify-between items-end gap-x-4 gap-y-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Our <span className="text-brand italic">Projects</span>
            </h2>
            <Link
              to="/projects"
              className="text-xs sm:text-sm md:text-base font-bold text-brand hover:text-brand-dark flex items-center gap-1.5 transition-colors whitespace-nowrap"
            >
              View All Projects <span className="text-sm sm:text-lg">→</span>
            </Link>
          </div>
        </div>
        <ProjectCarousel items={projects} defaultSlug="shree-shyam-vihar" />
      </section>

      {/* About Landedge Realty Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text and List */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-base tracking-tight">
              About Landedge <span className="text-brand italic">Realty</span>
            </h2>
            <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                At Landedge, we believe in continuously evolving by embracing modern technologies,
                innovative practices, and transparent processes to deliver excellence in the real
                estate sector. Our vision is to redefine the way people invest in land by offering
                trustworthy, well-planned, and value-driven plot developments.
              </p>
              <p>
                We are committed to providing our clients with secure, high-quality, and
                customer-centric land investment opportunities. With a strong focus on integrity and
                professionalism, we ensure that every project we offer meets the highest standards
                of reliability, legal clarity, and long-term value.
              </p>
              <p>
                At Landedge, our goal is not just to sell plots, but to help our clients build their
                future with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6">
              {[
                "Transparent dealings",
                "Customer-first approach",
                "On-time project execution",
                "Long-term relationship",
                "High potential & potential properties",
                "Well-planned & meaningful real estate opportunities",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5.5 h-5.5 text-brand shrink-0" />
                  <span className="text-xs md:text-sm font-bold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Stats Banner */}
          <div className="flex flex-col">
            <div className="rounded-t-[36px] overflow-hidden aspect-[16/10] shadow-2xl border border-border/40 border-b-0">
              <img
                src={park}
                alt="Landedge Park Layout"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-brand text-white py-8 px-10 rounded-b-[36px] flex justify-around items-center shadow-2xl">
              <div className="text-center flex-1">
                <div className="text-4xl md:text-5xl font-black">13+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/90 mt-2">
                  Completed Projects
                </div>
              </div>
              <div className="w-[1px] h-12 bg-white/30" />
              <div className="text-center flex-1">
                <div className="text-4xl md:text-5xl font-black">9+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/90 mt-2">
                  Ongoing Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative group/director">
          <div className="bg-muted/30 border border-border/40 rounded-[36px] p-10 md:p-16 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[480px]">
            {/* Director Image */}
            <div 
              key={`img-${activeDirectorIdx}`}
              className="md:col-span-4 flex justify-center animate-fade-in"
            >
              <div className="w-full max-w-[300px] aspect-square rounded-3xl overflow-hidden shadow-xl border border-border/40 bg-white">
                <img
                  src={directors[activeDirectorIdx].image}
                  alt={directors[activeDirectorIdx].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                />
              </div>
            </div>

            {/* Message content */}
            <div 
              key={`content-${activeDirectorIdx}`}
              className="md:col-span-8 space-y-6 relative animate-slide-up"
            >
              <span className="absolute -top-10 -left-4 text-8xl text-brand font-serif opacity-20 select-none">
                “
              </span>
              <div className="space-y-1">
                <h3 className="text-3xl font-black text-foreground">
                  {directors[activeDirectorIdx].name}
                </h3>
                <p className="text-brand font-bold text-sm md:text-base tracking-widest uppercase">
                  {directors[activeDirectorIdx].title}
                </p>
              </div>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed font-semibold">
                {directors[activeDirectorIdx].message.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="flex gap-2.5 pt-4">
                {directors.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDirectorIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeDirectorIdx === idx ? "bg-brand w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrevDirector}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-border/40 shadow-md flex items-center justify-center text-foreground hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 z-10 cursor-pointer opacity-80 hover:opacity-100"
            aria-label="Previous Director"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextDirector}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-border/40 shadow-md flex items-center justify-center text-foreground hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 z-10 cursor-pointer opacity-80 hover:opacity-100"
            aria-label="Next Director"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      {/* <section className="py-20 bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 space-y-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center tracking-tight">
            Our Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Our Mission",
                icon: Target,
                desc: "Our mission is to provide high quality, legally secure, and well-planned residential and commercial plots that help people turn their dream of owning land into reality. We aim to deliver transparency, trust, and long-term value in every project we offer.",
              },
              {
                title: "Building Your Dreams",
                icon: Building2,
                desc: "We provide carefully selected plots and land opportunities where your dreams can grow.",
              },
              {
                title: "Our Vision",
                icon: Eye,
                desc: "Our vision is to become a trusted name in the real estate industry by developing modern, well-connected, and future-ready plotted developments. We strive to create communities where people can build homes, grow families, and invest with confidence.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-border/80 rounded-[32px] p-10 md:p-12 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center space-y-5"
              >
                <div className="w-20 h-20 rounded-full border border-brand/35 text-brand flex items-center justify-center bg-brand-light/40 shadow-inner">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </Layout>
  );
}
