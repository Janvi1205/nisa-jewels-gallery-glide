
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      title: 'Craftsmanship',
      description: 'Every piece is handcrafted with meticulous attention to detail by skilled artisans.',
      icon: '💎'
    },
    {
      title: 'Quality',
      description: 'We use only the finest materials, from ethically sourced gems to premium metals.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Blending traditional techniques with modern design for contemporary elegance.',
      icon: '✨'
    },
    {
      title: 'Passion',
      description: 'Our love for jewelry making drives us to create pieces that celebrate life\'s moments.',
      icon: '❤️'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                <span className="text-gradient">Our Story</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 font-body leading-relaxed">
                Born from a passion for exquisite craftsmanship and timeless design, Nisa Jewellery 
                represents the perfect harmony between traditional artistry and contemporary elegance.
              </p>
              <Button 
                asChild
                className="luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium text-lg px-8 py-3"
              >
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <img
                src="https://images.unsplash.com/photo-1543294001-f7cd5d7fb847?w=600&h=500&fit=crop"
                alt="Artisan crafting jewelry"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-display font-bold mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <span className="text-gradient">Nisa Jewellery</span>
            </h2>
            <div className={`prose prose-lg max-w-none text-muted-foreground font-body transition-all duration-1000 delay-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <p className="text-xl leading-relaxed mb-6">
                "Nisa Jewellery blends traditional elegance with modern taste, handcrafted with love from Germany."
              </p>
              <p className="leading-relaxed mb-6">
                Founded in the heart of Germany, Nisa Jewellery emerged from a deep appreciation for the art of 
                jewelry making. Our founder, inspired by the rich traditions of German craftsmanship and the 
                timeless beauty of precious gems, set out to create pieces that would transcend trends and 
                become cherished heirlooms.
              </p>
              <p className="leading-relaxed mb-6">
                Each piece in our collection tells a story—of skilled hands that shape precious metals, of 
                carefully selected gemstones that catch the light just so, and of the passion that drives 
                us to push the boundaries of traditional jewelry making while honoring its roots.
              </p>
              <p className="leading-relaxed">
                From our workshop in Germany, we bring you jewelry that celebrates life's most precious 
                moments. Whether it's an engagement ring that marks the beginning of a new chapter, or 
                a necklace that becomes your signature piece, we craft each item with the understanding 
                that it will become part of your personal story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              The principles that guide every decision we make and every piece we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center p-8 rounded-lg bg-card hover:bg-luxury-gray/20 transition-all duration-500 hover:scale-105 delay-${index * 200} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Our Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              From concept to creation, every step is executed with precision and care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Design & Concept</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Every piece begins with an idea. Our designers work closely with you to bring your vision to life, 
                creating detailed sketches and 3D models that capture every nuance of your dream piece.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Handcrafting</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Our skilled artisans bring the design to life using traditional techniques passed down through 
                generations, combined with modern precision tools to ensure perfect execution.
              </p>
            </div>

            <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="w-20 h-20 luxury-gradient rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">Quality Assurance</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Each finished piece undergoes rigorous quality checks to ensure it meets our exacting standards. 
                Only then is it ready to become part of your collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&h=600&fit=crop"
            alt="Luxury jewelry workshop"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 to-luxury-black/60"></div>
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Let's Create Something Beautiful Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-body">
            Ready to start your jewelry journey? Connect with us to discuss your ideas and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium text-xl px-10 py-4"
            >
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                Start Your Project
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-white transition-all duration-300 font-body font-medium text-xl px-10 py-4"
            >
              <a href="/gallery">View Gallery</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
