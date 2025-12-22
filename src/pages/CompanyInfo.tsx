import {
  Shield,
  MapPin,
  Clock,
  CreditCard,
  Phone,
  Mail,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompanyInfo = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Company Information</h1>
            <p className="text-xl text-muted-foreground">
              All the details you need to know about Gutter Matter Ltd
            </p>
          </div>
        </div>
      </section>

      {/* Company Details Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Business Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-primary" />
                  Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Company Name</p>
                    <p className="text-muted-foreground">Gutter Matter Ltd</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Owner</p>
                    <p className="text-muted-foreground">Mr. Stoyan Velev</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">VAT Registration</p>
                    <p className="text-muted-foreground">Not VAT Registered</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Work Types</p>
                    <p className="text-muted-foreground">Domestic & Commercial</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance & Certification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Insurance & Certification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Insurance Coverage</p>
                    <p className="text-muted-foreground">Fully insured up to £5,000,000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Checkatrade Member</p>
                    <p className="text-muted-foreground">3 Years (12 vetting checks passed)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Vetting Checks</p>
                    <p className="text-muted-foreground">ID, Address, Financials, Qualifications, CCJ, Trading History</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-primary" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Based in Tunbridge Wells, we proudly serve the following areas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tunbridge Wells</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Surrounding Kent areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-success mr-2 flex-shrink-0 mt-0.5" />
                    <span>Contact us to check if we cover your area</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Working Hours & Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-primary" />
                  Working Hours & Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Standard Hours</p>
                    <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Emergency Callout</p>
                    <p className="text-muted-foreground">24-Hour Emergency Service Available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CreditCard className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Payment Methods</p>
                    <p className="text-muted-foreground">Cash, Bank Transfer, Cards Accepted</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold mb-2">Call Us</p>
                  <a href="tel:+07586366303" className="text-primary hover:underline">
                    07586366303
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold mb-2">Email Us</p>
                  <a href="mailto:info@guttermatter.com" className="text-primary hover:underline break-all">
                    info@guttermatter.com
                  </a>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold mb-2">Location</p>
                  <p className="text-muted-foreground">Tunbridge Wells, Kent</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Trust Gutter Matter Ltd?</h2>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>Fully Insured:</strong> All work covered by comprehensive £5,000,000 insurance policy
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>Checkatrade Verified:</strong> 3 years membership with 12 comprehensive vetting checks passed
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>Free Estimates:</strong> No-obligation quotes provided for all work
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>24-Hour Emergency Service:</strong> Available for urgent repairs and callouts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-success mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">
                    <strong>Full Documentation:</strong> Every job includes photos and detailed reports
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyInfo;
