import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from './Button';
import { Check, Search, TrendingUp, ArrowRight, ShieldCheck, Star, Loader2 } from 'lucide-react';
import { sendDemoRequestEmails, DemoRequestFormData } from '../utils/emailService';

const LeadForm: React.FC = () => {
  const navigate = useNavigate();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<DemoRequestFormData>({
    name: '',
    email: '',
    phone: '',
    website: ''
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const captchaTokenRef = useRef<string | null>(null);

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaLoading(false);
    if (token) {
      captchaTokenRef.current = token;
      setCaptchaVerified(true);
    } else {
      captchaTokenRef.current = null;
      setCaptchaVerified(false);
    }
  };

  const handleCaptchaClick = () => {
    if (captchaVerified) return;
    setCaptchaLoading(true);
    recaptchaRef.current?.execute();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified || !captchaTokenRef.current) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await sendDemoRequestEmails(formData);

      // Fire custom lead_submit event immediately after successful API call
      if (window.gtag) {
        window.gtag('event', 'lead_submit', {
          event_category: 'form',
          event_label: 'demo_request_form',
          value: 1
        });

        // Fire conversion event
        window.gtag('event', 'conversion', {
          'conversion_id': 'lead_submission',
          'conversion_label': 'demo_request_submitted'
        });
      }

      // Reset form and navigate to success page
      recaptchaRef.current?.reset();
      captchaTokenRef.current = null;
      setCaptchaVerified(false);
      setFormData({ name: '', email: '', phone: '', website: '' });

      // Navigate to success page
      navigate('/success');
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('Demo request submission failed:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-capture" className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden">
      
      {/* Sophisticated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Terracotta glow top right */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-alloro-500/20 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen"></div>
          {/* Blue/Slate glow bottom left */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Column: Persuasive Content */}
            <div className="text-left">
                
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.05] tracking-tight">
                    See Alloro <br/>
                    <span className="text-[#d66e53]">In Action.</span>
                </h2>
                
                <p className="text-lg sm:text-xl text-slate-400 mb-10 sm:mb-12 max-w-lg leading-relaxed font-light">
                    Book a free demo. In 15 minutes, we’ll show you how ALLORO works, what it looks at, and how it helps you understand what’s working and what to improve.
                </p>

                <div className="space-y-6 sm:space-y-8">
                    <div className="flex gap-4 sm:gap-6 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-[#d66e53]/50 group-hover:bg-[#d66e53]/10 transition-all duration-300">
                            <Search className="text-[#d66e53]" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">Identify Missed Opportunities</h4>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">See where patients are dropping off and understand what to improve, clearly and based on real data.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 sm:gap-6 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-[#d66e53]/50 group-hover:bg-[#d66e53]/10 transition-all duration-300">
                            <TrendingUp className="text-[#d66e53]" size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2">Get Clear Direction</h4>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">Understand how your practice compares locally and what steps matter most to improve visibility and performance.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: The Form */}
            <div className="w-full relative mt-8 lg:mt-0">
                {/* Glow behind form */}
                <div className="absolute inset-0 bg-gradient-to-b from-alloro-500/20 to-transparent blur-3xl -z-10 rounded-[3rem] transform translate-y-4"></div>

                <div className="bg-white/95 backdrop-blur-sm rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl shadow-black/20 border border-white/50">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Request Your Demo</h3>
                        <div className="w-10 h-10 bg-alloro-50 rounded-full flex items-center justify-center">
                            <Star className="w-5 h-5 text-alloro-500 fill-alloro-500" />
                        </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                            <input
                              type="text"
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-alloro-500/20 focus:border-alloro-500 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-medium text-base"
                              placeholder="Dr. Sarah Smith"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="website" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Practice Website</label>
                            <div className="relative">
                                <input
                                  type="text"
                                  id="website"
                                  required
                                  value={formData.website}
                                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                                  className="w-full px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-alloro-500/20 focus:border-alloro-500 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-medium text-base"
                                  placeholder="smithortho.com"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">
                                    <Search size={18} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                                <input
                                  type="email"
                                  id="email"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                  className="w-full px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-alloro-500/20 focus:border-alloro-500 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-medium text-base"
                                  placeholder="name@practice.com"
                                />
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Mobile Phone</label>
                                <input
                                  type="tel"
                                  id="phone"
                                  required
                                  value={formData.phone}
                                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                  className="w-full px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-alloro-500/20 focus:border-alloro-500 outline-none transition-all placeholder:text-slate-400 text-slate-900 font-medium text-base"
                                  placeholder="(555) 123-4567"
                                />
                            </div>
                        </div>

                        {/* Custom reCAPTCHA Checkbox */}
                        <div
                          onClick={handleCaptchaClick}
                          className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                            captchaVerified
                              ? "bg-slate-100 border-slate-900"
                              : "bg-slate-50 border-slate-200 hover:border-slate-400"
                          }`}
                        >
                          <div
                            className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                              captchaVerified
                                ? "bg-slate-900 border-slate-900"
                                : "border-slate-400"
                            }`}
                          >
                            {captchaLoading ? (
                              <Loader2
                                size={14}
                                className="text-slate-600 animate-spin"
                              />
                            ) : captchaVerified ? (
                              <Check size={14} className="text-white" />
                            ) : null}
                          </div>
                          <span
                            className={`text-sm font-medium ${
                              captchaVerified
                                ? "text-slate-900"
                                : "text-slate-600"
                            }`}
                          >
                            {captchaLoading
                              ? "Verifying..."
                              : captchaVerified
                                ? "Verified - you're human!"
                                : "I'm not a robot"}
                          </span>
                        </div>

                        {/* Invisible reCAPTCHA */}
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                          onChange={handleCaptchaChange}
                          size="invisible"
                          badge="bottomright"
                        />

                        {error && (
                          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                            {error}
                          </div>
                        )}

                        <div className="pt-2">
                            <Button type="submit" fullWidth disabled={!captchaVerified || isSubmitting} className={`py-4 sm:py-5 text-lg font-bold bg-gradient-to-r from-alloro-500 to-alloro-600 hover:from-alloro-600 hover:to-alloro-700 text-white shadow-xl shadow-alloro-500/30 rounded-xl sm:rounded-2xl transform transition-all duration-300 hover:-translate-y-1 ${(!captchaVerified || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 w-5 h-5 animate-spin" /> Submitting...
                                </>
                              ) : (
                                <>
                                  Book Demo Today <ArrowRight className="ml-2 w-5 h-5" />
                                </>
                              )}
                            </Button>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                            <ShieldCheck size={14} className="text-alloro-500" />
                            <span>HIPAA Compliant & Secure</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;