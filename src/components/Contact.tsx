import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Amaravathi, Andhra Pradesh", "India"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 98765 43211"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Sat: 8:00 AM - 8:00 PM", "Sunday: 9:00 AM - 5:00 PM"],
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-secondary/20 relative overflow-hidden"
    >
      {/* Background blur / gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-2 md:px-0">
            Ready to order or have questions? Reach out to us on WhatsApp for
            the fastest response.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* ℹ Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-5 sm:p-6 bg-card rounded-2xl shadow-soft border border-border items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p
                        key={detail}
                        className="text-muted-foreground text-sm sm:text-base"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* 📱 WhatsApp CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <div className="w-full bg-card rounded-3xl p-6 sm:p-8 md:p-10 shadow-card border border-border text-center">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-lg">
                  <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
                  Quick Order via WhatsApp
                </h3>

                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  The fastest way to place an order or make inquiries. Message
                  us and we’ll respond within minutes!
                </p>

                <div className="space-y-4">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full py-5 text-base sm:text-lg"
                    asChild
                  >
                    <a
                      href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20Aqua%20Kushi%20water"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
                      </svg>
                      Message on WhatsApp
                    </a>
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    Or call us directly:{" "}
                    <a
                      href="tel:+919876543210"
                      className="text-primary hover:underline font-medium"
                    >
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
