import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function About() {
  const ref = useScrollReveal();
  return (
    <section id="about" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <div className="reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">About Pegasus</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Security is a <span className="text-gradient">discipline</span>, not a product.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Pegasus is a modern cybersecurity platform helping professionals, researchers, and
            curious minds understand digital security. We build tools that make privacy accessible,
            protection effortless, and continuous learning part of the workflow.
          </p>
          <p className="mt-4 text-muted-foreground">
            From encrypted communications to network intelligence and hands-on training, Pegasus
            gives you a coherent operating system for your defensive stack.
          </p>
        </div>

        <div className="reveal glass-strong relative rounded-3xl p-8">
          <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-[#7C3AED]/40 via-transparent to-[#38BDF8]/20 blur-2xl" />
          <div className="space-y-6">
            {[
              { k: "Mission", v: "Democratize serious cybersecurity education and tooling." },
              { k: "Approach", v: "Zero-trust architecture, transparent design, minimal telemetry." },
              { k: "Audience", v: "Builders, defenders, and learners who take security seriously." },
            ].map((r) => (
              <div key={r.k} className="border-l-2 border-[#A855F7]/50 pl-4">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#c4b5fd]">{r.k}</div>
                <div className="mt-1 text-white">{r.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
