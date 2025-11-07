import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Assessment = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI career guide. Let's discover the perfect career path for you. To start, could you tell me about your current situation? Are you a student, looking to switch careers, or exploring new opportunities?"
    }
  ]);
  const [input, setInput] = useState("");
  const [progress, setProgress] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const questions = [
    "What subjects or activities do you enjoy most?",
    "What are your strongest skills?",
    "In your ideal work environment, would you prefer working alone, in small teams, or with large groups?",
    "What kind of impact do you want to make through your career?",
    "Are there any specific industries or fields that interest you?"
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const currentQuestion = Math.floor(messages.length / 2);
      
      if (currentQuestion < questions.length) {
        const assistantMessage: Message = {
          role: "assistant",
          content: questions[currentQuestion]
        };
        setMessages(prev => [...prev, assistantMessage]);
        setProgress(((currentQuestion + 1) / questions.length) * 100);
      } else {
        const finalMessage: Message = {
          role: "assistant",
          content: "Thank you for sharing! I have enough information to generate your personalized career recommendations. Let's see what careers match your profile!"
        };
        setMessages(prev => [...prev, finalMessage]);
        setProgress(100);
        
        setTimeout(() => {
          toast.success("Assessment complete! Generating your results...");
          navigate("/results");
        }, 2000);
      }
      
      setIsLoading(false);
    }, 1000);
  };

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
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Assessment Container */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-foreground">Career Assessment</h2>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Chat Messages */}
        <Card className="mb-4 p-6 min-h-[500px] max-h-[500px] overflow-y-auto bg-card">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === "user"
                      ? "bg-gradient-primary text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">AI Guide</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                    <span className="text-sm text-muted-foreground">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Input Area */}
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your response..."
            className="flex-1"
            disabled={isLoading || progress === 100}
          />
          <Button 
            onClick={handleSend}
            disabled={isLoading || progress === 100 || !input.trim()}
            className="px-6"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
