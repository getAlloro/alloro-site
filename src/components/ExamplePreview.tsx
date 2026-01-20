import React from 'react';
import { ArrowRight, Zap, ChevronRight, Activity } from 'lucide-react';

const ExamplePreview: React.FC = () => {
  return (
    <section id="example-preview" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 skew-x-12 transform origin-top-right"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">See exactly what you get</h2>
          <p className="text-lg sm:text-xl text-slate-600">
            Your weekly update. Simple, clear, and ready in seconds.
          </p>
        </div>

        {/* Dashboard MOCKUP Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/60 overflow-hidden ring-1 ring-slate-900/5">
          
          {/* Dashboard Header */}
          <div className="bg-white border-b border-slate-100 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-alloro-600 uppercase mb-2">
                    <span className="w-2 h-2 rounded-full bg-alloro-500"></span> Live Update
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Good Afternoon, Dr. Pawlak.</h3>
                <p className="text-slate-500 mt-1 text-sm sm:text-base">Heads up: <span className="text-alloro-600 font-medium">Some patients can't book online</span> right now.</p>
            </div>
            <div className="text-right hidden md:block">
                <div className="text-sm font-medium text-slate-400">Practice Growth Hub</div>
            </div>
          </div>

          <div className="p-4 sm:p-8 bg-slate-50/50">
            
            {/* 1. Intelligence Briefing Banner (Terracotta) */}
            <div className="bg-gradient-to-r from-alloro-500 to-alloro-600 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-white shadow-lg shadow-alloro-500/20 mb-6 sm:mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-start gap-4">
                    <div className="p-2 sm:p-3 bg-white/20 rounded-xl backdrop-blur-sm shrink-0">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                        <h4 className="text-base sm:text-lg font-bold">Weekly Alert</h4>
                        <p className="text-alloro-100 mt-1 text-sm sm:text-base">You have <span className="underline decoration-white/30 underline-offset-4 font-medium">2 high-impact opportunities</span> identified this week.</p>
                    </div>
                </div>
                <button className="w-full sm:w-auto px-5 py-2.5 bg-white text-alloro-600 font-semibold rounded-lg text-sm hover:bg-alloro-50 transition-colors shadow-sm flex items-center justify-center">
                    See Fixes <ArrowRight className="inline w-4 h-4 ml-1"/>
                </button>
            </div>

            {/* 2. Urgent Intervention Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm mb-6 sm:mb-8 flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                <div className="flex-grow">
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] sm:text-xs font-bold uppercase tracking-wide rounded-md mb-3">Needs Attention</span>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Mention "Lingual Braces" to new patients.</h4>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        Patients are searching for this online, but they don't know you offer it. Tell your team to bring it up during consults.
                    </p>
                </div>
                <button className="w-full sm:w-auto flex-shrink-0 bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                    View Task <ChevronRight size={16} />
                </button>
            </div>

            {/* 3. Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {/* Ranking Card */}
                <div className="col-span-1 lg:col-span-2 bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                         <Activity size={100} />
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Your Ranking</span>
                        <span className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase">West Orange, NJ</span>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            You are <span className="text-alloro-500">#8 of 47</span> <br/>
                            in your area.
                        </h4>
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 max-w-lg">You moved up 12 spots since last month! Improving review volume may help increase local visibility.</p>
                </div>

                {/* Authority Score Card */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm flex flex-col justify-center items-center text-center">
                    <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Trust Score</div>
                    <div className="text-5xl sm:text-6xl font-bold text-slate-900 mb-2">78<span className="text-alloro-500 text-3xl">.</span></div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-6 mb-2">Patient Happiness</div>
                    <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                        High <span className="w-3 h-3 rounded-full bg-success-500 animate-pulse"></span>
                    </div>
                </div>
            </div>

            {/* 4. Strategic Growth (The Money Shot) */}
            <div className="mt-8 sm:mt-12">
                <div className="inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full mb-4 sm:mb-6">Growth Opportunities</div>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                    Top 3 Ways to Add <span className="text-alloro-500">$141,500+</span> <br className="hidden sm:block"/>
                    to your Revenue.
                </h3>
                <p className="text-base sm:text-lg text-slate-500 mb-8 sm:mb-10 max-w-2xl">We found 3 places you are losing money. Fix them to grow fast.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Fix 1 */}
                    <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 hover:border-alloro-300 transition-colors group cursor-pointer shadow-sm hover:shadow-md">
                        <div className="px-3 py-1 bg-alloro-50 text-alloro-600 text-[10px] font-bold uppercase tracking-widest rounded w-fit mb-4">Web Performance</div>
                        <h5 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-alloro-600 transition-colors">Fix #1: Mobile Speed</h5>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                            Your pricing page loads slowly on mobile. Improving speed reduces bounce rates by ~15%.
                        </p>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight size={12} />
                        </div>
                    </div>

                    {/* Fix 2 */}
                    <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 hover:border-alloro-300 transition-colors group cursor-pointer shadow-sm hover:shadow-md">
                        <div className="px-3 py-1 bg-alloro-50 text-alloro-600 text-[10px] font-bold uppercase tracking-widest rounded w-fit mb-4">Broken Link</div>
                        <h5 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-alloro-600 transition-colors">Fix #2: Booking Error</h5>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                            The 'Book Consultation' button on your Services page is broken (404). You are losing leads daily.
                        </p>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight size={12} />
                        </div>
                    </div>

                    {/* Fix 3 */}
                    <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 hover:border-alloro-300 transition-colors group cursor-pointer shadow-sm hover:shadow-md">
                        <div className="px-3 py-1 bg-alloro-50 text-alloro-600 text-[10px] font-bold uppercase tracking-widest rounded w-fit mb-4">SEO Schema</div>
                        <h5 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-alloro-600 transition-colors">Fix #3: Missing Schema</h5>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                            Google can't read your treatment list correctly. Add structured data to appear in rich snippets.
                        </p>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                            Read More <ArrowRight size={12} />
                        </div>
                    </div>

                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ExamplePreview;