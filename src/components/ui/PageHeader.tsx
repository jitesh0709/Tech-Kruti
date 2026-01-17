import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Import all header backgrounds
import aboutBg from "@/assets/headers/about-bg.jpg";
import facultyBg from "@/assets/headers/faculty-bg.jpg";
import academicsBg from "@/assets/headers/academics-bg.jpg";

// Background mapping for different pages
const backgroundImages: Record<string, string> = {
  about: aboutBg,
  faculty: facultyBg,
  academics: academicsBg,
};

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundKey?: keyof typeof backgroundImages;
}

const PageHeader = ({ title, subtitle, badge, backgroundKey }: PageHeaderProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.75, 0.9]);

  const backgroundImage = backgroundKey ? backgroundImages[backgroundKey] : null;

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Parallax Background Image */}
      {backgroundImage && (
        <motion.div 
          className="absolute inset-0 -inset-y-10"
          style={{ y: bgY, scale: bgScale }}
        >
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
      
      {/* Smooth Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background"
        style={{ opacity: backgroundImage ? overlayOpacity : 1 }}
      />
      
      {/* Radial overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,transparent_0%,hsl(var(--background))_70%)]" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" 
        style={{ y: bgY }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" 
        style={{ y: bgY }}
      />
      
      <motion.div 
        className="container-custom relative z-10"
        style={{ y: contentY }}
      >
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-glow mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">{badge}</span>
            </div>
          )}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default PageHeader;
