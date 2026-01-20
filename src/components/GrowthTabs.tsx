import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const tabs = [
  {
    id: 1,
    label: "Maximize Google Visibility",
    title: "Improve Local Visibility",
    description: "Most patients discover specialty practices through Google. ALLORO shows how visible your practice is locally, what’s limiting discovery, and which changes matter most using verified, public data.\n\nWe identify what’s limiting visibility and highlight the highest-impact actions based on real data.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQHOvMLmWE8dIQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720772981742?e=2147483647&v=beta&t=eTjXGl9k1lMkHZsbM6P8MQp4vJY5JqYZGNNxXLQXLFY"
  },
  {
    id: 2,
    label: "More High-Value Patients",
    title: "Turn Interest Into Appointments",
    description: "Visibility only matters when patients can actually book. ALLORO highlights missed calls, booking gaps, and access issues that prevent interested patients from becoming appointments.\n\nImprove patient access, reduce leakage, and support sustainable practice growth.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    label: "More Practice Clarity",
    title: "Stop guessing. Start knowing.",
    description: "ALLORO gives you a clear view of how your practice is performing across patient access, booking trends, visibility, and operational signals, all in one place.\n\nStop guessing and start making confident, data-driven decisions that improve efficiency and decision confidence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    label: "Build Stronger Reputation",
    title: "Turn Your Online Presence Into Trust",
    description: "ALLORO shows how reviews, patient feedback, and reputation signals impact trust and visibility, and where focused improvements make the biggest difference.\n\nImprove credibility, strengthen trust, and support referral growth naturally, all from a mobile-friendly platform you can access anytime, anywhere.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const GrowthTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const scrollToForm = () => {
    const element = document.getElementById('lead-capture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tab Navigation */}
        <div className="flex flex-row w-full overflow-x-auto no-scrollbar border-b border-slate-200 mb-10 sm:mb-16 pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="group flex-none sm:flex-1 min-w-[200px] sm:min-w-0 pb-4 focus:outline-none relative mr-6 sm:mr-0 last:mr-0 text-left sm:text-center"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 px-1 sm:px-2">
                <span className={`text-xl sm:text-2xl font-bold font-serif ${activeTab === tab.id ? 'text-slate-300' : 'text-slate-200'}`}>
                  {tab.id}
                </span>
                <span className={`text-base sm:text-lg font-bold transition-colors ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-700'}`}>
                  {tab.label}
                </span>
              </div>
              
              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-100 rounded-full"></div>
              <div className={`absolute bottom-0 left-0 h-[3px] bg-slate-900 transition-all duration-300 ease-in-out rounded-full ${activeTab === tab.id ? 'w-full' : 'w-0'}`}></div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1 animate-fade-in">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {tabs[activeTab - 1].title}
                </h3>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed whitespace-pre-line">
                    {tabs[activeTab - 1].description}
                </p>
                <button 
                  onClick={scrollToForm}
                  className="text-slate-900 font-bold text-lg flex items-center gap-2 group hover:text-alloro-600 transition-colors"
                >
                    Start Growing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Image Content */}
            <div className="order-1 lg:order-2 h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-100 relative group">
                <img 
                    src={tabs[activeTab - 1].image} 
                    alt={tabs[activeTab - 1].label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default GrowthTabs;