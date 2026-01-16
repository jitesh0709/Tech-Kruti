import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Faculty", path: "/faculty" },
    { name: "Contact", path: "/contact" },
  ];

  const resources = [
    { name: "Infrastructure", path: "/infrastructure" },
    
    { name: "Gallery", path: "/gallery" },
    { name: "Vision & Mission", path: "/vision-mission" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container-custom py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 border-glow">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-semibold text-foreground">CSE - Data Science</p>
                <p className="text-xs text-muted-foreground">TGPCET</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students with cutting-edge Data Science education for a data-driven future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>+91-9922966176</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>hod.ds@tgpcet.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>TGPCET, Nagpur, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} TGPCET - CSE Data Science. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Tulsiramji Gaikwad-Patil College of Engineering & Technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
