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
  hidden: { opacity: 0, y: 24 },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

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
          className="max-w-[640px] mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/60 mb-5">
            How It Works
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
            Three steps. Then Monday morning just changed.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-relaxed max-w-lg mx-auto mb-8">
            You type your business name. Monday morning, we tell you
            which competitor gained 11 reviews last week and what to do about it.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
            >
              See where you rank <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-[#9CA3AF]">60 seconds. No account required.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Three Stages */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto space-y-20">
          {/* Stage 1 */}
          <motion.div
            className="grid sm:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Stage
                step="01"
                icon={<Search className="w-6 h-6 text-[#D66853]" />}
                title="The Checkup"
                subtitle="60 seconds. Free."
                body="Enter your business name. Alloro scans your market: competitors, rankings, review velocity, online visibility. You see your score and the one thing most affecting your position. No account required."
              />
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E7EB]">
              <img src="/product-checkup.png" alt="Alloro Checkup in action" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>

          {/* Stage 2 */}
          <motion.div
            className="grid sm:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E7EB] order-2 sm:order-1">
              <img src="/product-dashboard.png" alt="Alloro Dashboard with Business Clarity Score" className="w-full" loading="lazy" />
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 sm:order-2">
              <Stage
                step="02"
                icon={<Mail className="w-6 h-6 text-[#1E3A8A]" />}
                title="The Monday Brief"
                subtitle="Automated, every week."
                body="Create an account. Every Monday at 7am, your Business Clarity Brief arrives. One score. One finding specific to your business. One action you can take this week. The brief takes 90 seconds to read. The action takes 10 minutes to do."
              />
            </motion.div>
          </motion.div>

          {/* Stage 3 */}
          <motion.div
            className="grid sm:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Stage
                step="03"
                icon={<Zap className="w-6 h-6 text-[#D66853]" />}
                title="The Clarity Layer"
                subtitle="Ongoing, autonomous."
                body="Connect your existing data. When your top referring source goes 30 days without sending business, you get a note Monday morning, not a surprise three months later. When a competitor opens a second location, you know before your staff hears about it."
              />
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] border border-[#E5E7EB]">
              <img src="/product-rankings.png" alt="Alloro Rankings tracking competitors" className="w-full" loading="lazy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Monday Email Mockup */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-[560px] mx-auto">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5">
              In your inbox
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              What shows up Monday morning
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="h-1 bg-[#D66853]" />
            <div className="p-8 space-y-6">
              <div>
                <p className="text-[11px] text-[#9CA3AF] mb-1.5 uppercase tracking-wider font-medium">Subject</p>
                <p className="text-base font-bold text-[#212D40]">
                  Your market moved this week.
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
        <div className="max-w-[640px] mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5">
              Questions
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              The ones we always get
            </h2>
          </motion.div>

          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {[
              { q: "Do I need to install anything?", a: "No. Alloro reads publicly available signals about your business's market position. Nothing is installed on your website or connected to your systems unless you choose to connect it." },
              { q: "How long until I see my first Monday brief?", a: "Your first brief arrives the Monday after you create your account. If you sign up on a Tuesday, you have something to read by Monday morning." },
              { q: "What if I don't want to receive weekly emails?", a: "You can pause them, change the frequency, or turn them off anytime from your dashboard. The data keeps running whether the emails do or not." },
              { q: "Is my business data private?", a: "Alloro reads market-level signals, not personal records. No private data ever enters the system. The intelligence is about your competitive position, not about anyone who visits your business." },
              { q: "What specialties does Alloro serve?", a: "Alloro serves every local service business: endodontists, orthodontists, general dentists, attorneys, veterinarians, barbers, landscapers, med spas, plumbers, CPAs, real estate agents, fitness studios, chiropractors, physical therapists, restaurants, auto shops, and more." },
            ].map(({ q, a }) => (
              <motion.div key={q} variants={fadeUp}>
                <h3 className="font-semibold text-[#212D40] text-base mb-2">{q}</h3>
                <p className="text-[#4B5563] text-sm leading-[1.75]">{a}</p>
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
          <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-[-0.02em] mb-6">
            See where you stand. Right now.
          </h2>
          <a
            href={AUDIT_BASE}
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-base font-semibold px-8 py-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(214,104,83,0.35)]"
          >
            See where you rank <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-sm text-white/30">Free. 60 seconds. No account required.</p>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}

function Stage({
  step,
  icon,
  title,
  subtitle,
  body,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] font-bold text-[#9CA3AF] tracking-[0.15em]">{step}</span>
        <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-1">
        {title}
      </h3>
      <p className="text-sm font-semibold text-[#9CA3AF] mb-4">{subtitle}</p>
      <p className="text-[#4B5563] text-base leading-[1.75]">{body}</p>
    </div>
  );
}
