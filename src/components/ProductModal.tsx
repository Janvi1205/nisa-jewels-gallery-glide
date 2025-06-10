
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface ProductModalProps {
  product: Product;
  children: React.ReactNode;
}

const ProductModal = ({ product, children }: ProductModalProps) => {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering the ${product.name} (${product.price}). Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/491234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-luxury-black border border-luxury-pink/30 p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent"></div>
          </div>
          
          {/* Product Details */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-display font-bold text-luxury-white mb-4">
              {product.name}
            </h2>
            
            <p className="text-luxury-white/80 font-body text-lg leading-relaxed mb-6">
              Exquisitely handcrafted with precision and passion in our German workshop. 
              Each piece is unique and tells its own story of elegance and sophistication.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-luxury-white/70 font-body">Material</span>
                <span className="text-luxury-white font-body font-medium">18K Gold</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-luxury-white/70 font-body">Origin</span>
                <span className="text-luxury-white font-body font-medium">Germany</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-luxury-white/70 font-body">Craftsmanship</span>
                <span className="text-luxury-white font-body font-medium">Handmade</span>
              </div>
              <div className="w-full h-px bg-luxury-pink/30"></div>
              <div className="flex justify-between items-center">
                <span className="text-luxury-white font-body text-xl">Price</span>
                <span className="text-luxury-pink font-display font-bold text-3xl">{product.price}</span>
              </div>
            </div>
            
            <Button
              onClick={handleWhatsAppOrder}
              className="luxury-gradient btn-hover-effect hover:scale-105 glow-effect transition-all duration-500 font-body font-medium text-lg px-8 py-4 rounded-full shadow-xl w-full"
            >
              Order via WhatsApp
            </Button>
            
            <p className="text-luxury-white/60 text-sm font-body text-center mt-4">
              Direct ordering through WhatsApp for personalized service
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
