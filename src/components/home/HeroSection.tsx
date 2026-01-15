import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Users, Calendar, BookOpen, Sparkles, BarChart3, PieChart, TrendingUp, Database, Cpu, Binary, Network, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import SplashButton from "@/components/ui/SplashButton";
import { HoverButton } from "@/components/ui/hover-glow-button";
const HeroSection = () => {
  const navigate = useNavigate();
  
  const stats = [
    { icon: Calendar, label: "Established", value: "2021" },
    { icon: Users, label: "Intake Capacity", value: "150" },
    { icon: BookOpen, label: "Programs", value: "B.Tech" },
    { icon: Sparkles, label: "Focus Areas", value: "4+" },
  ];

  // Floating icons configuration
  const floatingIcons = [
    { Icon: BarChart3, x: "10%", y: "20%", delay: 0, duration: 6 },
    { Icon: PieChart, x: "85%", y: "15%", delay: 1, duration: 7 },
    { Icon: TrendingUp, x: "75%", y: "70%", delay: 2, duration: 5 },
    { Icon: Database, x: "15%", y: "75%", delay: 0.5, duration: 8 },
    { Icon: Cpu, x: "90%", y: "45%", delay: 1.5, duration: 6 },
    { Icon: Binary, x: "5%", y: "50%", delay: 2.5, duration: 7 },
    { Icon: Network, x: "50%", y: "85%", delay: 3, duration: 5 },
    { Icon: BrainCircuit, x: "60%", y: "10%", delay: 0.8, duration: 6 },
  ];

  // Particles configuration
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" />
      
      {/* Floating Data Visualization Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, duration }, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.15, 0.4, 0.15],
            scale: [0.8, 1.1, 0.8],
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: duration,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="h-8 w-8 md:h-12 md:w-12 text-primary/30" />
        </motion.div>
      ))}

      {/* Particle Effects */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            y: [0, -50, -100],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          left: "30%",
          top: "40%",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)",
          right: "20%",
          bottom: "30%",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
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
            <HoverButton 
              onClick={() => navigate('/about')}
              glowColor="#ef4444"
              backgroundColor="hsl(var(--primary))"
              textColor="hsl(var(--primary-foreground))"
              hoverTextColor="hsl(var(--primary-foreground))"
              className="group glow-box flex items-center gap-2"
            >
              Explore Department
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </HoverButton>
            <HoverButton 
              onClick={() => navigate('/contact')}
              glowColor="#ef4444"
              backgroundColor="transparent"
              textColor="hsl(var(--foreground))"
              hoverTextColor="#ef4444"
              className="border-glow"
            >
              Contact Us
            </HoverButton>
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
