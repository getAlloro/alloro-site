import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    name: "Dr. Kimi Caswell",
    role: "Caswell Orthodontics",
    duration: "Client for 2+ years",
    stats: [
      { highlight: "+10%", text: "Consistent year over year production growth" },
      { highlight: "+11 Starts", text: "Averaging 11 more starts a month YTD for 2025" }
    ],
    image: "https://caswellorthodontics.com/wp-content/uploads/2025/02/drtanddrc-scaled.jpg"
  },
  {
    id: 2,
    name: "Merideth",
    role: "Owner at Dental EMR",
    duration: "Client for 2+ years",
    stats: [
      { highlight: "+460%", text: "Growth in online visibility" },
      { highlight: "+250%", text: "Increase in clicks to website" },
      { highlight: "+300%", text: "Increase in clients won (2024)" },
      { highlight: "+225%", text: "Increase in clients won (2025)" }
    ],
    image: "https://dentalemr.com/wp-content/uploads/2025/08/24.png"
  },
  {
    id: 3,
    name: "Popup Smiles",
    role: "Multi Location",
    duration: "Client for 4 months",
    stats: [
      { highlight: "115", text: "New 5-star reviews generated" },
      { highlight: "+423%", text: "Increase in online visibility" },
      { highlight: "+24%", text: "New patient increase by month 4" }
    ],
    image: "https://popupsmiles.com/wp-content/uploads/2025/10/IMG_6210-scaled-e1759402869632.jpg"
  },
  {
    id: 4,
    name: "Dr. Garrison Copeland",
    role: "Garrison Orthodontics",
    duration: "Startup, Client for 5 months",
    stats: [
      { highlight: "20 Starts", text: "On pace for Sep 2025 (Goal was 10/mo)" },
      { highlight: "+27%", text: "Increase in website clicks from GBP" },
      { highlight: "+114%", text: "Increase in users to website" }
    ],
    image: "https://garrisonorthodontics.com/wp-content/uploads/2025/04/doctor-2-1.jpg"
  }
];

const CaseStudy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="bg-[#F2F0EB] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card - Metro Pizza Style */}
        <div className="bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-xl flex flex-col lg:flex-row gap-8 lg:gap-20 items-stretch relative min-h-0 lg:min-h-[600px]">
            
            {/* Left Content */}
            <div className="flex-1 flex flex-col justify-between py-2 md:py-4 animate-fade-in order-2 lg:order-1">
                
                <div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-2 tracking-tight">
                        {currentStudy.name}
                    </h2>
                    <h3 className="text-xl md:text-3xl font-medium text-slate-500 mb-6 md:mb-8">
                        {currentStudy.role}
                    </h3>
                    
                    <div className="inline-block px-4 py-2 bg-slate-100 rounded-lg text-slate-600 font-semibold text-xs md:text-sm uppercase tracking-wider mb-8 md:mb-12">
                        {currentStudy.duration}
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                    {currentStudy.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                                {stat.highlight}
                            </div>
                            <p className="text-base md:text-lg text-slate-600 max-w-md font-medium leading-relaxed">
                                {stat.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image Area */}
            <div className="flex-1 relative order-1 lg:order-2">
                <div className="w-full h-[300px] md:h-[400px] lg:h-full rounded-2xl md:rounded-[2rem] overflow-hidden relative group shadow-lg lg:shadow-2xl">
                    <img 
                        src={currentStudy.image}
                        alt={currentStudy.name} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-between items-center text-sm font-bold text-slate-500 px-2 md:px-4 select-none">
            <button 
                onClick={prevSlide}
                className="flex items-center gap-3 hover:text-slate-900 transition-colors group px-4 py-2"
            >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors shadow-sm">
                    <ChevronLeft size={20} className="text-slate-900" />
                </div>
                <span className="text-base md:text-lg hidden sm:inline">Previous</span>
            </button>
            
            <button 
                onClick={nextSlide}
                className="flex items-center gap-3 hover:text-slate-900 transition-colors group px-4 py-2"
            >
                <span className="text-base md:text-lg hidden sm:inline">Next</span>
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-50 transition-colors shadow-sm">
                    <ChevronRight size={20} className="text-slate-900" />
                </div>
            </button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;