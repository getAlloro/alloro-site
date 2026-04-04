/**
 * HowItWorks -- /how-it-works
 *
 * Three stages + expanded Monday email mockup + FAQ.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import { Search, Mail, Zap, ArrowRight } from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export default function HowItWorks() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      {
        "@type": "HowTo",
        name: "How Alloro Works",
        description: "Three steps to Business Clarity for your business.",
        step: [
          { "@type": "HowToStep", name: "The Checkup", text: "Enter your business name. Alloro scans your market and delivers your score in 60 seconds." },
          { "@type": "HowToStep", name: "The Monday Brief", text: "Every Monday at 7am, your Business Clarity Brief arrives." },
          { "@type": "HowToStep", name: "The Clarity Layer", text: "When your top referring source goes 30 days without sending business, you get a note Monday morning, not a surprise three months later." },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Do I need to install anything?", acceptedAnswer: { "@type": "Answer", text: "No. Alloro reads publicly available signals about your business's market position." } },
          { "@type": "Question", name: "Is my business data private?", acceptedAnswer: { "@type": "Answer", text: "Alloro reads market-level signals, not personal records. No private data ever enters the system." } },
        ],
      },
    ],
  });

  return (
    <MarketingLayout
      title="How Alloro Works"
      description="Type your business name. Monday morning, we tell you which competitor gained ground and what to do about it."
    >
      {/* Hero */}
      <section className="bg-white px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <motion.div
          className="max-w-content mx-auto grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">How It Works</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[54px] leading-[1.1] tracking-[-0.02em] mb-6">
              Three steps. Then Monday morning just changed.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-lg mb-8">
              You type your business name. Monday morning, we tell you
              which competitor gained 11 reviews last week and what to do about it.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={AUDIT_BASE}
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
              >
                See where you rank <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-[#9CA3AF]">60 seconds. No account required.</p>
            </motion.div>
          </div>

          {/* Right — three steps preview */}
          <motion.div variants={fadeUp} className="hidden lg:flex flex-col gap-3">
            {[
              { n: "01", label: "The Checkup", body: "Type your name. 60 seconds. True finding." },
              { n: "02", label: "The Monday Brief", body: "One email. One action. Every week at 7am." },
              { n: "03", label: "The Clarity Layer", body: "Your market, your score, what changed." },
            ].map(({ n, label, body }) => (
              <div key={n} className="flex items-start gap-4 bg-[#FAFAF8] rounded-xl px-5 py-4 border border-[#E5E7EB]">
                <span className="font-heading font-bold text-2xl text-[#E5E7EB] leading-none shrink-0 w-8">{n}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#D66853] mb-0.5">{label}</p>
                  <p className="text-sm text-[#4B5563] leading-snug">{body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Three Stages */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto space-y-24">

          {/* Stage 1 */}
          <motion.div
            className="grid sm:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <div className="mb-6">
                <span className="font-heading font-bold text-[120px] sm:text-[140px] leading-none text-[#E5E7EB] select-none block -mb-6">01</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D66853]/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-[#D66853]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">Free · 60 seconds</span>
              </div>
              <h3 className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
                The Checkup
              </h3>
              <div className="h-px w-8 bg-[#D66853] mb-5" />
              <p className="text-[#4B5563] text-base leading-[1.8]">
                Enter your business name. Alloro scans your market: competitors, rankings, review velocity, online visibility. You see your score and the one thing most affecting your position. No account required.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E7EB]">
              <img src="/product-checkup.png" alt="Alloro Checkup in action" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>

          {/* Stage 2 */}
          <motion.div
            className="grid sm:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E7EB] order-2 sm:order-1">
              <img src="/product-dashboard.png" alt="Alloro Dashboard with Business Clarity Score" className="w-full" loading="lazy" />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 sm:order-2">
              <div className="mb-6">
                <span className="font-heading font-bold text-[120px] sm:text-[140px] leading-none text-[#E5E7EB] select-none block -mb-6">02</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#1E3A8A]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">Automated · Every Monday</span>
              </div>
              <h3 className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
                The Monday Brief
              </h3>
              <div className="h-px w-8 bg-[#D66853] mb-5" />
              <p className="text-[#4B5563] text-base leading-[1.8]">
                Create an account. Every Monday at 7am, your Business Clarity Brief arrives. One score. One finding specific to your business. One action you can take this week. The brief takes 90 seconds to read. The action takes 10 minutes to do.
              </p>
            </motion.div>
          </motion.div>

          {/* Stage 3 */}
          <motion.div
            className="grid sm:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <div className="mb-6">
                <span className="font-heading font-bold text-[120px] sm:text-[140px] leading-none text-[#E5E7EB] select-none block -mb-6">03</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#D66853]/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#D66853]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#9CA3AF]">Ongoing · Autonomous</span>
              </div>
              <h3 className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
                The Clarity Layer
              </h3>
              <div className="h-px w-8 bg-[#D66853] mb-5" />
              <p className="text-[#4B5563] text-base leading-[1.8]">
                Connect your existing data. When your top referring source goes 30 days without sending business, you get a note Monday morning, not a surprise three months later. When a competitor opens a second location, you know before your staff hears about it.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E7EB]">
              <img src="/product-rankings.png" alt="Alloro Rankings tracking competitors" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Monday Email Mockup */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-[580px] mx-auto">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">In your inbox</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              What shows up Monday morning
            </motion.h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="h-1.5 bg-gradient-to-r from-[#D66853] to-[#C45A46]" />
            <div className="px-8 py-5 border-b border-[#F3F4F6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">A</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#212D40]">Alloro</p>
                  <p className="text-[10px] text-[#9CA3AF]">hello@getalloro.com</p>
                </div>
              </div>
              <p className="text-[10px] text-[#9CA3AF]">Monday, 7:00 AM</p>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <p className="text-[11px] text-[#9CA3AF] mb-1.5 uppercase tracking-wider font-medium">Subject</p>
                <p className="text-base font-bold text-[#212D40]">
                  Your market moved this week.
                </p>
              </div>

              <div className="flex items-center gap-4 py-4 px-5 bg-[#FAFAF8] rounded-xl border border-[#E5E7EB]">
                <div className="text-center">
                  <p className="font-heading font-bold text-[#212D40] text-3xl leading-none">72</p>
                  <p className="text-[10px] text-[#9CA3AF] mt-1 uppercase tracking-wide">Your score</p>
                </div>
                <div className="h-8 w-px bg-[#E5E7EB]" />
                <div className="text-center">
                  <p className="font-heading font-bold text-[#D66853] text-3xl leading-none">84</p>
                  <p className="text-[10px] text-[#9CA3AF] mt-1 uppercase tracking-wide">Competitor</p>
                </div>
                <div className="h-8 w-px bg-[#E5E7EB]" />
                <p className="text-xs text-[#4B5563] leading-[1.6] flex-1">
                  The gap widened by 3 points this week.
                </p>
              </div>

              <div className="border-l-[3px] border-[#D66853] pl-5">
                <p className="text-sm text-[#4B5563] leading-[1.75]">
                  Cascade Endodontics gained 11 reviews last week. You gained 0.
                  At this pace, they close the gap to rank #1 in your market
                  within 8 weeks. One review request to your last 10 patients
                  changes this trajectory.
                </p>
              </div>
              <div className="border-l-[3px] border-[#E5E7EB] pl-5">
                <p className="text-sm text-[#9CA3AF] leading-[1.75]">
                  Your top referral source hasn't sent business in 34 days. This
                  is the longest gap in 14 months. Worth a call this week.
                </p>
              </div>
              <div className="rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D66853] mb-2">
                  This week
                </p>
                <p className="text-sm text-[#4B5563] leading-[1.7]">
                  Request reviews from 10 customers who visited last month.
                  Takes 8 minutes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-[680px] mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">Questions</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              The ones we always get
            </motion.h2>
          </motion.div>

          <motion.div
            className="divide-y divide-[#F3F4F6]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              { q: "Do I need to install anything?", a: "No. Alloro reads publicly available signals about your business's market position. Nothing is installed on your website or connected to your systems unless you choose to connect it." },
              { q: "How long until I see my first Monday brief?", a: "Your first brief arrives the Monday after you create your account. If you sign up on a Tuesday, you have something to read by Monday morning." },
              { q: "What if I don't want to receive weekly emails?", a: "You can pause them, change the frequency, or turn them off anytime from your dashboard. The data keeps running whether the emails do or not." },
              { q: "Is my business data private?", a: "Alloro reads market-level signals, not personal records. No private data ever enters the system. The intelligence is about your competitive position, not about anyone who visits your business." },
              { q: "What specialties does Alloro serve?", a: "Alloro serves every local service business: endodontists, orthodontists, general dentists, attorneys, veterinarians, barbers, landscapers, med spas, plumbers, CPAs, real estate agents, fitness studios, chiropractors, physical therapists, restaurants, auto shops, and more." },
            ].map(({ q, a }) => (
              <motion.div key={q} variants={fadeUp} className="py-8 grid sm:grid-cols-[1fr_1.6fr] gap-6">
                <h3 className="font-semibold text-[#212D40] text-base leading-snug">{q}</h3>
                <p className="text-[#4B5563] text-sm leading-[1.8]">{a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-20 sm:py-24">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
            See where you stand. Right now.
          </h2>
          <p className="text-white/40 text-sm mb-8">Free. 60 seconds. No account required.</p>
          <a
            href={AUDIT_BASE}
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-base font-semibold px-8 py-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(214,104,83,0.35)]"
          >
            See where you rank <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
