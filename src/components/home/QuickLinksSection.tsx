import { Link } from "react-router-dom";
import { BookOpen, Users, Building2, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const quickLinks = [
  {
    icon: BookOpen,
    title: "Academics",
    description: "Explore our curriculum, syllabus, and program outcomes",
    path: "/academics",
    color: "primary",
  },
  {
    icon: Users,
    title: "Faculty",
    description: "Meet our experienced and dedicated faculty members",
    path: "/faculty",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    description: "Discover our state-of-the-art labs and facilities",
    path: "/infrastructure",
    color: "primary",
  },
];

const QuickLinksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={sectionRef} className="section-padding bg-card/30 relative overflow-hidden">
      {/* Parallax Background Decoration */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-primary font-medium mb-2 text-sm sm:text-base"
          >
            Quick Navigation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
          >
            Explore Our Department
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-sm sm:text-base"
          >
            Quick access to important sections of our department
          </motion.p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={link.path}
                className="group glass-card border-glow rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:glow-box transition-all duration-500 flex items-center gap-4 sm:gap-6 block"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-${link.color}/10 flex items-center justify-center flex-shrink-0 group-hover:bg-${link.color}/20 transition-colors`}
                >
                  <link.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-${link.color}`} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors relative inline-block">
                    {link.title}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                    {link.description}
                  </p>
                </div>
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex-shrink-0 hidden xs:block sm:block"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
