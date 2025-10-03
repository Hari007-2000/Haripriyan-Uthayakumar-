import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <span className="text-xl font-bold text-gradient cursor-pointer">Your Name</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="/#research" className="text-sm font-medium hover:text-primary transition-colors">
              Research
            </a>
            <a href="/#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="/#publications" className="text-sm font-medium hover:text-primary transition-colors">
              Publications
            </a>
            <Link to="/cv" className="text-sm font-medium hover:text-primary transition-colors">
              CV
            </Link>
            <a href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
