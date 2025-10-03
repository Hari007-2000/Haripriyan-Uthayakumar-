import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ResearchAreas } from "@/components/ResearchAreas";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ResearchAreas />
      <Projects />
      <Publications />
      <Contact />
    </div>
  );
};

export default Index;
