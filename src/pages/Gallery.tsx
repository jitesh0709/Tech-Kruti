import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Image as ImageIcon, Building2, BookOpen, Users, PartyPopper } from "lucide-react";

const galleryCategories = [
  {
    title: "Workshops",
    icon: BookOpen,
    description: "Technical workshops and hands-on training sessions",
    images: 6,
  },
  {
    title: "Industrial Visits",
    icon: Building2,
    description: "Educational visits to industry and research facilities",
    images: 8,
  },
  {
    title: "Guest Lectures",
    icon: Users,
    description: "Expert talks and knowledge sharing sessions",
    images: 5,
  },
  {
    title: "Cultural Events",
    icon: PartyPopper,
    description: "Celebrations and cultural activities",
    images: 10,
  },
];

const Gallery = () => {
  return (
    <Layout>
      <PageHeader
        title="Photo Gallery"
        subtitle="Capturing moments of learning and celebration"
        badge="Memories"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {galleryCategories.map((category) => (
              <div
                key={category.title}
                className="glass-card border-glow rounded-2xl overflow-hidden hover:glow-box transition-all duration-500 group"
              >
                {/* Placeholder Image Area */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <category.icon className="h-16 w-16 text-primary/50 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full glass-card text-xs text-muted-foreground">
                    <ImageIcon className="h-3 w-3 inline mr-1" />
                    {category.images} photos
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border-glow">
              <ImageIcon className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground text-sm">
                More photos coming soon. Stay tuned for updates!
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
