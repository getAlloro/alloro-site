/**
 * ProductPage -- /product
 *
 * What Business Clarity actually looks like.
 * Checkup, Monday Email, Your Website, Agent System, Pricing.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import { ArrowRight } from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function ProductPage() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      { "@type": "WebPage", "@id": "https://getalloro.com/product", url: "https://getalloro.com/product", name: "How Alloro Works", isPartOf: { "@id": "https://getalloro.com/#website" } },
    ],
  });

  return (
    <MarketingLayout
      title="The Product"
      description="Enter your business name. 60 seconds later, see your competitive position. Monday morning, get the one action that matters."
    >
      {/* Hero */}
      <section className="bg-white px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <motion.div
          className="max-w-content mx-auto grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">The Product</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
              What Business Clarity actually looks like.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-lg mb-8">
              Enter your business name. 60 seconds later, see your competitive position. Monday morning, get the one action that matters.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={AUDIT_BASE}
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
              >
                Run your free Checkup <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right — what's included at a glance */}
          <motion.div variants={fadeUp} className="hidden lg:flex flex-col gap-2.5">
            {[
              { label: "Free Checkup", sub: "60 seconds · No account needed" },
              { label: "Monday Brief", sub: "One finding · Every week · 7am" },
              { label: "Alloro Website", sub: "Built in 1 hour from your data" },
              { label: "Revenue Intel", sub: "Know before relationships drift" },
              { label: "Competitive Tracking", sub: "Your market, every week" },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-start gap-3 bg-[#FAFAF8] border border-[#E5E7EB] rounded-xl px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D66853] shrink-0 mt-1.5" />
                <div>
                  <p className="text-sm font-semibold text-[#212D40]">{label}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Section 1: The Checkup */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66853] mb-5">
            The Checkup
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-6">
            60 seconds. Free. True finding. No pitch.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8] mb-4">
            Enter your business name.
            60 seconds later, Alloro tells you something specific and true
            about your business that you didn't know.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8] mb-8">
            Free. No account required. No pitch afterward.
            Just the truth.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
            >
              Run your free Checkup <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 2: The Monday Email */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-[600px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66853] mb-5">
              The Monday Email
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-8">
              Not a dashboard you check. An interrupt that matters.
            </motion.h2>

            {/* Mock email */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.08)] mb-8"
            >
              <div className="h-1 bg-[#D66853]" />
              <div className="p-7 space-y-4">
                <div>
                  <p className="text-[11px] text-[#9CA3AF] mb-1.5 uppercase tracking-wider font-medium">Subject</p>
                  <p className="text-sm font-bold text-[#212D40]">
                    Your #2 referral source went quiet this week.
                  </p>
                </div>
                <p className="text-sm text-[#4B5563] leading-[1.75]">
                  Dr. Patel at Riverside Family sent you 6 cases in Q4.
                  Zero in the last 45 days. Estimated $9,000/year at risk.
                </p>
                <p className="text-sm text-[#9CA3AF] blur-[3px] select-none leading-[1.75]">
                  Your ranking for the primary search query in your market
                  moved from position 3 to position 5. Here is what changed.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4 text-[#4B5563] text-base leading-[1.8]">
              <p>
                Not a dashboard you check.
                Not a report you read.
              </p>
              <p>
                An interrupt that matters, once a week,
                when you have the mental space to act on it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Your Website */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66853] mb-5">
            Your Website
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-6">
            Built in under an hour. Updated automatically.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8] mb-4">
            The intelligence layer makes you findable.
            Your Alloro website makes sure the person who finds you
            knows exactly why they should choose you.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            Built in under an hour.
            Updated automatically as your business evolves.
          </motion.p>
        </motion.div>
      </section>

      {/* Section 4: The Agent System */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66853] mb-5">
            The Agent System
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-6">
            47 AI agents. Around the clock. Never asking for your time.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8] mb-4">
            Alloro doesn't wait for you to notice something.
            47 AI agents watch your business around the clock.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8] mb-4">
            When something changes, the right alert fires.
            When a referral pattern shifts, the Monday email catches it.
            When a competitor moves, you know before your next customer walks in.
          </motion.p>
          <motion.p variants={fadeUp} className="font-semibold text-[#212D40] text-base">
            The business runs. You do what you do best.
          </motion.p>
        </motion.div>
      </section>

      {/* Pricing */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-20 sm:py-24">
        <motion.div
          className="max-w-[560px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-white text-3xl sm:text-4xl tracking-[-0.02em] mb-4">
            One plan. $2,000/month.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-base leading-relaxed mb-6">
            Everything included. No contracts. No setup fees.
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-2 text-sm text-white/40 mb-8">
            <p>First-year businesses: $400/month. The Founders Fund.</p>
            <p>Veterans and first responders: Free. Always. Heroes Program.</p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-base font-semibold px-8 py-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(214,104,83,0.35)]"
            >
              See Where You Rank <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
