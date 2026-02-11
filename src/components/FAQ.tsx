import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-alloro-200 bg-alloro-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
      <button
        className="w-full p-6 flex items-start justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold transition-colors pr-8 leading-snug ${isOpen ? 'text-alloro-900' : 'text-slate-800'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-alloro-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 text-slate-600 leading-relaxed text-base">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Alloro?",
      answer: "Alloro is an AI-powered practice intelligence platform built for specialty practices. It connects existing data sources and explains what's happening, why it matters, and what to do next, clearly and without guesswork."
    },
    {
      question: "Where does Alloro's data come from?",
      answer: "Alloro uses real data from trusted sources such as Google Business Profile, Google Search, analytics tools, and connected practice systems. Every metric shown is grounded in a real source and can be verified."
    },
    {
      question: "How is Alloro different from dashboards?",
      answer: "Most tools show charts and raw numbers. Alloro interprets the data for you. It explains changes in plain English and provides clear guidance, so practices don't need to analyze dashboards or reports."
    },
    {
      question: "Do I need to set anything up?",
      answer: "There's no heavy setup. You connect your existing accounts, and Alloro begins generating insights automatically. There are no dashboards to configure or technical workflows to manage."
    },
    {
      question: "Is Alloro an agency?",
      answer: "No. Alloro is not an agency. It doesn't manage things behind the scenes or lock you into contracts. Instead, it provides clarity and guidance while you remain in control of decisions and execution."
    },
    {
      question: "Can I use Alloro on mobile devices?",
      answer: "Yes. Alloro is fully mobile-friendly, allowing orthodontic and endodontic practices to review insights and updates anytime, anywhere."
    },
    {
      question: "Who is Alloro built for?",
      answer: "Alloro is built for specialty-led practices, including orthodontic and endodontic practices, that want clarity, confidence, and control over growth without relying on agencies or complex tools."
    },
    {
      question: "What if Alloro isn't a good fit?",
      answer: "You're never locked in. If Alloro isn't providing value, you can leave at any time. Your data, insights, and patient relationships remain yours."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Common <span className="text-alloro-500">questions.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Everything you need to know about getting clarity for your practice.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
