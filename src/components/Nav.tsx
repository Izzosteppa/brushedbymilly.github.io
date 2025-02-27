import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Nav() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-[#8B4513]">
            Brushed by Milly
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Gallery
            </a>
            <a href="#policy" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Policy
            </a>
            <a href="#booking" className="text-[#8B4513] hover:text-[#C71585] transition-colors">
              Book Now
            </a>
            <Button
              className="bg-[#C71585] hover:bg-[#C71585]/90 text-white"
              onClick={() => window.open("https://wa.me/+27676883050", "_blank")}
            >
              WhatsApp Booking
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#services" className="text-lg">
                  Services
                </a>
                <a href="#gallery" className="text-lg">
                  Gallery
                </a>
                <a href="#policy" className="text-lg">
                  Policy
                </a>
                <a href="#booking" className="text-lg">
                  Book Now
                </a>
                <Button
                  className="bg-[#C71585] hover:bg-[#C71585]/90 text-white w-full"
                  onClick={() => window.open("https://wa.me/+27676883050", "_blank")}
                >
                  WhatsApp Booking
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}