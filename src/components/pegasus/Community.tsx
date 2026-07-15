import { MessageCircle, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const links = [
  {
    name: "Telegram",
    role: "Announcements",
    href: "https://t.me/pegasustool",
    icon: Send,
    desc: "Get release updates, security news, and important announcements delivered directly.",
  },
  {
    name: "Discord",
    role: "Community Server",
    href: "https://discord.gg/QvP2dn8tz6",
    icon: MessageCircle,
    desc: "Join discussions, ask questions, share research, and connect with other security professionals.",
  },
];

export function Community() {
  const ref = useScrollReveal();
  return (
    <section id="community" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-14 reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">
            Community
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Join the <span className="text-gradient">Pegasus</span> network
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Connect with announcements on Telegram and real-time conversations on Discord.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass group flex flex-col items-center rounded-2xl p-7 text-center transition-all hover:-translate-y-1 hover:border-[#A855F7]/50 hover:shadow-[0_20px_50px_rgba(124,58,237,0.25)]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_24px_rgba(124,58,237,0.35)] transition-shadow group-hover:shadow-[0_0_36px_rgba(168,85,247,0.55)]">
                <link.icon className="h-6 w-6 text-[#c4b5fd]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{link.name}</h3>
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-[#c4b5fd]">
                {link.role}
              </span>
              <p className="mt-3 text-sm text-muted-foreground">{link.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#c4b5fd] transition group-hover:text-white">
                Join {link.name}
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
