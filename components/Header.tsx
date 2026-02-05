
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isViewingProject = location.pathname.startsWith('/view/');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.hash = '/';
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {isViewingProject ? (
              <Link to="/" className="flex items-center space-x-2 text-indigo-400 hover:text-white transition-colors">
                <ArrowLeft size={20} />
                <span className="font-semibold">Back to Portfolio</span>
              </Link>
            ) : (
              <Link to="/" className="flex-shrink-0">
                <span className="text-2xl font-bold gradient-text">MM.</span>
              </Link>
            )}
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {!isViewingProject && navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="#resume" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-slate-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium w-full text-left border-b border-white/5 last:border-0"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
