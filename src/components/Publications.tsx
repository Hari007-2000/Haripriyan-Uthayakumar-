import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Machine Learning for Circular Economy: Optimizing Material Flows in Manufacturing",
    authors: "Your Name, et al.",
    journal: "Journal of Industrial Ecology",
    year: "2024",
    tags: ["AI", "Circular Economy", "Manufacturing"]
  },
  {
    title: "Deep Learning Framework for Real-Time Carbon Footprint Prediction in Smart Factories",
    authors: "Your Name, et al.",
    journal: "Journal of Cleaner Production",
    year: "2024",
    tags: ["Deep Learning", "Sustainability", "Industry 4.0"]
  },
  {
    title: "AI-Driven Life Cycle Assessment: Automation and Optimization Opportunities",
    authors: "Your Name, et al.",
    journal: "Environmental Science & Technology",
    year: "2023",
    tags: ["LCA", "Artificial Intelligence", "Sustainability"]
  }
];

export const Publications = () => {
  return (
    <section id="publications" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Publications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent contributions to sustainable manufacturing and AI research
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 leading-tight group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
              <p className="text-sm font-medium text-foreground mb-3">
                {pub.journal}, {pub.year}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
