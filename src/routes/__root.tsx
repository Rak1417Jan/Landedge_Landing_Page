// Root layout: Navbar/Footer added per-page via Layout component
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect } from "react";
import appCss from "../styles.css?url";
import { SplashScreen } from "@/components/SplashScreen";
import { projects } from "@/data/projects";
import officeVideo from "@/assets/Landedge_Group_office.mp4";
import director from "@/assets/director.jpg";
import park from "@/assets/park-stats.webp";
import landPlots from "@/assets/land_plots.webp";
import maheshImg from "@/assets/og_assets/photo.webp";
import goriImg from "@/assets/og_assets/photo (1).webp";
import narenderImg from "@/assets/og_assets/photo (2).webp";
import blogParwati from "@/assets/project-parwati.png";
import blogResidency from "@/assets/project-kapish-residency.png";
import blogEnclave from "@/assets/project-kapish-enclave.png";
import aerial from "@/assets/aerial-plots.jpg";
import parkJpg from "@/assets/park-stats.jpg";
import projectsHero from "@/assets/projects_hero.webp";
import faqHero from "@/assets/faq_hero.webp";
import blogHero from "@/assets/blog_hero.webp";
import contactHero from "@/assets/contact-hero.jpg";
import investmentGraphic from "@/assets/investment-graphic.jpg";
import eventsHero from "@/assets/events_hero.webp";
import newsHero from "@/assets/news_hero.webp";
import event1 from "@/assets/og_assets/Frame 4 (9).webp";
import event2 from "@/assets/og_assets/Frame 4 (10).webp";
import event3 from "@/assets/og_assets/Frame 4 (11).webp";
import event4 from "@/assets/og_assets/Frame 4 (12).webp";
import event5 from "@/assets/og_assets/Frame 4 (13).webp";
import event6 from "@/assets/og_assets/Frame 4 (14).webp";
import event7 from "@/assets/og_assets/Frame 4 (15).webp";
import event8 from "@/assets/og_assets/Frame 4 (16).webp";
import newsClip1 from "@/assets/og_assets/Frame 4 (17).webp";
import newsClip2 from "@/assets/og_assets/Frame 4 (18).webp";
import newsClip3 from "@/assets/og_assets/Frame 4 (19).webp";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-brand">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found</p>
        <Link to="/" className="mt-6 inline-block bg-brand text-white px-5 py-2.5 rounded-md font-medium">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <a href="/" className="mt-6 inline-block bg-brand text-white px-5 py-2.5 rounded-md font-medium">Go home</a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Landedge Group — Trusted Partner in Land Investment" },
      { name: "description", content: "Landedge offers RERA & JDA approved residential plots in Jaipur. Build your dreams on the perfect land." },
      { property: "og:title", content: "Landedge Group" },
      { property: "og:description", content: "Trusted partner in land investment across Rajasthan." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: ({ children }: { children: ReactNode }) => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  ),
  component: () => {
    const { queryClient } = Route.useRouteContext();

    useEffect(() => {
      if (typeof window === "undefined") return;

      const handlePreload = () => {
        const scheduler = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 1000));
        
        scheduler(() => {
          const listToCache = [
            blogParwati,
            blogResidency,
            blogEnclave,
            director,
            park,
            landPlots,
            maheshImg,
            goriImg,
            narenderImg,
            aerial,
            parkJpg,
            projectsHero,
            faqHero,
            blogHero,
            contactHero,
            investmentGraphic,
            eventsHero,
            newsHero,
            event1,
            event2,
            event3,
            event4,
            event5,
            event6,
            event7,
            event8,
            newsClip1,
            newsClip2,
            newsClip3,
            ...projects.map((p) => p.image),
            officeVideo
          ];

          const preloadSequentially = async () => {
            for (const assetUrl of listToCache) {
              if (!assetUrl) continue;
              try {
                if (assetUrl.endsWith(".mp4")) {
                  const res = await fetch(assetUrl);
                  await res.blob();
                } else {
                  const img = new Image();
                  img.src = assetUrl;
                }
              } catch (e) {
                console.warn("Background preload skipped:", assetUrl, e);
              }
              await new Promise((r) => setTimeout(r, 150));
            }
          };
          
          preloadSequentially();
        });
      };

      if (document.readyState === "complete") {
        handlePreload();
      } else {
        window.addEventListener("load", handlePreload);
        return () => window.removeEventListener("load", handlePreload);
      }
    }, []);

    return (
      <QueryClientProvider client={queryClient}>
        <SplashScreen />
        <Outlet />
      </QueryClientProvider>
    );
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorBoundary,
});
