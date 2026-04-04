/**
 * MarketingHeader -- shared navigation for all public marketing pages.
 *
 * Desktop: sticky, backdrop-blur, logo left · links center · CTA right.
 * Mobile: hamburger → slide-down with sticky bottom CTA bar.
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { trackEvent } from "../../api/tracking";
import { AUDIT_BASE } from "../../api/config";

type NavLink =
  | { label: string; to: string; external?: false }
  | { label: string; href: string; external: true };

const NAV_LINKS: NavLink[] = [
  { label: "How It Works", to: "/how-it-works" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

function NavItem({
  link,
  active,
  onClick,
}: {
  link: NavLink;
  active: boolean;
  onClick?: () => void;
}) {
  const base =
    "text-sm font-medium transition-colors duration-150";
  const cls = active
    ? `${base} text-[#D66853]`
    : `${base} text-[#212D40]/60 hover:text-[#212D40]`;

  if (link.external) {
    return (
      <a href={link.href} className={cls} onClick={onClick}>
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to} className={cls} onClick={onClick}>
      {link.label}
    </Link>
  );
}

export default function MarketingHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]/80 px-5 sm:px-8">
        <div className="max-w-content mx-auto flex items-center justify-between h-[64px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.png" alt="Alloro" className="h-8 w-auto" />
            <span className="font-heading font-bold text-[18px] tracking-tight text-[#212D40]">Alloro</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.label}
                link={link}
                active={!link.external && location.pathname === link.to}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={AUDIT_BASE}
            onClick={() =>
              trackEvent("marketing.cta_click", {
                source: "header_desktop",
                page: location.pathname,
              })
            }
            className="hidden md:inline-flex items-center gap-1.5 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold px-5 py-2.5 hover:brightness-110 active:scale-[0.98] transition-all duration-150 shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
          >
            Free Checkup
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 -mr-2 text-[#212D40]/70 hover:text-[#212D40] transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="md:hidden border-t border-[#E5E7EB]/80 bg-white">
            <nav className="px-5 pt-4 pb-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavItem
                  key={link.label}
                  link={link}
                  active={!link.external && location.pathname === link.to}
                  onClick={() => setOpen(false)}
                />
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB]/80 px-5 py-3">
        <a
          href={AUDIT_BASE}
          onClick={() =>
            trackEvent("marketing.cta_click", {
              source: "header_mobile",
              page: location.pathname,
            })
          }
          className="flex items-center justify-center gap-2 rounded-[8px] bg-[#D66853] text-white text-sm font-semibold py-3 w-full hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(214,104,83,0.25)]"
        >
          Free Checkup
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </>
  );
}
