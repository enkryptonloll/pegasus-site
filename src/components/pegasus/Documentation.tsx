import { useMemo, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Download,
  Monitor,
  ShieldAlert,
  CheckCircle,
  Terminal,
  AlertTriangle,
  RefreshCw,
  FileSearch,
  Cpu,
  Settings,
  Search,
  ShieldCheck,
  KeyRound,
  PackageX,
} from "lucide-react";

const setupSteps = [
  {
    icon: Download,
    title: "Download the executable",
    desc: "Visit the official release page and download pegasus.exe. There is no installer — the file is ready to run as soon as you save it.",
  },
  {
    icon: FileSearch,
    title: "Verify the SHA256 checksum",
    desc: "Open PowerShell, run Get-FileHash .\\pegasus.exe -Algorithm SHA256, and compare the output with the hash published on the release page.",
  },
  {
    icon: ShieldAlert,
    title: "Handle antivirus warnings",
    desc: "If Windows Defender or another antivirus flags the file, verify the checksum first. If it matches, add an exclusion for the Pegasus folder or submit the file to your antivirus vendor as a false positive.",
  },
  {
    icon: Monitor,
    title: "Launch Pegasus",
    desc: "Double-click pegasus.exe. On first run, Windows may show a SmartScreen prompt because the executable is new. Click 'More info' and 'Run anyway' if you downloaded from the official source and the checksum matches.",
  },
];

const usageSteps = [
  {
    icon: Cpu,
    title: "Choose a tool module",
    desc: "The dashboard lists every available module. Select OSINT, privacy research, security analysis, or any other tool to open its workspace.",
  },
  {
    icon: Settings,
    title: "Configure your session",
    desc: "Most modules work with default settings. Advanced users can adjust rate limits, output formats, proxy settings, and API keys from the settings panel.",
  },
  {
    icon: Terminal,
    title: "Run your research",
    desc: "Enter your target or query, then start the module. Results appear in real time inside the workspace and can be exported as JSON, CSV, or PDF.",
  },
  {
    icon: CheckCircle,
    title: "Review and export",
    desc: "Inspect findings in the built-in viewer. When ready, export the report or save the session for later review.",
  },
];

const troubleshootingItems = [
  {
    q: "Pegasus won't start on Windows 10/11",
    a: "Make sure you are running Windows 10 version 1909 or later, or Windows 11. Check that pegasus.exe is not blocked by Windows Defender or another antivirus. If SmartScreen appears, click 'More info' then 'Run anyway' after verifying the checksum.",
  },
  {
    q: "Antivirus deletes or quarantines pegasus.exe",
    a: "Restore the file from quarantine, verify the SHA256 checksum, then add the folder containing pegasus.exe to your antivirus exclusion list. For a permanent fix, submit the file to your antivirus vendor's false-positive form with the detection name and a note that it is a legitimate security research tool.",
  },
  {
    q: "The SHA256 checksum does not match",
    a: "Do not run the file. Delete it immediately and download a fresh copy from the official release page. A mismatched hash means the file was altered or corrupted during download.",
  },
  {
    q: "The interface is slow or unresponsive",
    a: "Close other heavy applications, ensure you have at least 4 GB of free RAM, and check that your system is not running on battery-saver mode. Restart Pegasus if the issue persists.",
  },
  {
    q: "A module returns no results",
    a: "Verify your internet connection and any proxy settings. Check that the target is valid and that the module's required API keys or credentials are configured in settings.",
  },
  {
    q: "How do I report a bug or request a feature?",
    a: "Join the Discord server or Telegram announcement channel linked in the Community section. Use Discord for detailed bug reports and feature discussions.",
  },
];

const systemRequirements = [
  { label: "Operating System", value: "Windows 10 (1909+) or Windows 11" },
  { label: "Architecture", value: "64-bit x86 (x64)" },
  { label: "RAM", value: "4 GB minimum, 8 GB recommended" },
  { label: "Storage", value: "500 MB of free disk space" },
  { label: "Internet", value: "Required for updates and online modules" },
];

