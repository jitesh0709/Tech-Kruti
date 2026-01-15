import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Eye, Target, Lightbulb, Users, BookOpen, Rocket } from "lucide-react";

const missions = [
  {
    icon: BookOpen,
    title: "Strong Foundations",
    description: "Build strong foundations in Data Science with professionalism and integrity",
  },
  {
    icon: Users,
    title: "Industry-Ready Ecosystem",
    description: "Create industry-ready learning ecosystems through collaboration with leading companies",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Encourage research, innovation, and entrepreneurship among students and faculty",
  },
  {
    icon: Rocket,
    title: "Lifelong Learning",
    description: "Promote lifelong learning and continuous professional development",
  },
];

const VisionMission = () => {
  return (
    <Layout>
      <PageHeader
        title="Vision & Mission"
        subtitle="Our commitment to excellence in Data Science education"
        badge="Our Purpose"
      />

      {/* Vision Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card border-glow rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    Our Vision
                  </h2>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                  "To emerge as a Centre of Excellence in Data Science, nurturing expertise in 
                  analytics and machine learning for national development."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-6">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              We are committed to achieving excellence through these core pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missions.map((mission, index) => (
              <div
                key={mission.title}
                className="glass-card border-glow rounded-2xl p-6 md:p-8 hover:glow-box transition-all duration-500 flex gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <mission.icon className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMission;
