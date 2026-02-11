import React, { useState } from 'react';
import { ArrowRight, ChevronRight, BarChart2, Users, Eye, Star } from 'lucide-react';

const tabs = [
  {
    id: 1,
    label: "Maximize Visibility",
    icon: <Eye className="w-5 h-5" />,
    title: "Improve local visibility",
    description: "Most patients discover specialty practices through Google. Alloro shows how visible your practice is locally and exactly what's limiting discovery.",
    highlight: "We identify the highest-impact actions based on real data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 2,
    label: "Capture Patients",
    icon: <Users className="w-5 h-5" />,
    title: "Turn interest into appointments",
    description: "Visibility only matters when patients can actually book. Alloro highlights missed calls and booking gaps that prevent interested patients from converting.",
    highlight: "Reduce leakage and support sustainable practice growth.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 3,
    label: "Practice Clarity",
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Stop guessing. Start knowing.",
    description: "Get a clear view of how your practice is performing across patient access, booking trends, and visibility, all in one place.",
    highlight: "Make confident, data-driven decisions that improve efficiency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
  },
  {
    id: 4,
    label: "Build Reputation",
    icon: <Star className="w-5 h-5" />,
    title: "Turn presence into trust",
    description: "See how reviews and feedback impact trust. Alloro shows you where focused improvements make the biggest difference for your reputation.",
    highlight: "Strengthen trust and support referral growth naturally.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
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
    <section className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight whitespace-normal md:whitespace-nowrap">
               Why leading practices <span className="text-alloro-500">choose Alloro.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
               Built specifically for the needs of modern orthodontic and endodontic specialists.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* Left Column: Vertical Interactive Navigation */}
            <div className="lg:col-span-5 space-y-3 lg:mt-8">
                {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 group relative overflow-hidden border ${activeTab === tab.id ? 'bg-slate-50 border-alloro-200 scale-[1.02]' : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-100'}`}
                >
                    {/* Active Indicator Strip */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${activeTab === tab.id ? 'bg-alloro-500' : 'bg-transparent'}`}></div>

                    <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeTab === tab.id ? 'bg-alloro-500 text-white shadow-lg shadow-alloro-500/30' : 'bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-alloro-500'}`}>
                        {tab.icon}
                        </div>
                        <div>
                            <h3 className={`text-lg font-bold mb-1 transition-colors ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-500 group-hover:text-slate-900'}`}>
                            {tab.label}
                            </h3>
                            {activeTab === tab.id && (
                            <p className="text-slate-600 text-sm leading-relaxed animate-in fade-in slide-in-from-left-2 duration-300">
                                {tab.title}
                            </p>
                            )}
                        </div>
                        {activeTab !== tab.id && (
                            <ChevronRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-alloro-400 opacity-0 group-hover:opacity-100 transition-all" />
                        )}
                    </div>
                </button>
                ))}
            </div>

            {/* Right Column: Dynamic Visual Content */}
            <div className="lg:col-span-7 lg:h-[600px] sticky top-24">
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 group">

                    {/* Background Image with Overlay */}
                    <img
                        src={tabs[activeTab - 1].image}
                        alt={tabs[activeTab - 1].label}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:scale-105"
                    />

                    {/* Darker Gradient for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/30"></div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 animate-fade-in z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-alloro-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 shadow-lg shadow-alloro-900/20">
                             {tabs[activeTab - 1].label}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-sm">
                            {tabs[activeTab - 1].title}
                        </h3>
                        <p className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed font-medium">
                            {tabs[activeTab - 1].description}
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 mb-8 shadow-inner">
                             <div className="flex gap-3">
                                 <div className="w-1 bg-alloro-500 rounded-full shrink-0"></div>
                                 <p className="text-white font-medium">
                                    {tabs[activeTab - 1].highlight}
                                 </p>
                             </div>
                        </div>

                        <button
                            onClick={scrollToForm}
                            className="text-white font-bold text-lg flex items-center gap-2 group hover:text-alloro-400 transition-colors"
                        >
                            Start growing <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default GrowthTabs;
