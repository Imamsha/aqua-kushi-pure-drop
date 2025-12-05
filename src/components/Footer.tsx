import { Droplets } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-aqua-light" />
            <span className="font-serif text-xl font-bold">Aqua Kushi</span>
          </a>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="text-background/70 hover:text-background transition-colors text-sm">
              Home
            </a>
            <a href="#products" className="text-background/70 hover:text-background transition-colors text-sm">
              Products
            </a>
            <a href="#why-us" className="text-background/70 hover:text-background transition-colors text-sm">
              Why Us
            </a>
            <a href="#partner" className="text-background/70 hover:text-background transition-colors text-sm">
              Partner
            </a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © {currentYear} Aqua Kushi. All rights reserved.
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/40 text-sm">
            Premium Drinking Water • Amaravathi, Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
