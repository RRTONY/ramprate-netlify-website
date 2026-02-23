/*
 * RampRate Logo — SVG recreation of the original logo.
 * Chevron icon + "ramprate" text. "ramp" in dark, "rate" in deep purple.
 * Freshened: deeper purple (#6B21A8 → oklch), slightly tighter tracking.
 * Variants: light (white text for dark bg), dark (charcoal text for light bg).
 */

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { height: 28, iconScale: 0.7 },
  md: { height: 36, iconScale: 0.85 },
  lg: { height: 48, iconScale: 1 },
};

export default function Logo({ variant = "dark", className = "", size = "md" }: LogoProps) {
  const { height, iconScale } = sizes[size];
  const textColor = variant === "light" ? "#ffffff" : "#1a1a2e";
  // Deeper purple — shifted from the original ~#7B2FBE to a richer #6B21A8
  const purpleColor = "#6B21A8";

  return (
    <span className={`inline-flex items-end gap-0 ${className}`} aria-label="RampRate">
      <svg
        viewBox="0 0 280 68"
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="RampRate logo"
      >
        {/* Chevron / roofline icon */}
        <g transform={`scale(${iconScale}) translate(${(1 - iconScale) * 20}, ${(1 - iconScale) * 10})`}>
          <path
            d="M28 4L48 20L44 24L28 12L12 24L8 20L28 4Z"
            fill={purpleColor}
            transform="translate(-2, -2) scale(1.1)"
          />
        </g>

        {/* "ramp" in dark/white */}
        <text
          x="8"
          y="58"
          fontFamily="'DM Sans', system-ui, sans-serif"
          fontWeight="700"
          fontSize="46"
          letterSpacing="-1"
          fill={textColor}
        >
          ramp
        </text>

        {/* "rate" in deep purple */}
        <text
          x="148"
          y="58"
          fontFamily="'DM Sans', system-ui, sans-serif"
          fontWeight="700"
          fontSize="46"
          letterSpacing="-1"
          fill={purpleColor}
        >
          rate
        </text>

        {/* TM */}
        <text
          x="260"
          y="38"
          fontFamily="'DM Sans', system-ui, sans-serif"
          fontWeight="400"
          fontSize="10"
          fill={variant === "light" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)"}
        >
          ™
        </text>
      </svg>
    </span>
  );
}
