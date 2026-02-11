import React from 'react';
import { ScanEye, ShieldCheck, Compass } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-100 shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-14 h-14 bg-alloro-50 rounded-2xl flex items-center justify-center text-alloro-500 mb-8 group-hover:bg-alloro-500 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
  </div>
);

const FeatureCards: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Added Section Heading */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Practice growth <span className="text-alloro-500">without guesswork</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            You focus on patient care. Alloro shows you where patients are finding you, where they're dropping off, and what actions actually improve revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ScanEye size={28} />}
            title="See what works"
            description="Track your orthodontic & endodontic practice performance clearly, no confusing charts, no assumptions."
          />
          <FeatureCard 
            icon={<ShieldCheck size={28} />}
            title="Data you can trust"
            description="Alloro provides real, verifiable data in real time. No inflated numbers. No guesswork."
          />
          <FeatureCard 
            icon={<Compass size={28} />}
            title="Clear, actionable steps"
            description="Alloro highlights the highest-impact actions to improve patient access, visibility, and conversion."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;