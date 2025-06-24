import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2069&auto=format&fit=crop',  // Gold necklace with diamonds
    'https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=2067&auto=format&fit=crop',  // Ring collection
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop',  // Elegant bracelet
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-luxury-pink rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Background Carousel with Enhanced Transitions */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-40 scale-105' 
                : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={image}
              alt={`Jewelry ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black/80"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-luxury-black/20 to-luxury-black/40"></div>
      </div>

      {/* Main Content with Staggered Animations */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Removing the Decorative Elements */}
        <div className={`transition-all duration-1500 mb-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
            <span className="block text-gradient animate-shimmer mb-4">Elegance</span>
            <span className="block text-luxury-white mb-4">in Every Thread</span>
            <span className="block text-gradient-alt">of Gold</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1500 delay-500 mb-12 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-luxury-white/90 max-w-3xl mx-auto font-body leading-relaxed">
            Discover handcrafted jewelry that blends traditional elegance with modern sophistication. 
            Each piece tells a story of artistry and passion from <span className="text-luxury-pink font-semibold">Germany</span>.
          </p>
        </div>

        <div className={`flex justify-center items-center transition-all duration-1500 delay-1000 mb-16 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button 
            asChild
            size="lg"
            className="luxury-gradient btn-hover-effect hover:scale-110 glow-effect transition-all duration-500 font-body font-medium text-lg px-10 py-4 rounded-full shadow-2xl"
          >
            <a href="/gallery">
              <span className="relative z-10">Explore Collection</span>
            </a>
          </Button>
        </div>

        {/* Floating Social Proof */}
        <div className={`transition-all duration-1500 delay-1500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center items-center space-x-8 text-luxury-white/70">
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-luxury-pink">500+</div>
              <div className="text-sm font-body">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-luxury-pink/30"></div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-luxury-pink">5★</div>
              <div className="text-sm font-body">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-luxury-pink/30"></div>
            <div className="text-center">
              <div className="text-2xl font-display font-bold text-luxury-pink">100%</div>
              <div className="text-sm font-body">Handcrafted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Removing Enhanced Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 overflow-hidden ${
              index === currentSlide 
                ? 'bg-luxury-pink scale-125 shadow-lg shadow-luxury-pink/50' 
                : 'bg-luxury-gray hover:bg-luxury-pink/70 hover:scale-110'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-pink to-luxury-pink-light animate-shimmer"></div>
            )}
          </button>
        ))}
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-luxury-pink to-transparent animate-pulse"></div>
      </div>
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-luxury-pink to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
