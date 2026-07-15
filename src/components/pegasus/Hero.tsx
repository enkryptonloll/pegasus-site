import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-24">
      {/* Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/60"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              boxShadow: "0 0 8px rgba(168,85,247,0.8)",
              animation: `pulse-glow ${3 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center animate-fade-up">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#A855F7]/30 bg-[#7C3AED]/10 px-4 py-1.5 text-xs font-medium text-[#c4b5fd] backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Advanced Cybersecurity Platform
          <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse-glow" />
        </div>

        <h1 className="text-gradient animate-gradient text-7xl font-black leading-[0.95] tracking-tight sm:text-8xl md:text-[10rem]">
          Pegasus
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Advanced cybersecurity tools built for privacy, protection, and digital security.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#features"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] hover:scale-[1.03]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A855F7] to-[#38BDF8] opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative flex items-center gap-2">
              Explore Tools
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a
            href="#about"
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#A855F7]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6">
          {[
            { v: "256-bit", l: "Encryption" },
            { v: "99.99%", l: "Uptime" },
            { v: "24/7", l: "Monitoring" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-5">
              <div className="text-2xl font-bold text-white sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
