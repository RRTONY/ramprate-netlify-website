/**
 * TrustBar — Auto-scrolling client logos
 * 15 logos: Sony Nike Microsoft Goldman McKinsey PayPal Merrill Expedia eBay Virgin Bridgewater AT&T Accenture Blizzard Fox
 * White logos on dark bg, infinite scroll, caption: "$24B+ in decisions since 2000"
 */

const logos = [
  { name: "Sony", src: "https://ramprate.com/wp-content/uploads/sony-logo-200x150-1_ecc4854ee2a96369291205b572b8cc79.png" },
  { name: "Nike", src: "https://ramprate.com/wp-content/uploads/nike_logo.png" },
  { name: "Microsoft", src: "https://ramprate.com/wp-content/uploads/microsoft-logo-1-e1600953846611.jpg" },
  { name: "Goldman Sachs", text: "Goldman Sachs" },
  { name: "McKinsey", text: "McKinsey" },
  { name: "PayPal", src: "https://ramprate.com/wp-content/uploads/paypal-logo-e1595528873931_f826e0601c42b05cea63ea301418c5a2.png" },
  { name: "Merrill Lynch", text: "Merrill Lynch" },
  { name: "Expedia", src: "https://ramprate.com/wp-content/uploads/EXP_US_Basic_lrg_4C_RGB-e1595528887119_c1eba20d42dee92c18c57a7ee45ab550.jpg" },
  { name: "eBay", src: "https://ramprate.com/wp-content/uploads/ebay-logo-200x150-1.png" },
  { name: "Virgin", text: "Virgin" },
  { name: "Bridgewater", text: "Bridgewater" },
  { name: "AT&T", src: "https://ramprate.com/wp-content/uploads/att-logo-200x150-1.png" },
  { name: "Accenture", src: "https://ramprate.com/wp-content/uploads/Accenture.jpg" },
  { name: "Blizzard", src: "https://ramprate.com/wp-content/uploads/blizzard-logo-200x150-1_589d262e5e1874b6b4bc5b282433f8ba.png" },
  { name: "Fox", text: "Fox" },
];

function LogoItem({ logo }: { logo: typeof logos[0] }) {
  if (logo.src) {
    return (
      <div className="flex-shrink-0 w-[120px] h-[50px] flex items-center justify-center mx-6 opacity-50 hover:opacity-80 transition-opacity grayscale brightness-200 contrast-50">
        <img
          src={logo.src}
          alt={logo.name}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className="flex-shrink-0 mx-6 opacity-50 hover:opacity-80 transition-opacity">
      <span
        className="text-sm font-semibold tracking-wide text-white/80 whitespace-nowrap"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {logo.text}
      </span>
    </div>
  );
}

export default function TrustBar() {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="relative py-8 border-y border-glass-border overflow-hidden">
      {/* Caption */}
      <div className="container mb-4">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground text-center">
          $24B+ in decisions since 2000
        </p>
      </div>

      {/* Scrolling logos */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex items-center animate-scroll-left" style={{ width: "max-content" }}>
          {doubledLogos.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
