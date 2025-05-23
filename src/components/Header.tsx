import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-95 backdrop-blur-sm shadow-lg border-b border-red-600' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="heading-text text-2xl text-red-500 tracking-widest font-bold">
              E<span className="text-white">MINEM</span>
              <span className="block text-xs text-gray-400 tracking-normal font-normal">LEGACY</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['HOME', 'DISCOGRAPHY', 'BIOGRAPHY', 'AWARDS', 'RECOVERY', 'FANS'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="heading-text text-lg tracking-wider hover:text-red-500 transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2 hover:text-red-500 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-98 backdrop-blur border-t border-red-600 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['HOME', 'DISCOGRAPHY', 'BIOGRAPHY', 'AWARDS', 'RECOVERY', 'FANS'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="heading-text block px-3 py-3 text-lg tracking-wider hover:text-red-500 hover:bg-red-500 hover:bg-opacity-10 transition-all duration-300 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;