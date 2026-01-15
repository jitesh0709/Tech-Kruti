import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Monitor, Code, Database, Cpu, Terminal, FileCode } from "lucide-react";

const labs = [
  {
    name: "Software Engineering Lab",
    description: "Equipped with modern systems for software development practices, version control, and project management tools.",
    icon: Code,
  },
  {
    name: "Introduction to Data Science Lab",
    description: "Dedicated lab for hands-on experience with data analysis, visualization, and machine learning experiments.",
    icon: Database,
  },
];

const softwareTools = [
  { name: "Python", description: "Primary programming language for data science", icon: FileCode },
  { name: "VS Code", description: "Modern code editor with extensions", icon: Terminal },
  { name: "MySQL", description: "Relational database management", icon: Database },
  { name: "Eclipse", description: "Integrated development environment", icon: Code },
  { name: "Dev C++", description: "C/C++ programming environment", icon: Cpu },
  { name: "Star UML", description: "UML modeling tool", icon: Monitor },
];

const Infrastructure = () => {
  return (
    <Layout>
      <PageHeader
        title="Infrastructure & Labs"
        subtitle="State-of-the-art facilities for hands-on learning"
        badge="Our Facilities"
      />

      {/* Labs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2">Learning Spaces</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Computer Labs
            </h2>
            <p className="text-muted-foreground">
              Our labs are equipped with the latest hardware and software for practical learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {labs.map((lab, index) => (
              <div
                key={lab.name}
                className="glass-card border-glow rounded-2xl p-8 hover:glow-box transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <lab.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {lab.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {lab.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Tools Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-accent font-medium mb-2">Development Tools</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Software & Tools
            </h2>
            <p className="text-muted-foreground">
              Industry-standard tools and software available for student use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softwareTools.map((tool) => (
              <div
                key={tool.name}
                className="glass-card border-glow rounded-xl p-4 text-center hover:glow-box transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <tool.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Infrastructure;
