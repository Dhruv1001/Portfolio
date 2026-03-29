import Cursor from "@/components/Cursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <Cursor />
      <ParticleCanvas />

      {/* Scan line */}
      <div className="fixed left-0 w-full h-px z-[1] pointer-events-none animate-scan"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.08), transparent)" }}
      />

      {/* Page */}
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
