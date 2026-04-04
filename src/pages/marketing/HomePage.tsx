/**
 * HomePage -- getalloro.com
 *
 * Not a SaaS funnel. The front door of a tribe.
 * Identity first, product second.
 *
 * Sequence: Recognition → Belonging → Empowerment → Product → Foundation → Action
 *
 * Vocabulary rule: "business" not "practice" on all pre-login surfaces.
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Search,
  MapPin,
  Loader2,
  Heart,
  Shield,
  Users,
  Star,
} from "lucide-react";
import { trackEvent } from "../../api/tracking";
import { API_BASE, AUDIT_BASE } from "../../api/config";
import MarketingLayout from "../../components/marketing/MarketingLayout";

// ── Animation variants ──────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ── CheckupInput (reused in 3 CTA positions) ────────────────────────

interface CheckupInputProps {
  id: string;
  dark?: boolean;
}

function CheckupInput({ id, dark = false }: CheckupInputProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    { placeId: string; mainText: string; secondaryText: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locationRef = useRef<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/checkup/geo`, { signal: AbortSignal.timeout(3000) })
      .then((r) => r.json())
      .then((data) => {
        if (data.lat && data.lng) {
          locationRef.current = { lat: data.lat, lng: data.lng };
        }
      })
      .catch(() => {});
  }, []);

  const searchPlaces = useCallback((input: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      try {
        const loc = locationRef.current;
        const res = await fetch(`${API_BASE}/api/places/autocomplete`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            input,
            ...(loc ? { lat: loc.lat, lng: loc.lng } : {}),
          }),
        });
        const data = await res.json();
        if (data.success && data.suggestions)
          setSuggestions(data.suggestions.slice(0, 5));
      } catch {
        setSuggestions([]);
      }
    }, 300);
  }, []);

  const selectPlace = (place: { placeId: string; mainText: string }) => {
    setSuggestions([]);
    setQuery(place.mainText);
    setLoading(true);
    trackEvent("marketing.checkup_start", {
      source: id,
      place: place.mainText,
    });
    window.location.href = `${AUDIT_BASE}/checkup?placeId=${encodeURIComponent(
      place.placeId
    )}&name=${encodeURIComponent(place.mainText)}`;
  };

  const inputBg = dark ? "bg-white/[0.07]" : "bg-white";
  const border = dark
    ? "border-white/10 focus-within:border-[#D66853]/50"
    : "border-[#E5E7EB] focus-within:border-[#D66853]/50";
  const textCls = dark ? "text-white" : "text-[#212D40]";
  const placeholderCls = dark
    ? "placeholder:text-white/30"
    : "placeholder:text-[#9CA3AF]";
  const iconCls = dark ? "text-white/25" : "text-[#9CA3AF]";
  const dropdownBg = dark ? "bg-[#1e2d40] border-white/10" : "bg-white border-[#E5E7EB]";
  const dropdownHover = dark ? "hover:bg-white/5" : "hover:bg-[#FAFAF8]";
  const dropdownBorder = dark ? "border-white/5" : "border-[#F3F4F6]";
  const secondaryText = dark ? "text-white/40" : "text-[#9CA3AF]";

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div
        className={`flex items-center gap-2 border ${border} rounded-xl ${inputBg} px-4 py-3.5 transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]`}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 text-[#D66853] animate-spin shrink-0" />
        ) : (
          <Search className={`w-4 h-4 shrink-0 ${iconCls}`} />
        )}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            searchPlaces(e.target.value);
          }}
          placeholder="Enter your business name"
          className={`flex-1 bg-transparent text-sm ${textCls} ${placeholderCls} outline-none`}
          disabled={loading}
        />
        <button
          type="button"
          onClick={() => {
            if (query.trim().length >= 3)
              window.location.href = `${AUDIT_BASE}/checkup?q=${encodeURIComponent(query)}`;
          }}
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#D66853] text-white text-sm font-semibold px-4 py-2 hover:brightness-110 active:scale-[0.98] transition-all duration-150 shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
        >
          See What We Find <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {suggestions.length > 0 && (
        <div
          className={`absolute top-full left-0 right-0 mt-1.5 ${dropdownBg} border rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden z-20`}
        >
          {suggestions.map((s) => (
            <button
              key={s.placeId}
              type="button"
              onClick={() => selectPlace(s)}
              className={`w-full text-left px-4 py-3 ${dropdownHover} transition-colors border-b last:border-0 ${dropdownBorder}`}
            >
              <p className={`text-sm font-medium ${textCls}`}>{s.mainText}</p>
              <p
                className={`text-xs flex items-center gap-1 mt-0.5 ${secondaryText}`}
              >
                <MapPin className="w-3 h-3" />
                {s.secondaryText}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────

export default function HomePage() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://getalloro.com/#organization",
        "@type": "Organization",
        name: "Alloro",
        url: "https://getalloro.com",
        description:
          "Business Clarity platform. Gives every business owner the life they set out to build.",
        logo: "https://getalloro.com/logo.png",
        founder: { "@type": "Person", name: "Corey Wise", jobTitle: "Founder" },
        sameAs: ["https://www.linkedin.com/company/getalloro"],
      },
      {
        "@type": "WebSite",
        "@id": "https://getalloro.com/#website",
        url: "https://getalloro.com",
        name: "Alloro - Business Clarity",
        publisher: { "@id": "https://getalloro.com/#organization" },
      },
      {
        "@type": "SoftwareApplication",
        name: "Alloro",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "2000",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
        },
        description:
          "Business Clarity platform. AI agents monitor your competitive position, build your web presence, and deliver one actionable finding every Monday.",
        featureList:
          "Competitive intelligence, AI-built websites, Review monitoring, Referral tracking, SEO and AEO optimization",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a Business Clarity Score?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A composite rating (0-100) of your local visibility, online presence, and review health compared to every competitor in your market.",
            },
          },
          {
            "@type": "Question",
            name: "How much does Alloro cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Alloro is $2,000/month with no contracts. Cancel anytime. Veterans, active duty spouses, first responders, and Gold Star family members get Alloro free forever.",
            },
          },
        ],
      },
    ],
  });

  return (
    <MarketingLayout
      title="Alloro — Business Clarity"
      description="You took the leap. You trained for years. You bought the business for freedom. Alloro gives it back."
    >
      {/* ═══════════════════════════════════════════════════════════
          HERO — The Recognition
          Light background, editorial serif headline, centered.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 relative overflow-hidden">
        {/* Subtle warm gradient in background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(214,104,83,0.05) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="max-w-[720px] mx-auto text-center relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/60 mb-6"
          >
            For Local Service Professionals
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-bold text-[#212D40] leading-[1.1] tracking-[-0.02em] text-[42px] sm:text-[58px] lg:text-[68px] mb-6"
          >
            Your business is talking.{" "}
            <span className="text-[#D66853]">Alloro translates it.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-[520px] mx-auto mb-10"
          >
            AI-powered clarity for practice owners who'd rather focus on their
            craft than chase spreadsheets.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-4">
            <CheckupInput id="hero" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm text-[#9CA3AF]"
          >
            Free. 60 seconds. See your score instantly.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE WOUND — Identity Mirror
          Off-white, editorial prose, pull quote with orange border.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <motion.div
          className="max-w-[640px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base sm:text-lg leading-[1.75] mb-6">
            You know the feeling.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#4B5563] text-base sm:text-lg leading-[1.75] mb-6">
            Sunday night. You're going through numbers in your head instead of
            being present. You know something is off with a key relationship but
            you can't prove it. You know a competitor is gaining ground but you
            can't see how fast.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#4B5563] text-base sm:text-lg leading-[1.75] mb-8">
            You didn't train for this part. You trained to be excellent at your
            craft. The business side was supposed to be the vehicle to freedom.
            Instead it became the thing that took it away.
          </motion.p>

          <motion.blockquote
            variants={fadeUp}
            className="border-l-[3px] border-[#D66853] pl-6 py-1 my-8"
          >
            <p className="font-heading italic text-xl sm:text-2xl text-[#212D40] leading-[1.5]">
              "You're not bad at business. Your business just speaks a language
              nobody taught you to read."
            </p>
          </motion.blockquote>

          <motion.p
            variants={fadeUp}
            className="text-[#D66853] font-semibold text-base sm:text-lg"
          >
            Alloro translates it. Every Monday morning. In plain English.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MONDAY MORNING CARDS — The Proof
          White, 3-column card grid.
      ═══════════════════════════════════════════════════════════ */}
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
              This is what Monday morning looks like
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em] leading-tight">
              One email. Three findings.<br className="hidden sm:block" /> Every week before you open your door.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <DiagnosisCard
              label="The Catch"
              body="Your top referral source sent 6 cases a month. Hasn't sent one in 8 weeks. You haven't noticed yet. Alloro has."
              accent="orange"
            />
            <DiagnosisCard
              label="The Gap"
              body="The competitor two miles away added 22 reviews last month. You added 4. Here's the one move that changes the math."
              accent="cobalt"
            />
            <DiagnosisCard
              label="The Build"
              body="Your business ranks #4 for the exact search your next customer just typed. The business at #1 has one thing yours doesn't. Alloro built it for you this morning."
              accent="orange"
            />
          </motion.div>

          <motion.p
            className="text-center text-sm text-[#9CA3AF] mt-10 font-heading italic"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            This is not a demo. This is what your inbox looks like on Monday.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BELONGING — 240M Business Owners
          Off-white, stats + industry pills.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <motion.div
          className="max-w-[720px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5"
          >
            You are not alone in this
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em] leading-tight mb-6"
          >
            240 million people worldwide started a business for freedom.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-4"
          >
            62% say the stress was worse than they imagined.
            56% feel completely alone in it.
            They're not failing. They just can't see what the business is telling them.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#212D40] font-semibold text-base sm:text-lg mb-10"
          >
            Alloro was built for every one of them.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-2"
          >
            {[
              "Endodontist", "Orthodontist", "General Dentist", "Barber",
              "Attorney", "Veterinarian", "Garden Designer", "Med Spa",
              "Plumber", "CPA", "Real Estate Agent", "Fitness Studio",
              "Chiropractor", "Physical Therapist", "Restaurant", "Photographer",
            ].map((v) => (
              <span
                key={v}
                className="px-3.5 py-1.5 rounded-full border border-[#E5E7EB] text-sm text-[#4B5563] hover:border-[#D66853]/40 hover:text-[#D66853] transition-all duration-200 cursor-default bg-white"
              >
                {v}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 text-sm text-[#9CA3AF] font-heading italic"
          >
            If you chose to own a business, you're one of us. And you're invited.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BEFORE / AFTER — The Empowerment
          Side-by-side cards, dark + light.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-[820px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5">
              What changes
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              One Monday email. One phone call.<br className="hidden sm:block" /> A $27,000 relationship saved.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-px rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.08)]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="bg-[#212D40] p-8 sm:p-10"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">
                Before
              </p>
              <p className="text-[#9CA3AF] text-base leading-[1.75] italic mb-4">
                "I was spending three hours every Sunday
                checking my rankings, counting my reviews,
                cross-referencing my referral spreadsheet.
              </p>
              <p className="text-[#9CA3AF] text-base leading-[1.75] italic">
                I knew something was off with one of my top GPs.
                I just couldn't prove it.
                So I kept watching."
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="bg-[#FAFAF8] p-8 sm:p-10"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D66853]/50 mb-6">
                After
              </p>
              <p className="text-[#4B5563] text-base leading-[1.75] italic mb-4">
                "Monday morning. Six words in the subject line:
                'Dr. Reyes sent 0 cases in March.'
              </p>
              <p className="text-[#4B5563] text-base leading-[1.75] italic mb-4">
                I called her that afternoon.
                She had a new endodontist in her building.
                I knew before I lost the relationship.
              </p>
              <p className="text-[#4B5563] text-base leading-[1.75] italic">
                Alloro found it. I didn't ask."
              </p>
              <p className="text-xs text-[#D66853]/50 mt-6">
                Endodontist, Virginia
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-center text-[#212D40] font-semibold text-base sm:text-lg mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            That relationship was worth $27,000 a year. It was in the Monday email.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECOND CTA — Curiosity Close
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-24">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-3"
          >
            Your business has a number. A competitive gap with a dollar figure.
            A relationship that shifted in the last 60 days.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="font-heading font-bold text-[#212D40] text-xl sm:text-2xl mb-8"
          >
            You'll know what they are in 60 seconds.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CheckupInput id="mid-page" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THREE PILLARS — Watch / Build / Grow
          White, three columns, cobalt icons.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5">
              Three things. All automatic. All for you.
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              You run your business.<br className="hidden sm:block" /> Alloro runs the rest.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-10 sm:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <ThreeThing
              icon={<Shield className="w-5 h-5 text-[#1E3A8A]" />}
              verb="WATCH"
              body="Every Monday, one email. One specific finding about your market with a name, a number, and one action. The catch before it costs you. The move before your competitor makes it."
            />
            <ThreeThing
              icon={<Star className="w-5 h-5 text-[#1E3A8A]" />}
              verb="BUILD"
              body="Your professional website and referral pages, built by AI agents in under an hour. Indexed. Ranking. Updating. You never touched them."
            />
            <ThreeThing
              icon={<Users className="w-5 h-5 text-[#1E3A8A]" />}
              verb="GROW"
              body="When customers search for someone like you, you show up. When they ask ChatGPT, you're the answer. Your visibility runs while you sleep."
            />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCT PROOF — Real Screenshots
          Off-white, 3 cards.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E3A8A]/50 mb-5">
              The actual product
            </p>
            <h2 className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]">
              Not a mockup. Not a promise. This.
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {[
              {
                src: "/product-checkup.png",
                alt: "Alloro Checkup — see your market in 60 seconds",
                title: "Your Checkup",
                desc: "Type your name. See your score, your competitors, and your first action. 60 seconds.",
              },
              {
                src: "/product-dashboard.png",
                alt: "Alloro Dashboard — business clarity at a glance",
                title: "Your Dashboard",
                desc: "One action. Market position. Website status. Everything that matters, nothing that doesn't.",
              },
              {
                src: "/product-rankings.png",
                alt: "Alloro Rankings — every competitor, every week",
                title: "Your Market",
                desc: "Every competitor. Every week. Named. The scoreboard that updates while you sleep.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] transition-all duration-200 group"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold text-[#212D40] mb-1.5">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE FOUNDATION — The Soul
          Orange section — kept prominent, not footer-level.
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #D66853 0%, #C45A46 100%)" }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white translate-y-1/2 -translate-x-1/2" />
        </div>

        <motion.div
          className="max-w-[600px] mx-auto text-white space-y-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <Heart className="w-4 h-4 text-white/60" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Heroes & Founders Foundation
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-2xl sm:text-3xl leading-tight"
          >
            When you join Alloro, you're not just getting clarity for yourself.
            You're giving it to someone who served.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white/85 text-base leading-relaxed">
            Veterans, active duty spouses, first responders,
            and Gold Star family members who own a business
            get Alloro free. Not discounted. Free. Permanent.
            Because the people who chose to serve their communities first
            deserve the same tools everyone else pays for.
          </motion.p>

          <motion.p variants={fadeUp} className="text-white/85 text-base leading-relaxed">
            First-year business owners pay $400/month.
            Everything included. No stripped-down version.
            We all rise together.
          </motion.p>

          <motion.p variants={fadeUp} className="font-semibold text-white text-base">
            This is not a marketing play. This is why the company exists.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHAT YOU'RE REPLACING — Cost Comparison
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-[#9CA3AF] mb-8"
          >
            What most business owners are paying for right now
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-5 mb-10">
            <ComparisonRow
              label="$6,000/month agency"
              detail='Quarterly PDF report. "Give it more time."'
            />
            <ComparisonRow
              label="$200/month website tool"
              detail="Templates that look like everyone else."
            />
            <ComparisonRow
              label="$500/month analytics software"
              detail="Dashboard nobody opens."
            />
            <ComparisonRow
              label="Nothing"
              detail="Sunday spreadsheets and a lot of anxiety."
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="pt-8 border-t border-[#E5E7EB]"
          >
            <p className="font-heading font-bold text-[#212D40] text-xl sm:text-2xl tracking-[-0.01em] mb-3">
              Alloro is $2,000/month. No contracts. Cancel anytime.
            </p>
            <p className="text-[#4B5563] text-base leading-relaxed">
              It runs while you sleep. It catches what you'd miss.
              It builds what no agency built. It never asks for a check-in call.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE FOUNDER — Not about Corey. About why.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <motion.div
          className="max-w-xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start gap-6 mb-8"
          >
            <img
              src="/corey-wise.jpg"
              alt="Corey Wise, Founder of Alloro"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.10)]"
            />
            <div className="pt-1">
              <p className="font-heading font-bold text-[#212D40] text-lg">Corey Wise</p>
              <p className="text-sm text-[#9CA3AF] mt-0.5">
                Founder · USAF Veteran · Bend, Oregon
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="space-y-5 text-[#4B5563] text-base leading-[1.75]"
          >
            <p>
              For years before Alloro existed, he taught business
              webinars for veteran entrepreneurs. For free.
              Before there was anything to sell.
            </p>
            <p>
              He watched brilliant people lose businesses they'd
              spent their careers building. Not because they weren't
              talented. Because they couldn't see what was happening
              until it was too late.
            </p>
            <p className="font-semibold text-[#212D40]">
              Alloro is the tool he wished existed for them.
            </p>
            <p className="text-sm text-[#9CA3AF] font-heading italic">
              Built on Claude by Anthropic, because you build with the
              companies whose values match yours.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — The Invitation
          Dark section, trust badges.
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-24 sm:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 110%, rgba(214,104,83,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="max-w-xl mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-[44px] leading-tight tracking-[-0.02em] mb-4"
          >
            See what your business is trying to tell you.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/50 text-lg mb-10"
          >
            Free checkup. 60 seconds. No credit card.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-8">
            <CheckupInput id="final" dark />
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-5 sm:gap-8"
          >
            {[
              { icon: <Shield className="w-3.5 h-3.5" />, label: "Data secure" },
              { icon: <Heart className="w-3.5 h-3.5" />, label: "HIPAA-aware" },
              { icon: <Star className="w-3.5 h-3.5" />, label: "Cancel anytime" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 text-[#1E3A8A]/70"
              >
                {icon}
                <span className="text-xs text-white/40 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-white/20 font-heading italic text-sm mt-10"
          >
            See you Monday.
            <br />
            Corey
          </motion.p>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}

// ── Sub-components ──────────────────────────────────────────────────

function DiagnosisCard({
  label,
  body,
  accent,
}: {
  label: string;
  body: string;
  accent: "orange" | "cobalt";
}) {
  const borderColor = accent === "orange" ? "border-[#D66853]/20" : "border-[#1E3A8A]/15";
  const labelColor = accent === "orange" ? "text-[#D66853]" : "text-[#1E3A8A]";

  return (
    <motion.div
      variants={fadeUp}
      className={`bg-white border ${borderColor} rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200`}
    >
      <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${labelColor} mb-4`}>
        {label}
      </p>
      <p className="text-sm text-[#4B5563] leading-[1.7]">{body}</p>
    </motion.div>
  );
}

function ThreeThing({
  icon,
  verb,
  body,
}: {
  icon: React.ReactNode;
  verb: string;
  body: string;
}) {
  return (
    <motion.div variants={fadeUp}>
      <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/8 flex items-center justify-center mb-5">
        {icon}
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#D66853] mb-3">
        {verb}
      </p>
      <p className="text-sm text-[#4B5563] leading-[1.7]">{body}</p>
    </motion.div>
  );
}

function ComparisonRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex items-start gap-4 py-1">
      <div className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB] shrink-0 mt-2.5" />
      <div>
        <p className="text-sm font-semibold text-[#212D40]">{label}</p>
        <p className="text-sm text-[#9CA3AF] mt-0.5">{detail}</p>
      </div>
    </div>
  );
}
