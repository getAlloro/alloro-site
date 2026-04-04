/**
 * Blog -- /blog
 *
 * Index page. 3 posts. Each links to /blog/[slug].
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

const POSTS = [
  {
    slug: "the-second-job-problem",
    category: "Business Clarity",
    title: "The second job nobody warned you about",
    summary:
      "We've watched hundreds of business owners realize the same thing in year two: the business they bought to have freedom became the job they left. This post is about the exact point where that turns.",
    readTime: "5 min",
  },
  {
    slug: "google-business-profile-score",
    category: "Local Search",
    title: "What your Google Business Profile score actually means",
    summary:
      "We pulled the GBP data on 200 local specialists. The ones ranking highest weren't the ones with the most reviews. Here's what was actually different.",
    readTime: "7 min",
  },
  {
    slug: "why-your-competitor-keeps-showing-up",
    category: "Competitive Intelligence",
    title: "Why your top competitor keeps showing up where you don't",
    summary:
      "In every market we've analyzed, the same three behaviors separate the businesses showing up first from the ones asking why they're invisible. None of them are expensive. One takes 20 minutes.",
    readTime: "6 min",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Business Clarity": "text-[#D66853]",
  "Local Search": "text-[#1E3A8A]",
  "Competitive Intelligence": "text-[#10B981]",
};

export default function Blog() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com" },
      {
        "@type": "Blog",
        name: "Business Clarity",
        description: "One post a week. Each one comes from something we actually saw in client data.",
        url: "https://getalloro.com/blog",
        publisher: { "@id": "https://getalloro.com/#organization" },
      },
    ],
  });

  return (
    <MarketingLayout
      title="Blog — Business Clarity"
      description="One post a week. Each one comes from something we actually saw in client data. No aggregated advice."
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
            The Blog
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[52px] leading-[1.1] tracking-[-0.02em] mb-5">
            From the data, not a template.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-relaxed max-w-lg mx-auto mb-8">
            One post a week. Each one comes from something
            we actually saw in client data. No aggregated advice.
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

      {/* Posts grid */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-content mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            {POSTS.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-[#E5E7EB] p-7 flex flex-col h-full hover:border-[#D66853]/25 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 block"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[11px] font-bold uppercase tracking-[0.15em] ${CATEGORY_COLORS[post.category] ?? "text-[#9CA3AF]"}`}>
                      {post.category}
                    </span>
                    <span className="text-[11px] text-[#9CA3AF]">{post.readTime} read</span>
                  </div>
                  <h2 className="font-heading font-bold text-[#212D40] text-lg sm:text-xl leading-snug tracking-[-0.01em] mb-4 group-hover:text-[#D66853] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#9CA3AF] leading-[1.75] mb-6">
                    {post.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D66853]">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
