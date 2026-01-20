import React from "react";
import Button from "./Button";
import { Mail } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToForm = () => {
    const element = document.getElementById("lead-capture");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 pt-16 md:pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big CTA Section */}
        <div className="relative bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden mb-16 md:mb-20 border border-slate-800 shadow-2xl">
          {/* Background Glows */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-[20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#d66e53]/10 rounded-full blur-[80px] md:blur-[100px]"></div>
            <div className="absolute bottom-[-50%] right-[20%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-tight">
              Ready to see clearly?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 leading-relaxed">
              Join the specialty practices using Alloro to stop guessing and
              start growing with confidence.
            </p>
            <div className="flex justify-center">
              <Button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold !bg-[#d66e53] !hover:bg-[#c1583e] !text-white !border-none shadow-xl shadow-[#d66e53]/20 rounded-2xl transform transition-transform hover:-translate-y-1"
              >
                Get Free Practice Analysis
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-t border-slate-800/50 pt-12 md:pt-16">
          {/* Brand Column */}
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://app.getalloro.com/logo.png"
                alt="Alloro Logo"
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-2xl font-bold text-white tracking-tight">
                Alloro
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              The AI growth platform built specifically for specialty practices.
              Clear insights, verified data, and zero guesswork.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors cursor-pointer">
                <a href="mailto:info@getalloro.com">
                  <Mail size={16} /> info@getalloro.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-white font-bold mb-4 md:mb-6">Legal</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-500 md:text-right text-sm md:text-base">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#d66e53] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-[#d66e53] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Alloro Inc. All rights reserved.
          </p>
          <p>Made with clarity in the USA.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
