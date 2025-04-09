
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-primary">Walker</span>
          <span className="text-xl font-serif text-secondary">Insurance</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Coverage</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">Testimonials</a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors font-medium">FAQ</a>
          <Button variant="outline" className="font-medium">
            Book a Call
          </Button>
          <Button className="font-medium">Get a Quote</Button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50 shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors px-4 py-2">Home</Link>
            <a href="#services" className="text-foreground hover:text-primary transition-colors px-4 py-2">Coverage</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors px-4 py-2">About</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors px-4 py-2">Testimonials</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors px-4 py-2">FAQ</a>
            <div className="flex flex-col space-y-2 px-4 pt-2">
              <Button variant="outline" className="w-full">Book a Call</Button>
              <Button className="w-full">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
