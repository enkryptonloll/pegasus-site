import { Activity, Cpu, ShieldCheck, Wifi, Terminal as TerminalIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Dashboard() {
  const ref = useScrollReveal();
  return (
    <section id="dashboard" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">Platform</span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">Command center</span> for defenders
          </h2>
        </div>

        <div className="reveal glass-strong relative overflow-hidden rounded-3xl p-3 sm:p-5">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-3 pb-3">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-xs text-muted-foreground">pegasus://console</span>
            <span className="ml-auto text-xs text-[#38BDF8]">● Secure</span>
          </div>

          <div className="grid gap-3 lg:grid-cols-3">
            {/* Threat map / status */}
            <div className="glass rounded-2xl p-5 lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#A855F7]" />
                  <span className="text-sm font-medium">Threat Overview</span>
                </div>
                <span className="text-xs text-muted-foreground">Live · last 24h</span>
              </div>

              {/* Fake chart */}
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-black/30 p-3">
                <svg viewBox="0 0 400 120" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" x2="1">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>
                  {[20, 40, 60, 80, 100].map((y) => (
                    <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(168,85,247,0.08)" />
                  ))}
                  <path
                    d="M0,90 C40,80 60,50 100,55 C140,60 160,30 200,35 C240,40 260,70 300,55 C340,40 360,20 400,25 L400,120 L0,120 Z"
                    fill="url(#g1)"
                  />
                  <path
                    d="M0,90 C40,80 60,50 100,55 C140,60 160,30 200,35 C240,40 260,70 300,55 C340,40 360,20 400,25"
                    fill="none"
                    stroke="url(#g2)"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { l: "Blocked", v: "12,847", c: "#A855F7" },
                  { l: "Scanned", v: "89,231", c: "#38BDF8" },
                  { l: "Alerts", v: "23", c: "#7C3AED" },
                ].map((k) => (
                  <div key={k.l} className="rounded-xl border border-white/5 bg-black/20 p-3">
                    <div className="text-xs text-muted-foreground">{k.l}</div>
                    <div className="mt-1 text-lg font-bold" style={{ color: k.c }}>{k.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status modules */}
            <div className="space-y-3">
              {[
                { icon: Activity, label: "IDS Engine", status: "Active", pct: 92 },
                { icon: Wifi, label: "Network Guard", status: "Monitoring", pct: 78 },
                { icon: Cpu, label: "Endpoint Agents", status: "241 online", pct: 96 },
              ].map((m) => (
                <div key={m.label} className="glass rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <m.icon className="h-4 w-4 text-[#c4b5fd]" />
                      <span className="text-sm font-medium">{m.label}</span>
                    </div>
                    <span className="text-xs text-[#38BDF8]">{m.status}</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#38BDF8]"
                      style={{ width: `${m.pct}%`, boxShadow: "0 0 12px rgba(124,58,237,0.6)" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal */}
            <div className="glass rounded-2xl p-4 font-mono text-xs lg:col-span-3">
              <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                <TerminalIcon className="h-3.5 w-3.5" />
                <span>pegasus@secure:~$</span>
              </div>
              <div className="space-y-1 text-[#c4b5fd]">
                <div><span className="text-[#38BDF8]">$</span> pegasus scan --deep --target=network</div>
                <div className="text-muted-foreground">[✓] Initializing secure scan engine…</div>
                <div className="text-muted-foreground">[✓] 128 endpoints discovered · 0 anomalies</div>
                <div className="text-muted-foreground">[✓] TLS integrity verified across 41 services</div>
                <div><span className="text-[#A855F7]">▶</span> Analysis complete · report saved to ./reports/2026-07-14.log<span className="animate-blink">▊</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
