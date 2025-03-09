
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#mission' },
    { name: 'Programs', href: '#programs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-3 backdrop-blur-element' : 'py-6 bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-bold text-2xl tracking-tight text-foundation-accent">
            Shiva Aradhya <span className="font-light text-foundation-dark">Foundation</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foundation-dark hover:text-foundation-accent transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-foundation-accent hover:bg-foundation-accent/90 text-white">
            Donate Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform ease-in-out duration-300 md:hidden pt-20',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-8 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foundation-dark hover:text-foundation-accent transition-colors duration-200 text-lg font-medium"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-foundation-accent hover:bg-foundation-accent/90 text-white w-2/3 mt-4">
            Donate Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
