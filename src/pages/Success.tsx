import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, ArrowLeft } from 'lucide-react';

const Success: React.FC = () => {
  useEffect(() => {
    // Fire gtag events for success page
    if (window.gtag) {
      // Log page view
      window.gtag('event', 'page_view', {
        page_path: '/success',
        page_title: 'Demo Request Success'
      });

      // Fire backup conversion event
      window.gtag('event', 'conversion', {
        'conversion_id': 'lead_submission_success',
        'conversion_label': 'demo_request_success'
      });
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-alloro-500/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-emerald-500/5 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          {/* Checkmark Icon */}
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-900/30 ring-4 ring-emerald-500/20">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Report Requested!
          </h1>

          {/* Message */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're analyzing your practice data now. Check your email in a few minutes for your personalized growth roadmap.
          </p>

          {/* Success Details */}
          <div className="bg-white border border-emerald-200/50 rounded-2xl p-8 mb-12 shadow-lg shadow-emerald-900/5">
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Email Confirmation Sent</h3>
                  <p className="text-sm text-slate-600">Check your inbox for confirmation details and what to expect in your demo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">24-Hour Response</h3>
                  <p className="text-sm text-slate-600">Our team will reach out within 24 hours to schedule your personalized demo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Your Data is Secure</h3>
                  <p className="text-sm text-slate-600">HIPAA compliant and encrypted. We take your data security seriously</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-alloro-500 to-alloro-600 hover:from-alloro-600 hover:to-alloro-700 text-white font-bold rounded-xl lg:rounded-2xl shadow-xl shadow-alloro-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Success;
