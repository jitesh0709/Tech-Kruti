import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Admission Enquiry",
    value: "+91-9922966176",
    link: "tel:+919922966176",
  },
  {
    icon: Phone,
    title: "HOD Contact",
    value: "+91-93739 65319",
    link: "tel:+919373965319",
  },
  {
    icon: Mail,
    title: "HOD Email",
    value: "hod.ds@tgpcet.com",
    link: "mailto:hod.ds@tgpcet.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    value: "Mon - Sat: 9:00 AM - 5:00 PM",
    link: null,
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our department"
        badge="Reach Out"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link || "#"}
                    className={`glass-card border-glow rounded-xl p-6 flex items-start gap-4 hover:glow-box transition-all duration-300 group ${
                      info.link ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                      <p className="font-display font-semibold text-foreground">
                        {info.value}
                      </p>
                    </div>
                    {info.link && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Address Card */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Visit Us
              </h2>
              <div className="glass-card border-glow rounded-2xl p-8 glow-box h-fit">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">College Address</p>
                    <p className="font-display font-semibold text-foreground mb-2">
                      Tulsiramji Gaikwad-Patil College of Engineering & Technology
                    </p>
                    <p className="text-muted-foreground">
                      Wardha Road, Nagpur - 441108<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="aspect-video rounded-xl bg-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <div className="text-center z-10">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need More Information?
            </h2>
            <p className="text-muted-foreground mb-8">
              For admission inquiries, academic information, or any other queries, 
              feel free to reach out to us. Our team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919922966176"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Phone className="h-5 w-5" />
                Call for Admissions
              </a>
              <a
                href="mailto:hod.ds@tgpcet.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-glow glass-card text-foreground font-medium hover:glow-box transition-all"
              >
                <Mail className="h-5 w-5" />
                Email HOD
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
