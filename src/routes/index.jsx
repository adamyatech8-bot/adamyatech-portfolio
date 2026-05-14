import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import SEO from "@/components/SEO";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
      <>
      <SEO
        title="AdamyaTech | Modern Web & App Development"
        description="Professional portfolio showcasing premium websites, app development, UI/UX projects, and modern tech solutions."
      />

    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
    </>
  );
}
