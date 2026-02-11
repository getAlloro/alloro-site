import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ProofTileProps {
  value: string;
  label: string;
  source: string;
  isPositive?: boolean;
}

const ProofTile: React.FC<ProofTileProps> = ({ value, label, source, isPositive = true }) => (
  <div className="group bg-white rounded-2xl border border-slate-100 shadow-soft p-6 flex flex-col items-start hover:border-alloro-200 hover:shadow-lg transition-all duration-300 w-full">
    <div className="text-sm font-medium text-slate-500 mb-2">{label}</div>
    <div className={`text-3xl sm:text-4xl font-bold mb-4 tracking-tight ${isPositive ? 'text-slate-900' : 'text-red-500'}`}>
      {value}
    </div>
    <div className="w-full pt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-slate-500 transition-colors">
      <CheckCircle2 className="w-3.5 h-3.5 text-alloro-500" />
      <span className="font-medium">Verified by {source}</span>
    </div>
  </div>
);

const ProofRow: React.FC = () => {
  return (
    <section className="bg-white pb-16 md:pb-24 lg:pb-32 -mt-12 md:-mt-16 lg:-mt-24 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <ProofTile
            label="New Patients (This Week)"
            value="+18 People"
            source="Google"
          />
          <ProofTile
            label="Google Visibility"
            value="+11% Growth"
            source="Google"
          />
          <ProofTile
            label="Phone Calls"
            value="42 Calls"
            source="Google"
          />
        </div>
      </div>
    </section>
  );
};

export default ProofRow;
