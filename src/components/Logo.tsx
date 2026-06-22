import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center shrink-0 ${className}`}>
      <img
        src={logoImg}
        alt="Landedge Group Logo"
        fetchPriority="high"
        className="h-12 sm:h-14 w-auto object-contain"
      />
    </Link>
  );
}
