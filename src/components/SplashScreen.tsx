import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.webp";
import residentialVideo from "@/assets/hero2.mp4";
import heroPoster from "@/assets/hero-home.webp";

export function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "zooming" | "hidden">("loading");
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if the splash screen has already been shown in this browser session
    const hasShown = sessionStorage.getItem("landedge_splash_shown");
    if (hasShown === "true") {
      setPhase("hidden");
      return;
    }
    
    // We are on the client and haven't shown the splash screen yet, so mount it
    setShouldRender(true);

    let isDonePreloading = false;
    const startTime = Date.now();

    // Direct helper to preload and cache assets in browser memory
    const cacheAsset = async (url: string) => {
      try {
        const response = await fetch(url);
        // Force fully reading the response body to populate the browser cache
        await response.blob();
      } catch (e) {
        console.warn("Failed to cache asset:", url, e);
      }
    };

    // Parallel preloading of the three heavy home screen assets
    const preloadAssets = async () => {
      try {
        await Promise.all([
          cacheAsset(logoImg),
          cacheAsset(heroPoster),
          cacheAsset(residentialVideo),
        ]);
      } catch (e) {
        console.error("Error preloading assets:", e);
      } finally {
        isDonePreloading = true;
      }
    };

    preloadAssets();

    // Progress bar animation simulation (smoothly ticks to 90% then waits for actual completion)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        // Increment progress by a random value for a natural loading feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 90);
      });
    }, 120);

    // Monitor loading and enforce layout/timing
    const checkCompletionInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const minDuration = 2200; // Minimum time (2.2s) to show the splash screen
      const maxTimeout = 4000;  // Safeguard timeout (4.0s) to prevent blocking on slow connections

      if ((isDonePreloading && elapsedTime >= minDuration) || elapsedTime >= maxTimeout) {
        clearInterval(checkCompletionInterval);
        clearInterval(progressInterval);
        
        // Rapidly fill the progress bar to 100%
        setProgress(100);

        // Initiate the scale-up gate animation after a short delay so the user sees 100%
        setTimeout(() => {
          setPhase("zooming");

          // Hide and unmount the component completely after the zoom transition (1.2s)
          setTimeout(() => {
            setPhase("hidden");
            sessionStorage.setItem("landedge_splash_shown", "true");
          }, 1200);
        }, 350);
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkCompletionInterval);
    };
  }, []);

  if (phase === "hidden" || !shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 w-full h-full bg-black z-[99999] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-1000 ease-out ${
        phase === "zooming" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Immersive Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      {/* Pulsing/Zooming Company Logo Portal Gate */}
      <div
        className={`transition-all duration-[1250ms] cubic-bezier(0.25, 1, 0.5, 1) transform will-change-transform ${
          phase === "zooming"
            ? "scale-[38] rotate-[6deg] opacity-0 blur-[3px]"
            : "scale-100 opacity-100"
        }`}
      >
        <img
          src={logoImg}
          alt="Landedge Group Logo"
          className="h-28 sm:h-36 w-auto object-contain bg-white p-5 rounded-[28px] border-2 border-white/90 shadow-[0_20px_50px_rgba(255,255,255,0.08)]"
        />
      </div>

      {/* Loading Texts and Progress Bar (fades out first when zoom initiates) */}
      <div
        className={`mt-10 flex flex-col items-center gap-4 transition-all duration-500 max-w-xs w-full px-6 ${
          phase === "zooming" ? "opacity-0 translate-y-4 scale-95" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center space-y-1 text-center">
          <span className="text-[10px] font-black text-brand tracking-[0.3em] uppercase animate-pulse">
            Landedge Group
          </span>
          <span className="text-[9px] font-bold text-neutral-400 tracking-[0.15em] uppercase">
            Building Your Dreams
          </span>
        </div>

        {/* Minimalist Progress Track */}
        <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative border border-white/[0.02]">
          <div
            className="h-full bg-brand rounded-full transition-all duration-300 ease-out shadow-[0_0_8px_#c5a059]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <span className="text-[10px] font-black text-neutral-500 font-mono tracking-widest">
          {progress}%
        </span>
      </div>
    </div>
  );
}
