import { BarChart3, Brain, Cpu, LineChart } from "lucide-react";

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

const FocusAreasSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-primary font-medium mb-2">Our Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Focus Areas
          </h2>
          <p className="text-muted-foreground">
            Our curriculum is designed to provide comprehensive knowledge in key areas of Data Science
          </p>
        </div>

        {/* Focus Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <div
              key={area.title}
              className="group glass-card border-glow rounded-2xl p-6 md:p-8 hover:glow-box transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <area.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
