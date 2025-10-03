import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ResearchAreas } from "@/components/ResearchAreas";
import { Publications } from "@/components/Publications";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ResearchAreas />
      <Publications />
      <Team />
      <Contact />
    </div>
  );
};

export default Index;
