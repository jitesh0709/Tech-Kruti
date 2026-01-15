import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Building2, BookOpen, Users, Trophy, Calendar } from "lucide-react";

const activities = [
  {
    type: "Industrial Visit",
    title: "ISRO Facility Visit",
    description: "Students visited ISRO to understand space technology and satellite data processing systems.",
    icon: Building2,
    category: "visit",
  },
  {
    type: "Industrial Visit",
    title: "Voyage Robotics",
    description: "Explored robotics and automation technologies at Voyage Robotics facility.",
    icon: Building2,
    category: "visit",
  },
  {
    type: "Workshop",
    title: "Data Analytics using Python & Seaborn",
    description: "Hands-on workshop covering data visualization and analysis techniques using Python libraries.",
    icon: BookOpen,
    category: "workshop",
  },
  {
    type: "Guest Lecture",
    title: "Industry Expert Sessions",
    description: "Regular guest lectures from industry professionals on emerging trends in data science.",
    icon: Users,
    category: "lecture",
  },
  {
    type: "Technical Event",
    title: "Technical Quiz & Forums",
    description: "Inter-departmental quizzes and technical forums to enhance knowledge and skills.",
    icon: Trophy,
    category: "event",
  },
];

const upcomingEvents = [
  { title: "Data Science Workshop", date: "Coming Soon", type: "Workshop" },
  { title: "Alumni Meet", date: "Coming Soon", type: "Event" },
  { title: "Industry Talk Series", date: "Coming Soon", type: "Lecture" },
];

const Activities = () => {
  return (
    <Layout>
      <PageHeader
        title="Activities & Events"
        subtitle="Enriching learning experiences beyond the classroom"
        badge="Campus Life"
      />

      {/* Past Activities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Recent Activities
            </h2>
            <p className="text-muted-foreground">
              Highlights from our departmental activities and events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="glass-card border-glow rounded-xl overflow-hidden hover:glow-box transition-all duration-500 hover:-translate-y-1"
              >
                <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <activity.icon className="h-12 w-12 text-primary" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {activity.type}
                  </span>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Calendar className="h-10 w-10 text-accent mx-auto mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                Stay tuned for exciting events and activities
              </p>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.title}
                  className="glass-card border-glow rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:glow-box transition-all duration-300"
                >
                  <div>
                    <h3 className="font-display font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{event.type}</p>
                  </div>
                  <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium">
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
