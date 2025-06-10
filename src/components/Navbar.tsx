
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-display font-bold text-gradient hover:scale-105 transition-transform duration-300">
          Nisa Jewellery
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-body font-medium transition-all duration-300 relative group ${
                isActive(item.href) 
                  ? 'text-luxury-pink' 
                  : 'text-foreground hover:text-luxury-pink'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-pink transition-all duration-300 group-hover:w-full ${
                isActive(item.href) ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <Button 
          asChild
          className="hidden md:flex luxury-gradient hover:scale-105 transition-all duration-300 font-body font-medium"
        >
          <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
            Order via WhatsApp
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-luxury-pink transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-luxury-gray">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block font-body font-medium transition-colors duration-300 ${
                  isActive(item.href) 
                    ? 'text-luxury-pink' 
                    : 'text-foreground hover:text-luxury-pink'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full luxury-gradient font-body font-medium"
            >
              <a href="https://wa.me/491234567890" target="_blank" rel="noopener noreferrer">
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
