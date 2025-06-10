
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  const products = [
    {
      id: 1,
      name: 'Diamond Solitaire Ring',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
      price: '€1,299',
      description: 'Exquisite solitaire ring featuring a brilliant cut diamond set in 18k white gold.'
    },
    {
      id: 2,
      name: 'Pearl Drop Necklace',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
      price: '€899',
      description: 'Elegant cultured pearl necklace with 18k gold accents, perfect for special occasions.'
    },
    {
      id: 3,
      name: 'Rose Gold Hoops',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop',
      price: '€659',
      description: 'Classic rose gold hoop earrings with diamond accents for everyday elegance.'
    },
    {
      id: 4,
      name: 'Vintage Emerald Ring',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb847?w=500&h=500&fit=crop',
      price: '€1,599',
      description: 'Vintage-inspired emerald ring surrounded by diamonds in yellow gold setting.'
    },
    {
      id: 5,
      name: 'Tennis Bracelet',
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=500&fit=crop',
      price: '€2,199',
      description: 'Stunning tennis bracelet featuring brilliant cut diamonds in white gold.'
    },
    {
      id: 6,
      name: 'Sapphire Stud Earrings',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=500&h=500&fit=crop',
      price: '€799',
      description: 'Beautiful sapphire stud earrings with diamond halos in platinum setting.'
    },
    {
      id: 7,
      name: 'Gold Chain Necklace',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=500&fit=crop',
      price: '€1,099',
      description: 'Luxurious 18k gold chain necklace with intricate link design.'
    },
    {
      id: 8,
      name: 'Infinity Band Ring',
      category: 'rings',
      image: 'https://images.unsplash.com/photo-1614607242094-b1b2cf769ff3?w=500&h=500&fit=crop',
      price: '€949',
      description: 'Romantic infinity band ring with pave diamonds in rose gold.'
    },
    {
      id: 9,
      name: 'Charm Bracelet',
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
      price: '€679',
      description: 'Personalized charm bracelet in sterling silver with custom charms.'
    },
    {
      id: 10,
      name: 'Statement Necklace',
      category: 'necklaces',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
      price: '€1,499',
      description: 'Bold statement necklace featuring geometric design in mixed metals.'
    },
    {
      id: 11,
      name: 'Diamond Studs',
      category: 'earrings',
      image: 'https://images.unsplash.com/photo-1588444650700-6c3695f9f8e2?w=500&h=500&fit=crop',
      price: '€1,199',
      description: 'Classic diamond stud earrings in 18k white gold settings.'
    },
    {
      id: 12,
      name: 'Vintage Bracelet',
      category: 'bracelets',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=500&h=500&fit=crop',
      price: '€1,399',
      description: 'Antique-style bracelet with intricate filigree work in yellow gold.'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gradient">Our Collection</span>
          </h1>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto font-body transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Discover our curated selection of handcrafted jewelry, where each piece tells a story of 
            passion, precision, and timeless beauty.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`font-body font-medium transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'luxury-gradient text-white' 
                    : 'border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-white'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Dialog key={product.id}>
                <DialogTrigger asChild>
                  <div className={`group cursor-pointer transition-all duration-1000 delay-${index * 100} ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
                    <div className="relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-display font-semibold text-lg mb-1">{product.name}</h3>
                          <p className="text-luxury-pink font-body font-bold text-xl">{product.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="max-w-4xl bg-card border-luxury-gray">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h2 className="text-3xl font-display font-bold mb-4 text-foreground">{product.name}</h2>
                      <p className="text-2xl font-body font-bold text-luxury-pink mb-6">{product.price}</p>
                      <p className="text-muted-foreground font-body mb-8 leading-relaxed">{product.description}</p>
                      
                      <div className="space-y-4">
                        <Button 
                          asChild
                          className="w-full luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium"
                        >
                          <a href={`https://wa.me/491234567890?text=I'm interested in ${product.name} (${product.price})`} target="_blank" rel="noopener noreferrer">
                            Order via WhatsApp
                          </a>
                        </Button>
                        
                        <Button 
                          variant="outline"
                          className="w-full border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-white transition-all duration-300 font-body font-medium"
                        >
                          Request Custom Design
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
