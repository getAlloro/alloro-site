import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function AlloroProtect() {
  return (
    <main className="min-h-screen bg-white">
      <Header showBackToHome />

      {/* Hero Section */}
      <section className="w-full bg-[#F9FAFB] py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1190px] px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="mb-4 text-[32px] font-medium leading-tight text-black md:text-[48px] lg:text-[56px]">
              Alloro Protect
            </h1>
            <p className="text-[16px] font-medium text-[#777777] md:text-[18px]">
              Multi-layered form security for every website we power
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[800px] px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                What Is Alloro Protect?
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Alloro Protect is our built-in security system that automatically
                shields every form on websites powered by Alloro. From appointment
                requests to newsletter signups, every submission passes through
                multiple layers of defense before it reaches your inbox.
              </p>
              <div className="rounded-xl border border-[#06B6D4]/20 bg-[#F0FDFA] p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  Alloro Protect is enabled by default on every form. No
                  configuration required. No extra cost. It just works.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                How It Works
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Every form submission passes through six independent security
                checks before being accepted. If any check fails, the submission
                is silently rejected &mdash; bots never learn what stopped them.
              </p>
            </div>

            {/* Layer 1 */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                1. Honeypot Detection
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                A hidden field is injected into every form that is invisible to
                real visitors but gets filled by automated bots. If the field
                contains any value, the submission is silently discarded.
              </p>
            </div>

            {/* Layer 2 */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                2. Timing Analysis
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We record when the page loads and when the form is submitted. If a
                form is filled out in under two seconds &mdash; faster than any
                human can type &mdash; or after more than one hour, the submission
                is rejected as automated or stale.
              </p>
            </div>

            {/* Layer 3 */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                3. Rate Limiting
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Each visitor is limited to a reasonable number of submissions
                within a rolling time window. This prevents brute-force spam
                attacks from flooding your inbox or database.
              </p>
            </div>

            {/* Layer 4 */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                4. Payload Validation
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Every submission is checked against strict limits: the number of
                fields, the length of field names and values, and the overall
                structure of the data. Oversized or malformed payloads are
                rejected before they touch your database.
              </p>
            </div>

            {/* Layer 5 */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                5. Input Sanitization
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                All submitted data is sanitized using industry-standard libraries
                that strip HTML tags, script injections, and encoded attack
                patterns. Only clean, plain-text content is stored and forwarded
                to your email.
              </p>
            </div>

            {/* Layer 6 */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                6. Flood &amp; Duplicate Detection
              </h3>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We track submission patterns per visitor and per form. If the same
                content is submitted multiple times, or if a single source sends
                too many requests in a short window, further submissions are
                blocked. This catches both simple bots and more sophisticated
                distributed spam.
              </p>
            </div>

            {/* What This Means */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                What This Means for You
              </h2>
              <div className="rounded-xl border border-[#06B6D4]/20 bg-[#F0FDFA] p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  Your real visitors submit forms normally &mdash; they never see
                  or interact with any of these checks. Bots and spam are stopped
                  silently in the background.
                </p>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                <li>
                  No CAPTCHAs or puzzles that frustrate real visitors
                </li>
                <li>
                  Every legitimate submission is delivered to your inbox
                </li>
                <li>
                  Spam and bot submissions are blocked before they reach you
                </li>
                <li>
                  All submissions are stored securely and accessible in your
                  dashboard
                </li>
                <li>
                  Zero configuration required &mdash; protection is automatic
                </li>
              </ul>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                Questions?
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                If you have questions about Alloro Protect or how we secure your
                form data, contact us at{" "}
                <a
                  href="mailto:info@getalloro.com"
                  className="text-[#0891B2] underline hover:text-[#0E7490]"
                >
                  info@getalloro.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#F9FAFB] py-8 md:py-12">
        <div className="mx-auto max-w-[1190px] px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <img
                src="https://app.getalloro.com/logo.png"
                alt="Alloro"
                className="h-6 w-auto"
              />
            </div>
            <div className="flex items-center gap-6 text-[14px] text-[#777777]">
              <Link
                to="/terms"
                className="transition-colors hover:text-black"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="transition-colors hover:text-black"
              >
                Privacy Policy
              </Link>
              <Link
                to="/alloro-protect"
                className="transition-colors hover:text-black"
              >
                Alloro Protect
              </Link>
            </div>
            <p className="text-[14px] text-[#777777]">
              &copy; {new Date().getFullYear()} Alloro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
