import { Background } from "@/components/pegasus/Background";
import { Nav } from "@/components/pegasus/Nav";
import { Hero } from "@/components/pegasus/Hero";
import { Features } from "@/components/pegasus/Features";
import { Dashboard } from "@/components/pegasus/Dashboard";
import { About } from "@/components/pegasus/About";
import { Trust } from "@/components/pegasus/Trust";
import { FAQ } from "@/components/pegasus/FAQ";
import { DownloadGuide } from "@/components/pegasus/DownloadGuide";
import { Community } from "@/components/pegasus/Community";
import { Footer } from "@/components/pegasus/Footer";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function IndexPage() {
  usePageMeta({
    title: "Pegasus — Advanced Cybersecurity Platform",
    description:
      "Pegasus provides advanced cybersecurity tools for privacy, protection, and digital security. Modern, secure, and community driven.",
    ogTitle: "Pegasus — Advanced Cybersecurity Platform",
    ogDescription:
      "Advanced cybersecurity tools built for privacy, protection, and digital security.",
  });

  return (
    <div className="relative min-h-screen text-foreground">
      <Background />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <About />
        <Trust />
        <FAQ />
        <DownloadGuide />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
