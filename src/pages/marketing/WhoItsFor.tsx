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
  hidden: { opacity: 0, y: 24 },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const VERTICALS = [
  { icon: <Stethoscope className="w-4 h-4" />, title: "Endodontists", desc: "Know which GPs stopped referring to you this quarter, and which competitor picked up those cases. Every Monday before your day starts." },
  { icon: <Heart className="w-4 h-4" />, title: "Orthodontists", desc: "Track which zip codes your new clients are coming from, and where you're losing them to a closer office." },
  { icon: <Activity className="w-4 h-4" />, title: "Chiropractors", desc: "See when a new competitor opens in your radius before your front desk hears about it." },
  { icon: <Users className="w-4 h-4" />, title: "Physical Therapists", desc: "Your physician referral network is your pipeline. Alloro tells you which sources went quiet and what the gap is costing you." },
  { icon: <Eye className="w-4 h-4" />, title: "Optometrists", desc: "In optical, reviews and proximity drive almost everything. Know your review gap and who's closing it." },
  { icon: <PawPrint className="w-4 h-4" />, title: "Veterinarians", desc: "Pet owners search differently. Alloro tracks the signals that actually drive new client calls in your market." },
  { icon: <Scale className="w-4 h-4" />, title: "Attorneys", desc: "Intake calls come from visibility. Alloro shows you where potential clients are finding your competitors instead of you, and what to do about it this week." },
  { icon: <Calculator className="w-4 h-4" />, title: "CPAs & Financial Advisors", desc: "Your clients don't leave loudly. Alloro spots the drift signals before the annual review where they tell you they've moved on." },
  { icon: <Briefcase className="w-4 h-4" />, title: "Anyone who trained for a craft and built a business", desc: "If your livelihood depends on local clients finding you and trusting you, Alloro was built for you." },
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
          className="max-w-[640px] mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/60 mb-5">
            Who It's For
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[52px] leading-[1.1] tracking-[-0.02em] mb-6">
            Built for people who chose service first.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-relaxed max-w-xl mx-auto mb-8">
            You spent years becoming excellent at your craft.
            Then you opened a business. Then you discovered the
            business has a language of its own — one nobody
            taught you. Alloro speaks it.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
            >
              Run your free Checkup <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-[#9CA3AF]">60 seconds. No account required.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Heroes + Founders */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-content mx-auto grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]">
          <motion.div
            className="bg-white p-8 sm:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66853] mb-5">
              The Heroes
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-5">
              Service first. Business second.
            </h2>
            <p className="text-[#4B5563] text-base leading-[1.8]">
              If you spent years in service before you built
              something — in the military, in medicine, in public
              service, in the trades — you are a Hero. You chose
              others before you chose yourself. The business you
              built is the second chapter of that choice. It deserves
              to succeed.
            </p>
          </motion.div>
          <motion.div
            className="bg-[#FAFAF8] p-8 sm:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A] mb-5">
              The Founders
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-2xl sm:text-3xl tracking-[-0.02em] mb-5">
              The leap. The bet. The proof.
            </h2>
            <p className="text-[#4B5563] text-base leading-[1.8]">
              If you took the leap — left the security of a
              salary, bet on yourself, opened a business or a firm or
              a studio — you are a Founder. Most people won't do what
              you did. The business you built is proof of that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5">
              Built for your industry
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              Your craft. Your market. Your clarity.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {VERTICALS.map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#D66853]/25 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/8 flex items-center justify-center text-[#1E3A8A] mb-4">
                  {icon}
                </div>
                <h3 className="text-sm font-bold text-[#212D40] mb-2">{title}</h3>
                <p className="text-xs text-[#9CA3AF] leading-[1.75]">{desc}</p>
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
            Your market is speaking right now.
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
