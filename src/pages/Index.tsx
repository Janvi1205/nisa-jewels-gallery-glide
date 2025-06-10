
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    animateElements.forEach(el => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
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
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--luxury-pink)) 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, hsl(var(--luxury-pink)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <div className="inline-block mb-6">
              <div className="w-24 h-1 bg-luxury-pink mx-auto mb-4 animate-shimmer"></div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
                <span className="text-gradient">Crafted with</span>
                <br />
                <span className="text-luxury-white">Passion</span>
              </h2>
              <div className="w-24 h-1 bg-luxury-pink mx-auto animate-shimmer"></div>
            </div>
            <p className="text-xl md:text-2xl text-luxury-white/80 max-w-4xl mx-auto font-body leading-relaxed">
              Every piece at Nisa Jewellery represents the perfect harmony between traditional craftsmanship 
              and contemporary design. Our artisans in <span className="text-luxury-pink font-semibold">Germany</span> pour their hearts into creating jewelry 
              that celebrates life's precious moments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate-left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-luxury-pink/20 to-luxury-pink-light/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <img
                  src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb847?w=600&h=400&fit=crop"
                  alt="Artisan crafting jewelry"
                  className="relative rounded-2xl shadow-2xl hover:scale-105 transition-all duration-700 glow-effect"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent rounded-2xl"></div>
              </div>
            </div>
            
            <div className="scroll-animate-right space-y-8">
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 text-luxury-white leading-tight">
                  German Precision,
                  <br />
                  <span className="text-gradient">Timeless Beauty</span>
                </h3>
                <div className="absolute -left-6 top-0 w-2 h-20 bg-luxury-pink rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-lg text-luxury-white/80 mb-8 font-body leading-relaxed">
                From our workshop in the heart of Germany, we bring you jewelry that tells your unique story. 
                Each design is meticulously crafted using traditional techniques passed down through generations, 
                combined with modern innovations that push the boundaries of elegance.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-luxury-gray/20 rounded-xl backdrop-blur-sm border border-luxury-pink/20 hover:border-luxury-pink/40 transition-all duration-500">
                  <div className="text-2xl font-display font-bold text-luxury-pink mb-2">25+</div>
                  <div className="text-sm text-luxury-white/70 font-body">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-luxury-gray/20 rounded-xl backdrop-blur-sm border border-luxury-pink/20 hover:border-luxury-pink/40 transition-all duration-500">
                  <div className="text-2xl font-display font-bold text-luxury-pink mb-2">100%</div>
                  <div className="text-sm text-luxury-white/70 font-body">Handmade</div>
                </div>
              </div>
              
              <Button 
                asChild
                className="luxury-gradient btn-hover-effect hover:scale-105 glow-effect transition-all duration-500 font-body font-medium text-lg px-8 py-4 rounded-full shadow-xl"
              >
                <a href="/about">
                  <span className="relative z-10">Discover Our Story</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-gradient-to-b from-card to-background relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-luxury-pink/10 rounded-full animate-rotate-slow"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="text-gradient">Featured</span>
              <br />
              <span className="text-luxury-white">Collection</span>
            </h2>
            <p className="text-xl text-luxury-white/80 max-w-3xl mx-auto font-body leading-relaxed">
              Discover our most beloved pieces, each one a testament to exceptional craftsmanship and timeless elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group cursor-pointer scroll-animate-scale`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-b from-luxury-gray/20 to-luxury-black/40 backdrop-blur-sm border border-luxury-pink/20 hover:border-luxury-pink/40 transition-all duration-700">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-luxury-white font-display font-bold text-2xl mb-3">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-luxury-pink font-body font-bold text-xl">{product.price}</p>
                          <Button size="sm" className="luxury-gradient btn-hover-effect rounded-full">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-pink/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate">
            <Button 
              asChild
              size="lg"
              className="luxury-gradient btn-hover-effect hover:scale-105 glow-effect transition-all duration-500 font-body font-medium text-xl px-12 py-4 rounded-full shadow-2xl"
            >
              <a href="/gallery">
                <span className="relative z-10">View Full Collection</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&h=600&fit=crop"
            alt="Luxury jewelry"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/70 to-luxury-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-pink/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center scroll-animate">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              <span className="text-gradient">Ready to Make</span>
              <br />
              <span className="text-luxury-white">It Yours?</span>
            </h2>
            <p className="text-xl md:text-2xl text-luxury-white/90 mb-12 max-w-3xl mx-auto font-body leading-relaxed">
              Connect with us directly through WhatsApp for personalized assistance, 
              custom designs, and exclusive offers tailored just for you.
            </p>
            
            <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
              <Button 
                asChild
                size="lg"
                className="luxury-gradient btn-hover-effect hover:scale-110 glow-effect transition-all duration-500 font-body font-medium text-xl px-12 py-4 rounded-full shadow-2xl"
              >
                <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Start Your Journey</span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-black transition-all duration-500 font-body font-medium text-xl px-12 py-4 rounded-full backdrop-blur-sm bg-luxury-black/20 hover:scale-110"
              >
                <a href="/gallery">
                  <span className="relative z-10">Browse Collection</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-luxury-pink rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 border border-luxury-pink rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-luxury-pink rounded-full animate-float opacity-80" style={{ animationDelay: '4s' }}></div>
      </section>
    </div>
  );
};

export default Index;
