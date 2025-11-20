import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Droplets,
  Sparkles,
  Wrench,
  RotateCw,
  Home,
  PaintBucket,
  ShieldCheck,
  Camera,
  Wind,
  Building,
} from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive guttering solutions for residential and commercial properties throughout Tunbridge Wells and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              icon={Droplets}
              title="Internal Gutter Cleaning"
              description="Professional internal gutter cleaning up to 4 storeys without scaffolding. Includes inspection camera footage, before/after photos, and comprehensive report for every job."
            />
            <ServiceCard
              icon={Sparkles}
              title="External Gutter Cleaning"
              description="Thorough external gutter cleaning to remove all debris, moss, and dirt. Ensures optimal water flow and prevents overflow and water damage."
            />
            <ServiceCard
              icon={PaintBucket}
              title="Fascia & Soffit Cleaning"
              description="Professional cleaning of fascias and soffits to maintain your property's appearance and protect against rot and damage."
            />
            <ServiceCard
              icon={Wrench}
              title="Gutter Repair"
              description="Expert gutter repair services to fix leaks, damage, and misalignment. Fast, reliable repairs that extend the life of your guttering system."
            />
            <ServiceCard
              icon={RotateCw}
              title="Gutter Replacement"
              description="Complete gutter replacement and installation services. We work with all gutter types and materials to suit your property and budget."
            />
            <ServiceCard
              icon={Home}
              title="Fascia Repair"
              description="Professional fascia board repair to address damage from rot, weather, or pests. Protects your roofline and maintains structural integrity."
            />
            <ServiceCard
              icon={PaintBucket}
              title="Fascia Replacement"
              description="Complete fascia board replacement and installation. Available in uPVC and timber to match your property's aesthetic."
            />
            <ServiceCard
              icon={Wind}
              title="Soffit Repair"
              description="Expert soffit repair services to address damage and ensure proper ventilation. Prevents moisture build-up and extends roof lifespan."
            />
            <ServiceCard
              icon={Building}
              title="Soffit Replacement"
              description="Full soffit replacement and installation services. Available in various materials and finishes to complement your property."
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Gutter Guard Installation"
              description="Professional installation of gutter guards to prevent debris build-up and reduce maintenance needs. Keeps gutters flowing freely year-round."
            />
            <ServiceCard
              icon={Camera}
              title="SkyJac Inspection System"
              description="Advanced inspection camera system for thorough gutter surveys. Provides detailed visual reports of your guttering system's condition."
            />
            <ServiceCard
              icon={Building}
              title="Commercial Services"
              description="Comprehensive guttering services for commercial properties. Minimal disruption with flexible scheduling to suit your business needs."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Makes Our Services Different?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">No Scaffolding Required</h3>
                <p className="text-muted-foreground">
                  Our specialist equipment allows us to clean internal gutters up to 4 storeys without scaffolding, saving you time and money.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Full Documentation</h3>
                <p className="text-muted-foreground">
                  Every job includes before/after photos and a comprehensive report, giving you complete transparency and peace of mind.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Fully Insured Work</h3>
                <p className="text-muted-foreground">
                  All work is covered by our £5,000,000 insurance policy, protecting you and your property throughout the project.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">24-Hour Emergency Service</h3>
                <p className="text-muted-foreground">
                  Gutter emergencies don't wait for business hours. We offer 24-hour callout for urgent repairs and issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Help With Your Gutters?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get your free, no-obligation estimate today. We're here to help with all your guttering needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Request Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+07586366303">Call Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
