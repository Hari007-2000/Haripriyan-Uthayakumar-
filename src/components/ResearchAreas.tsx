import { Card } from "@/components/ui/card";
import { Brain, Atom, Code, Database } from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advancing machine learning algorithms and neural networks for next-generation intelligent systems."
  },
  {
    icon: Atom,
    title: "Quantum Computing",
    description: "Exploring quantum mechanics to revolutionize computational capabilities and cryptography."
  },
  {
    icon: Code,
    title: "Software Engineering",
    description: "Developing robust methodologies and tools for scalable, secure software development."
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Extracting meaningful insights from complex datasets using advanced analytics and visualization."
  }
];

export const ResearchAreas = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Research Areas</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our multidisciplinary approach spans cutting-edge fields of science and technology
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
