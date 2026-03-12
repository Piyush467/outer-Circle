import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();

  // Scroll tracking ONLY for Home page
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'how-it-works',
        'testimonials',
        'contact'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  //Active link logic (Router + Scroll)
  const isActive = (item) => {
    const slug = item.replace(/\s+/g, '-').toLowerCase();

    // Community page
    if (location.pathname === "/community") {
      return slug === "community";
    }

    // Contact page
    if (location.pathname === "/contact") {
      return slug === "contact";
    }

    // Home page sections
    if (location.pathname === "/") {
      return activeSection === slug;
    }

    return false;
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-16 flex items-center">

      <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">

        {/* ===== LOGO ===== */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#E31C5D] rounded-full flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              Outer Circle
            </span>
          </div>
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden md:flex items-center space-x-8">

          {['Home', 'About', 'How it Works','Testimonials', 'Community', 'Contact'].map((item) => {

            // COMMUNITY PAGE
            if (item === 'Community') {
              return (
                <Link
                  key={item}
                  to="/community"
                  className={`font-medium ${
                    isActive(item)
                      ? 'text-[#E31C5D]'
                      : 'text-gray-700 hover:text-[#E31C5D]'
                  }`}
                >
                  {item}
                </Link>
              );
            }

            //CONTACT PAGE
            if (item === 'Contact') {
              return (
                <Link
                  key={item}
                  to="/contact"
                  className={`font-medium ${
                    isActive(item)
                      ? 'text-[#E31C5D]'
                      : 'text-gray-700 hover:text-[#E31C5D]'
                  }`}
                >
                  {item}
                </Link>
              );
            }

            //HOME SECTIONS
            return (
              <a
                key={item}
                href={`/#${item.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveSection(item.replace(/\s+/g, '-').toLowerCase())}
                className={`font-medium ${
                  isActive(item)
                    ? 'text-[#E31C5D]'
                    : 'text-gray-700 hover:text-[#E31C5D]'
                }`}
              >
                {item}
              </a>
            );
          })}

          {/* Download Button */}
          <button className="bg-[#E31C5D] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#c91852] transition-transform hover:-translate-y-0.5 shadow-md">
            Download App
          </button>

        </div>

        {/* ===== MOBILE TOGGLE ===== */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden p-4 flex flex-col gap-4">

          {['Home', 'About', 'How it Works','Testimonials', 'Community', 'Contact'].map((item) => {

            // COMMUNITY
            if (item === 'Community') {
              return (
                <Link
                  key={item}
                  to="/community"
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    isActive(item)
                      ? 'text-[#E31C5D]'
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </Link>
              );
            }

            // CONTACT
            if (item === 'Contact') {
              return (
                <Link
                  key={item}
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    isActive(item)
                      ? 'text-[#E31C5D]'
                      : 'text-gray-700'
                  }`}
                >
                  {item}
                </Link>
              );
            }

            // HOME SECTIONS
            return (
              <a
                key={item}
                href={`/#${item.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => {
                  setIsOpen(false);
                  setActiveSection(item.replace(/\s+/g, '-').toLowerCase());
                }}
                className={`font-medium ${
                  isActive(item)
                    ? 'text-[#E31C5D]'
                    : 'text-gray-700'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;