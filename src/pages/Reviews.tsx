import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Tunbridge Wells",
      rating: 5,
      text: "Excellent service from start to finish. The team cleaned our gutters without scaffolding and provided detailed photos of the work. Very professional and reasonably priced.",
      date: "March 2025",
    },
    {
      id: 2,
      name: "James Roberts",
      location: "Kent",
      rating: 5,
      text: "I was impressed by the thorough inspection and report provided. They identified issues I wasn't aware of and fixed them promptly. The peace of mind from their £5M insurance is invaluable.",
      date: "February 2025",
    },
    {
      id: 3,
      name: "Emily Thompson",
      location: "Tunbridge Wells",
      rating: 5,
      text: "Emergency callout on a Sunday evening when our gutter was overflowing. They arrived within 2 hours and resolved the issue completely. Couldn't recommend them more highly!",
      date: "January 2025",
    },
    {
      id: 4,
      name: "David Clarke",
      location: "Kent",
      rating: 5,
      text: "Professional fascia and soffit replacement. The team was punctual, tidy, and the quality of work is outstanding. Free estimate was accurate with no hidden costs.",
      date: "December 2024",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      location: "Tunbridge Wells",
      rating: 5,
      text: "Gutter Matter cleaned our commercial building's gutters with minimal disruption to our business. The before and after photos showed just how much debris they removed. Excellent value.",
      date: "November 2024",
    },
    {
      id: 6,
      name: "Michael Brown",
      location: "Kent",
      rating: 5,
      text: "Stoyan and his team installed gutter guards on our property. They explained everything clearly and the installation was completed quickly. No more blocked gutters!",
      date: "October 2024",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-muted-foreground mb-8">
              See what our customers say about our professional guttering services
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-8 h-8 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-2xl font-semibold">9.9 Average Rating on Checkatrade</p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Checkatrade Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Verified on Checkatrade</h2>
            <p className="text-xl text-muted-foreground mb-8">
              All our reviews are verified by Checkatrade, giving you complete confidence in their authenticity. We've been a trusted Checkatrade member for 3 years and have passed all 12 vetting checks.
            </p>
            <div className="bg-background p-8 rounded-lg inline-block">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-12 h-12 fill-primary text-primary" />
                <span className="text-4xl font-bold">9.9</span>
              </div>
              <p className="text-muted-foreground mb-4">Based on verified Checkatrade reviews</p>
              <a
                href="https://www.checkatrade.com/trades/guttermatterltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold inline-block"
              >
                View Our Full Checkatrade Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join our many satisfied customers throughout Tunbridge Wells and surrounding areas
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
