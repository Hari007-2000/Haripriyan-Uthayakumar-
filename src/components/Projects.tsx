import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Driven Material Flow Analysis",
    description: "Developing machine learning models to optimize material flows in manufacturing systems, reducing waste and improving resource efficiency.",
    status: "In Progress",
    tags: ["Machine Learning", "Industrial Ecology", "Python"],
    link: "#"
  },
  {
    title: "Circular Economy Assessment Tool",
    description: "Creating a comprehensive framework for assessing circularity potential in manufacturing processes using life cycle assessment and AI.",
    status: "Published",
    tags: ["Life Cycle Assessment", "Sustainability", "Data Science"],
    link: "#"
  },
  {
    title: "Smart Factory Carbon Footprint Prediction",
    description: "Implementing deep learning models to predict and minimize carbon emissions in real-time manufacturing operations.",
    status: "In Progress",
    tags: ["Deep Learning", "Carbon Accounting", "IoT"],
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Research Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Current and completed projects in sustainable manufacturing and AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group flex flex-col"
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={project.status === "Published" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2 mt-auto">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.link}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Details
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.link}>
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
