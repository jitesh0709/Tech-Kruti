import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Multidisciplinary approach combining CS, Statistics & Domain Knowledge",
  "Industry-aligned curriculum following NEP 2020 guidelines",
  "Hands-on experience with real-world projects and datasets",
  "Strong focus on practical skills and employability",
];

const AboutPreviewSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
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
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="group">
              <Link to="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card border-glow rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6 text-center hover:glow-box transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-primary mb-2">150+</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center hover:glow-box transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-accent mb-2">7+</p>
                  <p className="text-sm text-muted-foreground">Expert Faculty</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center hover:glow-box transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-primary mb-2">4+</p>
                  <p className="text-sm text-muted-foreground">Labs</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center hover:glow-box transition-all duration-300">
                  <p className="font-display text-4xl font-bold text-accent mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Industry Partners</p>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewSection;
