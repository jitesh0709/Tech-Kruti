import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { CheckCircle, Briefcase, GraduationCap, Target } from "lucide-react";

const skills = [
  "Analytics & Visualization",
  "Machine Learning Algorithms",
  "Internet of Things (IoT)",
  "Decision-making Systems",
  "Statistical Analysis",
  "Big Data Processing",
];

const careerRoles = [
  {
    title: "Data Scientist",
    description: "Extract insights and build predictive models from complex datasets",
    icon: Target,
  },
  {
    title: "Data Analyst",
    description: "Analyze data to support business decisions and strategy",
    icon: Briefcase,
  },
  {
    title: "ML Engineer",
    description: "Design and deploy machine learning systems at scale",
    icon: GraduationCap,
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About the Department"
        subtitle="Learn about our multidisciplinary approach to Data Science education"
        badge="CSE - Data Science"
      />

      {/* Text Reveal Section */}
      <section className="relative">
        <TextRevealByWord
          text="Data Science is a multidisciplinary field that unifies statistics, data analysis, machine learning, and related methods to understand and analyze actual phenomena with data. It involves extracting knowledge and insights from structured and unstructured data."
          className="z-10"
        />
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Skills You'll Develop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 glass-card border-glow rounded-xl p-4 hover:glow-box transition-all duration-300"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-medium mb-2">Career Paths</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Future Awaits
            </h2>
            <p className="text-muted-foreground">
              Our graduates are prepared for high-demand roles in the data science industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {careerRoles.map((role) => (
              <div
                key={role.title}
                className="glass-card border-glow rounded-2xl p-8 text-center hover:glow-box transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <role.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {role.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
