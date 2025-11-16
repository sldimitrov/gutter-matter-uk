import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder data - in production, these would be actual before/after images
  const galleryItems = [
    {
      id: 1,
      title: "Internal Gutter Cleaning - 4 Storey Building",
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: "Tunbridge Wells",
    },
    {
      id: 2,
      title: "Fascia & Soffit Replacement",
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: "Kent",
    },
    {
      id: 3,
      title: "Commercial Gutter Repair",
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: "Tunbridge Wells",
    },
    {
      id: 4,
      title: "Residential Gutter Installation",
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: "Kent",
    },
    {
      id: 5,
      title: "External Gutter & Fascia Clean",
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: "Tunbridge Wells",
    },
    {
      id: 6,
      title: "Gutter Guard Installation",
      before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      location: "Kent",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work Gallery</h1>
            <p className="text-xl text-muted-foreground">
              See the quality of our work through our before and after photos. Every job includes detailed documentation and photography.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative">
                  <div className="grid grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={item.before}
                        alt={`Before - ${item.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-semibold rounded">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after}
                        alt={`After - ${item.title}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-success text-background px-2 py-1 text-xs font-semibold rounded">
                        After
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          {selectedImage && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                {galleryItems.find((item) => item.id === selectedImage)?.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="mb-2 font-semibold text-destructive">Before</div>
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.before}
                    alt="Before"
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <div className="mb-2 font-semibold text-success">After</div>
                  <img
                    src={galleryItems.find((item) => item.id === selectedImage)?.after}
                    alt="After"
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Note Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Professional Documentation</h2>
            <p className="text-muted-foreground mb-6">
              Every single job we complete includes comprehensive before and after photography, along with a detailed report. This ensures complete transparency and gives you peace of mind that the work has been completed to the highest standard.
            </p>
            <p className="text-muted-foreground">
              Our SkyJac inspection camera system allows us to provide detailed visual evidence of internal gutter conditions, particularly useful for properties up to 4 storeys high.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
