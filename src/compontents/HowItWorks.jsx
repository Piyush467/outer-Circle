import React from 'react';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  // download button handler
  const handlePlayStoreClick = () => {
  const ua = navigator.userAgent;

  if (/Android/i.test(ua)) {
    window.open(
      "https://play.google.com/store/apps/details?id=com.co.CommunityX",
      "_blank"
    );
  }
  // iOS & Desktop - do nothing
};
  return (
    <section id="how-it-works" className="py-10 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content & Steps */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <span className="text-[#E31C5D] font-bold tracking-wider text-sm uppercase mb-2 block">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Three Steps to Your <br/>
                <span className="text-[#E31C5D]">Outer Circle</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Join the local revolution. It’s easier than you think to connect with the real world.
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-8 relative">
              {/* Vertical Line for connection */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200 -z-10 hidden md:block"></div>

              {[
                { 
                  icon: <MapPin className="w-6 h-6 text-white" />, 
                  title: "Discover Nearby", 
                  desc: "Set your location radius and find hidden communities in your neighborhood." 
                },
                { 
                  icon: <Users className="w-6 h-6 text-white" />, 
                  title: "Join The Circle", 
                  desc: "Connect with verified locals who share your interests—from Yoga to Tech." 
                },
                { 
                  icon: <Calendar className="w-6 h-6 text-white" />, 
                  title: "Attend Real Events", 
                  desc: "RSVP to micro-events or host your own meetup in seconds." 
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative z-10 hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#E31C5D] flex items-center justify-center shadow-lg shadow-pink-200">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-500 mt-1 leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons Area */}
            <div className="mt-12">
                <p className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                    Available now on iOS & Android <ArrowRight size={16} className="text-[#E31C5D]"/>
                </p>
                <div className="flex flex-wrap gap-4">
                    {/* Apple Store Button */}
                    <button className="transform hover:-translate-y-1 transition-transform duration-300">
                        <img 
                            src="/apple.png" 
                            alt="Download on App Store" 
                            className="h-12 w-auto object-contain" 
                        />
                    </button>
                    
                    {/* Play Store Button */}
                    <button 
                      onClick={handlePlayStoreClick}
                      className="transform hover:-translate-y-1 transition-transform duration-300">
                        <img 
                            src="/play.png" 
                            alt="Get it on Google Play" 
                            className="h-12 w-auto object-contain" 
                        />
                    </button>
                </div>
            </div>
          </div>

          {/* Right Side: Mockup Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E31C5D]/5 rounded-full blur-3xl -z-10"></div>
                
                {/* Phone Mockup Frame */}
                <div className=" z-10">
                    <img 
                        src="/app.png" 
                        alt="App Interface" 
                        className="w-125 h-75 lg:w-125 lg:h-175 object-cover"
                    />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;