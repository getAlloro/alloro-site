import React from 'react';
import { UserCheck, Zap, BarChart3, RotateCcw, ShieldCheck } from 'lucide-react';

const TrustItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
    <div className="w-14 h-14 rounded-full bg-alloro-50 flex items-center justify-center text-alloro-600 mb-4 group-hover:scale-110 transition-transform">
        {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">
        {desc}
    </p>
  </div>
);

const TrustStack: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Our promise <span className="text-alloro-500">to your practice.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Simple, transparent, and built for you.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <TrustItem
            icon={<UserCheck size={28} />}
            title="Built for Specialists"
            desc="Designed specifically for orthodontic and endodontic workflows."
          />
          <TrustItem
            icon={<Zap size={28} />}
            title="No Setup Burden"
            desc="Connect your existing accounts. We handle the heavy lifting."
          />
          <TrustItem
            icon={<BarChart3 size={28} />}
            title="Verifiable Metrics"
            desc="Every insight is backed by real source data you can check."
          />
          <TrustItem
            icon={<RotateCcw size={28} />}
            title="Total Control"
            desc="Cancel anytime. Reversible in seconds. You own your data."
          />
        </div>

        {/* Guarantee Badge */}
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-4 flex items-center justify-center gap-3 border border-alloro-100 shadow-sm">
                <ShieldCheck className="text-alloro-500 w-6 h-6 shrink-0" />
                <span className="text-slate-800 font-bold text-sm sm:text-base">
                    Protected by the <span className="text-alloro-600">30-Day Clarity & Control Guarantee</span>
                </span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TrustStack;
