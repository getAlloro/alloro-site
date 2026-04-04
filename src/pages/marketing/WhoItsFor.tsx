/**
 * WhoItsFor -- /who-its-for
 *
 * Heroes + Founders + 9 vertical cards.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import {
  Stethoscope, Scale, Heart, Eye, Activity,
  PawPrint, Briefcase, Calculator, Users,
  ArrowRight,
} from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const VERTICALS = [
  { icon: <Stethoscope className="w-4 h-4" />, title: "Endodontists", desc: "Know which GPs stopped referring to you this quarter, and which competitor picked up those cases. Every Monday before your day starts.", accent: "#D66853" },
  { icon: <Heart className="w-4 h-4" />, title: "Orthodontists", desc: "Track which zip codes your new clients are coming from, and where you're losing them to a closer office.", accent: "#1E3A8A" },
  { icon: <Activity className="w-4 h-4" />, title: "Chiropractors", desc: "See when a new competitor opens in your radius before your front desk hears about it.", accent: "#D66853" },
  { icon: <Users className="w-4 h-4" />, title: "Physical Therapists", desc: "Your physician referral network is your pipeline. Alloro tells you which sources went quiet and what the gap is costing you.", accent: "#1E3A8A" },
  { icon: <Eye className="w-4 h-4" />, title: "Optometrists", desc: "In optical, reviews and proximity drive almost everything. Know your review gap and who's closing it.", accent: "#D66853" },
  { icon: <PawPrint className="w-4 h-4" />, title: "Veterinarians", desc: "Pet owners search differently. Alloro tracks the signals that actually drive new client calls in your market.", accent: "#1E3A8A" },
  { icon: <Scale className="w-4 h-4" />, title: "Attorneys", desc: "Intake calls come from visibility. Alloro shows you where potential clients are finding your competitors instead of you, and what to do about it this week.", accent: "#D66853" },
  { icon: <Calculator className="w-4 h-4" />, title: "CPAs & Financial Advisors", desc: "Your clients don't leave loudly. Alloro spots the drift signals before the annual review where they tell you they've moved on.", accent: "#1E3A8A" },
  { icon: <Briefcase className="w-4 h-4" />, title: "Anyone who trained for a craft and built a business", desc: "If your livelihood depends on local clients finding you and trusting you, Alloro was built for you.", accent: "#D66853" },
];

export default function WhoItsFor() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      {
        "@type": "AboutPage",
        name: "Who Alloro Is For",
        description: "Built for local service professionals who trained for a craft and built a business around it.",
        url: "https://getalloro.com/who-its-for",
        publisher: { "@id": "https://getalloro.com/#organization" },
      },
    ],
  });

  return (
    <MarketingLayout
      title="Who Alloro Is For"
      description="Built for people who chose service first. If you trained for a craft and built a business around it, Alloro was built for you."
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
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">Who It's For</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[54px] leading-[1.1] tracking-[-0.02em] mb-6">
              Built for people who chose service first.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-xl mb-8">
              You spent years becoming excellent at your craft.
              Then you opened a business. Then you discovered the
              business has a language of its own — one nobody
              taught you. Alloro speaks it.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={AUDIT_BASE}
                className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
              >
                Run your free Checkup <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-[#9CA3AF]">60 seconds. No account required.</p>
            </motion.div>
          </div>

          {/* Right — specialty tags */}
          <motion.div variants={fadeUp} className="hidden lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9CA3AF] mb-4">Built for your field</p>
            <div className="flex flex-wrap gap-2">
              {["Endodontist","Orthodontist","Chiropractor","Physical Therapist","Optometrist","Veterinarian","Attorney","CPA","Med Spa","Plumber","General Dentist","Real Estate Agent"].map(v => (
                <span key={v} className="px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-[#FAFAF8] text-xs text-[#4B5563] hover:border-[#D66853]/40 hover:text-[#D66853] transition-all cursor-default">{v}</span>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#9CA3AF] font-heading italic">If you trained for a craft, you're one of us.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Heroes + Founders — two distinct visual panels */}
      <section className="px-0 py-0">
        <div className="max-w-content mx-auto sm:grid sm:grid-cols-2">
          {/* Dark panel — Heroes */}
          <motion.div
            className="bg-[#212D40] px-8 sm:px-14 py-16 sm:py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#D66853]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D66853]">The Heroes</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-white text-2xl sm:text-3xl tracking-[-0.02em] mb-5">
              Service first.<br />Business second.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/60 text-base leading-[1.8]">
              If you spent years in service before you built
              something — in the military, in medicine, in public
              service, in the trades — you are a Hero. You chose
              others before you chose yourself. The business you
              built is the second chapter of that choice. It deserves
              to succeed.
            </motion.p>
          </motion.div>

          {/* Light panel — Founders */}
          <motion.div
            className="bg-[#FAFAF8] px-8 sm:px-14 py-16 sm:py-20 border-l border-[#E5E7EB]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-[#1E3A8A]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">The Founders</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-5">
              The leap.<br />The bet. The proof.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-base leading-[1.8]">
              If you took the leap — left the security of a
              salary, bet on yourself, opened a business or a firm or
              a studio — you are a Founder. Most people won't do what
              you did. The business you built is proof of that.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Verticals Grid — left-accent cards */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">Built for your industry</p>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              Your craft. Your market. Your clarity.
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {VERTICALS.map(({ icon, title, desc, accent }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex gap-0 bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Left accent bar */}
                <div
                  className="w-1 shrink-0"
                  style={{ backgroundColor: accent }}
                />
                <div className="p-6">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accent}15`, color: accent }}
                  >
                    {icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#212D40] mb-2 leading-snug">{title}</h3>
                  <p className="text-xs text-[#9CA3AF] leading-[1.75]">{desc}</p>
                </div>
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
            Your market is speaking right now.
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
