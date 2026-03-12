import React, { useEffect, useRef } from 'react';
import { Users, Globe, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Select all elements with class 'stat-number'
      const items = document.querySelectorAll('.stat-number');

      items.forEach((item) => {
        const targetValue = parseFloat(item.getAttribute('data-value')); // Get the number (e.g., 50, 1.2)
        const suffix = item.getAttribute('data-suffix') || ""; // Get the suffix (e.g., K+, /7)
        const isFloat = targetValue % 1 !== 0; // Check if it needs decimals

        // Animate a proxy object
        gsap.fromTo(
          item,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%", // Start animation when numbers are visible
            },
            snap: { innerText: isFloat ? 0.1 : 1 }, // Snap to whole numbers or 1 decimal
            onUpdate: function () {
              // Update the DOM element with the formatted number + suffix
              const currentVal = isFloat 
                ? parseFloat(this.targets()[0].innerText).toFixed(1) 
                : Math.ceil(this.targets()[0].innerText);
              
              item.innerHTML = `${currentVal}${suffix}`;
            }
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  // Stats Data Config
  const statsData = [
    { value: 50, suffix: "K+", label: "Active Users" },
    { value: 1.2, suffix: "K", label: "Micro Events" },
    { value: 4.9, suffix: "", label: "App Rating" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  return (
    <section ref={statsRef} id="about" className="py-10 bg-white overflow-hidden">
      
      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#E31C5D] font-bold tracking-wider text-sm uppercase mb-3 block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            We are bridging the gap between <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#E31C5D] to-purple-600">
              Online & Offline.
            </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Social media promised to connect us, but it often makes us feel more isolated. 
            Outer Circle was born from a simple idea: <strong>Real connection happens in the real world.</strong>
          </p>
        </div>
      </div>

      {/* 2. Image & Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4 mt-8">
               <img 
                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=80" 
                 alt="Friends laughing" 
                 className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
               />
               <img 
                 src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format&fit=crop&q=80" 
                 alt="Community event" 
                 className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
               />
             </div>
             <div className="space-y-4">
               <img 
                 src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=80" 
                 alt="Students talking" 
                 className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
               />
               <div className="bg-[#E31C5D] rounded-2xl h-48 flex items-center justify-center p-6 text-white text-center shadow-xl shadow-pink-200">
                 <div>
                   <span className="text-4xl font-bold block mb-1">100+</span>
                   <span className="text-sm opacity-90">Cities Active</span>
                 </div>
               </div>
             </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Less scrolling, <br/> More living.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We aren't just another social network. We are an <strong>anti-social media</strong> app. 
              Our algorithms don't optimize for screen time; they optimize for face time. 
              We want you to open the app, find a plan, and close the app.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, title: "Join events near you", text: "Verified profiles and safe-zone meetup spots." },
                { icon: Heart, title: "Community Driven", text: "Powered by local ambassadors, not bots." },
                { icon: Globe, title: "Hyper Local", text: "Discover what's happening within 5km of you." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-pink-50 text-[#E31C5D] flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Stats Section with Scroll Counter Animation */}
      <div className="py-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div 
                  className="text-4xl md:text-5xl font-bold text-[#E31C5D] stat-number"
                  data-value={stat.value}   // Used by GSAP
                  data-suffix={stat.suffix} // Used by GSAP
                >
                  0{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;