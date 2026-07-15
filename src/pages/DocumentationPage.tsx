import { Background } from "@/components/pegasus/Background";
import { Nav } from "@/components/pegasus/Nav";
import { DocumentationPage as DocumentationContent } from "@/components/pegasus/Documentation";
import { Footer } from "@/components/pegasus/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function DocumentationPage() {
  usePageMeta({
    title: "Documentation — Pegasus",
    description:
      "Setup, usage, and troubleshooting guides for Pegasus on Windows 10 and Windows 11.",
    ogTitle: "Documentation — Pegasus",
    ogDescription:
      "Setup, usage, and troubleshooting guides for Pegasus on Windows 10 and Windows 11.",
  });

  return (
    <div className="relative min-h-screen text-foreground">
      <Background />
      <Nav />
      <main>
        <DocumentationContent />
      </main>
      <Footer />
    </div>
  );
}
