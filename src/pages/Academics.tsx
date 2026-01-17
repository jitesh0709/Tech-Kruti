import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Target, Award, FileText, ExternalLink } from "lucide-react";

const peos = [
  {
    id: "PEO1",
    title: "Technical Excellence",
    description: "Graduates will demonstrate strong technical knowledge and problem-solving skills in data science and related fields.",
  },
  {
    id: "PEO2",
    title: "Professional Growth",
    description: "Graduates will pursue professional development and adapt to evolving technologies and industry practices.",
  },
  {
    id: "PEO3",
    title: "Leadership & Ethics",
    description: "Graduates will exhibit leadership qualities and ethical responsibility in their professional endeavors.",
  },
  {
    id: "PEO4",
    title: "Societal Contribution",
    description: "Graduates will contribute to society through innovative solutions and sustainable practices.",
  },
];

const psos = [
  {
    id: "PSO1",
    title: "Data Analysis",
    description: "Apply statistical and machine learning techniques to analyze and interpret complex datasets.",
  },
  {
    id: "PSO2",
    title: "System Design",
    description: "Design and implement data-driven systems and applications using modern tools and technologies.",
  },
  {
    id: "PSO3",
    title: "Research & Innovation",
    description: "Conduct research and develop innovative solutions for real-world problems using data science methodologies.",
  },
];

const pos = [
  "Engineering Knowledge",
  "Problem Analysis",
  "Design/Development of Solutions",
  "Conduct Investigations",
  "Modern Tool Usage",
  "Engineer and Society",
  "Environment and Sustainability",
  "Ethics",
];

const syllabusLinks = [
  { semester: "Semester III", year: "Second Year" },
  { semester: "Semester IV", year: "Second Year" },
  { semester: "Semester V", year: "Third Year" },
  { semester: "Semester VI", year: "Third Year" },
  { semester: "Semester VII", year: "Fourth Year" },
  { semester: "Semester VIII", year: "Fourth Year" },
];

const Academics = () => {
  return (
    <Layout>
      <PageHeader
        title="Academics"
        subtitle="Comprehensive curriculum designed for industry-ready professionals"
        badge="B.Tech CSE - Data Science"
        backgroundKey="academics"
      />

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="peo" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
              <TabsTrigger 
                value="peo" 
                className="glass-card border-glow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                <Target className="h-4 w-4 mr-2" />
                PEOs
              </TabsTrigger>
              <TabsTrigger 
                value="pso"
                className="glass-card border-glow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                <Award className="h-4 w-4 mr-2" />
                PSOs
              </TabsTrigger>
              <TabsTrigger 
                value="po"
                className="glass-card border-glow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                POs
              </TabsTrigger>
              <TabsTrigger 
                value="syllabus"
                className="glass-card border-glow data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
              >
                <FileText className="h-4 w-4 mr-2" />
                Syllabus
              </TabsTrigger>
            </TabsList>

            <TabsContent value="peo" className="mt-0">
              <div className="glass-card border-glow rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Program Educational Objectives
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {peos.map((peo) => (
                    <div key={peo.id} className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                        {peo.id}
                      </span>
                      <h4 className="font-display font-semibold text-foreground mb-2">{peo.title}</h4>
                      <p className="text-muted-foreground text-sm">{peo.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pso" className="mt-0">
              <div className="glass-card border-glow rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Program Specific Outcomes
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {psos.map((pso) => (
                    <div key={pso.id} className="glass-card rounded-xl p-6 hover:glow-box transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-3">
                        {pso.id}
                      </span>
                      <h4 className="font-display font-semibold text-foreground mb-2">{pso.title}</h4>
                      <p className="text-muted-foreground text-sm">{pso.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="po" className="mt-0">
              <div className="glass-card border-glow rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Program Outcomes
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {pos.map((po, index) => (
                    <div key={po} className="glass-card rounded-xl p-4 hover:glow-box transition-all duration-300 text-center">
                      <span className="text-2xl font-bold text-primary">PO{index + 1}</span>
                      <p className="text-muted-foreground text-sm mt-2">{po}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="syllabus" className="mt-0">
              <div className="glass-card border-glow rounded-2xl p-6 md:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  RTMNU Syllabus (NEP 2020)
                </h3>
                <p className="text-muted-foreground mb-6">
                  Access semester-wise syllabus for B.Tech CSE - Data Science
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {syllabusLinks.map((item) => (
                    <button
                      key={item.semester}
                      className="glass-card rounded-xl p-4 hover:glow-box transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-display font-semibold text-foreground">{item.semester}</p>
                          <p className="text-sm text-muted-foreground">{item.year}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Honors & Minors:</strong> Students can opt for 
                    Honors in Data Science or Minor degrees in related disciplines as per RTMNU guidelines.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
