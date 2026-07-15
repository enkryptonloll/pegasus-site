import { ShieldCheck, FileWarning, Terminal, ClipboardCheck, Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const sha256Steps = [
  {
    icon: Terminal,
    title: "Open PowerShell",
    desc: "Press Win + X and choose Windows PowerShell or Terminal. No extra tools are required.",
  },
  {
    icon: ClipboardCheck,
    title: "Run the checksum command",
    desc: "Type: Get-FileHash .\\pegasus.exe -Algorithm SHA256 and press Enter. Windows will return the file's SHA256 hash.",
  },
  {
    icon: ShieldCheck,
    title: "Compare with the published hash",
    desc: "Match the output against the SHA256 shown on the release page. If they match exactly, the file is intact and safe to run.",
  },
];

const antivirusSteps = [
  {
    icon: FileWarning,
    title: "Why it happens",
    desc: "Pegasus is a standalone security research executable. Some antivirus engines flag new or specialized tools as suspicious even when they are safe.",
  },
  {
    icon: ShieldCheck,
    title: "Verify first",
    desc: "Confirm the SHA256 checksum matches the release page. This proves the file has not been altered or corrupted.",
  },
  {
    icon: Send,
    title: "Submit for review",
    desc: "If your antivirus still reports Pegasus, use the vendor's false-positive submission form. Include the file, the detection name, and a note that it is a legitimate security research tool.",
  },
];

export function DownloadGuide() {
  const ref = useScrollReveal();
  return (
    <section id="download-guide" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">
            Download Security
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Verify before you <span className="text-gradient">run</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Pegasus is distributed as a single Windows executable. Follow these steps to confirm the file is authentic and handle any antivirus false positives.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="reveal glass rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <Terminal className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h3 className="text-xl font-semibold text-white">SHA256 verification</h3>
            </div>

            <div className="mb-6 rounded-xl border border-[#A855F7]/20 bg-black/30 p-4 font-mono text-xs text-[#c4b5fd] break-all">
              <span className="text-muted-foreground"># Example checksum</span>
              <br />
              a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456
            </div>

            <ol className="space-y-5">
              {sha256Steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/20 text-xs font-semibold text-[#c4b5fd]">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal glass rounded-2xl p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#A855F7]/40 bg-[#7C3AED]/20 shadow-[0_0_18px_rgba(124,58,237,0.35)]">
                <FileWarning className="h-5 w-5 text-[#c4b5fd]" />
              </div>
              <h3 className="text-xl font-semibold text-white">Antivirus false positives</h3>
            </div>

            <p className="mb-6 text-sm text-muted-foreground">
              If Windows Defender or another antivirus flags Pegasus, do not panic. This is a known false positive common for standalone security tools.
            </p>

            <ol className="space-y-5">
              {antivirusSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#A855F7]/40 bg-[#7C3AED]/20 text-xs font-semibold text-[#c4b5fd]">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl border border-[#38BDF8]/20 bg-[#38BDF8]/10 p-4 text-sm text-[#7dd3fc]">
              <strong className="text-white">Tip:</strong> Only download Pegasus from the official release page. Never run executables from untrusted sources, even if they claim to be Pegasus.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