const docIndex = [
  { id: "requirements", label: "System Requirements", keywords: "windows 10 11 ram storage cpu 64-bit x64 internet" },
  { id: "setup", label: "Setup Guide", keywords: "download install exe first run smartscreen launch" },
  { id: "usage", label: "Usage Guide", keywords: "modules dashboard configure run export osint" },
  { id: "verification", label: "SHA256 Verification", keywords: "checksum hash powershell get-filehash integrity" },
  { id: "antivirus", label: "Antivirus False Positives", keywords: "defender virus quarantine exclusion submit review" },
  { id: "checklist", label: "Troubleshooting Checklist", keywords: "smartscreen permissions dependencies vcredist admin blocked unblock" },
  { id: "troubleshooting", label: "Troubleshooting FAQ", keywords: "start slow no results bug report crash" },
];

type ChecklistGroup = {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  summary: string;
  steps: { title: string; desc: string }[];
};

const checklistGroups: ChecklistGroup[] = [
  {
    id: "smartscreen",
    icon: ShieldCheck,
    title: "Windows SmartScreen blocks the app",
    summary: "SmartScreen shows a blue 'Windows protected your PC' dialog on first launch.",
    steps: [
      { title: "Verify the SHA256 checksum first", desc: "Never bypass SmartScreen without confirming the hash matches the official release." },
      { title: "Click 'More info' in the SmartScreen dialog", desc: "The dialog collapses the actual action button until you expand the details." },
      { title: "Click 'Run anyway'", desc: "This button only appears after 'More info'. Windows remembers this choice for future launches." },
      { title: "Optional: unblock the file properties", desc: "Right-click pegasus.exe → Properties → tick 'Unblock' at the bottom → Apply. This removes the mark-of-the-web set by your browser." },
    ],
  },
  {
    id: "permissions",
    icon: KeyRound,
    title: "Permission and access denied errors",
    summary: "Pegasus fails to start, cannot write logs, or reports 'Access is denied'.",
    steps: [
      { title: "Move pegasus.exe out of protected folders", desc: "Do not run from C:\\Program Files, C:\\Windows, or OneDrive. Use a folder like C:\\Tools\\Pegasus or your Desktop." },
      { title: "Grant your user account full control of the folder", desc: "Right-click the Pegasus folder → Properties → Security → Edit → select your user → tick 'Full control' → Apply." },
      { title: "Run as administrator once", desc: "Right-click pegasus.exe → 'Run as administrator'. Only needed if a module accesses privileged system resources." },
      { title: "Disable Controlled Folder Access temporarily", desc: "Windows Security → Virus & threat protection → Ransomware protection. Add pegasus.exe as an allowed app if enabled." },
    ],
  },
  {
    id: "dependencies",
    icon: PackageX,
    title: "Missing dependencies or DLL errors",
    summary: "Errors like 'VCRUNTIME140.dll was not found' or 'The application was unable to start correctly (0xc000007b)'.",
    steps: [
      { title: "Install the Visual C++ 2015–2022 Redistributable (x64)", desc: "Download vc_redist.x64.exe from Microsoft's official page and install it. This ships the runtime most modern Windows apps need." },
      { title: "Run Windows Update", desc: "Settings → Windows Update → Check for updates. Missing OS updates commonly cause DLL load failures on Windows 10." },
      { title: "Confirm you are on 64-bit Windows", desc: "Settings → System → About → 'System type' must show '64-bit operating system, x64-based processor'. Pegasus does not support 32-bit Windows." },
      { title: "Reinstall .NET Desktop Runtime 8 if prompted", desc: "If Pegasus asks for a specific .NET runtime, install the Desktop Runtime (not the ASP.NET or SDK build) matching the version shown in the error." },
    ],
  },
];

