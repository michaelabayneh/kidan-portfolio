import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Documents from "@/components/Documents";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Experience />
        <TechStack />
        <Skills />
        <Projects />
        <Documents />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
