"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text?: string;
    className?: string;
    shadowColors?: {
        first?: string;
        second?: string;
        third?: string;
        fourth?: string;
        glow?: string;
    };
}

export function TextRewind({
    text = "LINE",
    className = "",
    shadowColors = {
        first: "#07bccc",
        second: "#e601c0",
        third: "#e9019a",
        fourth: "#f40468",
        glow: "#f40468",
    },
}: AnimatedTextProps) {
    const textShadowStyle = {
        textShadow: `10px 10px 0px ${shadowColors.first}, 
                     15px 15px 0px ${shadowColors.second}, 
                     20px 20px 0px ${shadowColors.third}, 
                     25px 25px 0px ${shadowColors.fourth}, 
                     45px 45px 10px ${shadowColors.glow}`,
    };

    const noShadowStyle = {
        textShadow: "none",
    };

    return (
        <div className={cn("flex items-center justify-center", className)}>
            <motion.h1
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase tracking-wider"
                style={textShadowStyle}
                animate={{
                    ...noShadowStyle,
                    transition: { duration: 0.5 },
                }}
                whileInView={{
                    ...textShadowStyle,
                    transition: { duration: 0.5 },
                }}
            >
                {text}
            </motion.h1>
        </div>
    );
}