function ChecklistCard({ group }: { group: ChecklistGroup }) {
  const storageKey = `pegasus-checklist-${group.id}`;
  const [checked, setChecked] = useState<boolean[]>(() => {
    if (typeof window === "undefined") return group.steps.map(() => false);
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as boolean[];
        if (Array.isArray(parsed) && parsed.length === group.steps.length) return parsed;
      }
    } catch {
      /* ignore */
    }
    return group.steps.map(() => false);
  });

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = prev.map((v, idx) => (idx === i ? !v : v));
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const Icon = group.icon;
  const done = checked.filter(Boolean).length;

  return (
    <AccordionItem value={group.id} className="border-white/5">
      <AccordionTrigger className="px-2 text-left hover:no-underline">
        <div className="flex flex-1 items-start gap-3 pr-3">
          <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-[#A855F7]/40 bg-[#7C3AED]/20">
            <Icon className="h-4 w-4 text-[#c4b5fd]" />
          </div>
          <div className="flex-1">
            <div className="text-base font-medium text-white">{group.title}</div>
            <div className="mt-0.5 text-xs text-muted-foreground">{group.summary}</div>
          </div>
          <span className="shrink-0 self-center rounded-full border border-[#A855F7]/30 bg-[#7C3AED]/10 px-2 py-0.5 text-[11px] font-medium text-[#c4b5fd]">
            {done}/{group.steps.length}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-2">
        <ol className="mt-2 space-y-3">
          {group.steps.map((step, i) => {
            const id = `${group.id}-step-${i}`;
            const isChecked = checked[i];
            return (
              <li
                key={step.title}
                className={`flex gap-3 rounded-xl border p-3 transition-colors ${
                  isChecked
                    ? "border-[#A855F7]/40 bg-[#7C3AED]/10"
                    : "border-white/5 bg-white/5"
                }`}
              >
                <Checkbox
                  id={id}
                  checked={isChecked}
                  onCheckedChange={() => toggle(i)}
                  className="mt-1 border-[#A855F7]/60 data-[state=checked]:border-[#A855F7] data-[state=checked]:bg-[#7C3AED]"
                />
                <label htmlFor={id} className="flex-1 cursor-pointer">
                  <div
                    className={`text-sm font-medium ${
                      isChecked ? "text-[#c4b5fd] line-through decoration-[#A855F7]/50" : "text-white"
                    }`}
                  >
                    {i + 1}. {step.title}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{step.desc}</div>
                </label>
              </li>
            );
          })}
        </ol>
      </AccordionContent>
    </AccordionItem>
  );
}

