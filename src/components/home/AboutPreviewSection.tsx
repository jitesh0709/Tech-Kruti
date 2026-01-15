import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const highlights = [
  "Multidisciplinary approach combining CS, Statistics & Domain Knowledge",
  "Industry-aligned curriculum following NEP 2020 guidelines",
  "Hands-on experience with real-world projects and datasets",
  "Strong focus on practical skills and employability",
];

const AboutPreviewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animate border-radius from rounded to less rounded as you scroll
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 24, 24, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 md:px-8">
      <motion.div 
        className="container-custom bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden"
        style={{ 
          borderRadius, 
          scale,
          opacity
        }}
      >
        <div className="p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-medium mb-2">About the Department</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Shaping Future{" "}
                <span className="text-gradient">Data Scientists</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Department of Computer Science & Engineering - Data Science at TGPCET is dedicated 
                to nurturing professionals who can harness the power of data to drive innovation and 
                solve complex problems. Our program integrates theoretical foundations with practical 
                applications to prepare students for the evolving demands of the industry.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button asChild className="group">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Visual Element */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="glass-card border-glow rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "150+", label: "Students", color: "text-primary" },
                    { value: "7+", label: "Expert Faculty", color: "text-accent" },
                    { value: "4+", label: "Labs", color: "text-primary" },
                    { value: "10+", label: "Industry Partners", color: "text-accent" },
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="glass-card rounded-xl p-6 text-center hover:glow-box transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className={`font-display text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPreviewSection;
