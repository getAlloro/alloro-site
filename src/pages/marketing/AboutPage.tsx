/**
 * AboutPage -- /about
 *
 * Corey's story. Not a bio page.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const PERSONAL_DETAILS = [
  "He lives in Bend, Oregon.",
  "He competes in USPSA.",
  "He bakes sourdough for his daughter Sophie.",
  "He drives air-cooled Porsches.",
  "He fly fishes.",
];

export default function AboutPage() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      {
        "@type": "Person",
        "@id": "https://getalloro.com/about#corey",
        name: "Corey Wise",
        jobTitle: "Founder & CEO",
        worksFor: { "@id": "https://getalloro.com/#organization" },
        description: "USAF veteran. A decade inside specialty service businesses. Built Alloro because the butterfly effect is real.",
        url: "https://getalloro.com/about",
      },
    ],
  });

  return (
    <MarketingLayout
      title="About Corey Wise"
      description="USAF veteran. 100% service-connected disability. A decade inside specialty service businesses. Alloro is the tool he wished existed."
    >
      {/* Hero — two-column editorial layout */}
      <section className="bg-white px-5 sm:px-8 pt-20 pb-0 sm:pt-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="grid sm:grid-cols-[1fr_340px] gap-12 items-end pb-16 sm:pb-20"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Left: headline */}
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#D66853]" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">About</p>
              </motion.div>
              <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[54px] leading-[1.1] tracking-[-0.02em] mb-6">
                Why this exists.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-md">
                USAF veteran. 100% service-connected disability rating. A decade inside specialty service businesses. Alloro is the tool he spent that decade wishing someone would build.
              </motion.p>
            </div>

            {/* Right: Corey's photo */}
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-2xl pointer-events-none z-10" />
              <img
                src="/corey-wise.jpg"
                alt="Corey Wise, Founder of Alloro"
                className="w-full rounded-2xl object-cover shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.14)] aspect-[3/4]"
              />
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-[#E5E7EB]" />
                <div className="text-right">
                  <p className="text-xs font-semibold text-[#212D40]">Corey Wise</p>
                  <p className="text-[10px] text-[#9CA3AF]">Founder · USAF veteran · Bend, Oregon</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story body */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[640px] mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            Corey Wise served in the United States Air Force.
            He carries a 100% service-connected disability rating.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            For a decade, he worked inside specialty service businesses,
            watching brilliant people lose businesses they'd spent their careers building.
            Not because they weren't talented.
            Because they couldn't see what was happening until it was too late.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            For years before Alloro existed, he taught webinars for veteran entrepreneurs.
            For free. Before there was anything to sell.
          </motion.p>

          {/* Pull quote */}
          <motion.div variants={fadeUp} className="relative py-2">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D66853] rounded-full" />
            <blockquote className="pl-8">
              <p className="font-heading italic text-xl sm:text-2xl text-[#212D40] leading-[1.4]">
                "Alloro is not an idea he had. It is the tool he spent a decade wishing someone would build."
              </p>
            </blockquote>
          </motion.div>

          <motion.p variants={fadeUp} className="font-heading font-bold text-[#212D40] text-xl tracking-[-0.01em]">
            He built it.
          </motion.p>
        </motion.div>
      </section>

      {/* Foundation */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[640px] mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#D66853]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">Values</p>
          </motion.div>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            The Heroes & Founders Foundation is not a marketing program.
            It is the formalization of work that was already being done.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            Alloro is built on Claude, Anthropic's AI model,
            because Anthropic refused a Department of Defense surveillance contract
            to protect user data. Alloro made the same choice.
            You build with the companies whose values match yours.
          </motion.p>
        </motion.div>
      </section>

      {/* Personal details — visual list */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="max-w-[640px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-[#D66853]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">The person behind it</p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-3">
            {PERSONAL_DETAILS.map((line) => (
              <div key={line} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D66853] shrink-0" />
                <p className="text-[#4B5563] text-base">{line}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 pt-10 border-t border-[#E5E7EB]">
            <p className="text-[#4B5563] text-base leading-[1.8] mb-4">
              He is building Alloro because the butterfly effect is real.
            </p>
            <p className="text-[#9CA3AF] text-base leading-[1.8] mb-2">
              The business owner who opens Monday morning with clarity
              pays for the coffee of the person behind them in the drive-thru.
              That person smiles at the checkout teller.
              The teller takes that home.
            </p>
            <p className="text-[#9CA3AF] text-sm mb-5">Six degrees.</p>
            <p className="font-heading font-bold text-[#212D40] text-xl tracking-[-0.01em]">
              The freedom Alloro gives back doesn't stop with the owner.
              It never did.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Quote + CTA */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-20 sm:py-24">
        <motion.div
          className="max-w-[560px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-heading italic text-white/70 text-xl sm:text-2xl leading-[1.4] mb-10">
            "The businesses worth building deserve the tools to protect them."
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
            >
              See Where You Rank <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/story"
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-white/20 text-white/70 text-sm font-semibold px-6 py-3 hover:border-white/40 hover:text-white transition-colors"
            >
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
