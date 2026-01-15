import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                TP
              </div>
              <div>
                <h3 className="text-xl font-bold">Truvia Polyplast</h3>
                <p className="text-xs text-primary-foreground/70">Quality You Can Trust</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              We are an ISO 9001:2015 certified company manufacturing and wholesaling 
              premium quality P.T.M.T Taps, Plastic Valves, Showers, Connection Pipes & more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/ptmt-taps" className="text-primary-foreground/80 hover:text-white transition-colors">
                  PTMT Taps
                </Link>
              </li>
              <li>
                <Link to="/products/pp-taps" className="text-primary-foreground/80 hover:text-white transition-colors">
                  PP Taps
                </Link>
              </li>
              <li>
                <Link to="/products/ball-valve" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Ball Valve
                </Link>
              </li>
              <li>
                <Link to="/products/shower" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Shower & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+916353329493" className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                +91-6353329493
              </a>
              <a href="mailto:info@truviapolyplast.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                info@truviapolyplast.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Gujarat, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Truvia Polyplast. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
