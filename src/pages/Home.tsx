import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TrustBadge from "@/components/TrustBadge";
import {
  Droplets,
  Wrench,
  Home as HomeIcon,
  Shield,
  Clock,
  BadgeCheck,
  Phone,
  MapPin,
  Camera,
  CheckCircle2,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Guttering Services in <span className="text-primary">Tunbridge Wells</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert gutter cleaning, repair, and installation. Fully insured up to £5,000,000 with 24-hour callout available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/contact">Get Your Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a href="tel:+441234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                <span>Free Estimates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                <span>24-Hour Callout</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-success mr-2" />
                <span>£5M Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrustBadge
              icon={Shield}
              title="Fully Insured"
              description="Protected up to £5,000,000 for complete peace of mind"
            />
            <TrustBadge
              icon={BadgeCheck}
              title="Checkatrade Approved"
              description="3 years on Checkatrade with 12 vetting checks passed"
            />
            <TrustBadge
              icon={Clock}
              title="24-Hour Callout"
              description="Emergency services available whenever you need us"
            />
            <TrustBadge
              icon={Camera}
              title="Full Reports"
              description="Before/after photos and detailed reports for every job"
            />
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guttering solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Droplets}
              title="Internal Gutter Cleaning"
              description="Up to 4 storeys without scaffolding. Complete with inspection camera, before/after photos, and full report."
            />
            <ServiceCard
              icon={Wrench}
              title="Gutter Repair & Replacement"
              description="Expert repair and replacement services for all types of guttering systems, ensuring lasting protection."
            />
            <ServiceCard
              icon={HomeIcon}
              title="Fascia & Soffit Services"
              description="Professional cleaning, repair, and replacement of fascias and soffits to protect your property."
            />
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Gutter Matter Ltd?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fully Certified & Insured</h3>
                  <p className="text-muted-foreground">
                    Comprehensive insurance coverage up to £5,000,000 and 12 Checkatrade vetting checks passed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Documentation</h3>
                  <p className="text-muted-foreground">
                    Every job includes before/after photos and a comprehensive report using our SkyJac inspection system.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Scaffolding Required</h3>
                  <p className="text-muted-foreground">
                    Internal gutter cleaning up to 4 storeys without scaffolding, saving you time and money.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24-Hour Emergency Service</h3>
                  <p className="text-muted-foreground">
                    Available for emergency callouts whenever you need us, with rapid response times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Tunbridge Wells & Surrounding Areas</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Based in Tunbridge Wells, we provide professional guttering services throughout Kent and the surrounding areas. Both domestic and commercial work undertaken.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Check If We Cover Your Area</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Get your free, no-obligation estimate today. We're here to help with all your guttering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/contact">Request Free Estimate</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://www.checkatrade.com" target="_blank" rel="noopener noreferrer">
                View Checkatrade Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
