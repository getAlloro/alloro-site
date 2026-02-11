import React from 'react';

const BeliefItem: React.FC<{ number: string; title: string; text: string; isLast?: boolean }> = ({ number, title, text, isLast }) => (
  <div className={`group py-12 ${!isLast ? 'border-b border-slate-200' : ''} transition-all duration-300`}>
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
      <div className="md:w-auto flex-shrink-0 pt-1">
         <span className="text-3xl md:text-4xl text-alloro-200 group-hover:text-alloro-500 transition-colors duration-300 font-bold">
            {number}
         </span>
      </div>
      <div className="md:w-full">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-alloro-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
          {text}
        </p>
      </div>
    </div>
  </div>
);

const Beliefs: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-3xl opacity-60 -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Three beliefs that <span className="text-alloro-500">guide us.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                We believe in clarity, independence, and earning your trust every single month.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Leadership Block (5 cols) */}
          <div className="lg:col-span-5 self-start">
              {/* Leadership Block */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-alloro-50 rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>

                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 relative z-10 flex items-center gap-2">
                     <span className="w-8 h-px bg-slate-300"></span> Built by
                  </div>

                  <div className="flex flex-col gap-8 relative z-10">

                      {/* Founders Row - Larger Images */}
                      <div className="flex items-center gap-6">
                           <div className="flex -space-x-6 hover:space-x-1 transition-all duration-300">
                                <img
                                    src="/alex.png"
                                    alt="Alexander Hamilton"
                                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-white shadow-lg z-10"
                                />
                                <img
                                    src="/corey.png"
                                    alt="Corey Wise"
                                    className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-white shadow-lg"
                                />
                           </div>
                      </div>

                      <div className="space-y-5">
                           <div>
                                <div className="font-bold text-slate-900 text-xl">Alexander Hamilton</div>
                                <div className="text-xs text-alloro-600 font-bold uppercase tracking-wide mt-1">Co-Founder</div>
                           </div>
                           <div className="w-full h-px bg-slate-100"></div>
                           <div>
                                <div className="font-bold text-slate-900 text-xl">Corey Wise</div>
                                <div className="text-xs text-alloro-600 font-bold uppercase tracking-wide mt-1">Co-Founder</div>
                           </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Column: Beliefs List (7 cols) */}
          <div className="lg:col-span-7">
             <div className="divide-y divide-slate-200/60 border-t border-slate-200/60">
              <BeliefItem
                number="01"
                title="Clarity beats customization"
                text="Custom branding looks impressive, but it doesn't always help you grow. We prioritize proven, repeatable approaches over complex design. Every feature exists to improve visibility."
              />
              <BeliefItem
                number="02"
                title="Value must be earned"
                text="We don't believe in long-term contracts. Alloro earns your trust every month with verifiable insights. If we aren't helping you see the truth, you should be free to leave anytime."
              />
              <BeliefItem
                number="03"
                title="You own your relationships"
                text="Your data belongs to you. Always. We strengthen your patient relationships, we don't replace them. If you leave, your data goes with you. Technology should create independence."
                isLast
              />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Beliefs;
