import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Circle, Book, Code, Briefcase, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RoadmapStep {
  id: number;
  phase: string;
  title: string;
  duration: string;
  items: string[];
  icon: any;
  completed?: boolean;
}

const Roadmap = () => {
  const navigate = useNavigate();
  const { careerId } = useParams();

  const careerTitles: { [key: string]: string } = {
    "1": "Software Engineer",
    "2": "UX/UI Designer",
    "3": "Data Scientist",
    "4": "Product Manager",
    "5": "Marketing Manager"
  };

  const roadmapSteps: RoadmapStep[] = [
    {
      id: 1,
      phase: "Foundation",
      title: "Learn the Fundamentals",
      duration: "3-6 months",
      icon: Book,
      items: [
        "Master programming basics (Python, JavaScript)",
        "Understand data structures and algorithms",
        "Learn version control with Git",
        "Practice problem-solving on coding platforms"
      ],
      completed: false
    },
    {
      id: 2,
      phase: "Skill Building",
      title: "Develop Core Skills",
      duration: "6-12 months",
      icon: Code,
      items: [
        "Build 3-5 portfolio projects",
        "Learn web development frameworks (React, Node.js)",
        "Study database design and SQL",
        "Contribute to open-source projects"
      ],
      completed: false
    },
    {
      id: 3,
      phase: "Experience",
      title: "Gain Practical Experience",
      duration: "6-12 months",
      icon: Briefcase,
      items: [
        "Apply for internships or junior positions",
        "Network with professionals in the field",
        "Attend tech meetups and conferences",
        "Work on real-world client projects"
      ],
      completed: false
    },
    {
      id: 4,
      phase: "Specialization",
      title: "Advanced Learning & Certification",
      duration: "Ongoing",
      icon: Award,
      items: [
        "Choose a specialization (Frontend, Backend, Full-stack)",
        "Earn relevant certifications",
        "Master advanced concepts and tools",
        "Build a strong professional network"
      ],
      completed: false
    }
  ];

  const careerTitle = careerId ? careerTitles[careerId] || "Your Career" : "Your Career";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => navigate("/")}
          >
            CareerCompass
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/results")}>
              Back to Results
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/results")}
            className="mb-4 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Results
          </Button>
          <h2 className="text-4xl font-bold text-white mb-4">
            Career Roadmap: {careerTitle}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl">
            Follow this personalized roadmap to achieve your career goals. Each phase builds on the previous one to help you progress systematically.
          </p>
        </div>
      </div>

      {/* Roadmap Timeline */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            {/* Roadmap Steps */}
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative pl-20">
                    {/* Icon Circle */}
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                            Phase {step.id}: {step.phase}
                          </Badge>
                          <h3 className="text-2xl font-bold text-card-foreground mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Expected Duration: {step.duration}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {step.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Circle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {index === 0 && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <Button variant="hero" className="w-full">
                            Start This Phase
                          </Button>
                        </div>
                      )}
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-2 text-card-foreground">Track Your Progress</h3>
              <p className="text-muted-foreground mb-4">
                Mark completed milestones and see how far you've come in your career journey.
              </p>
              <Button variant="outline" className="w-full">
                View Progress Dashboard
              </Button>
            </Card>
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-2 text-card-foreground">Get AI Guidance</h3>
              <p className="text-muted-foreground mb-4">
                Have questions about any step? Chat with your AI mentor for personalized advice.
              </p>
              <Button variant="default" className="w-full">
                Chat with AI Mentor
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
