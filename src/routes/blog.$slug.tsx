import { useState, useRef, useEffect } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { findBlog } from "@/data/blogs";
import {
  Coins,
  Home as HomeIcon,
  MapPin,
  ShieldCheck,
  FileCheck,
  Phone,
  Mail,
  User,
  MessageSquare,
  Check,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  Send,
  Volume2,
  VolumeX
} from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const blog = findBlog(params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.blog.title ?? "Blog"} — Landedge Group` },
      { name: "description", content: loaderData?.blog.excerpt ?? "" },
    ],
  }),
  component: Post,
  notFoundComponent: () => (
    <Layout>
      <div className="py-32 text-center">
        <h1 className="text-3xl font-black text-foreground">Post Not Found</h1>
        <p className="text-muted-foreground mt-2 font-semibold">The blog post you are looking for does not exist.</p>
        <Link to="/blog" className="inline-flex items-center gap-2 mt-6 text-brand font-bold hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Blogs
        </Link>
      </div>
    </Layout>
  ),
});

const getSectionIcon = (iconName: string) => {
  switch (iconName) {
    case "investment":
      return (
        <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
          <Coins className="w-6 h-6 stroke-[2.2px]" />
        </div>
      );
    case "home":
      return (
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
          <HomeIcon className="w-6 h-6 stroke-[2.2px]" />
        </div>
      );
    case "map":
      return (
        <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
          <MapPin className="w-6 h-6 stroke-[2.2px]" />
        </div>
      );
    case "shield":
      return (
        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
          <ShieldCheck className="w-6 h-6 stroke-[2.2px]" />
        </div>
      );
    case "ownership":
      return (
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
          <FileCheck className="w-6 h-6 stroke-[2.2px]" />
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand shrink-0">
          <Coins className="w-6 h-6 stroke-[2.2px]" />
        </div>
      );
  }
};

const UNIVERSAL_PLOT_BENEFITS = [
  {
    title: "Lower Investment, Higher Growth",
    icon: <Coins className="w-6 h-6 text-brand" />,
    bg: "bg-brand/5 border-brand/10",
    description: "Plots offer a lower entry cost compared to constructed properties like flats or villas. With Landedge, you can invest in premium land at competitive prices without the burden of construction costs. Despite the lower initial investment, land often delivers strong long-term appreciation."
  },
  {
    title: "Flexible Usage for Every Need",
    icon: <HomeIcon className="w-6 h-6 text-emerald-600" />,
    bg: "bg-emerald-50/50 border-emerald-100",
    description: "One of the biggest advantages of owning a plot is flexibility. You have the freedom to build according to your needs—whether it's a residential home, a commercial space, or a future investment project. Unlike ready-built properties, plots give you complete control."
  },
  {
    title: "High Demand in Growing Locations",
    icon: <MapPin className="w-6 h-6 text-sky-600" />,
    bg: "bg-sky-50/50 border-sky-100",
    description: "Landedge offers plots in rapidly developing areas where infrastructure and connectivity are continuously improving. As these locations grow, the demand for land increases significantly. This rising demand leads to better resale value and capital appreciation."
  },
  {
    title: "Hassle-Free & Low Maintenance",
    icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
    bg: "bg-amber-50/50 border-amber-100",
    description: "Owning a plot is simple and stress-free compared to managing constructed properties. There are no maintenance costs, no tenant issues, and no ongoing upkeep expenses. You can enjoy secure and hassle-free ownership with complete peace of mind."
  }
];

function Post() {
  const { blog } = Route.useLoaderData();
  
  // Interactive Form State
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", query: `Hi, I am interested in ${blog.welcomeTitle.replace("Welcome to ", "")}. Please call me back.` });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Video mute/unmute state (unmuted by default)
  const [isMuted, setIsMuted] = useState(false);
  const [showTapPrompt, setShowTapPrompt] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Try to autoplay with sound; if blocked by browser policy, show a tap-to-hear prompt
  useEffect(() => {
    if (!blog.video || !videoRef.current) return;
    const vid = videoRef.current;
    vid.muted = false;
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser blocked autoplay with sound — fall back to muted autoplay
        vid.muted = true;
        setIsMuted(true);
        setShowTapPrompt(true);
        vid.play().catch(() => {});
      });
    }
  }, [blog.video]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      setShowTapPrompt(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <Layout>
      {/* Hero Banner Section */}
      <section className="relative w-full h-[360px] md:h-[450px] overflow-hidden flex items-center">
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover select-none scale-102 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
        
        <div className="relative mx-auto max-w-7xl w-full px-6 md:px-12 flex flex-col justify-end h-full pb-10 md:pb-16 text-white space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest self-start shadow-md animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" /> Property Investment Guide
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black leading-tight max-w-4xl tracking-tight text-white drop-shadow-md">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs sm:text-sm font-bold text-neutral-300">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand" /> {blog.date}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 hidden sm:inline" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand" /> 4 Min Read
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 hidden sm:inline" />
            <span className="text-brand font-black uppercase tracking-wider">
              By Landedge Group
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 bg-background relative overflow-visible">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-neutral-500 hover:text-brand transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> BACK TO BLOGS
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: ARTICLE COPY (col-span-8) */}
            <article className="col-span-1 lg:col-span-8 space-y-12">
              
              {/* Introduction Card */}
              <div className="bg-muted/30 border border-border/60 rounded-[28px] p-6 sm:p-8 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-4">
                  {blog.welcomeTitle}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-foreground/80 font-bold">
                  {blog.welcomeText}
                </p>
              </div>

              {/* Inline Project Image / Video Showcase */}
              <div className="relative rounded-[28px] overflow-hidden border border-border/80 shadow-xl aspect-[16/10] sm:aspect-[16/9]">
                {blog.video ? (
                  /* ── VIDEO PLAYER (Parvati Aashiyana blog) ── */
                  <>
                    <video
                      ref={videoRef}
                      src={blog.video}
                      autoPlay
                      loop
                      playsInline
                      muted
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                    {/* "Tap to hear audio" prompt — shown when browser blocks autoplay with sound */}
                    {showTapPrompt && (
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg animate-fade-in pointer-events-none">
                        <Volume2 className="w-4 h-4 text-brand" />
                        Tap 🔊 to enable audio
                      </div>
                    )}

                    {/* Bottom bar */}
                    <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white drop-shadow-md">
                        {blog.welcomeTitle.replace("Welcome to ", "")} site development
                      </span>
                      <span className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-bold text-white">
                        Actual Site Video
                      </span>
                    </div>

                    {/* Mute / Unmute floating button */}
                    <button
                      onClick={toggleMute}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-lg"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                  </>
                ) : (
                  /* ── IMAGE FALLBACK (other blogs) ── */
                  <>
                    <img
                      src={blog.image}
                      alt={blog.welcomeTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 text-white flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider drop-shadow-md">
                        {blog.welcomeTitle.replace("Welcome to ", "")} site development
                      </span>
                      <span className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-bold">
                        Actual Site Image
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Loop through sections */}
              <div className="space-y-10">
                {blog.sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row gap-5 p-6 rounded-[24px] border border-border/60 hover:border-brand/35 hover:shadow-md transition-all duration-300 bg-white/50"
                  >
                    {getSectionIcon(section.icon)}
                    
                    <div className="space-y-3 flex-grow">
                      <h3 className="text-xl font-black text-neutral-900 leading-tight">
                        {section.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] leading-relaxed text-foreground/75 font-semibold">
                        {section.content}
                      </p>

                      {/* Checklist Grid */}
                      {section.checklist && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                          {section.checklist.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2.5 bg-emerald-50/40 border border-emerald-100/70 p-3 rounded-xl hover:bg-emerald-50 transition-colors duration-200"
                            >
                              <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shrink-0">
                                <Check className="w-3.5 h-3.5 text-white stroke-[3.5px]" />
                              </div>
                              <span className="text-xs sm:text-sm font-black text-neutral-800">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </article>

            {/* RIGHT COLUMN: STICKY CONTACT CALLBACK SIDEBAR (col-span-4) */}
            <aside className="col-span-1 lg:col-span-4 lg:sticky lg:top-24 z-20">
              <div className="bg-white border-2 border-brand/20 rounded-[32px] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] space-y-6">
                
                <div className="space-y-1.5 text-center sm:text-left">
                  <span className="text-xs font-black text-brand uppercase tracking-wider">
                    INTERESTED IN THIS PROPERTY?
                  </span>
                  <h3 className="text-2xl font-black text-neutral-950 tracking-tight leading-none">
                    Request a Callback
                  </h3>
                  <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                    Leave your contact details and our team will get in touch with you shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-[20px] p-6 text-center space-y-4 animate-scale-up">
                    <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white mx-auto shadow-md">
                      <Check className="w-8 h-8 stroke-[3px]" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-black text-neutral-900 text-lg">Thank You!</h4>
                      <p className="text-xs font-bold text-neutral-600 leading-relaxed">
                        We have received your callback request. Our property executive will contact you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-brand font-black hover:underline mt-2"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Name input */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[10px] font-black text-neutral-700 uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold placeholder:text-neutral-400 focus:outline-none focus:border-brand focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="text-[10px] font-black text-neutral-700 uppercase tracking-wider block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter 10-digit number"
                          className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold placeholder:text-neutral-400 focus:outline-none focus:border-brand focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Email input */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[10px] font-black text-neutral-700 uppercase tracking-wider block">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter email address"
                          className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold placeholder:text-neutral-400 focus:outline-none focus:border-brand focus:bg-white transition-all shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Message input */}
                    <div className="space-y-1">
                      <label htmlFor="query" className="text-[10px] font-black text-neutral-700 uppercase tracking-wider block">
                        Inquiry Details
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-4.5 w-4.5 h-4.5 text-neutral-400" />
                        <textarea
                          id="query"
                          name="query"
                          rows={3}
                          value={formData.query}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-50/50 border border-neutral-200 rounded-xl py-3 pl-11 pr-4 text-sm font-bold focus:outline-none focus:border-brand focus:bg-white transition-all resize-none shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand hover:bg-brand-dark text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>SENDING REQUEST...</span>
                      ) : (
                        <>
                          <span>SUBMIT REQUEST</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Trust Badges */}
                <div className="pt-4 border-t border-neutral-100 grid grid-cols-2 gap-y-3 gap-x-2 text-[10px] font-black text-neutral-800 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand stroke-[3px]" /> Free Site Visit
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-brand stroke-[3px]" /> Developer Rates
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Check className="w-4 h-4 text-brand stroke-[3px]" /> JDA Verified Documentation
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Universal Plot Benefits Section */}
      <section className="border-t border-border bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black text-brand uppercase tracking-widest">
              WHY INVEST IN LAND?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-none">
              Key Advantages of Plot Ownership
            </h2>
            <p className="text-sm font-bold text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Discover why investing in premium land plots with Landedge is a smarter financial and lifestyle decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UNIVERSAL_PLOT_BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className={`${benefit.bg} border rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group bg-white`}
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-white border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-black text-neutral-900 tracking-tight leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-muted-foreground font-semibold">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="pt-6 mt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-brand">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}
