import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// SVG Icons for Store Buttons
const AppleLogo = () => (
  <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 39.3 8.1 79.4 34.5 115.8 24.3 33.7 54.7 66.8 92.5 66.8 33 0 45-21.7 82.3-21.7 36.6 0 48.7 21.8 83.2 21.8 32.3 0 60.1-29.4 82.5-62.8-72-35.5-79.6-117.2-60.3-124.9zM227.1 84.8c15.9-19.4 27.5-44.4 24.3-70.8-23.7 1.4-52.6 15.6-69.5 35.5-14.7 17.2-27.1 44.5-23.9 69.8 26.6 2.1 53.3-15.1 69.1-34.5z"/></svg>
);
const PlayLogo = () => (
  <svg viewBox="0 0 512 512" className="w-6 h-6"><path fill="#4285F4" d="M32.5 5.5C21.9 12.3 16 23.3 16 35.8v440.4c0 12.5 5.9 23.5 16.5 30.3l1.8 1.1L277.9 264.1 33.8 4.7l-1.3.8z"/><path fill="#34A853" d="M363.3 349.5l-85.4-85.4-43.5 43.5 87.2 87.2c8.8 8.8 23.3 8.9 32.5 3.5l104-60-94.8-54.6-9.8 5.8z"/><path fill="#FBBC04" d="M32 4.7c-2.3 1.5-4.4 3.2-6.1 5.2L277.9 247.9l43.5-43.5L80.3 5.3C66.6-2.5 48.2-1.9 32 4.7z"/><path fill="#EA4335" d="M363.3 162.5L277.9 247.9 32 507.3c9.7 3.9 20.3 3.6 29.8-1.5l291.7-168.4c9.2-5.3 23.7-5.2 32.5 3.5l94.8-54.6-117.5-67.9z"/></svg>
);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' });
      gsap.from('.hero-image', { opacity: 0, scale: 0.95, duration: 1, delay: 0.2, ease: 'power3.out' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="pt-28 pb-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="hero-content lg:w-1/2 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-pink-50 text-[#E31C5D] rounded-full text-xs font-bold mb-4 border border-pink-100">
            #1 HYPER-LOCAL COMMUNITY APP
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover Local <br />
            <span className="text-[#E31C5D]">Communities</span> & Events
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Connect with people nearby, join micro-events, and create your own circle. 
            The easiest way to socialize locally.
          </p>
          
         

        </div>

        {/* Right Image (Phone Mockup) */}
        <div className="hero-image lg:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-pink-100 rounded-full blur-3xl opacity-40 transform translate-y-10 scale-75"></div>
          <img 
            src="/download.jpg" 
            alt="App Mockup" 
            className="relative z-10 w-[280px] md:w-[320px] rounded-[3rem]  shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;