import { Badge, Shield, Award, Users, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo.tsx";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <Seo
        title="About Gutter Matter Ltd | Tunbridge Wells Guttering Experts"
        description="Gutter Matter Ltd is a Checkatrade-approved guttering company in Tunbridge Wells, serving Kent and London. Fully insured to £5m, domestic and commercial."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Gutter Matter Ltd</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for professional gutters and windows cleaning  services
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  At Gutter Matter Ltd, we’re proud to be a family-run business built on trust, hard work, and doing the job right the first time.
                </p>
                <p className="text-muted-foreground mb-2">
                  Led by Stoyan Velev, our company is guided by traditional values — honesty, reliability, and genuine pride in every piece of work we carry out. We believe in straightforward advice, fair pricing, and treating every customer with respect.
                </p>
                <p className="text-muted-foreground mb-2">
                  We specialise in all aspects of guttering, from routine cleaning to full fascia, soffit, and gutter repairs or replacements. Alongside this, we also provide professional window cleaning and conservatory cleaning, helping you keep your entire property looking its best.
                </p>
                <p className="text-muted-foreground mb-2">
                  Every home and building is treated with the same care and attention we would give our own. Clean, tidy workmanship and clear communication come as standard.
                </p>
                <p className="text-muted-foreground mb-2">
                  Over the past three years on Checkatrade, we’ve worked hard to earn a strong reputation for reliability and quality. After successfully passing 12 comprehensive vetting checks, we’re proud to be recognised as a trusted specialist.
                </p>
                <p className="text-muted-foreground mb-2">
                  We also provide professional internal gutter cleaning for residential and commercial properties - safely completed without the need for scaffolding. Every job includes before-and-after photos and a full report, giving you complete peace of mind.
                </p>
                <p className="text-muted-foreground">
                  For us, it’s not just about gutters — it’s about looking after our community, one property at a time.
                </p>
              </div>
              <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Our Credentials</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Owner:</strong> Mr. Stoyan Velev</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Checkatrade Member:</strong> 3 Years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Insurance:</strong> Fully Insured up to £5,000,000</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Vetting Checks:</strong> Passed 12 Checkatrade checks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Work Type:</strong> Domestic & Commercial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                    <span><strong>Availability:</strong> 24-Hour Emergency Callout</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-muted-foreground">
                We prioritise safety in every job, with comprehensive insurance and proper equipment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Work</h3>
              <p className="text-muted-foreground">
                We deliver exceptional workmanship on every project, big or small.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                We turn up on time and complete work as promised, every single time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                Clear communication, fair pricing, and detailed reports for complete peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Checkatrade Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">Checkatrade Approved</h2>
              <p className="text-center text-muted-foreground mb-8">
                We've passed 12 comprehensive Checkatrade vetting checks covering everything from identity verification to financial checks, qualifications, and trading history. This gives you complete confidence in our services.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Vetting Checks Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Years on Checkatrade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">£5M</div>
                  <div className="text-sm text-muted-foreground">Insurance Coverage</div>
                </div>
              </div>
              <div className="text-center">
                <a
                  href="https://www.checkatrade.com/trades/guttermatterltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline font-semibold"
                >
                  View Our Checkatrade Profile →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
