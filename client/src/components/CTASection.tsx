/**
 * CTASection — Final CTA with sacred geometry background
 * "Ready to align?" + Start a Conversation CTA
 */
import { Link } from "wouter";

const CTA_BG = "https://private-us-east-1.manuscdn.com/sessionFile/m6kc1Tn353i2D6rxZBg8XB/sandbox/RDMiLgwSO48CurgyUQZAR1-img-4_1771880947000_na1fn_Y3RhLXNlY3Rpb24tYmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvbTZrYzFUbjM1M2kyRDZyeFpCZzhYQi9zYW5kYm94L1JETWlMZ3dTTzQ4Q3VyZ3lVUVpBUjEtaW1nLTRfMTc3MTg4MDk0NzAwMF9uYTFmbl9ZM1JoTFhObFkzUnBiMjR0WW1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AzaXlAWWuMoO4vLSVfg~rD4VoAIwgR96ZPfk~OmDj9jXp56H88eTGcDXYJI509-AaH6R7xz6Yu9rkGPRmtmqIUmIYeevkc-5xJmaJ~3nA4BzCQux0tWgNqK1TFZ2bJzEybiuPUOEyCqRvczG5loTrKTbdh0XeS8EPv3Td7AEzuc48cBtgu1VItzvS-uybBakhEe1uKgTQ~Ob5U-d9~dHIAny8~-YZezV5Rm32iNq1CnYaSSBWdHIcJsz-aO5eIXHqD6W4PF4PEh4uJi79tiRxUJNPROIVH2rZD-PYS0f9J1hriZGBsLywTQJ7sMcTeLJraVBFm5s~W1jvLVwOa1fuw__";

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${CTA_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background" />

      <div className="container relative z-10 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to <span className="text-coral">align</span>?
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-8" style={{ fontFamily: "var(--font-body)" }}>
          Whether you need to cut costs, scale faster, or navigate complexity — 
          our collective has seen it before.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/connect"
            className="px-8 py-3.5 rounded-lg bg-coral text-white text-sm font-semibold hover:bg-coral/90 transition-all hover:shadow-lg hover:shadow-coral/20"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start a Conversation →
          </Link>
          <Link
            href="/proof"
            className="px-8 py-3.5 rounded-lg border border-glass-border text-sm font-medium text-foreground/80 hover:text-white hover:border-coral/40 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            See the Proof
          </Link>
        </div>
      </div>
    </section>
  );
}
