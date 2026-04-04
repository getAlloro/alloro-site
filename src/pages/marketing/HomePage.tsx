/**
 * HomePage -- getalloro.com
 *
 * Identity first, product second.
 * Sequence: Recognition → Belonging → Empowerment → Product → Action
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Search, MapPin, Loader2, Shield, Users, Star, Globe, RotateCcw } from "lucide-react";
import { trackEvent } from "../../api/tracking";
import { API_BASE, AUDIT_BASE } from "../../api/config";
import MarketingLayout from "../../components/marketing/MarketingLayout";

// ── Variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ── CheckupInput ─────────────────────────────────────────────────────

interface CheckupInputProps { id: string; dark?: boolean; }

interface PlaceDetail {
  placeId: string;
  name: string;
  formattedAddress?: string;
  rating?: number;
  reviewCount?: number;
  category?: string;
  domain?: string;
}

function CheckupInput({ id, dark = false }: CheckupInputProps) {
  const [step, setStep] = useState<"search" | "confirm">("search");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ placeId: string; mainText: string; secondaryText: string }[]>([]);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingAudit, setLoadingAudit] = useState(false);
  const [confirmed, setConfirmed] = useState<PlaceDetail | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locationRef = useRef<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/checkup/geo`, { signal: AbortSignal.timeout(3000) })
      .then(r => r.json())
      .then(d => { if (d.lat && d.lng) locationRef.current = { lat: d.lat, lng: d.lng }; })
      .catch(() => {});
  }, []);

  const searchPlaces = useCallback((input: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (input.length < 3) { setSuggestions([]); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const loc = locationRef.current;
        const res = await fetch(`${API_BASE}/api/places/autocomplete`, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input, ...(loc ? { lat: loc.lat, lng: loc.lng } : {}) }),
        });
        const data = await res.json();
        if (data.success && data.suggestions) setSuggestions(data.suggestions.slice(0, 5));
      } catch { setSuggestions([]); }
    }, 300);
  }, []);

  const selectPlace = async (place: { placeId: string; mainText: string; secondaryText: string }) => {
    setSuggestions([]);
    setLoadingDetails(true);
    try {
      const res = await fetch(`${API_BASE}/api/places/${encodeURIComponent(place.placeId)}`);
      const data = await res.json();
      if (data.success && data.place) {
        setConfirmed({ placeId: place.placeId, ...data.place });
      } else {
        setConfirmed({ placeId: place.placeId, name: place.mainText, formattedAddress: place.secondaryText });
      }
    } catch {
      setConfirmed({ placeId: place.placeId, name: place.mainText, formattedAddress: place.secondaryText });
    } finally {
      setLoadingDetails(false);
      setStep("confirm");
    }
  };

  const startAudit = () => {
    if (!confirmed) return;
    setLoadingAudit(true);
    trackEvent("marketing.checkup_start", { source: id, place: confirmed.name });
    window.location.href = `${AUDIT_BASE}/checkup?placeId=${encodeURIComponent(confirmed.placeId)}&name=${encodeURIComponent(confirmed.name)}`;
  };

  const reset = () => {
    setStep("search");
    setConfirmed(null);
    setQuery("");
    setSuggestions([]);
  };

  const ring = dark ? "border-white/15 focus-within:border-[#D66853]/60" : "border-[#E5E7EB] focus-within:border-[#D66853]/50";
  const bg   = dark ? "bg-white/[0.06]" : "bg-white";
  const txt  = dark ? "text-white placeholder:text-white/30" : "text-[#212D40] placeholder:text-[#9CA3AF]";

  // ── Confirm card ──
  if (step === "confirm" && confirmed) {
    const cardBg = dark ? "bg-white/[0.06] border-white/10" : "bg-white border-[#E5E7EB]";
    const nameCls = dark ? "text-white" : "text-[#212D40]";
    const subCls  = dark ? "text-white/50" : "text-[#9CA3AF]";
    return (
      <div className={`rounded-xl border ${cardBg} overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.10)]`}>
        <div className="h-[3px] bg-[#D66853]" />
        <div className="px-5 py-4">
          <div className="flex items-start gap-3 mb-4">
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${dark ? "bg-white/10" : "bg-[#FAFAF8] border border-[#E5E7EB]"}`}>
              <MapPin className="w-4 h-4 text-[#D66853]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-semibold text-sm leading-snug ${nameCls}`}>{confirmed.name}</p>
              {confirmed.formattedAddress && (
                <p className={`text-xs mt-0.5 ${subCls}`}>{confirmed.formattedAddress}</p>
              )}
              <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs ${subCls}`}>
                {confirmed.rating != null && (
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {confirmed.rating.toFixed(1)}
                    {confirmed.reviewCount ? <span className="opacity-60">({confirmed.reviewCount})</span> : null}
                  </span>
                )}
                {confirmed.category && <span>{confirmed.category}</span>}
                {confirmed.domain && (
                  <span className="flex items-center gap-1 text-[#D66853]">
                    <Globe className="w-3 h-3" />{confirmed.domain}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={startAudit} disabled={loadingAudit}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#D66853] text-white text-sm font-semibold px-4 py-2.5 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.3)] disabled:opacity-60"
            >
              {loadingAudit ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <><ArrowRight className="w-3.5 h-3.5" /> Start Free Checkup</>}
            </button>
            <button type="button" onClick={reset}
              className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-2.5 rounded-lg transition-colors ${dark ? "text-white/40 hover:text-white/70" : "text-[#9CA3AF] hover:text-[#4B5563]"}`}
            >
              <RotateCcw className="w-3 h-3" /> Search again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Search step ──
  return (
    <div className="relative w-full">
      <div className={`flex items-center gap-2.5 border ${ring} rounded-xl ${bg} px-4 py-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200`}>
        {loadingDetails
          ? <Loader2 className="w-4 h-4 text-[#D66853] animate-spin shrink-0" />
          : <Search className={`w-4 h-4 shrink-0 ${dark ? "text-white/25" : "text-[#9CA3AF]"}`} />}
        <input
          type="text" value={query}
          onChange={e => { setQuery(e.target.value); searchPlaces(e.target.value); }}
          placeholder="Enter your business name"
          className={`flex-1 bg-transparent text-sm outline-none ${txt}`}
          disabled={loadingDetails}
        />
        <button type="button"
          onClick={() => { if (query.trim().length >= 3) window.location.href = `${AUDIT_BASE}/checkup?q=${encodeURIComponent(query)}`; }}
          className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-[#D66853] text-white text-sm font-semibold px-4 py-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.3)]"
        >
          See What We Find <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {suggestions.length > 0 && (
        <div className={`absolute top-full left-0 right-0 mt-1.5 ${dark ? "bg-[#1e2d40] border-white/10" : "bg-white border-[#E5E7EB]"} border rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden z-20`}>
          {suggestions.map(s => (
            <button key={s.placeId} type="button" onClick={() => selectPlace(s)}
              className={`w-full text-left px-4 py-3 ${dark ? "hover:bg-white/5 border-white/5" : "hover:bg-[#FAFAF8] border-[#F3F4F6]"} transition-colors border-b last:border-0`}
            >
              <p className={`text-sm font-medium ${dark ? "text-white" : "text-[#212D40]"}`}>{s.mainText}</p>
              <p className={`text-xs flex items-center gap-1 mt-0.5 ${dark ? "text-white/40" : "text-[#9CA3AF]"}`}>
                <MapPin className="w-3 h-3" />{s.secondaryText}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────

export default function HomePage() {
  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      { "@id": "https://getalloro.com/#organization", "@type": "Organization", name: "Alloro", url: "https://getalloro.com", description: "Business Clarity platform for local service professionals.", logo: "https://getalloro.com/logo.png", founder: { "@type": "Person", name: "Corey Wise", jobTitle: "Founder" } },
      { "@type": "WebSite", "@id": "https://getalloro.com/#website", url: "https://getalloro.com", name: "Alloro — Business Clarity", publisher: { "@id": "https://getalloro.com/#organization" } },
      { "@type": "SoftwareApplication", name: "Alloro", applicationCategory: "BusinessApplication", operatingSystem: "Web", offers: { "@type": "Offer", price: "2000", priceCurrency: "USD", priceValidUntil: "2027-12-31" }, description: "AI agents monitor your competitive position, build your web presence, and deliver one actionable finding every Monday." },
      { "@type": "FAQPage", mainEntity: [
        { "@type": "Question", name: "What is a Business Clarity Score?", acceptedAnswer: { "@type": "Answer", text: "A composite rating (0-100) of your local visibility, online presence, and review health compared to every competitor in your market." } },
        { "@type": "Question", name: "How much does Alloro cost?", acceptedAnswer: { "@type": "Answer", text: "Alloro is $2,000/month with no contracts. Veterans and first responders get it free forever." } },
      ]},
    ],
  });

  return (
    <MarketingLayout
      title="Alloro — Business Clarity"
      description="AI-powered clarity for local service professionals. See your competitive position in 60 seconds."
    >

      {/* ═══ HERO — Split layout, left-aligned ════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="max-w-content mx-auto">
          <div className="grid lg:grid-cols-[1fr_400px] gap-14 lg:gap-20 items-center">

            {/* Left: headline + CTA */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-[#D66853]" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">
                  For Local Service Professionals
                </p>
              </motion.div>

              <motion.h1 variants={fadeUp}
                className="font-heading font-bold text-[#212D40] leading-[1.07] tracking-[-0.03em] text-[52px] sm:text-[68px] lg:text-[76px] mb-6"
              >
                Your business<br />
                is talking.<br />
                <em className="not-italic text-[#D66853]">Alloro translates it.</em>
              </motion.h1>

              <motion.p variants={fadeUp}
                className="text-lg text-[#4B5563] leading-relaxed mb-8 max-w-[480px]"
              >
                AI-powered clarity for practice owners who'd rather focus on their craft than chase spreadsheets.
              </motion.p>

              <motion.div variants={fadeUp} className="max-w-[480px] mb-3">
                <CheckupInput id="hero" />
              </motion.div>

              <motion.p variants={fadeUp} className="text-sm text-[#9CA3AF]">
                Free. 60 seconds. No account needed.
              </motion.p>
            </motion.div>

            {/* Right: floating proof card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main quote card */}
                <div className="bg-[#212D40] rounded-2xl p-8 shadow-[0_20px_60px_rgba(33,45,64,0.25)]">
                  <p className="text-[#D66853] text-[80px] font-heading leading-none opacity-20 -mt-2 -mb-4 select-none">"</p>
                  <p className="font-heading italic text-white text-xl leading-[1.5] mb-6">
                    You're not bad at business. Your business just speaks a language nobody taught you to read.
                  </p>
                  <p className="text-xs text-white/40 font-semibold uppercase tracking-widest">
                    — Corey Wise, Founder
                  </p>
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-5 -right-5 bg-white rounded-xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-[#E5E7EB]">
                  <p className="text-2xl font-heading font-bold text-[#212D40]">240M</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">business owners<br />started for freedom</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ EMPATHY — Dark editorial ════════════════════════════════ */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden">
        {/* Large decorative quotation mark */}
        <div className="absolute top-8 left-8 text-[200px] font-heading text-white/[0.04] leading-none select-none pointer-events-none">
          "
        </div>

        <motion.div
          className="max-w-[660px] mx-auto relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-white/60 text-base sm:text-lg leading-[1.8] mb-6">
            You know the feeling. Sunday night — going through numbers in your head instead of being present. You know something is off with a key relationship but you can't prove it. You know a competitor is gaining ground but you can't see how fast.
          </motion.p>

          <motion.p variants={fadeUp} className="text-white/60 text-base sm:text-lg leading-[1.8] mb-10">
            You didn't train for this part. You trained to be excellent at your craft. The business side was supposed to be the vehicle to freedom. Instead it became the thing that took it away.
          </motion.p>

          <motion.div variants={fadeUp} className="border-l-[3px] border-[#D66853] pl-6 py-1 mb-8">
            <p className="font-heading italic text-white text-xl sm:text-2xl leading-[1.5]">
              "You're not bad at business. Your business just speaks a language nobody taught you to read."
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#D66853] font-semibold text-base sm:text-lg">
            Alloro translates it. Every Monday morning. In plain English.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══ BRIEFING — Numbered list ════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="max-w-[600px] mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">
                This is what Monday morning looks like
              </p>
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-[-0.02em]"
            >
              One email. Three findings. Every week before you open your door.
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              { n: "01", label: "The Catch", body: "Your top referral source sent 6 cases a month. Hasn't sent one in 8 weeks. You haven't noticed yet. Alloro has. The relationship is worth $27,000 a year — it was in the Monday email." },
              { n: "02", label: "The Gap", body: "The competitor two miles away added 22 reviews last month. You added 4. Here's the one move that changes the math, and how long you have before they pull ahead for good." },
              { n: "03", label: "The Build", body: "Your business ranks #4 for the exact search your next customer just typed. The business at #1 has one thing yours doesn't. Alloro built it for you this morning. You didn't ask." },
            ].map(({ n, label, body }) => (
              <motion.div
                key={n}
                variants={fadeUp}
                className="group grid sm:grid-cols-[80px_1fr] gap-0 sm:gap-8 border-t border-[#E5E7EB] py-8 hover:border-[#D66853]/30 transition-colors duration-200"
              >
                <div className="mb-3 sm:mb-0">
                  <span className="font-heading text-4xl font-bold text-[#E5E7EB] group-hover:text-[#D66853]/20 transition-colors leading-none">
                    {n}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D66853] mb-3">{label}</p>
                  <p className="text-[#4B5563] text-base leading-[1.75]">{body}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[#E5E7EB]" />
          </motion.div>

          <motion.p
            className="text-sm text-[#9CA3AF] font-heading italic mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            This is not a demo. This is what your inbox looks like on Monday.
          </motion.p>
        </div>
      </section>

      {/* ═══ SCALE — 240M + stats + pills ═══════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {/* Left: big number */}
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#1E3A8A]/30" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">
                  You are not alone in this
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="font-heading font-bold text-[#212D40] leading-none text-[80px] sm:text-[100px] tracking-tighter">
                  240M
                </p>
                <p className="text-[#4B5563] text-lg mt-3 mb-8 leading-relaxed">
                  people worldwide started a business for freedom.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
                <div className="border-l-2 border-[#D66853]/30 pl-4">
                  <p className="font-heading font-bold text-[#212D40] text-2xl">62%</p>
                  <p className="text-sm text-[#9CA3AF] mt-1 leading-snug">say stress was worse than expected</p>
                </div>
                <div className="border-l-2 border-[#1E3A8A]/20 pl-4">
                  <p className="font-heading font-bold text-[#212D40] text-2xl">56%</p>
                  <p className="text-sm text-[#9CA3AF] mt-1 leading-snug">feel completely alone in it</p>
                </div>
              </motion.div>
            </div>

            {/* Right: pills + close */}
            <div>
              <motion.p variants={fadeUp} className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-8">
                They're not failing. They just can't see what the business is telling them. Alloro was built for every one of them.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
                {["Endodontist","Orthodontist","General Dentist","Barber","Attorney","Veterinarian","Med Spa","Plumber","CPA","Real Estate Agent","Chiropractor","Physical Therapist","Restaurant","Photographer"].map(v => (
                  <span key={v}
                    className="px-3 py-1.5 rounded-full border border-[#E5E7EB] bg-[#FAFAF8] text-xs text-[#4B5563] hover:border-[#D66853]/40 hover:text-[#D66853] transition-all cursor-default"
                  >{v}</span>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="text-sm text-[#9CA3AF] font-heading italic">
                If you chose to own a business, you're one of us.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER — Empowerment ════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="h-px w-8 bg-[#D66853]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">What changes</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}
              className="bg-[#212D40] rounded-2xl p-8 sm:p-10"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/25 mb-8">Before</p>
              <p className="font-heading italic text-white/70 text-xl sm:text-2xl leading-[1.5]">
                "I was spending three hours every Sunday checking my rankings, counting my reviews, cross-referencing my referral spreadsheet. I knew something was off. I just couldn't prove it."
              </p>
            </motion.div>

            <motion.div variants={fadeUp}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB]"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D66853]/50 mb-8">After</p>
              <p className="font-heading italic text-[#212D40] text-xl sm:text-2xl leading-[1.5] mb-6">
                "Monday morning. Six words in the subject line: 'Dr. Reyes sent 0 cases in March.' I called her that afternoon. I knew before I lost the relationship. Alloro found it. I didn't ask."
              </p>
              <p className="text-xs text-[#9CA3AF] uppercase tracking-widest font-semibold">
                — Endodontist, Virginia
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-center font-semibold text-[#212D40] text-base sm:text-lg mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            That relationship was worth $27,000 a year. It was in the Monday email.
          </motion.p>
        </div>
      </section>

      {/* ═══ SECOND CTA ══════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-16 sm:py-20">
        <motion.div
          className="max-w-[520px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[#4B5563] text-base sm:text-lg leading-relaxed mb-3">
            Your business has a number. A competitive gap with a dollar figure. A relationship that shifted in the last 60 days.
          </motion.p>
          <motion.p variants={fadeUp} className="font-heading font-bold text-[#212D40] text-xl sm:text-2xl tracking-tight mb-7">
            You'll know what they are in 60 seconds.
          </motion.p>
          <motion.div variants={fadeUp}>
            <CheckupInput id="mid-page" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ THREE PILLARS — Horizontal, with dividers ══════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="h-px w-8 bg-[#D66853]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">
              Three things. All automatic. All for you.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              { verb: "WATCH", icon: <Shield className="w-5 h-5 text-[#1E3A8A]" />, body: "Every Monday, one email. One specific finding about your market with a name, a number, and one action. The catch before it costs you. The move before your competitor makes it." },
              { verb: "BUILD", icon: <Star className="w-5 h-5 text-[#1E3A8A]" />, body: "Your professional website and referral pages, built by AI agents in under an hour. Indexed. Ranking. Updating. You never touched them." },
              { verb: "GROW", icon: <Users className="w-5 h-5 text-[#1E3A8A]" />, body: "When customers search for someone like you, you show up. When they ask ChatGPT, you're the answer. Your visibility runs while you sleep." },
            ].map(({ verb, icon, body }) => (
              <motion.div key={verb} variants={fadeUp} className="pt-6 pb-6 sm:py-0 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/[0.07] flex items-center justify-center mb-5">
                  {icon}
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D66853] mb-3">{verb}</p>
                <p className="text-[#4B5563] text-sm sm:text-base leading-[1.75]">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PRODUCT PROOF — Staggered screenshots ══════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto">
          <motion.div
            className="max-w-lg mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]/60">The actual product</p>
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="font-heading font-bold text-[#212D40] text-3xl sm:text-4xl tracking-[-0.02em]"
            >
              Not a mockup. Not a promise. This.
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {[
              { src: "/product-checkup.png", alt: "Alloro Checkup", title: "Your Checkup", desc: "Type your name. See your score, competitors, and first action. 60 seconds." },
              { src: "/product-dashboard.png", alt: "Alloro Dashboard", title: "Your Dashboard", desc: "One action. Market position. Website status. Nothing that doesn't matter." },
              { src: "/product-rankings.png", alt: "Alloro Rankings", title: "Your Market", desc: "Every competitor. Every week. Named. The scoreboard that updates while you sleep." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                style={{ marginTop: i === 1 ? 24 : 0 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="overflow-hidden bg-[#F3F4F6]">
                  <img src={item.src} alt={item.alt} className="w-full group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold text-[#212D40] mb-1">{item.title}</p>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ FOUNDATION — Cobalt section ═════════════════════════════ */}
      <section className="bg-[#1E3A8A] px-5 sm:px-8 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(255,255,255,0.04) 0%, transparent 60%)" }} />

        <motion.div
          className="max-w-content mx-auto grid lg:grid-cols-[1fr_380px] gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <div className="h-px w-8 bg-[#D66853]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                Heroes & Founders Foundation
              </p>
            </motion.div>
            <motion.h2 variants={fadeUp}
              className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-[44px] tracking-[-0.02em] leading-tight mb-6"
            >
              When you join, you're not just getting clarity for yourself.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 text-base sm:text-lg leading-[1.8] mb-4">
              Veterans, active duty spouses, first responders, and Gold Star family members get Alloro free. Not discounted. Free. Permanent.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/70 text-base leading-[1.8]">
              First-year business owners pay $400/month. Everything included. No stripped-down version. We all rise together.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}
            className="bg-white/[0.07] rounded-2xl p-7 border border-white/10"
          >
            <p className="text-[#D66853] font-semibold text-sm mb-5">This is not a marketing play.</p>
            <p className="text-white/80 text-base leading-[1.75]">
              This is why the company exists. The people who chose to serve their communities first deserve the same tools everyone else pays for.
            </p>
            <div className="mt-7 pt-5 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D66853]" />
                <p className="text-white/60 text-sm">Veterans & first responders: Free forever</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D66853]" />
                <p className="text-white/60 text-sm">First-year businesses: $400/month</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D66853]" />
                <p className="text-white/60 text-sm">10% of revenue funds the Foundation</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ COST COMPARISON ═════════════════════════════════════════ */}
      <section className="bg-[#FAFAF8] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-content mx-auto grid lg:grid-cols-[1fr_400px] gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-[0.22em] text-[#9CA3AF] mb-8">
              What most business owners are paying for right now
            </motion.p>
            {[
              { label: "$6,000/month agency", detail: 'Quarterly PDF report. "Give it more time."' },
              { label: "$200/month website tool", detail: "Templates that look like everyone else." },
              { label: "$500/month analytics software", detail: "Dashboard nobody opens." },
              { label: "Nothing", detail: "Sunday spreadsheets and a lot of anxiety." },
            ].map(({ label, detail }) => (
              <motion.div key={label} variants={fadeUp}
                className="flex items-start gap-4 py-5 border-b border-[#E5E7EB] last:border-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB] shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-semibold text-[#212D40]">{label}</p>
                  <p className="text-sm text-[#9CA3AF] mt-0.5">{detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]">
              <div className="h-1 bg-[#D66853]" />
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D66853] mb-5">Alloro</p>
                <p className="font-heading font-bold text-[#212D40] text-4xl mb-2">$2,000<span className="text-lg font-sans font-normal text-[#9CA3AF] ml-1">/mo</span></p>
                <p className="text-sm text-[#9CA3AF] mb-7">No contracts. Cancel anytime.</p>
                <div className="space-y-3 mb-7">
                  {["Runs while you sleep","Catches what you'd miss","Builds what no agency built","Never asks for a check-in call"].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#D66853]/10 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D66853]" />
                      </div>
                      <p className="text-sm text-[#4B5563]">{item}</p>
                    </div>
                  ))}
                </div>
                <a href={AUDIT_BASE}
                  className="flex items-center justify-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold py-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
                >
                  See my numbers first <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ FOUNDER ═════════════════════════════════════════════════ */}
      <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
        <motion.div
          className="max-w-content mx-auto grid sm:grid-cols-[auto_1fr] gap-10 sm:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="shrink-0">
            <img
              src="/corey-wise.jpg"
              alt="Corey Wise, Founder of Alloro"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.12)]"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="font-heading font-bold text-[#212D40] text-lg mb-0.5">Corey Wise</p>
            <p className="text-sm text-[#9CA3AF] mb-6">Founder · USAF Veteran · Bend, Oregon</p>
            <div className="space-y-4 text-[#4B5563] text-base leading-[1.75]">
              <p>For years before Alloro existed, he taught business webinars for veteran entrepreneurs. For free. Before there was anything to sell.</p>
              <p>He watched brilliant people lose businesses they'd spent their careers building. Not because they weren't talented. Because they couldn't see what was happening until it was too late.</p>
              <p className="font-semibold text-[#212D40]">Alloro is the tool he wished existed for them.</p>
              <p className="text-sm text-[#9CA3AF] font-heading italic">Built on Claude by Anthropic, because you build with the companies whose values match yours.</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══ FINAL CTA — Dark, big type ══════════════════════════════ */}
      <section className="bg-[#212D40] px-5 sm:px-8 py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(214,104,83,0.07) 0%, transparent 60%)" }} />

        <motion.div
          className="max-w-[620px] mx-auto text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp}
            className="font-heading font-bold text-white text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] mb-6"
          >
            See what your business is trying to tell you.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg mb-10">
            Free checkup. 60 seconds. No credit card.
          </motion.p>
          <motion.div variants={fadeUp} className="mb-10">
            <CheckupInput id="final" dark />
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Shield className="w-3.5 h-3.5 text-[#1E3A8A]/60" />, label: "Data secure" },
              { icon: <Star className="w-3.5 h-3.5 text-[#1E3A8A]/60" />, label: "HIPAA-aware" },
              { icon: <Users className="w-3.5 h-3.5 text-[#1E3A8A]/60" />, label: "Cancel anytime" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                {icon}
                <span className="text-xs text-white/35 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaData }} />
    </MarketingLayout>
  );
}
