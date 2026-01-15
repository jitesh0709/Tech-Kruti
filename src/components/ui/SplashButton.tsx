import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleEffect {
  id: number;
  x: number;
  y: number;
}

const SplashButton = () => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: RippleEffect = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={createRipple}
      className="relative overflow-hidden px-8 py-4 rounded-2xl font-display font-semibold text-lg transition-all duration-300 group"
      style={{
        background: "linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(199 89% 48%) 100%)",
        boxShadow: "0 0 40px hsl(217 91% 60% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.2)",
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 60px hsl(217 91% 60% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.2) 50%, transparent 100%)",
          transform: "skewX(-20deg)",
        }}
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      {/* Ripple effects */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              background: "radial-gradient(circle, hsl(0 0% 100% / 0.4) 0%, transparent 70%)",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Particle effects on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/60"
            style={{
              left: `${15 + i * 15}%`,
              bottom: "20%",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-3 text-white">
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        </motion.span>
        <span className="tracking-wide">Data Science</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </span>

      {/* Border glow */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: "1px solid hsl(0 0% 100% / 0.2)",
          boxShadow: "inset 0 0 20px hsl(217 91% 60% / 0.2)",
        }}
      />
    </motion.button>
  );
};

export default SplashButton;
