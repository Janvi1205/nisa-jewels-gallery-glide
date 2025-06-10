
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1543294001-f7cd5d7fb847?w=800&h=600&fit=crop',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Jewelry ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
          <span className="text-gradient">Elegance</span>
          <br />
          <span className="text-foreground">in Every Thread</span>
          <br />
          <span className="text-gradient">of Gold</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
          Discover handcrafted jewelry that blends traditional elegance with modern sophistication. 
          Each piece tells a story of artistry and passion from Germany.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg"
            className="luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium text-lg px-8 py-3"
          >
            <a href="/gallery">Explore Collection</a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-white transition-all duration-300 font-body font-medium text-lg px-8 py-3"
          >
            <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-luxury-pink rounded-full flex justify-center">
          <div className="w-1 h-3 bg-luxury-pink rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-luxury-pink scale-110' : 'bg-luxury-gray hover:bg-luxury-pink/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
