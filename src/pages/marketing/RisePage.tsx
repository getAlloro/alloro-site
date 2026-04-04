/**
 * RisePage -- /rise
 *
 * Rise Together program.
 */

import { motion, type Variants } from "framer-motion";
import { AUDIT_BASE } from "../../api/config";
import { ArrowRight } from "lucide-react";
import MarketingLayout from "../../components/marketing/MarketingLayout";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function RisePage() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      { "@type": "WebPage", "@id": "https://getalloro.com/rise", url: "https://getalloro.com/rise", name: "Rise Together", isPartOf: { "@id": "https://getalloro.com/#website" } },
    ],
  });

  return (
    <MarketingLayout
      title="Rise Together"
      description="Bring someone who needs this and you carry the cost together. Month one at half price for both of you."
    >
      <section className="bg-white px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.div
          className="max-w-[600px] mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/60 mb-5">
            Rise Together
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[38px] sm:text-[50px] leading-[1.1] tracking-[-0.02em] mb-8">
            Bring someone who needs this and you carry the cost together.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="border-l-[3px] border-[#D66853] pl-6 py-1 mb-10"
          >
            <p className="font-heading italic text-lg sm:text-xl text-[#212D40] leading-relaxed">
              "$1,000 each instead of $2,000. One month. See what it does for your business."
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-6 text-[#4B5563] text-base leading-[1.8] mb-10">
            <p>
              When a colleague joins, you both split month one.
              $1,000 each instead of $2,000. After that, standard rate.
              One month of shared clarity. One month to see
              what this does for your business.
            </p>
            <p>
              The pre-written message is already in your Monday email.
              One tap. Their name attached. Sixty seconds to send.
            </p>
            <p className="font-semibold text-[#212D40]">
              Because you know someone who is watching the same problem
              you were watching before Monday.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href={AUDIT_BASE}
              className="inline-flex items-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-6 py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
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
