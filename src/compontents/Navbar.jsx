import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'how-it-works', 'testimonials', 'contact'];
            
            // Find the section that is currently in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section is near the top of the viewport (offset by navbar height)
                    if (rect.top >= -100 && rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to check if link is active
    const isActive = (item) => {
        const slug = item.replace(/\s+/g, '-').toLowerCase();
        return activeSection === slug;
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-16 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
                {/* Logo */}
                <a href="/#">
                    <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#E31C5D] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight">
                        Outer Circle
                    </span>
                </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Home', 'About', 'How it Works', 'Testimonials', 'Contact'].map((item) => {
                        const isContact = item === 'Contact';
                        const href = isContact ? '/contact' : `/#${item.replace(/\s+/g, '-').toLowerCase()}`;
                        return isContact ? (
                            <Link
                                key={item}
                                to="/contact"
                                onClick={() => setActiveSection('contact')}
                                className={`text-sm font-medium transition-colors ${
                                    isActive(item)
                                    ? 'text-[#E31C5D]'
                                    : 'text-gray-600 hover:text-[#E31C5D]'
                                }`}
                            >
                                {item}
                            </Link>
                        ) : (
                            <a
                                key={item}
                                href={href}
                                onClick={() => setActiveSection(item.replace(/\s+/g, '-').toLowerCase())}
                                className={`text-sm font-medium transition-colors ${
                                    isActive(item)
                                    ? 'text-[#E31C5D]'
                                    : 'text-gray-600 hover:text-[#E31C5D]'
                                }`}
                            >
                                {item}
                            </a>
                        );
                    })}
                    <button className="bg-[#E31C5D] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-[#c91852] transition-transform hover:-translate-y-0.5 shadow-md">
                        Download App
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden p-4 flex flex-col gap-4">
                    {['Home', 'About', 'How it Works', 'Contact'].map((item) => {
                        const isContact = item === 'Contact';
                        return isContact ? (
                            <Link
                                key={item}
                                to="/contact"
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSection('contact');
                                }}
                                className={`font-medium ${
                                    isActive(item) ? 'text-[#E31C5D]' : 'text-gray-700'
                                }`}
                            >
                                {item}
                            </Link>
                        ) : (
                            <a
                                key={item}
                                href={`/#${item.replace(/\s+/g, '-').toLowerCase()}`}
                                onClick={() => {
                                    setIsOpen(false);
                                    setActiveSection(item.replace(/\s+/g, '-').toLowerCase());
                                }}
                                className={`font-medium ${
                                    isActive(item) ? 'text-[#E31C5D]' : 'text-gray-700'
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