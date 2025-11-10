import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  onNavigate?: (path: string) => void;
};

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'SELLO', href: '#sello' },
    { name: 'ARTISTAS', href: '#artistas' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'DISCOGRAFÍA', href: '#discografia' },
    { name: 'AUDIOS', href: '#audios' },
    { name: 'VIDEOS', href: '#videos' },
    { name: 'EVENTOS', href: '#eventos' },
    { name: 'MERCH', href: '#merch' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  const handleNav = (href: string) => {
    if (href.startsWith('#')) {
      const id = href.slice(1);
      if (onNavigate) {
        // navigate to home route then scroll to element
        onNavigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 80);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      if (onNavigate) onNavigate(href);
      else window.location.href = href;
    } else {
      // fallback
      window.location.href = href;
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-red-100/20 via-sky-200/80 to-blue-300/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a onClick={(e) => { e.preventDefault(); handleNav('/'); }} href="#inicio" className="flex items-center transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://i.postimg.cc/FHtf1DHz/BSIDE-WEB-PC-LOGO.png"
                alt="Bside Factory Logo"
                className="h-28 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNav(item.href); }}
                  className="text-red-600 font-bold italic text-sm hover:text-red-800 px-3 py-2 rounded-md hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  style={{
                    WebkitTextStroke: '1px white',
                    paintOrder: 'stroke fill',
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNav(item.href); setIsOpen(false); }}
                className="text-red-600 font-bold italic block px-3 py-2 rounded-md hover:bg-red-100 transition-all duration-300"
                style={{
                  WebkitTextStroke: '1px white',
                  paintOrder: 'stroke fill',
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
