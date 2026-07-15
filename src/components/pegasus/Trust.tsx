import { LockKeyhole, EyeOff, Cpu, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const items = [
  { icon: LockKeyhole, title: "Secure Architecture", desc: "Zero-trust foundation, end-to-end encryption, audited stack." },
  { icon: EyeOff, title: "Privacy Focused", desc: "No tracking. No selling data. Minimal necessary telemetry." },
  { icon: Cpu, title: "Modern Technology", desc: "Edge-native runtime, hardened defaults, continuous updates." },
  { icon: Users, title: "Community Driven", desc: "Open feedback loops with security professionals and learners." },
];

export function Trust() {
  const ref = useScrollReveal();
  return (
    <section id="trust" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">Trust</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Built on <span className="text-gradient">principles</span> that scale
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="reveal glass group rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-[#A855F7]/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.25)]">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)] transition-shadow group-hover:shadow-[0_0_28px_rgba(168,85,247,0.6)]">
                <it.icon className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h3 className="text-base font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
