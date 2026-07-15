import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const platformLinks = [
  { label: "Features", href: "#features" },
  { label: "Platform", href: "#dashboard" },
  { label: "About", href: "#about" },
  { label: "Trust", href: "#trust" },
  { label: "FAQ", href: "#faq" },
  { label: "Download Guide", href: "#download-guide" },
];

const resourceLinks = [
  { label: "Documentation", href: "/documentation" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/pegasustool",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 8.199-3.566 3.82-1.605 4.595-1.884 5.112-1.894.113-.002.367.026.531.158a.548.548 0 0 1 .185.38z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/QvP2dn8tz6",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-14.64a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#38BDF8] glow-purple">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold">Pegasus</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Advanced cybersecurity tools built for privacy, protection, and digital security.
          </p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold text-white">Platform</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold text-white">Resources</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {resourceLinks.map((link) => {
              const isInternal = link.href.startsWith("/");
              return (
                <li key={link.label}>
                  {isInternal ? (
                    <Link to={link.href} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-white transition">
                      {link.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition hover:border-[#A855F7]/50 hover:text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
        <span>© 2026 Pegasus. All rights reserved.</span>
        <span>Secure by design.</span>
      </div>
    </footer>
  );
}
