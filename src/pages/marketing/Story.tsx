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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

function ChapterBreak({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-5 py-2">
      <span className="font-heading font-bold text-[#E5E7EB] text-5xl leading-none select-none">{number}</span>
      <div>
        <div className="h-px w-12 bg-[#D66853] mb-2" />
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#9CA3AF]">{label}</p>
      </div>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative py-4 my-2">
      <span className="absolute -top-4 -left-2 font-heading text-[96px] leading-none text-[#D66853]/15 select-none pointer-events-none">"</span>
      <blockquote className="relative z-10 pl-4">
        <p className="font-heading italic text-xl sm:text-2xl text-[#212D40] leading-[1.4]">
          {children}
        </p>
      </blockquote>
    </div>
  );
}

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
          className="max-w-content mx-auto grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">Our Story</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[54px] leading-[1.1] tracking-[-0.02em] mb-8">
              Why this exists.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-lg mb-8">
              Written by Corey Wise. USAF veteran. Founder. Someone who spent ten years inside the problem before building the solution.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href={AUDIT_BASE}
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
              >
                See what your market looks like <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-2 text-xs text-[#9CA3AF]">Free. 60 seconds.</p>
            </motion.div>
          </div>

          {/* Right — key story facts */}
          <motion.div variants={fadeUp} className="hidden lg:block">
            <div className="bg-[#212D40] rounded-2xl p-7 shadow-[0_20px_60px_rgba(33,45,64,0.18)]">
              <p className="text-[#D66853] text-[64px] font-heading leading-none opacity-20 -mt-2 -mb-3 select-none">"</p>
              <p className="font-heading italic text-white text-lg leading-[1.5] mb-6">
                Alloro is not an idea he had. It is the tool he spent a decade wishing someone would build.
              </p>
              <div className="pt-5 border-t border-white/10 space-y-2.5">
                {["USAF veteran · 100% service-connected", "A decade inside specialty service businesses", "Built for the 240M who started for freedom"].map(line => (
                  <div key={line} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-[#D66853] shrink-0 mt-2" />
                    <p className="text-white/50 text-xs leading-snug">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Corey photo — prominent */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-12">
        <motion.div
          className="max-w-content mx-auto grid sm:grid-cols-[280px_1fr] gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <img
              src="/corey-wise.jpg"
              alt="Corey Wise, Founder of Alloro"
              className="w-full sm:w-[280px] rounded-2xl object-cover shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.14)] aspect-[4/5]"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="font-heading font-bold text-[#212D40] text-lg mb-1">Corey Wise</p>
            <p className="text-sm text-[#9CA3AF] mb-6">Founder, Alloro · USAF veteran, Bend Oregon</p>
            <div className="h-px w-12 bg-[#D66853] mb-6" />
            <p className="text-[#4B5563] text-base leading-[1.8]">
              I spent five years inside specialist service businesses
              watching incredibly talented people struggle with a
              problem that had nothing to do with their craft.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 1 — The Opening */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[640px] mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <ChapterBreak number="01" label="The Problem" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            They were excellent at what they did. The businesses around
            them — the referral relationships, the local visibility,
            the competitive dynamics, the things that determined
            whether they grew or slowly declined — were speaking
            a language nobody translated for them.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            They hired agencies. They got reports. The reports didn't
            tell them what to do. The agencies charged regardless.
            The problem persisted.
          </motion.p>

          <motion.div variants={fadeUp}>
            <PullQuote>
              They were excellent at what they did. The business was the part nobody prepared them for.
            </PullQuote>
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 2 — The Service Years */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[640px] mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <ChapterBreak number="02" label="The Service Years" />
          </motion.div>

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

          <motion.div variants={fadeUp}>
            <PullQuote>
              I'm not a dentist. I'm not a software engineer. I'm
              someone who lived inside the problem long enough to
              understand it, then built the solution.
            </PullQuote>
          </motion.div>
        </motion.div>
      </section>

      {/* Chapter 3 — The Reason */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[640px] mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <ChapterBreak number="03" label="Why It Matters" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            Alloro exists because 34 million people started a
            business to get their life back. Most of them are
            still waiting.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            The ones who built something worth building deserve
            the intelligence layer to protect it, grow it, and
            eventually hand it to someone who matters — whether
            that's a successor, a buyer, or their own kid.
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            That's what Business Clarity means. Not a dashboard.
            Not a report. The confidence that comes from knowing
            which referral source went quiet last month, which
            competitor just opened near you, and what to do about
            both before Monday morning.
          </motion.p>
        </motion.div>
      </section>

      {/* Chapter 4 — Foundation */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <motion.div
          className="max-w-[640px] mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <ChapterBreak number="04" label="The Foundation" />
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
            Heroes &amp; Founders Foundation is Alloro's commitment
            that the people who chose service first — in uniform,
            in medicine, in the trades, in public life — get the
            same intelligence that used to be reserved for companies
            with seven-figure marketing budgets.
          </motion.p>

          <motion.div variants={fadeUp}>
            <PullQuote>
              The freedom Alloro gives back doesn't stop with the owner. It never did.
            </PullQuote>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA — orange gradient */}
      <section
        className="px-5 sm:px-8 py-20 sm:py-24"
        style={{ background: "linear-gradient(135deg, #D66853 0%, #C45A46 100%)" }}
      >
        <motion.div
          className="max-w-md mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-[-0.02em] mb-3">
            See where you stand.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-sm mb-8">Free. 60 seconds. No account required.</motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-white text-[#212D40] text-base font-semibold px-8 py-4 hover:bg-[#F9FAFB] active:scale-[0.98] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
            >
              See where you rank <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
