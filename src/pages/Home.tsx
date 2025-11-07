import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Target, TrendingUp, Users, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: "Personalized Assessment",
      description: "AI-powered chat to understand your strengths, interests, and goals"
    },
    {
      icon: TrendingUp,
      title: "Career Matching",
      description: "Get matched with careers that fit your unique profile and aspirations"
    },
    {
      icon: Users,
      title: "AI Mentor Guidance",
      description: "24/7 access to your personal AI career mentor for ongoing support"
    },
    {
      icon: Sparkles,
      title: "Dynamic Roadmaps",
      description: "Step-by-step paths tailored to help you achieve your career goals"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CareerCompass
          </h1>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate("/assessment")}>
              Assessment
            </Button>
            <Button variant="outline" onClick={() => navigate("/results")}>
              Results
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Discover Your Perfect
              <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2">
                Career Path
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              AI-powered guidance to help you find careers that match your skills, 
              interests, and goals. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate("/assessment")}
                className="text-lg px-8"
              >
                Start Assessment
                <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate("/results")}
                className="text-lg px-8"
              >
                View Sample Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How CareerCompass Works
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform guides you through every step of your career discovery journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Find Your Path?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've discovered their ideal career with CareerCompass
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => navigate("/assessment")}
              className="text-lg px-8"
            >
              Get Started Free
              <ArrowRight className="ml-2" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 CareerCompass. AI-powered career guidance for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
