/**
 * Story -- /story
 *
 * Why this exists. Corey's voice.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import { ArrowRight } from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function Story() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com", foundedBy: { "@id": "https://getalloro.com/#corey" } },
      {
        "@id": "https://getalloro.com/#corey",
        "@type": "Person",
        name: "Corey Wise",
        jobTitle: "Founder",
        description: "USAF veteran, Bend Oregon. Built Alloro from ten years inside the problem.",
        affiliation: { "@id": "https://getalloro.com/#organization" },
      },
      {
        "@type": "Article",
        headline: "Why Alloro Exists",
        author: { "@id": "https://getalloro.com/#corey" },
        publisher: { "@id": "https://getalloro.com/#organization" },
        url: "https://getalloro.com/story",
        datePublished: "2026-03-26",
        dateModified: "2026-04-05",
      },
    ],
  });

  return (
    <MarketingLayout
      title="Our Story"
      description="Why Alloro exists. Built by a USAF veteran who spent ten years inside the problem."
      ogType="article"
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
            Our Story
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[52px] leading-[1.1] tracking-[-0.02em] mb-8">
            Why this exists.
          </motion.h1>
          <motion.div variants={fadeUp}>
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
            >
              See what your market looks like <ArrowRight className="w-4 h-4" />
            </a>
            <p className="mt-2 text-xs text-[#9CA3AF]">Free. 60 seconds.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Opening */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto space-y-6 text-[#4B5563] text-base leading-[1.8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp}>
            I spent five years inside specialist service businesses
            watching incredibly talented people struggle with a
            problem that had nothing to do with their craft.
          </motion.p>
          <motion.p variants={fadeUp}>
            They were excellent at what they did. The businesses around
            them — the referral relationships, the local visibility,
            the competitive dynamics, the things that determined
            whether they grew or slowly declined — were speaking
            a language nobody translated for them.
          </motion.p>
          <motion.p variants={fadeUp}>
            They hired agencies. They got reports. The reports didn't
            tell them what to do. The agencies charged regardless.
            The problem persisted.
          </motion.p>
        </motion.div>
      </section>

      {/* The Service Years */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            I served in the United States Air Force. When I got out,
            I had a 100% service-connected disability rating and no
            idea what came next.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            What came next was ten years in the local service business
            space — first as an operator, then building the product
            I wish had existed when I was trying to help businesses
            understand what their own data was saying.
          </motion.p>
          <motion.blockquote
            variants={fadeUp}
            className="border-l-[3px] border-[#D66853] pl-6 py-1"
          >
            <p className="font-heading italic text-xl sm:text-2xl text-[#212D40] leading-snug">
              "I'm not a dentist. I'm not a software engineer. I'm
              someone who lived inside the problem long enough to
              understand it, then built the solution."
            </p>
          </motion.blockquote>
        </motion.div>
      </section>

      {/* The Reason */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto space-y-6 text-[#4B5563] text-base leading-[1.8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp}>
            Alloro exists because 34 million people started a
            business to get their life back. Most of them are
            still waiting.
          </motion.p>
          <motion.p variants={fadeUp}>
            The ones who built something worth building deserve
            the intelligence layer to protect it, grow it, and
            eventually hand it to someone who matters — whether
            that's a successor, a buyer, or their own kid.
          </motion.p>
          <motion.p variants={fadeUp}>
            That's what Business Clarity means. Not a dashboard.
            Not a report. The confidence that comes from knowing
            which referral source went quiet last month, which
            competitor just opened near you, and what to do about
            both before Monday morning.
          </motion.p>
        </motion.div>
      </section>

      {/* Foundation */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[600px] mx-auto space-y-6 text-[#4B5563] text-base leading-[1.8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp}>
            Heroes &amp; Founders Foundation is Alloro's commitment
            that the people who chose service first — in uniform,
            in medicine, in the trades, in public life — get the
            same intelligence that used to be reserved for companies
            with seven-figure marketing budgets.
          </motion.p>
        </motion.div>
      </section>

      {/* Corey photo */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="max-w-[320px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <img
            src="/corey-wise.jpg"
            alt="Corey Wise, Founder of Alloro"
            className="w-32 h-32 rounded-2xl mx-auto mb-5 object-cover shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]"
          />
          <p className="font-heading font-bold text-[#212D40] text-base">Corey Wise</p>
          <p className="text-sm text-[#9CA3AF] mt-1">Founder, Alloro · USAF veteran, Bend Oregon</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section
        className="px-5 sm:px-8 py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #D66853 0%, #C45A46 100%)" }}
      >
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-[-0.02em] mb-6">
            See where you stand.
          </h2>
          <a
            href={AUDIT_BASE}
            className="inline-flex items-center gap-2 rounded-[8px] bg-white text-[#212D40] text-base font-semibold px-8 py-4 hover:bg-[#F9FAFB] active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
          >
            See where you rank <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
