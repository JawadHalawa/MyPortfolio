import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer/>
    </div>
  );
}
