import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Briefcase, DollarSign, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Career {
  id: number;
  title: string;
  match: number;
  salary: string;
  growth: string;
  skills: string[];
  description: string;
}

const Results = () => {
  const navigate = useNavigate();

  const careers: Career[] = [
    {
      id: 1,
      title: "Software Engineer",
      match: 94,
      salary: "$90k - $150k",
      growth: "22%",
      skills: ["Problem Solving", "Logical Thinking", "Creativity"],
      description: "Design, develop, and maintain software applications using various programming languages and frameworks."
    },
    {
      id: 2,
      title: "UX/UI Designer",
      match: 89,
      salary: "$75k - $120k",
      growth: "16%",
      skills: ["Creativity", "Empathy", "Visual Design"],
      description: "Create intuitive and engaging user experiences for digital products through research and design."
    },
    {
      id: 3,
      title: "Data Scientist",
      match: 85,
      salary: "$95k - $160k",
      growth: "36%",
      skills: ["Analytical Thinking", "Mathematics", "Programming"],
      description: "Analyze complex data sets to help organizations make data-driven decisions and predictions."
    },
    {
      id: 4,
      title: "Product Manager",
      match: 82,
      salary: "$100k - $170k",
      growth: "19%",
      skills: ["Leadership", "Communication", "Strategic Thinking"],
      description: "Guide product development from conception to launch, balancing user needs with business goals."
    },
    {
      id: 5,
      title: "Marketing Manager",
      match: 78,
      salary: "$70k - $130k",
      growth: "10%",
      skills: ["Creativity", "Communication", "Strategy"],
      description: "Develop and execute marketing strategies to promote products and build brand awareness."
    }
  ];

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
            <Button variant="ghost" onClick={() => navigate("/assessment")}>
              Retake Assessment
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Results Header */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Career Matches
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Based on your assessment, here are the top 5 careers that align with your skills and interests
          </p>
        </div>
      </div>

      {/* Career Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6 max-w-5xl mx-auto">
          {careers.map((career, index) => (
            <Card 
              key={career.id}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold">
                      #{index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{career.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold text-primary">{career.match}% Match</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="hero"
                  onClick={() => navigate(`/roadmap/${career.id}`)}
                >
                  View Roadmap
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Match Score</span>
                  <span className="text-sm font-semibold text-foreground">{career.match}%</span>
                </div>
                <Progress value={career.match} className="h-2" />
              </div>

              <p className="text-muted-foreground mb-4">{career.description}</p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <div>
                    <div className="text-muted-foreground">Salary Range</div>
                    <div className="font-semibold text-foreground">{career.salary}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <div>
                    <div className="text-muted-foreground">Job Growth</div>
                    <div className="font-semibold text-foreground">{career.growth}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-accent" />
                  <div>
                    <div className="text-muted-foreground">Career Level</div>
                    <div className="font-semibold text-foreground">Entry to Senior</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-2">Key Skills Match</div>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          <Card className="p-6 bg-gradient-primary text-white">
            <h3 className="text-xl font-bold mb-2">Need More Guidance?</h3>
            <p className="mb-4 text-white/90">
              Chat with your AI mentor for personalized career advice and answers to your questions.
            </p>
            <Button variant="secondary">
              Chat with AI Mentor
            </Button>
          </Card>
          <Card className="p-6 bg-gradient-secondary text-white">
            <h3 className="text-xl font-bold mb-2">Explore Career Roadmaps</h3>
            <p className="mb-4 text-white/90">
              Get detailed step-by-step plans to achieve your dream career goals.
            </p>
            <Button 
              variant="outline"
              className="bg-white text-secondary hover:bg-white/90"
              onClick={() => navigate(`/roadmap/${careers[0].id}`)}
            >
              View Roadmap
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Results;
