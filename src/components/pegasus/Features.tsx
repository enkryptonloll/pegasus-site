import { Lock, Shield, Network, ServerCog, Search, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { icon: Lock, title: "Privacy Tools", desc: "Encrypted communications, anonymization, and data privacy utilities." },
  { icon: Shield, title: "Security Utilities", desc: "Threat detection, vulnerability scans, and hardening toolkits." },
  { icon: Network, title: "Network Analysis", desc: "Deep packet inspection, traffic maps, and anomaly detection." },
  { icon: ServerCog, title: "System Protection", desc: "Endpoint defense, integrity monitoring, and access control." },
  { icon: Search, title: "OSINT Capabilities", desc: "Open-source intelligence gathering with modern investigative tools." },
  { icon: GraduationCap, title: "Cybersecurity Learning", desc: "Curated modules, labs, and guides to sharpen your defense." },
];

export function Features() {
  const ref = useScrollReveal();
  return (
    <section id="features" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">Capabilities</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Elite tools</span>, one platform
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every module engineered for professionals who take digital security seriously.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A855F7]/50 hover:shadow-[0_20px_60px_rgba(124,58,237,0.25)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#7C3AED]/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-[#A855F7]/40 bg-gradient-to-br from-[#7C3AED]/30 to-[#38BDF8]/10 shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-shadow group-hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]">
                  <f.icon className="h-5 w-5 text-[#c4b5fd]" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
