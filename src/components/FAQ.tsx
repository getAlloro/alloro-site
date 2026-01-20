import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-800 group-hover:text-slate-900 transition-colors pr-8">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed animate-fadeIn">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is ALLORO?",
      answer: "ALLORO is an AI-powered practice intelligence platform built for specialty practices. It connects existing data sources and explains what’s happening, why it matters, and what to do next, clearly and without guesswork."
    },
    {
      question: "How is ALLORO different from traditional software or dashboards?",
      answer: "Most tools show charts and raw numbers. ALLORO interprets the data for you. It explains changes in plain English and provides clear guidance, so practices don’t need to analyze dashboards or reports."
    },
    {
      question: "Is ALLORO an agency?",
      answer: "No. ALLORO is not an agency. It doesn’t manage things behind the scenes or lock you into contracts. Instead, it provides clarity and guidance while you remain in control of decisions and execution."
    },
    {
      question: "Who is ALLORO built for?",
      answer: "ALLORO is built for specialty-led practices, including orthodontic and endodontic practices, that want clarity, confidence, and control over growth without relying on agencies or complex tools."
    },
    {
      question: "Do I need to set anything up?",
      answer: "There’s no heavy setup. You connect your existing accounts, and ALLORO begins generating insights automatically. There are no dashboards to configure or technical workflows to manage."
    },
    {
      question: "Where does ALLORO’s data come from?",
      answer: "ALLORO uses real data from trusted sources such as Google Business Profile, Google Search, analytics tools, and connected practice systems. Every metric shown is grounded in a real source and can be verified."
    },
    {
      question: "How does ALLORO use AI?",
      answer: "ALLORO’s AI continuously reviews data from specialty practices, including orthodontics and endodontic practices, to detect changes, identify patterns, and explain performance in clear, practical language."
    },
    {
      question: "Can ALLORO support orthodontic and endodontic practices specifically?",
      answer: "Yes. ALLORO supports orthodontic and endodontic practices by helping them understand online visibility, referral patterns, and performance trends without relying on guesswork or opaque reports."
    },
    {
      question: "What happens if ALLORO isn’t a good fit for my practice?",
      answer: "You’re never locked in. If ALLORO isn’t providing value, you can leave at any time. Your data, insights, and patient relationships remain yours."
    },
    {
      question: "Can I use ALLORO on mobile devices?",
      answer: "Yes. ALLORO is fully mobile-friendly, allowing orthodontic and endodontic practices to review insights and updates anytime, anywhere."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Common Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;