import { motion } from "framer-motion";
import { Check, Droplet } from "lucide-react";
import { Button } from "./ui/button";

const products = [
  {
    size: "250ml",
    name: "Mini",
    description: "Perfect for on-the-go hydration",
    features: ["Portable size", "Event-friendly", "Travel companion"],
    idealFor: "Events, Meetings & Travel",
    delay: 0,
  },
  {
    size: "500ml",
    name: "Classic",
    description: "The everyday essential",
    features: ["Daily hydration", "Office friendly", "Gym partner"],
    idealFor: "Office, Gym & Daily Use",
    popular: true,
    delay: 0.1,
  },
  {
    size: "1 Litre",
    name: "Family",
    description: "Ideal for home and gatherings",
    features: ["Family size", "Value pack", "Bulk orders"],
    idealFor: "Home, Family & Bulk Supply",
    delay: 0.2,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="text-gradient">Perfect Size</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Premium packaged drinking water in three convenient sizes, crafted for every occasion.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <motion.div
              key={product.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: product.delay }}
              className={`relative group ${product.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="gradient-cta text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${
                  product.popular
                    ? "bg-card shadow-card border-2 border-primary/20"
                    : "bg-card/80 shadow-soft hover:shadow-card border border-border"
                } group-hover:scale-[1.02]`}
              >
                {/* Water Drop Icon */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-aqua-pale rounded-full" />
                  <div className="absolute inset-2 bg-gradient-to-b from-aqua-light to-aqua-medium rounded-full flex items-center justify-center shadow-glow">
                    <Droplet className="h-8 w-8 text-primary-foreground" fill="currentColor" />
                  </div>
                </div>

                {/* Size Badge */}
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-gradient">{product.size}</span>
                </div>

                {/* Name & Description */}
                <h3 className="font-serif text-2xl font-semibold text-center mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-center text-sm mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="text-center pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Ideal for</span>
                  <p className="text-sm font-medium mt-1">{product.idealFor}</p>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    variant={product.popular ? "hero" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <a
                      href={`https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20order%20${product.size}%20Aqua%20Kushi%20water`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
