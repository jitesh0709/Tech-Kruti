import { BarChart3, Brain, Cpu, LineChart } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const FocusAreasSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
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
            Our Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4"
          >
            Focus Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-sm sm:text-base"
          >
            Our curriculum is designed to provide comprehensive knowledge in key areas of Data Science
          </motion.p>
        </motion.div>

        {/* Focus Area Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group glass-card border-glow rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:glow-box transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <area.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
