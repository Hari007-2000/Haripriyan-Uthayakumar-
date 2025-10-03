import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Principal Investigator",
    initials: "SJ",
    bio: "Leading research in artificial intelligence and machine learning applications."
  },
  {
    name: "Dr. Michael Chen",
    role: "Senior Researcher",
    initials: "MC",
    bio: "Specializing in quantum computing and cryptographic systems."
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Research Scientist",
    initials: "ER",
    bio: "Focused on data science methodologies and computational analytics."
  },
  {
    name: "Dr. James Williams",
    role: "Research Fellow",
    initials: "JW",
    bio: "Expertise in software engineering and distributed systems architecture."
  }
];

export const Team = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            World-class researchers dedicated to advancing science and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border text-center"
            >
              <Avatar className="h-24 w-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>
              
              <div className="flex gap-3 justify-center">
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </button>
                <button className="p-2 rounded-full hover:bg-muted transition-colors">
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
