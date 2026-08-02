import React from "react";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TechDigiEdu logo mark"
    >
      <defs>
        <linearGradient id="tde-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d4aff" />
          <stop offset="1" stopColor="#0bc5ea" />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect width="40" height="40" rx="10" fill="url(#tde-grad)" />
      {/* Circuit-node dots */}
      <circle cx="8" cy="8" r="2.5" fill="rgba(255,255,255,0.35)" />
      <circle cx="32" cy="8" r="2.5" fill="rgba(255,255,255,0.35)" />
      <circle cx="8" cy="32" r="2.5" fill="rgba(255,255,255,0.35)" />
      <circle cx="32" cy="32" r="2.5" fill="rgba(255,255,255,0.35)" />
      {/* "T" letterform */}
      <rect x="12" y="13" width="16" height="3" rx="1.5" fill="white" />
      <rect x="18.5" y="13" width="3" height="14" rx="1.5" fill="white" />
      {/* Small accent node */}
      <circle cx="32" cy="20" r="2" fill="rgba(255,255,255,0.55)" />
      <line x1="32" y1="8" x2="32" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="8" y1="8" x2="8" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    </svg>
  );
}

export default function Logo({ showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={40} />
      {showText && (
        <span className="text-xl font-extrabold tracking-tight leading-none">
          <span style={{ background: "linear-gradient(135deg, #6d4aff, #0bc5ea)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            TechDigi
          </span>
          <span className="text-foreground">Edu</span>
        </span>
      )}
    </div>
  );
}
