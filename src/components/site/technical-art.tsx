import { useId } from "react";
import { cn } from "@/lib/utils";

type TechnicalArtProps = {
  variant?: number;
  className?: string;
  animated?: boolean;
};

export function TechnicalArt({ variant = 0, className, animated = false }: TechnicalArtProps) {
  const id = useId().replace(/:/g, "");
  const paths = [
    "M12 82 H74 V48 H126 V96 H184 V30 H238 V67 H288",
    "M8 46 H58 L82 22 H144 V75 H206 L238 43 H294",
    "M14 94 V35 H72 V64 H132 V18 H194 V88 H246 V51 H292",
    "M10 60 H54 L88 92 H144 L176 42 H228 L258 72 H294",
  ];
  const path = paths[variant % paths.length];
  return (
    <svg className={cn("technical-art", animated && "technical-art--animated", className)} viewBox="0 0 300 120" fill="none" aria-hidden="true">
      <defs>
        <pattern id={`grid-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" className="stroke-grid" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="300" height="120" fill={`url(#grid-${id})`} opacity=".65" />
      <path d={path} className="draw-path stroke-accent" strokeWidth="1.25" />
      <path d="M24 104H276M34 108V100M266 108V100" className="stroke-muted" strokeWidth=".65" strokeDasharray="3 4" />
      {[44, 102, 160, 218, 276].map((x, i) => (
        <g key={x} className={`node node-${i}`}>
          <circle cx={x} cy={i % 2 ? 48 : 82} r="4" className="fill-surface stroke-accent" />
          <circle cx={x} cy={i % 2 ? 48 : 82} r="1.2" className="fill-accent" />
        </g>
      ))}
      <path d="M146 18l12-7 12 7v14l-12 7-12-7z" className="stroke-muted" strokeWidth=".8" strokeDasharray="4 3" />
      <text x="12" y="15" className="fill-label technical-label">IBP / {String(variant + 1).padStart(2, "0")}</text>
      <text x="250" y="112" className="fill-label technical-label">M 1:100</text>
    </svg>
  );
}

export function BlueprintMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M8 9h15l9 9v13H17L8 22V9Z" className="stroke-accent" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="4" className="stroke-foreground" strokeWidth="1.3" />
      <path d="M20 5v11m0 8v11M5 20h11m8 0h11" className="stroke-muted" strokeWidth=".8" strokeDasharray="2 2" />
    </svg>
  );
}
