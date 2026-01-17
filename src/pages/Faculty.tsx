import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { Crown, GraduationCap, Mail } from "lucide-react";
const facultyData = [{
  name: "Prof. Nilesh Nagrale",
  qualification: "B.E., M.Tech, Ph.D*",
  designation: "Professor & HOD",
  isHOD: true,
  joiningDate: "2021"
}, {
  name: "Prof. Renuka Naukarkar",
  qualification: "M.Tech (CSE)",
  designation: "Assistant Professor",
  isHOD: false,
  joiningDate: "2021"
}, {
  name: "Prof. Premlata Shahare",
  qualification: "M.E. (CSE)",
  designation: "Assistant Professor",
  isHOD: false,
  joiningDate: "2021"
}, {
  name: "Prof. Pooja Pimpalshende",
  qualification: "B.E., M.Tech, Ph.D*",
  designation: "Assistant Professor",
  isHOD: false,
  joiningDate: "2022"
}, {
  name: "Prof. Ujwala Khartad",
  qualification: "B.E., M.Tech",
  designation: "Assistant Professor",
  isHOD: false,
  joiningDate: "2022"
}, {
  name: "Prof. Gajanan Jaybhaye",
  qualification: "B.Tech, M.Tech",
  designation: "Assistant Professor",
  isHOD: false,
  joiningDate: "2023"
}, {
  name: "Dr. Suhashini Chaurasia",
  qualification: "MCA, Ph.D (CS)",
  designation: "Assistant Professor",
  isHOD: false,
  joiningDate: "2023"
}];
const Faculty = () => {
  const hod = facultyData.find(f => f.isHOD);
  const otherFaculty = facultyData.filter(f => !f.isHOD);
  return <Layout>
      <PageHeader title="Our Faculty" subtitle="Meet our dedicated team of educators and researchers" badge="Expert Mentors" />

      {/* Faculty Introduction Text Reveal */}
      <section className="relative">
        <TextRevealByWord text="Our dedicated faculty brings together expertise in data science, machine learning, and cutting-edge research to guide the next generation of data scientists." className="z-10" />
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* HOD Section */}
          {hod && <div className="mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Crown className="h-6 w-6 text-primary" />
                Head of Department
              </h2>
              <div className="glass-card border-glow rounded-2xl p-8 md:p-10 glow-box max-w-2xl">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                      {hod.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">{hod.designation}</p>
                    <p className="text-muted-foreground mb-4">{hod.qualification}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        hod.ds@tgpcet.com
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">
                        Since {hod.joiningDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

          {/* Faculty Grid */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              Faculty Members
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherFaculty.map((faculty, index) => <div key={faculty.name} className="glass-card border-glow rounded-xl p-6 hover:glow-box transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-7 w-7 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-foreground truncate">
                        {faculty.name}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-2">{faculty.qualification}</p>
                      <span className="inline-block px-2 py-0.5 rounded text-xs bg-secondary text-muted-foreground">
                        Joined {faculty.joiningDate}
                      </span>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Faculty;