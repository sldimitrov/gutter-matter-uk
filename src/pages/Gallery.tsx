import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import galleryGroups from "@/gallery/galleryImages";
import galleryItems from "@/gallery/galleryItems";

const Gallery = () => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);

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
                      onClick={() => setSelectedGroup(item.group)}
                  >
                    <div className="relative">
                      <img
                          src={item.front}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                      />
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
        <Dialog open={selectedGroup !== null} onOpenChange={() => setSelectedGroup(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedGroup && (
                <div className="space-y-4">
                  <DialogTitle className="text-2xl font-bold">
                    {galleryItems.find((item) => item.group === selectedGroup)?.title}
                  </DialogTitle>
                  <div className="grid md:grid-cols-2 gap-4">
                    {galleryGroups[selectedGroup].map((src, idx) => (
                        <img key={idx} src={src} alt={`Gallery ${idx}`} className="w-full rounded-lg" />
                    ))}
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
