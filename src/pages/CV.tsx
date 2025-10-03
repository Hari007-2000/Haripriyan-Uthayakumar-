import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, GraduationCap, Briefcase, Award, FileText } from "lucide-react";

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Curriculum Vitae</h1>
          <p className="text-xl text-muted-foreground">
            PhD Candidate in Industrial Ecology & AI
          </p>
          <Button size="lg" className="mt-4">
            <Download className="mr-2 h-5 w-5" />
            Download CV (PDF)
          </Button>
        </div>

        <div className="space-y-8">
          {/* Education */}
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">PhD in Industrial Ecology</h3>
                <p className="text-muted-foreground">University Name | 2022 - Present</p>
                <p className="mt-2">
                  Dissertation: AI-driven approaches for sustainable manufacturing and circular economy optimization
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Master of Science in Environmental Engineering</h3>
                <p className="text-muted-foreground">University Name | 2020 - 2022</p>
                <p className="mt-2">
                  Thesis: Life cycle assessment of manufacturing processes using machine learning
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Chemical Engineering</h3>
                <p className="text-muted-foreground">University Name | 2016 - 2020</p>
              </div>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Research Experience</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">Research Assistant</h3>
                <p className="text-muted-foreground">Sustainable Manufacturing Lab | 2022 - Present</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-foreground">
                  <li>Leading research on AI applications in industrial ecology</li>
                  <li>Developing machine learning models for resource optimization</li>
                  <li>Publishing in top-tier journals on sustainable manufacturing</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Graduate Research Intern</h3>
                <p className="text-muted-foreground">Industry Partner Company | Summer 2023</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-foreground">
                  <li>Implemented circular economy strategies in production systems</li>
                  <li>Analyzed material flows using advanced data analytics</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Skills & Expertise</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Technical Skills</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Python, R, MATLAB</li>
                  <li>• Machine Learning & Deep Learning</li>
                  <li>• Life Cycle Assessment (LCA)</li>
                  <li>• Material Flow Analysis</li>
                  <li>• Data Science & Analytics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Research Areas</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Industrial Ecology</li>
                  <li>• Sustainable Manufacturing</li>
                  <li>• Circular Economy</li>
                  <li>• AI for Sustainability</li>
                  <li>• Resource Optimization</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Publications & Awards */}
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Awards & Honors</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Best Student Paper Award</h3>
                <p className="text-muted-foreground">International Conference on Industrial Ecology | 2024</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Graduate Research Fellowship</h3>
                <p className="text-muted-foreground">National Science Foundation | 2023-2025</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Outstanding Graduate Student Award</h3>
                <p className="text-muted-foreground">Department of Environmental Engineering | 2022</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CV;
