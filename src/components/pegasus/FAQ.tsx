import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Pegasus reliable for professional security research?",
    a: "Yes. Pegasus is built on a hardened, audited stack with continuous updates, redundant infrastructure, and 99.99% uptime. Every module is tested against real-world security workflows so you can rely on it in production research environments.",
  },
  {
    q: "How easy is Pegasus to use for newcomers?",
    a: "Pegasus ships with sensible defaults, a guided onboarding flow, and a unified dashboard. Most tools work out of the box with a single click — no complex configuration required. In-app documentation and tooltips explain every action as you go.",
  },
  {
    q: "How do I download and run Pegasus?",
    a: "Go to the Downloads section and download the Pegasus .exe file. There is no installer — just save the file and double-click it to launch. No setup wizard or admin install is required.",
  },
  {
    q: "Which operating systems are supported?",
    a: "Pegasus supports Windows 10 and Windows 11 only. Other operating systems are not supported at this time.",
  },
  {
    q: "My antivirus flagged the .exe — is that normal?",
    a: "Yes, this can happen. Because Pegasus is a security research tool distributed as a standalone .exe, some antivirus engines report false positives. The file is safe — verify the SHA-256 checksum shown on the release page matches your download, and if needed add an exclusion for Pegasus in your antivirus before running it.",
  },
  {
    q: "Are updates automatic?",
    a: "Yes. Pegasus checks for updates on launch and applies them in the background with your approval. You can also pin a specific release from the settings panel if your workflow requires a fixed version.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. Pegasus runs locally by default, does not phone home, and collects only minimal opt-in telemetry. Your research data never leaves your machine unless you explicitly export it.",
  },
];

export function FAQ() {
  const ref = useScrollReveal();
  return (
    <section id="faq" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center reveal">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c4b5fd]">
            FAQ
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Reliability, ease of use, and everything you need to get Pegasus running.
          </p>
        </div>

        <div className="reveal glass rounded-2xl p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-white/5"
              >
                <AccordionTrigger className="px-4 text-left text-base font-medium text-white hover:text-[#c4b5fd] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