export function DocumentationPage() {
  const ref = useScrollReveal();
  const [query, setQuery] = useState("");

  const filteredIndex = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return docIndex;
    return docIndex.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q),
    );
  }, [query]);

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={ref} className="relative min-h-screen text-foreground">
      <section className="relative px-4 pb-32 pt-36">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12 text-center reveal">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">
              Documentation
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Pegasus <span className="text-gradient">Setup Guide</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Everything you need to download, verify, run, and troubleshoot Pegasus on Windows 10 and Windows 11.
            </p>
          </div>

          {/* Searchable Index */}
          <div className="reveal mb-12 glass rounded-2xl p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <Search className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Documentation Index</h2>
                <p className="text-xs text-muted-foreground">Search or jump to a section.</p>
              </div>
            </div>
            <div className="relative mb-5">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: smartscreen, checksum, dependencies…"
                className="w-full rounded-xl border border-white/10 bg-black/30 py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-muted-foreground focus:border-[#A855F7]/60 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/30"
                aria-label="Search documentation"
              />
            </div>
            {filteredIndex.length === 0 ? (
              <p className="text-sm text-muted-foreground">No sections match "{query}".</p>
            ) : (
              <div className="grid gap-2 sm:grid-cols-2">
                {filteredIndex.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleJump(item.id)}
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-left transition-colors hover:border-[#A855F7]/40 hover:bg-[#7C3AED]/10"
                  >
                    <span className="text-sm font-medium text-white group-hover:text-[#c4b5fd]">
                      {item.label}
                    </span>
                    <span className="text-xs text-muted-foreground group-hover:text-[#c4b5fd]">Jump →</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* System Requirements */}
          <div id="requirements" className="reveal mb-12 glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <Monitor className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h2 className="text-xl font-semibold text-white">System Requirements</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {systemRequirements.map((req) => (
                <div
                  key={req.label}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-muted-foreground">{req.label}</span>
                  <span className="text-sm font-medium text-white">{req.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Setup Guide */}
          <div id="setup" className="reveal mb-12 glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <Download className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Setup Guide</h2>
            </div>
            <ol className="space-y-6">
              {setupSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/20 text-sm font-semibold text-[#c4b5fd]">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-[#c4b5fd]" />
                      <h3 className="text-base font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Usage Guide */}
          <div id="usage" className="reveal mb-12 glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-8 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <Terminal className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Usage Guide</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {usageSteps.map((step, i) => (
                <div key={step.title} className="rounded-xl border border-white/5 bg-white/5 p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/20 text-sm font-semibold text-[#c4b5fd]">
                    {i + 1}
                  </div>
                  <div className="flex items-center gap-2">
                    <step.icon className="h-4 w-4 text-[#c4b5fd]" />
                    <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SHA256 Verification */}
          <div id="verification" className="reveal mb-12 glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <CheckCircle className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Verify the SHA256 Checksum</h2>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Verifying the checksum proves that your copy of pegasus.exe matches the official release and has not been tampered with.
            </p>
            <div className="mb-5 rounded-xl border border-[#A855F7]/20 bg-black/30 p-4 font-mono text-sm text-[#c4b5fd]">
              <span className="text-muted-foreground"># In PowerShell, navigate to the folder containing pegasus.exe</span>
              <br />
              cd C:\Users\YourName\Downloads
              <br />
              <br />
              <span className="text-muted-foreground"># Generate the SHA256 hash</span>
              <br />
              Get-FileHash .\pegasus.exe -Algorithm SHA256
              <br />
              <br />
              <span className="text-muted-foreground"># Compare the output with the published hash</span>
              <br />
              # Example published hash (replace with the real one from the release page):
              <br />
              a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
            </div>
            <div className="rounded-xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 p-4 text-sm text-[#7dd3fc]">
              <strong className="text-white">Important:</strong> If the hashes do not match exactly, do not run the file. Delete it and download a fresh copy from the official release page.
            </div>
          </div>

          {/* Antivirus False Positives */}
          <div id="antivirus" className="reveal mb-12 glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <AlertTriangle className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Antivirus False Positives</h2>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              Because Pegasus is a standalone security research executable, some antivirus engines may flag it as suspicious. This is a known false positive. Follow these steps to resolve it safely.
            </p>
            <ol className="mb-6 space-y-5">
              {[
                {
                  icon: CheckCircle,
                  title: "Verify the checksum",
                  desc: "Confirm the SHA256 hash matches the official release before taking any further action.",
                },
                {
                  icon: RefreshCw,
                  title: "Restore from quarantine",
                  desc: "If your antivirus moved pegasus.exe to quarantine, restore it and add the containing folder to your antivirus exclusion list.",
                },
                {
                  icon: ShieldAlert,
                  title: "Submit for review",
                  desc: "Use your antivirus vendor's false-positive submission form. Include the file, the exact detection name, and a short note that Pegasus is a legitimate security research tool for Windows.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/20 text-xs font-semibold text-[#c4b5fd]">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <step.icon className="h-4 w-4 text-[#c4b5fd]" />
                      <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="rounded-xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 p-4 text-sm text-[#7dd3fc]">
              <strong className="text-white">Tip:</strong> Only add exclusions after verifying the checksum. Never exclude files from antivirus protection unless you are certain they are safe.
            </div>
          </div>

          {/* Interactive Troubleshooting Checklist */}
          <div id="checklist" className="reveal mb-12 glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <ShieldCheck className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Troubleshooting Checklist</h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  Work through the collapsible steps for the issue you're seeing. Your progress is saved locally.
                </p>
              </div>
            </div>
            <Accordion type="multiple" className="w-full">
              {checklistGroups.map((group) => (
                <ChecklistCard key={group.id} group={group} />
              ))}
            </Accordion>
          </div>

          {/* Troubleshooting Accordion */}
          <div id="troubleshooting" className="reveal glass rounded-2xl p-6 sm:p-8 scroll-mt-24">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <RefreshCw className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Troubleshooting FAQ</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {troubleshootingItems.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="border-white/5"
                >
                  <AccordionTrigger className="px-2 text-left text-base font-medium text-white hover:text-[#c4b5fd] hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-2 text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </section>
  );
}
