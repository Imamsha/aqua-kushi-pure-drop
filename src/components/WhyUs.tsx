import { motion } from "framer-motion";
import { Shield, Droplets, Truck, Award, Leaf, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Ultra-Pure Quality",
    description: "Multi-stage purification process ensuring the highest standards of water purity and safety.",
  },
  {
    icon: Droplets,
    title: "Fresh & Clean",
    description: "Sourced and processed daily to deliver the freshest drinking water to your doorstep.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Consistent and timely delivery across Amaravathi and surrounding areas.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "Meeting all regulatory standards and quality certifications for packaged drinking water.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "Committed to sustainable practices and environmentally responsible packaging.",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Quick response and availability for both regular orders and emergency supplies.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,hsl(var(--aqua-pale))_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,hsl(var(--aqua-pale))_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trust in Every <span className="text-gradient">Drop</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the difference with Aqua Kushi — where quality meets convenience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-500 border border-border hover:border-primary/20">
                {/* Icon */}
                <div className="relative w-14 h-14 mb-6">
                  <div className="absolute inset-0 bg-secondary rounded-xl transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
