import React from 'react';

const BeliefItem: React.FC<{ number: string; title: string; text: string; isLast?: boolean }> = ({ number, title, text, isLast }) => (
  <div className={`group py-12 md:py-16 ${!isLast ? 'border-b border-slate-200' : ''} transition-all duration-300`}>
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
      <div className="md:w-1/4 flex-shrink-0 pt-2">
         <span className="font-serif text-4xl text-alloro-200 group-hover:text-alloro-500 transition-colors duration-300 italic">
            {number}
         </span>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-alloro-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-lg leading-relaxed">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Heading & Leadership (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start h-fit">
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Three beliefs that <span className="text-alloro-500 font-serif italic font-normal">guide us.</span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 font-medium">
                The principles behind how Alloro is built and operated
              </p>

              {/* Leadership Block */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Built by</div>
                  
                  <div className="space-y-6">
                      {/* Alexander */}
                      <div className="flex items-center gap-4">
                        <img
                            src="/alex.png"
                            alt="Alexander Hamilton"
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md"
                        />
                        <div>
                            <div className="font-bold text-slate-900 leading-tight">Alexander Hamilton</div>
                            <div className="text-xs text-alloro-600 font-bold uppercase tracking-wide">Co-Founder</div>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100 w-full"></div>

                      {/* Corey */}
                      <div className="flex items-center gap-4">
                        <img
                            src="/corey.png"
                            alt="Corey Wise"
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow-md"
                        />
                        <div>
                            <div className="font-bold text-slate-900 leading-tight">Corey Wise</div>
                            <div className="text-xs text-alloro-600 font-bold uppercase tracking-wide">CEO</div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Column: Beliefs List (8 cols) */}
          <div className="lg:col-span-8">
             <div className="divide-y divide-slate-200/60 border-t border-slate-200/60">
              <BeliefItem 
                number="01"
                title="Clarity Beats Customization"
                text="Custom design and branding can look impressive, but they don’t always make a practice easier to run or grow. Alloro prioritizes clarity over complexity, using proven, repeatable approaches that show what’s working, what’s changing, and what to do next. Every feature exists to improve visibility, patient access, and decision confidence, not to add noise or subjective design choices."
              />
              <BeliefItem 
                number="02"
                title="Value Must Be Earned, Not Locked In"
                text="Running a practice is already demanding. You shouldn’t be tied into long-term commitments without ongoing, visible value. Alloro is designed to earn trust continuously by delivering clear insights and guidance you can verify. If we’re not helping you see the truth and act on it, you should be free to leave without friction."
              />
              <BeliefItem 
                number="03"
                title="Practices Own Their Patient Relationships"
                text="Patient relationships and data belong to the practice always. Alloro supports and strengthens that connection, but never replaces it. If you ever choose to move on, your data and insights remain yours. We believe technology should empower practices with independence, not create reliance."
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