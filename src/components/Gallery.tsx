import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "src/images/WhatsApp Image 2025-02-24 at 23.33.10 (1).jpeg",
    alt: "French tip nails with pink floral design",
    description: "French tip with delicate pink floral accents"
  },
  {
    id: 2,
    src: "src/images/WhatsApp Image 2025-02-24 at 23.33.10 (3).jpeg",
    alt: "Red nails with pink accent nails featuring rhinestones",
    description: "Bold red with rhinestone-adorned pink accent nails"
  },
  {
    id: 3,
    src: "src/images/WhatsApp Image 2025-02-24 at 23.33.10 (4).jpeg",
    alt: "Yellow nails with pink floral design",
    description: "Pink French tips with elegant swirl pattern"
  },
  {
    id: 4,
    src: "src/images/WhatsApp Image 2025-02-24 at 23.33.10.jpeg",
    alt: "Natural French tip design",
    description: "Classic Buff & Shine with design"
  },
  {
    id: 5,
    src: "src/images/WhatsApp Image 2025-02-24 at 23.33.11.jpeg",
    alt: "Pink nails with white tips and swirl design",
    description: "Pink & White French tips"
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-16 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#8B4513] mb-12">Our Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Each design is customized to your preferences. These are just a few examples of our work.
            Book an appointment to discuss your dream nail design!
          </p>
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-transparent border-none">
            {selectedImage !== null && (
              <div className="relative">
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                  <p className="font-medium">{galleryImages[selectedImage].description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}