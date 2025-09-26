import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Code, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-learning-blue/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-learning-purple/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Brain className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Learning Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Smart Task & 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Resource Hub</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Master programming languages with AI-driven task allocation, interactive resources, 
            and smart certificate generation. From basic to advanced levels.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="text-lg px-8 py-6 interactive-button glow-on-hover shadow-elegant hover:shadow-lg transition-all group">
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 interactive-button">
              Explore Courses
            </Button>
          </div>
          
          {/* Animated indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-learning-blue rounded-full animate-bounce-custom"></div>
            <div className="w-2 h-2 bg-learning-purple rounded-full animate-bounce-custom" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-learning-green rounded-full animate-bounce-custom" style={{animationDelay: '0.4s'}}></div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto stagger-fade-in">
            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur rounded-xl border border-border shadow-card interactive-card group">
              <div className="w-12 h-12 bg-learning-blue/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce-custom transition-all duration-300">
                <Brain className="w-6 h-6 text-learning-blue" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-learning-blue transition-colors duration-300">AI Task Allocation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Smart algorithm assigns tasks based on your skill level and learning pace
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur rounded-xl border border-border shadow-card interactive-card group">
              <div className="w-12 h-12 bg-learning-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce-custom transition-all duration-300">
                <Code className="w-6 h-6 text-learning-purple" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-learning-purple transition-colors duration-300">Multi-Language Support</h3>
              <p className="text-sm text-muted-foreground text-center">
                Comprehensive resources for all major programming languages
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card/50 backdrop-blur rounded-xl border border-border shadow-card interactive-card group">
              <div className="w-12 h-12 bg-learning-green/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-bounce-custom transition-all duration-300">
                <Zap className="w-6 h-6 text-learning-green" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-learning-green transition-colors duration-300">Smart Certificates</h3>
              <p className="text-sm text-muted-foreground text-center">
                Earn verified certificates upon course completion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};