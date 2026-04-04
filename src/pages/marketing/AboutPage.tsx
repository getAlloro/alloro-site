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
  hidden: { opacity: 0, y: 24 },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

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
      {/* Hero */}
      <section className="bg-white px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/60 mb-5">
            About
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[52px] leading-[1.1] tracking-[-0.02em]">
            Why this exists.
          </motion.h1>
        </motion.div>
      </section>

      {/* Story body */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto space-y-6 text-[#4B5563] text-base leading-[1.8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp}>
            Corey Wise served in the United States Air Force.
            He carries a 100% service-connected disability rating.
          </motion.p>
          <motion.p variants={fadeUp}>
            For a decade, he worked inside specialty service businesses,
            watching brilliant people lose businesses they'd spent their careers building.
            Not because they weren't talented.
            Because they couldn't see what was happening until it was too late.
          </motion.p>
          <motion.p variants={fadeUp}>
            For years before Alloro existed, he taught webinars for veteran entrepreneurs.
            For free. Before there was anything to sell.
          </motion.p>
          <motion.blockquote
            variants={fadeUp}
            className="border-l-[3px] border-[#D66853] pl-6 py-1 my-4"
          >
            <p className="font-heading italic text-xl sm:text-2xl text-[#212D40] leading-snug">
              "Alloro is not an idea he had. It is the tool he spent a decade wishing someone would build."
            </p>
          </motion.blockquote>
          <motion.p variants={fadeUp} className="font-semibold text-[#212D40] text-base">
            He built it.
          </motion.p>
          <motion.p variants={fadeUp}>
            The Heroes & Founders Foundation is not a marketing program.
            It is the formalization of work that was already being done.
          </motion.p>
          <motion.p variants={fadeUp}>
            Alloro is built on Claude, Anthropic's AI model,
            because Anthropic refused a Department of Defense surveillance contract
            to protect user data. Alloro made the same choice.
            You build with the companies whose values match yours.
          </motion.p>
        </motion.div>
      </section>

      {/* Personal details */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CA3AF] mb-6">
            The person behind it
          </motion.p>
          <motion.div variants={fadeUp} className="space-y-2">
            {[
              "He lives in Bend, Oregon.",
              "He competes in USPSA.",
              "He bakes sourdough for his daughter Sophie.",
              "He drives air-cooled Porsches.",
              "He fly fishes.",
            ].map((line) => (
              <p key={line} className="text-[#9CA3AF] text-base">{line}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 pt-8 border-t border-[#F3F4F6]">
            <p className="text-[#4B5563] text-base leading-[1.8] mb-4">
              He is building Alloro because the butterfly effect is real.
            </p>
            <p className="text-[#9CA3AF] text-base leading-[1.8] mb-2">
              The business owner who opens Monday morning with clarity
              pays for the coffee of the person behind them in the drive-thru.
              That person smiles at the checkout teller.
              The teller takes that home.
            </p>
            <p className="text-[#9CA3AF] text-sm">Six degrees.</p>
            <p className="font-semibold text-[#212D40] text-base mt-4">
              The freedom Alloro gives back doesn't stop with the owner.
              It never did.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTAs */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="max-w-[600px] mx-auto flex flex-col sm:flex-row gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a
            href={AUDIT_BASE}
            className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
          >
            See Where You Rank <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            to="/story"
            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-[#E5E7EB] text-[#212D40] text-sm font-semibold px-6 py-3 hover:border-[#D66853]/30 transition-colors"
          >
            Read Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
