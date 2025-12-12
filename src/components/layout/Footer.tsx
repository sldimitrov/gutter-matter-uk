import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gutter Matter Ltd</h3>
            <p className="text-background/80 text-sm mb-4">
              Professional guttering services in Tunbridge Wells and surrounding areas. Fully insured up to £5,000,000.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/guttermatter" target="_blank" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-background/80 hover:text-background transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Gutter Cleaning</li>
              <li>Gutter Repair & Replacement</li>
              <li>Fascia & Soffit Services</li>
              <li>Gutter Guard Installation</li>
              <li>Commercial Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 text-background/80" />
                <span className="text-background/80">Tunbridge Wells, Kent</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-background/80" />
                <a href="tel:+07586366303" className="text-background/80 hover:text-background transition-colors">
                  07586366303
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-background/80" />
                <a href="mailto:info@guttermatter.co.uk" className="text-background/80 hover:text-background transition-colors">
                  info@guttermatter.co.uk
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0 text-background/80" />
                <span className="text-background/80">24-Hour Callout Available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/80">
          <p>&copy; {new Date().getFullYear()} Gutter Matter Ltd. All rights reserved. VAT Registered. Fully Insured to £5,000,000.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
