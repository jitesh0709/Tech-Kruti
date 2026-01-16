import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playSplashSequence } from "@/lib/soundEffects";

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
  enableSound?: boolean;
}

const SplashScreen = ({ onComplete, duration = 3000, enableSound = true }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLit, setIsLit] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const hasPlayedSound = useRef(false);

  // Handle user interaction to enable audio (required by browsers)
  const handleUserInteraction = () => {
    if (!soundEnabled) {
      setSoundEnabled(true);
    }
  };

  useEffect(() => {
    // Add click listener for audio unlock
    if (enableSound) {
      document.addEventListener("click", handleUserInteraction, { once: true });
      document.addEventListener("touchstart", handleUserInteraction, { once: true });
      document.addEventListener("keydown", handleUserInteraction, { once: true });
    }

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
    };
  }, [enableSound]);

  useEffect(() => {
    // Start the "light on" effect after a short delay
    const lightTimer = setTimeout(() => {
      setIsLit(true);
      
      // Play sound when lighting up
      if (enableSound && !hasPlayedSound.current) {
        hasPlayedSound.current = true;
        playSplashSequence(0.25);
      }
    }, 500);

    // Hide splash screen after duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(lightTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onComplete, enableSound]);

  const letters = "DATA SCIENCE".split("");

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden cursor-pointer"
          onClick={handleUserInteraction}
        >
          {/* Click hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLit ? 0 : 0.5 }}
            className="absolute bottom-8 text-muted-foreground text-xs tracking-wider"
          >
            Click anywhere to enable sound
          </motion.p>

          {/* Background glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isLit ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Secondary glow rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isLit ? { opacity: 0.5, scale: 1.5 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="absolute w-[400px] h-[400px] rounded-full border border-primary/20"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isLit ? { opacity: 0.3, scale: 2 } : {}}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
            className="absolute w-[400px] h-[400px] rounded-full border border-primary/10"
          />

          {/* Main text container */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            {/* DATA SCIENCE text with letter-by-letter animation */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 px-4">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    filter: "blur(10px)",
                    textShadow: "0 0 0px hsl(var(--primary))"
                  }}
                  animate={isLit ? { 
                    opacity: 1, 
                    y: 0,
                    filter: "blur(0px)",
                    textShadow: [
                      "0 0 0px hsl(var(--primary))",
                      "0 0 30px hsl(var(--primary))",
                      "0 0 60px hsl(var(--primary))",
                      "0 0 20px hsl(var(--primary))"
                    ]
                  } : {}}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: "easeOut",
                    textShadow: {
                      duration: 1.5,
                      delay: index * 0.08 + 0.3,
                      times: [0, 0.3, 0.6, 1]
                    }
                  }}
                  className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${
                    letter === " " ? "w-4 sm:w-6" : ""
                  }`}
                  style={{
                    color: isLit ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                    fontFamily: "'JetBrains Mono', 'Space Grotesk', monospace",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isLit ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-muted-foreground text-sm sm:text-base tracking-widest uppercase"
            >
              Department of CSE
            </motion.p>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isLit ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 w-48 sm:w-64 h-1 bg-muted/30 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration / 1000 - 0.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary via-primary to-primary/50 rounded-full"
                style={{
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                }}
              />
            </motion.div>
          </div>

          {/* Particle effects */}
          {isLit && (
            <>
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ 
                    opacity: 0, 
                    scale: 0,
                    x: 0,
                    y: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.5],
                    x: Math.cos((i * 30 * Math.PI) / 180) * (150 + Math.random() * 100),
                    y: Math.sin((i * 30 * Math.PI) / 180) * (150 + Math.random() * 100),
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5 + i * 0.05,
                    ease: "easeOut",
                  }}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  style={{
                    boxShadow: "0 0 10px hsl(var(--primary))",
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
