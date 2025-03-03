
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container px-6 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-heading font-bold text-xl md:text-2xl text-white">
              MediaScope
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              News
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Entertainment
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Politics
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Business
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Tech
            </a>
          </nav>
          
          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors">
              <Search size={18} />
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-secondary/95 backdrop-blur-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] border-b border-white/10' : 'max-h-0'
        }`}
      >
        <nav className="container px-6 mx-auto py-4 flex flex-col space-y-4">
          <a 
            href="#" 
            className="text-white/80 hover:text-white py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            News
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-white py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Entertainment
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-white py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Politics
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-white py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Business
          </a>
          <a 
            href="#" 
            className="text-white/80 hover:text-white py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Tech
          </a>
          
          <div className="pt-2 flex items-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full">
              Subscribe
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
