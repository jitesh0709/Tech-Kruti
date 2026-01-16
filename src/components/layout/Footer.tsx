import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container-custom py-8 sm:py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-2 rounded-lg bg-primary/10 border-glow"
              >
                <GraduationCap className="h-6 w-6 text-primary" />
              </motion.div>
              <div>
                <p className="font-display font-semibold text-foreground">CSE - Data Science</p>
                <p className="text-xs text-muted-foreground">TGPCET</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students with cutting-edge Data Science education for a data-driven future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.path}>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: "+91-9922966176" },
                { icon: Mail, text: "hod.ds@tgpcet.com" },
                { icon: MapPin, text: "TGPCET, Nagpur, Maharashtra" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <item.icon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} TGPCET - CSE Data Science. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Tulsiramji Gaikwad-Patil College of Engineering & Technology
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
