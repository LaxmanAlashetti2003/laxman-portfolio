import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import ProductionWork from "@/components/ProductionWork";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#121212] selection:bg-white/20">
      <Navbar />
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <About />
      <ProductionWork />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
