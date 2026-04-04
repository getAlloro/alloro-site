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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const POSTS = [
  {
    slug: "the-second-job-problem",
    category: "Business Clarity",
    date: "March 2026",
    title: "The second job nobody warned you about",
    summary:
      "We've watched hundreds of business owners realize the same thing in year two: the business they bought to have freedom became the job they left. This post is about the exact point where that turns.",
    readTime: "5 min",
  },
  {
    slug: "google-business-profile-score",
    category: "Local Search",
    date: "March 2026",
    title: "What your Google Business Profile score actually means",
    summary:
      "We pulled the GBP data on 200 local specialists. The ones ranking highest weren't the ones with the most reviews. Here's what was actually different.",
    readTime: "7 min",
  },
  {
    slug: "why-your-competitor-keeps-showing-up",
    category: "Competitive Intelligence",
    date: "February 2026",
    title: "Why your top competitor keeps showing up where you don't",
    summary:
      "In every market we've analyzed, the same three behaviors separate the businesses showing up first from the ones asking why they're invisible. None of them are expensive. One takes 20 minutes.",
    readTime: "6 min",
  },
];

const CATEGORY_COLORS: Record<string, { text: string; bg: string }> = {
  "Business Clarity": { text: "text-[#D66853]", bg: "bg-[#D66853]/8" },
  "Local Search": { text: "text-[#1E3A8A]", bg: "bg-[#1E3A8A]/8" },
  "Competitive Intelligence": { text: "text-[#10B981]", bg: "bg-[#10B981]/8" },
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
          className="max-w-content mx-auto grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">The Blog</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-heading font-bold text-[#212D40] text-[40px] sm:text-[54px] leading-[1.1] tracking-[-0.02em] mb-5">
              From the data,<br className="hidden sm:block" /> not a template.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#4B5563] text-lg leading-[1.8] max-w-lg mb-8">
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
          </div>

          {/* Right — featured post preview */}
          <motion.div variants={fadeUp} className="hidden lg:block">
            <Link to={`/blog/${POSTS[0].slug}`} className="block group">
              <div className="bg-[#FAFAF8] rounded-2xl border border-[#E5E7EB] p-6 hover:border-[#D66853]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-200">
                <div className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] mb-4 ${CATEGORY_COLORS[POSTS[0].category].bg} ${CATEGORY_COLORS[POSTS[0].category].text}`}>
                  {POSTS[0].category}
                </div>
                <p className="font-heading font-bold text-[#212D40] text-lg leading-snug mb-3 group-hover:text-[#D66853] transition-colors">
                  {POSTS[0].title}
                </p>
                <p className="text-sm text-[#9CA3AF] leading-relaxed line-clamp-3">{POSTS[0].summary}</p>
                <div className="flex items-center gap-2 mt-4 text-xs text-[#9CA3AF]">
                  <span>{POSTS[0].date}</span>
                  <span>·</span>
                  <span>{POSTS[0].readTime} read</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Posts — magazine-style cards */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-content mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {POSTS.map((post) => {
              const cat = CATEGORY_COLORS[post.category] ?? { text: "text-[#9CA3AF]", bg: "bg-[#9CA3AF]/8" };
              return (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col h-full hover:border-[#D66853]/25 hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 block shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]"
                  >
                    {/* Card top accent strip — category color */}
                    <div
                      className={`h-1 w-full ${post.category === "Business Clarity" ? "bg-[#D66853]" : post.category === "Local Search" ? "bg-[#1E3A8A]" : "bg-[#10B981]"}`}
                    />

                    <div className="p-7 flex flex-col flex-1">
                      {/* Meta row */}
                      <div className="flex items-center justify-between mb-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] ${cat.text} ${cat.bg}`}>
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] text-[#9CA3AF]">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime} read</span>
                        </div>
                      </div>

                      {/* Title — serif with sliding underline hover */}
                      <h2 className="font-heading font-bold text-[#212D40] text-lg sm:text-xl leading-snug tracking-[-0.01em] mb-4 flex-1">
                        <span className="relative inline">
                          <span className="group-hover:text-[#D66853] transition-colors duration-200">
                            {post.title}
                          </span>
                        </span>
                      </h2>

                      <p className="text-sm text-[#9CA3AF] leading-[1.75] mb-6">
                        {post.summary}
                      </p>

                      {/* Read link */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D66853]">
                        <span>Read article</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-150" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
