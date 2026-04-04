/**
 * MarketingFooter -- shared footer for all public marketing pages.
 *
 * 4 columns: Product · Company · Legal · Contact
 * Bottom bar: copyright + tagline.
 */

import { useState } from "react";
import { AUDIT_BASE } from "../../api/config";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "Who It's For", to: "/who-its-for" },
  { label: "Product", to: "/product" },
  { label: "Rise Together", to: "/rise" },
];

const COMPANY_LINKS = [
  { label: "About", to: "/about" },
  { label: "Our Story", to: "/story" },
  { label: "Blog", to: "/blog" },
  { label: "Free Checkup", href: AUDIT_BASE },
];

const LEGAL_LINKS = [
  { label: "Terms of Service", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Alloro Protect", to: "/alloro-protect" },
];

export default function MarketingFooter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || state !== "idle") return;
    setState("submitting");
    try {
      await fetch("/api/checkup/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {}
    setState("done");
  };

  const schemaData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Alloro Footer Navigation",
    url: "https://getalloro.com",
    publisher: { "@id": "https://getalloro.com/#organization" },
  });

  return (
    <footer className="bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-16 sm:py-20">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Col 1: Product */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#212D40]/40 mb-5">
              Product
            </p>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#4B5563] hover:text-[#212D40] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#212D40]/40 mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  {"href" in link ? (
                    <a
                      href={link.href}
                      className="text-sm text-[#4B5563] hover:text-[#212D40] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="text-sm text-[#4B5563] hover:text-[#212D40] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#212D40]/40 mb-5">
              Legal
            </p>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#4B5563] hover:text-[#212D40] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#212D40]/40 mb-5">
              Get in Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:corey@getalloro.com"
                className="text-sm text-[#D66853] hover:underline underline-offset-2 block"
              >
                corey@getalloro.com
              </a>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Your data stays yours.<br />No contracts. Cancel anytime.
              </p>

              {state === "done" ? (
                <p className="text-sm text-[#10B981] font-medium pt-1">
                  You're on the list.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="pt-1 flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 min-w-0 text-sm border border-[#E5E7EB] rounded-lg px-3 py-2 outline-none focus:border-[#D66853]/50 bg-white text-[#212D40] placeholder:text-[#9CA3AF] transition-colors"
                    disabled={state === "submitting"}
                  />
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="shrink-0 rounded-lg bg-[#212D40] text-white p-2 hover:bg-[#1a2430] active:scale-[0.97] transition-all"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <img src="/logo.png" alt="Alloro" className="h-6 w-auto" />
          <p className="text-sm text-[#9CA3AF]">
            © 2026 Alloro, Inc. Business Clarity for local service professionals.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaData }}
      />
    </footer>
  );
}
