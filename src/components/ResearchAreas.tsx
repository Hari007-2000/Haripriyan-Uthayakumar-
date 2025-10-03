import { Card } from "@/components/ui/card";
import { Brain, Atom, Code, Database } from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "AI for Sustainability",
    description: "Developing machine learning models to optimize resource use and minimize environmental impact in manufacturing systems."
  },
  {
    icon: Atom,
    title: "Industrial Ecology",
    description: "Analyzing material and energy flows in industrial systems to promote circular economy and sustainability."
  },
  {
    icon: Code,
    title: "Sustainable Manufacturing",
    description: "Applying computational methods to design and optimize environmentally-conscious production processes."
  },
  {
    icon: Database,
    title: "Life Cycle Assessment",
    description: "Utilizing data science to evaluate environmental impacts throughout product and process lifecycles."
  }
];

export const ResearchAreas = () => {
  return (
    <section id="research" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Research Focus</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integrating artificial intelligence with industrial ecology to create sustainable manufacturing solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <area.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
