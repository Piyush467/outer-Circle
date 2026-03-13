import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Digital Nomad",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      content: "Outer Circle helped me find a hiking group within my first week. It feels so much more organic than other apps.",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Software Engineer",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "Finally, an app that gets me off my phone. Hosted a coding meetup and 15 people showed up. Verification keeps it safe.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Yoga Instructor",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "As a local instructor, this platform has been a game changer for filling my pop-up classes. The community is engaged.",
      rating: 5
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Student",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      content: "Found a study group for finals within 2 hours. It’s super fast, efficient, and locally focused.",
      rating: 4
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Food Blogger",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
      content: "I love the 'Micro Events' feature. Found a hidden gem coffee tasting that wasn't advertised anywhere else.",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Photographer",
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      content: "The location radius feature is perfect. I only want to see what's happening within walking distance.",
      rating: 5
    }
  ];

  // Responsive Logic: Mobile = 1 card, Desktop = 3 cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) { 
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3); 
      }
    };
    
    handleResize(); // Initial Call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" className="py-10 bg-gray-50 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E31C5D] font-bold text-sm uppercase tracking-wider mb-2 block">
            Testimonials
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900">
            What the Community Says
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          
          {/* Slider Window */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }} 
            >
              {testimonials.map((item) => (
                <div 
                  key={item.id} 
                  style={{ width: `${100 / itemsPerPage}%`, flex: '0 0 auto' }}
                  className="px-4"
                >
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between h-full min-h-87.5 relative hover:shadow-xl transition-all duration-300">
                    
                    {/* Big Quote Background */}
                    <div className="absolute top-6 right-6 opacity-10">
                       <Quote size={60} className="text-[#E31C5D]" fill="#E31C5D"/>
                    </div>

                    {/* Stars */}
                    <div>
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={`${i < item.rating ? 'fill-[#E31C5D] text-[#E31C5D]' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-gray-600 mb-6 text-lg font-medium leading-relaxed relative z-10">
                        "{item.content}"
                      </p>
                    </div>

                    {/* User Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 rounded-full object-cover ring-4 ring-gray-50"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{item.name}</h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">
                          <MapPin size={12} className="text-[#E31C5D]" /> {item.location}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Now VISIBLE on Mobile */}
          {/* Mobile Position: Slightly overlapping edges (-translate-x-2) */}
          {/* Desktop Position: Further out (-translate-x-12) */}
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#E31C5D] hover:text-white transition-all border border-gray-100 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-[#E31C5D] hover:text-white transition-all border border-gray-100 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx 
                  ? 'w-8 h-2.5 bg-[#E31C5D]' 
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-[#E31C5D]/50'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;