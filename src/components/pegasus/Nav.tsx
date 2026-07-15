import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#38BDF8] glow-purple">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Pegasus</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="/#features" className="transition hover:text-foreground">Features</a>
          <a href="/#dashboard" className="transition hover:text-foreground">Platform</a>
          <a href="/#about" className="transition hover:text-foreground">About</a>
          <a href="/#trust" className="transition hover:text-foreground">Trust</a>
          <Link to="/documentation" className="transition hover:text-foreground">Docs</Link>
        </div>
        <button className="rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-[#7C3AED]/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]">
          Get Started
        </button>
      </nav>
    </header>
  );
}
