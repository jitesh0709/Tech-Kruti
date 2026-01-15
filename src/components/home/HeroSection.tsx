import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, BookOpen, Sparkles } from "lucide-react";
import SplashButton from "@/components/ui/SplashButton";

const HeroSection = () => {
  const stats = [
    { icon: Calendar, label: "Established", value: "2021" },
    { icon: Users, label: "Intake Capacity", value: "150" },
    { icon: BookOpen, label: "Programs", value: "B.Tech" },
    { icon: Sparkles, label: "Focus Areas", value: "4+" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(hsl(217 33% 17% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 33% 17% / 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-glow mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Tulsiramji Gaikwad-Patil College of Engineering & Technology</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Computer Science &</span>
            <br />
            <span className="text-gradient glow-text">Data Science</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Empowering the next generation of data scientists with cutting-edge education in 
            <span className="text-foreground"> Analytics</span>, 
            <span className="text-foreground"> Machine Learning</span>, 
            <span className="text-foreground"> IoT</span>, and 
            <span className="text-foreground"> Data Visualization</span>.
          </p>

          {/* Splash Button */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <SplashButton />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="group glow-box">
              <Link to="/about">
                Explore Department
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-glow hover:bg-secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card border-glow rounded-xl p-4 md:p-6 hover:glow-box transition-all duration-300"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
