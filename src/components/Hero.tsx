import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-luxury-hotel.jpg";

const Hero = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-texture-orange"></div>
          <div className="absolute inset-0 gradient-hero opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Elevate Your Venue's
            <span className="block text-accent">
              Digital Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            We create premium mobile applications that transform how high-end country clubs, 
            hotels, and restaurants deliver exceptional experiences through innovative self-service 
            tools and community building.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Transform Your Venue
            </Button>
            <Button variant="heroOutline" size="lg" className="text-lg px-8 py-4">
              View Our Work
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;