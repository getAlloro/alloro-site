import React from 'react';
import { UserCheck, Zap, BarChart3, RotateCcw, Award } from 'lucide-react';

const TrustItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center gap-2 p-4">
    <div className="text-alloro-600 mb-1">{icon}</div>
    <span className="text-sm font-medium text-slate-700">{text}</span>
  </div>
);

const TrustStack: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20 lg:py-28 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <TrustItem 
            icon={<UserCheck size={28} />}
            text="Built for specialty practices"
          />
          <TrustItem 
            icon={<Zap size={28} />}
            text="No setup burden"
          />
          <TrustItem 
            icon={<BarChart3 size={28} />}
            text="Every metric is verifiable"
          />
          <TrustItem 
            icon={<RotateCcw size={28} />}
            text="Everything is reversible in seconds"
          />
        </div>

        <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-alloro-100 shadow-sm">
                <Award className="text-yellow-500 w-5 h-5" />
                <span className="text-slate-800 font-semibold text-sm">30-Day Clarity & Control Guarantee</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TrustStack;