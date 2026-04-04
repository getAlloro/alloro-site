/**
 * PricingPage -- /pricing
 *
 * One product. One price. No contracts.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Mail, Globe, BarChart2, TrendingUp, Layers } from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const INCLUDES = [
  {
    title: "Your Business Clarity Brief every Monday morning.",
    desc: "Alloro scans your market every week and delivers one finding, one action, and one score. In plain English. Before you see your first client.",
  },
  {
    title: "Your Alloro website, built in one hour.",
    desc: "A professional, conversion-optimized web presence built from your real market data and Google reviews. Live within one hour of signup.",
  },
  {
    title: "Revenue source intelligence.",
    desc: "Connect your business data and Alloro monitors every relationship that drives revenue. When one starts to drift, you know first, with the dollar figure attached.",
  },
  {
    title: "Competitive intelligence.",
    desc: "Weekly competitive position tracking across local search, reviews, and online visibility. Your score. Their score. What changed.",
  },
  {
    title: "The full Business Clarity layer.",
    desc: "Connect your data and Alloro puts a dollar figure on every finding. What's working, what's slipping, and what to do about it this week.",
  },
];

const WHAT_YOU_GET = [
  { icon: <Mail className="w-5 h-5" />, label: "Monday Brief", desc: "Weekly intelligence in 90 seconds" },
  { icon: <Globe className="w-5 h-5" />, label: "Alloro Website", desc: "Built from your data, live in 1 hour" },
  { icon: <BarChart2 className="w-5 h-5" />, label: "Revenue Tracking", desc: "Know which relationships are drifting" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Competitive Intel", desc: "Your market, every week" },
  { icon: <Layers className="w-5 h-5" />, label: "Clarity Layer", desc: "Full business intelligence, quantified" },
];

export default function PricingPage() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      {
        "@type": "Product",
        name: "Alloro Business Clarity",
        description: "Business Clarity platform for local service professionals.",
        url: "https://getalloro.com/pricing",
        brand: { "@id": "https://getalloro.com/#organization" },
        offers: {
          "@type": "Offer",
          price: "2000",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "2000",
            priceCurrency: "USD",
            billingDuration: "P1M",
            unitText: "per location per month",
          },
        },
      },
    ],
  });

  return (
    <MarketingLayout
      title="Pricing"
      description="$2,000/month per location. Your Monday Brief, professional website, revenue intelligence, and competitive tracking. No contracts."
    >
      {/* Hero */}
      <section className="bg-white px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <motion.div
          className="max-w-content mx-auto grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">Pricing</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[54px] leading-[1.1] tracking-[-0.02em] mb-5">
              Everything Alloro does.<br className="hidden sm:block" /> One price.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-lg">
              One product. One price. No contracts. No "starter" tier that doesn't actually work.
            </motion.p>
          </div>

          {/* Right — price card preview */}
          <motion.div variants={fadeUp} className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="h-[3px] bg-[#D66853]" />
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D66853] mb-4">Alloro</p>
                <p className="font-heading font-bold text-[#212D40] text-4xl mb-1">$2,000<span className="text-base font-sans font-normal text-[#9CA3AF] ml-1">/mo</span></p>
                <p className="text-xs text-[#9CA3AF] mb-5">No contracts. Cancel anytime.</p>
                <div className="space-y-2.5">
                  {["Monday Brief", "Alloro Website", "Revenue Tracking", "Competitive Intel", "Full Clarity Layer"].map(item => (
                    <div key={item} className="flex items-center gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#D66853] shrink-0" />
                      <p className="text-sm text-[#4B5563]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What you're getting — visual icons */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16">
        <div className="max-w-[700px] mx-auto">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {WHAT_YOU_GET.map(({ icon, label, desc }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/8 flex items-center justify-center text-[#1E3A8A] mx-auto mb-3">
                  {icon}
                </div>
                <p className="text-xs font-bold text-[#212D40] mb-1">{label}</p>
                <p className="text-[10px] text-[#9CA3AF] leading-[1.5]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing card */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 pb-20 sm:pb-24">
        <div className="max-w-[560px] mx-auto">
          <motion.div
            className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.10)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="h-1 bg-gradient-to-r from-[#D66853] to-[#C45A46]" />
            <div className="p-8 sm:p-10">
              {/* Price */}
              <div className="flex items-end justify-between mb-8 pb-8 border-b border-[#F3F4F6]">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-bold text-[#212D40] text-5xl sm:text-6xl tracking-tight">
                      $2,000
                    </span>
                    <span className="text-[#9CA3AF] text-lg">/ month</span>
                  </div>
                  <p className="text-sm text-[#9CA3AF] mt-1.5">Per location. Cancel anytime.</p>
                </div>
                <div className="hidden sm:block text-right">
                  <p className="text-xs font-bold text-[#D66853] uppercase tracking-[0.15em]">No contracts</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">No setup fees</p>
                </div>
              </div>

              {/* What's included */}
              <motion.div
                className="space-y-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {INCLUDES.map(({ title, desc }) => (
                  <motion.div key={title} variants={fadeUp} className="flex gap-4">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#D66853]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#D66853]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#212D40] mb-1">{title}</p>
                      <p className="text-sm text-[#9CA3AF] leading-[1.7]">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Rise Together callout — cobalt tinted */}
          <motion.div
            className="mt-5 rounded-2xl border border-[#1E3A8A]/15 bg-[#1E3A8A]/[0.04] p-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-6 bg-[#1E3A8A]/40" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/60">Rise Together</p>
            </div>
            <p className="text-base font-bold text-[#212D40] mb-2">
              Split month one.
            </p>
            <p className="text-sm text-[#4B5563] leading-[1.7]">
              Know a colleague who should see their market? When they join,
              you both pay $1,000 for month one instead of $2,000.
              Not a discount. A shared investment. We all rise together.
            </p>
            <Link to="/rise" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] mt-4 hover:underline underline-offset-2">
              Learn more <ArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>

          {/* Foundation line */}
          <motion.div
            className="mt-4 rounded-xl border border-[#E5E7EB] bg-white p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm text-[#4B5563] leading-[1.7]">
              10% of every subscription funds the{" "}
              <span className="text-[#D66853] font-semibold">Heroes & Founders Foundation</span>.
              Veterans and first-year business owners get access at no cost or reduced cost.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-10 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-base font-semibold px-8 py-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(214,104,83,0.30)]"
            >
              See my numbers first <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-3 text-sm text-[#9CA3AF]">
              See where you rank. Free. 60 seconds. Then decide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-20 sm:py-24">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
            Your market doesn't wait.
          </h2>
          <p className="text-white/40 text-sm mb-8">See your score before your competitor sees theirs.</p>
          <a
            href={AUDIT_BASE}
            className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-base font-semibold px-8 py-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(214,104,83,0.35)]"
          >
            Start with the free Checkup <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
