import React from 'react';
import { X, Check, ArrowDown } from 'lucide-react';

const ProblemRelief: React.FC = () => {
  const problems = [
    "Data is fragmented",
    "Reports are confusing",
    "You don't know what's working",
    "Decisions feel reactive"
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-alloro-500/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
             Running a practice is hard enough.
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Left: The Problem */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col h-full hover:bg-white/[0.07] transition-colors">
            <div className="mb-8 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                 <X size={18} className="text-red-400" />
               </div>
               <h3 className="text-lg font-bold text-slate-200">The Hard Way</h3>
            </div>
            <ul className="space-y-5 flex-grow">
               {problems.map((p, i) => (
                 <li key={i} className="flex items-center gap-4 text-slate-400 group">
                   <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 group-hover:bg-red-500 transition-colors"></span>
                   <span className="text-lg">{p}</span>
                 </li>
               ))}
            </ul>
          </div>

          {/* Right: The Solution (Alloro Way) */}
          <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 relative overflow-hidden flex flex-col h-full shadow-xl">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-alloro-500/10 blur-[60px] rounded-full pointer-events-none"></div>

            <div className="mb-8 flex items-center gap-3 relative z-10">
               <div className="w-10 h-10 rounded-full bg-alloro-500/20 flex items-center justify-center border border-alloro-500/30">
                 <Check size={18} className="text-alloro-500" />
               </div>
               <h3 className="text-lg font-bold text-white">The Alloro Way</h3>
            </div>

            <div className="flex flex-col justify-center flex-grow space-y-4 relative z-10 pl-2">
               
               <div className="flex items-center gap-4">
                  <span className="text-xl text-white font-medium">We show you the truth</span>
               </div>
               
               <div className="pl-6">
                 <ArrowDown size={24} className="text-slate-600" />
               </div>

               <div className="flex items-center gap-4">
                  <span className="text-3xl font-serif italic text-alloro-400">Clearly</span>
               </div>

               <div className="pl-6">
                 <ArrowDown size={24} className="text-slate-600" />
               </div>

               <div className="flex items-center gap-4">
                  <span className="text-xl text-white font-medium">and highlight what to fix next</span>
               </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest relative z-10">
                <span>Simple</span>
                <span className="text-slate-700">•</span>
                <span>Clear</span>
                <span className="text-slate-700">•</span>
                <span>Stress-free</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProblemRelief;