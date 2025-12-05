import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-aqua-pale via-background to-background" />

      {/* Animated Water Circles */}
      <div className="absolute top-1/3 left-1/4 w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-aqua-light/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute top-1/2 right-1/3 w-40 h-40 md:w-56 md:h-56 bg-accent/15 rounded-full blur-2xl animate-wave" />

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground
                       text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <Droplets className="h-4 w-4" />
            Premium Drinking Water from Amaravathi
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Pure Water, <span className="text-gradient">Pure Life</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            Ultra-pure drinking water crafted for safety, freshness, and trust.
            Available in 250ml, 500ml, and 1L bottles — perfect for homes,
            offices, and events.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20Aqua%20Kushi%20water"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {/* WhatsApp Icon */}
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
                </svg>
                Order on WhatsApp
              </a>
            </Button>

            <Button variant="glass" size="xl" asChild>
              <a href="#products">View Products</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
