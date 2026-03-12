import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../compontents/Navbar';
import Hero from '../compontents/Hero';
import About from '../compontents/About';
import HowItWorks from '../compontents/HowItWorks';
import Footer from '../compontents/Footer';
import Testimonials from '../compontents/Testimonial';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Global animation for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      gsap.fromTo(section.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    });
  }, []);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;