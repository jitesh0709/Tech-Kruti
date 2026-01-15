import { BarChart3, Brain, Cpu, LineChart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const focusAreas = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Master the art of extracting insights from complex datasets using statistical methods and modern tools.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Build intelligent systems that learn from data and make predictions using cutting-edge algorithms.",
  },
  {
    icon: Cpu,
    title: "Internet of Things",
    description: "Connect the physical and digital worlds through smart devices and sensor networks.",
  },
  {
    icon: LineChart,
    title: "Data Visualization",
    description: "Transform raw data into compelling visual stories that drive decision-making.",
  },
];

// Scroll-based text reveal component
const ScrollTextReveal = ({ children, className = "" }: { children: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"]
  });

  const words = children.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>;
      })}
    </span>
  );
};

const Word = ({ children, progress, range }: { children: string; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [10, 0]);
  
  return (
    <motion.span 
      style={{ opacity, y }} 
      className="inline-block mr-[0.25em] will-change-transform"
    >
      {children}
    </motion.span>
  );
};

// Character-based reveal for titles
const ScrollCharReveal = ({ children, className = "" }: { children: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.4"]
  });

  const chars = children.split("");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return <Char key={i} progress={scrollYProgress} range={[start, end]}>{char}</Char>;
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: { children: string; progress: any; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [20, 0]);
  const scale = useTransform(progress, range, [0.8, 1]);
  
  return (
    <motion.span 
      style={{ opacity, y, scale }} 
      className="inline-block will-change-transform"
    >
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};

const FocusAreasSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={sectionRef} className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.p 
            className="text-primary font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Expertise
          </motion.p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <ScrollCharReveal>Focus Areas</ScrollCharReveal>
          </h2>
          <p className="text-muted-foreground">
            <ScrollTextReveal>
              Our curriculum is designed to provide comprehensive knowledge in key areas of Data Science
            </ScrollTextReveal>
          </p>
        </div>

        {/* Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group glass-card border-glow rounded-2xl p-6 md:p-8 hover:glow-box transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <area.icon className="h-7 w-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                <ScrollTextReveal>{area.title}</ScrollTextReveal>
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <ScrollTextReveal>{area.description}</ScrollTextReveal>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
