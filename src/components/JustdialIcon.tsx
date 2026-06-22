import React from "react";

export function JustdialIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* lowercase j */}
      <path d="M9 11v7a3 3 0 0 1-6 0" />
      <path d="M9 6h.01" />
      
      {/* lowercase d */}
      <path d="M19 14a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
      <path d="M19 6v12" />
    </svg>
  );
}
