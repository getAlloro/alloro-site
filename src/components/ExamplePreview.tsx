import React from 'react';

const ExamplePreview: React.FC = () => {
  return (
    <section id="example-preview" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-alloro-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-alloro-500 animate-pulse"></span> Onboarding Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            See how easy it is to start.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Watch our simple onboarding process designed for busy practice owners. Connect your data and get clarity in minutes, not months.
          </p>
        </div>

        {/* Video Window Container */}
        <div className="max-w-5xl mx-auto animate-fade-in-up">
           <div className="relative rounded-2xl md:rounded-[2rem] shadow-2xl shadow-black/50 bg-slate-950 border border-slate-800 overflow-hidden ring-1 ring-white/10 group">

              {/* Browser Header / Window Controls */}
              <div className="bg-slate-900/80 backdrop-blur-md px-4 sm:px-6 py-4 flex items-center gap-4 border-b border-white/5 relative z-20">
                 <div className="flex gap-2 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                 </div>

                 {/* Fake Address Bar */}
                 <div className="flex-1 max-w-2xl mx-auto hidden sm:block">
                    <div className="bg-slate-950/50 rounded-lg py-1.5 px-4 flex items-center justify-center text-xs font-mono text-slate-500 border border-white/5 gap-2">
                       <span className="text-green-500">&#x1F512;</span> app.getalloro.com/onboarding
                    </div>
                 </div>

                 <div className="w-12 hidden sm:block"></div>
              </div>

              {/* Video Frame */}
              <div className="relative aspect-video w-full bg-black group-hover:shadow-[0_0_50px_-12px_rgba(214,110,83,0.2)] transition-shadow duration-700">
                 <video
                    src="https://alloro-main-bucket.s3.us-east-1.amazonaws.com/imports/walkthrough.mp4"
                    className="absolute inset-0 w-full h-full z-20"
                    controls
                    playsInline
                    preload="metadata"
                    title="Alloro Onboarding Demo"
                 />

                 {/* Loading/Placeholder State (visible while loading) */}
                 <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-10">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-alloro-500/30 border-t-alloro-500 rounded-full animate-spin"></div>
                        <span className="text-slate-500 text-sm">Loading video...</span>
                    </div>
                 </div>
              </div>
           </div>

           {/* Reflection / Grounding Shadow */}
           <div className="mt-8 mx-auto w-[90%] h-4 bg-alloro-500/20 blur-2xl rounded-[100%] opacity-50"></div>
        </div>

      </div>
    </section>
  );
};

export default ExamplePreview;
