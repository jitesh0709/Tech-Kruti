import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const text = "DATA SCIENCE";
  const letters = text.split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.5, ease: "easeInOut" } as Transition,
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      } as Transition,
    },
  };

  const glowVariants: Variants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0, 1, 0.5, 1],
      scale: [0.8, 1.05, 1],
      transition: {
        duration: 1.5,
        delay: 1.2,
        ease: "easeOut",
      } as Transition,
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Radial glow effect */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            }}
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center">
            {/* Top decorative line */}
            <motion.div
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mb-8"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Main text */}
            <motion.div
              className="flex flex-wrap justify-center gap-1 sm:gap-2"
              style={{ perspective: 1000 }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider ${
                    letter === " " ? "w-4 sm:w-8" : ""
                  }`}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 50%, hsl(var(--foreground)) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 40px hsl(var(--primary) / 0.3)",
                  }}
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>


            {/* Bottom decorative line */}
            <motion.div
              className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-8"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Loading indicator */}
            <motion.div
              className="mt-12 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
