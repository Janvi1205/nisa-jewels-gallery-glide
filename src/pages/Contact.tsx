
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'm interested in Nisa Jewellery.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/491234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message Prepared!",
      description: "Your message has been prepared for WhatsApp. Complete sending it in the WhatsApp app.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className={`text-5xl md:text-6xl font-display font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-gradient">Get in Touch</span>
          </h1>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto font-body transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Ready to create something extraordinary? We'd love to hear from you. Let's discuss how we can 
            bring your jewelry dreams to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground font-body font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-card border-luxury-gray focus:border-luxury-pink transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground font-body font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-card border-luxury-gray focus:border-luxury-pink transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground font-body font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 bg-card border-luxury-gray focus:border-luxury-pink transition-colors duration-300"
                    placeholder="+49 123 456 7890"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-body font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 bg-card border-luxury-gray focus:border-luxury-pink transition-colors duration-300 resize-none"
                    placeholder="Tell us about your jewelry needs, custom design ideas, or any questions you have..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium text-lg py-3"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Contact Information</h2>
              
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground font-body mb-2">Get instant responses to your questions</p>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-white transition-all duration-300"
                    >
                      <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                        Chat with Us
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground font-body mb-2">For detailed inquiries and custom orders</p>
                    <a href="mailto:info@nisajewellery.com" className="text-luxury-pink hover:text-luxury-pink-dark transition-colors duration-300 font-body">
                      info@nisajewellery.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground font-body mb-2">Handcrafted with love from Germany</p>
                    <p className="text-luxury-pink font-body">
                      Hamburg, Germany
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551-.684-.94-.684-2.126 0-3.066.684-.94 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.94.684 2.126 0 3.066-.684.94-1.835 1.551-3.132 1.551zm7.718 0c-1.297 0-2.448-.611-3.132-1.551-.684-.94-.684-2.126 0-3.066.684-.94 1.835-1.551 3.132-1.551s2.448.611 3.132 1.551c.684.94.684 2.126 0 3.066-.684.94-1.835 1.551-3.132 1.551z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">Follow Us</h3>
                    <p className="text-muted-foreground font-body mb-2">See our latest creations and behind-the-scenes</p>
                    <Button 
                      asChild
                      variant="outline"
                      className="border-luxury-pink text-luxury-pink hover:bg-luxury-pink hover:text-white transition-all duration-300"
                    >
                      <a href="https://instagram.com/nisajewellery" target="_blank" rel="noopener noreferrer">
                        @nisajewellery
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-body">
              Find answers to common questions about our jewelry and services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Do you offer custom designs?</h3>
                <p className="text-muted-foreground font-body">Yes! We specialize in creating custom jewelry pieces. Share your vision with us, and our designers will work with you to bring it to life.</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">What materials do you use?</h3>
                <p className="text-muted-foreground font-body">We use only the finest materials including 18k gold, platinum, sterling silver, and ethically sourced gemstones and diamonds.</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">How long does a custom piece take?</h3>
                <p className="text-muted-foreground font-body">Custom pieces typically take 2-4 weeks to complete, depending on the complexity of the design. We'll provide a detailed timeline after consultation.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Do you ship internationally?</h3>
                <p className="text-muted-foreground font-body">Yes, we ship worldwide with secure, insured shipping. Contact us for specific shipping rates and timelines to your location.</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">What's your return policy?</h3>
                <p className="text-muted-foreground font-body">We offer a 30-day return policy for non-custom pieces. All returns must be in original condition with certification and packaging.</p>
              </div>
              
              <div className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">Do you provide certificates?</h3>
                <p className="text-muted-foreground font-body">Yes, all our pieces come with authenticity certificates, and diamonds include grading certificates from recognized laboratories.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
