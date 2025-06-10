
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1543294001-f7cd5d7fb847?w=800&h=600&fit=crop',
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        {/* Decorative Elements */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 border border-luxury-pink/30 rounded-full animate-rotate-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-luxury-pink/50 rounded-full animate-pulse-glow"></div>
        </div>

        <div className={`transition-all duration-1500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
            <span className="block text-gradient animate-shimmer mb-2">Elegance</span>
            <span className="block text-luxury-white mb-2">in Every Thread</span>
            <span className="block text-gradient-alt">of Gold</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1500 delay-500 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-luxury-white/90 max-w-3xl mx-auto mb-12 font-body leading-relaxed">
            Discover handcrafted jewelry that blends traditional elegance with modern sophistication. 
            Each piece tells a story of artistry and passion from <span className="text-luxury-pink font-semibold">Germany</span>.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1500 delay-1000 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`}>
          <Button 
            asChild
            size="lg"
            className="luxury-gradient btn-hover-effect hover:scale-110 glow-effect transition-all duration-500 font-body font-medium text-lg px-10 py-4 rounded-full shadow-2xl"
          >
            <a href="/gallery">
              <span className="relative z-10">Explore Collection</span>
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-luxury-white transition-all duration-500 font-body font-medium text-lg px-10 py-4 rounded-full backdrop-blur-sm bg-luxury-black/20 hover:scale-110 hover:shadow-lg hover:shadow-luxury-pink/25"
          >
            <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10">Order Now</span>
            </a>
          </Button>
        </div>

        {/* Floating Social Proof */}
        <div className={`mt-16 transition-all duration-1500 delay-1500 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
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

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-luxury-white/60 text-sm font-body">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-luxury-pink rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-luxury-pink rounded-full mt-2 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-pink/20 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Carousel Indicators */}
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
