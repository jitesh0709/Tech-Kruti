import { Link } from "react-router-dom";
import { BookOpen, Users, Building2, ArrowRight } from "lucide-react";

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
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2 text-sm sm:text-base">Quick Navigation</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Explore Our Department
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Quick access to important sections of our department
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group glass-card border-glow rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:glow-box transition-all duration-500 flex items-center gap-4 sm:gap-6"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-${link.color}/10 flex items-center justify-center flex-shrink-0 group-hover:bg-${link.color}/20 transition-colors`}>
                <link.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-${link.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                  {link.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0 hidden xs:block sm:block" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
