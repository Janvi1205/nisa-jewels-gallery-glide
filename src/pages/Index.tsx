
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: 'Diamond Elegance Ring',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
      price: '€1,299'
    },
    {
      id: 2,
      name: 'Golden Pearl Necklace',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      price: '€899'
    },
    {
      id: 3,
      name: 'Rose Gold Earrings',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
      price: '€659'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Crafted with Passion</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
              Every piece at Nisa Jewellery represents the perfect harmony between traditional craftsmanship 
              and contemporary design. Our artisans in Germany pour their hearts into creating jewelry 
              that celebrates life's precious moments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <img
                src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb847?w=600&h=400&fit=crop"
                alt="Artisan crafting jewelry"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h3 className="text-3xl font-display font-semibold mb-6 text-foreground">
                German Precision, Timeless Beauty
              </h3>
              <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                From our workshop in the heart of Germany, we bring you jewelry that tells your unique story. 
                Each design is meticulously crafted using traditional techniques passed down through generations, 
                combined with modern innovations.
              </p>
              <Button 
                asChild
                className="luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium"
              >
                <a href="/about">Discover Our Story</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Featured Collection</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Discover our most beloved pieces, each one a testament to exceptional craftsmanship and timeless elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer transition-all duration-1000 delay-${index * 200} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-display font-semibold text-xl mb-2">{product.name}</h3>
                      <p className="text-luxury-pink font-body font-bold text-lg">{product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium text-lg px-8 py-3"
            >
              <a href="/gallery">View Full Collection</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&h=600&fit=crop"
            alt="Luxury jewelry"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 to-luxury-black/60"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Ready to Make It Yours?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Connect with us directly through WhatsApp for personalized assistance and exclusive offers.
          </p>
          <Button 
            asChild
            size="lg"
            className="luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium text-xl px-10 py-4"
          >
            <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
              Start Your Journey
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
