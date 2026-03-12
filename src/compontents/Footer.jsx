import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-6 lg:pt-16 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Section: Grid (Changed to 3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 lg:mb-16">

                    {/* Col 1: Brand & Bio */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-[#E31C5D] rounded-full flex items-center justify-center overflow-hidden">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-gray-900">Outer Circle</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Rediscover your neighborhood. Connect with local communities, join micro-events, and build real-world relationships.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-[#E31C5D] hover:text-white hover:border-[#E31C5D] transition-all duration-300 shadow-sm"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="md:pl-10"> {/* Added padding-left for better spacing */}
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
                       <ul className="space-y-4 text-gray-500 text-sm">
  {['Home', 'About', 'How it Works', 'Testimonials', 'Community', 'Contact'].map((item) => (
    <li key={item}>

      {/* COMMUNITY PAGE */}
      {item === 'Community' ? (
        <Link
          to="/community"
          className="hover:text-[#E31C5D] transition-colors flex items-center gap-2 group"
        >
          {item}
        </Link>
      ) : item === 'Contact' ? (

        /* CONTACT PAGE */
        <Link
          to="/contact"
          className="hover:text-[#E31C5D] transition-colors flex items-center gap-2 group"
        >
          {item}
        </Link>

      ) : (

        /*HOME SCROLL SECTIONS */
        <a
          href={`/#${item.replace(/\s+/g, '-').toLowerCase()}`}
          className="hover:text-[#E31C5D] transition-colors flex items-center gap-2 group"
        >
          {item}
        </a>

      )}

    </li>
  ))}
</ul>
                    </div>

                    {/* Col 3: Get the App */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-6">Get the App</h4>
                        <p className="text-gray-500 text-sm mb-6">Available now on iOS and Android.</p>

                        {/* Store Buttons */}
                        <div className="flex flex-col gap-3">
                            <button className="hover:-translate-y-1 transition-transform duration-300 w-fit">
                                <img src="/apple.png" alt="Download on App Store" className="h-12 w-auto object-contain" />
                            </button>
                            <button className="hover:-translate-y-1 transition-transform duration-300 w-fit">
                                <img src="/play.png" alt="Get it on Google Play" className="h-12 w-auto object-contain" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Divider & Copyright */}
                <div className="border-t border-gray-100 pt-4 lg:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2026 Outer Circle Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500 font-medium">
                        <Link to="/privacy-policy" className="hover:text-[#E31C5D] transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-[#E31C5D] transition-colors">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;