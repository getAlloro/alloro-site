import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-[16px] font-medium text-[#777777] md:text-[18px]">
              Last updated: December 18, 2024
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
                1. Introduction
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                At Alloro, we understand that privacy is paramount, especially
                in healthcare. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                AI-powered healthcare practice management platform.
              </p>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Commitment:</strong> We believe businesses
                  should own their customer relationships. We will never sell
                  your data or use it for purposes other than providing and
                  improving our services to you.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                2. Information We Collect
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We collect information in several ways to provide and improve
                our services:
              </p>

              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                2.1 Information You Provide
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  practice name, phone number, professional credentials
                </li>
                <li>
                  <strong>Practice Data:</strong> Business information, patient
                  volume metrics, appointment data, and operational statistics
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address and
                  payment method details (processed securely by our payment
                  provider)
                </li>
                <li>
                  <strong>Communications:</strong> Messages you send to our
                  support team and feedback you provide
                </li>
              </ul>

              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                2.2 Information Collected Automatically
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Usage Data:</strong> How you interact with our
                  platform, features used, and time spent
                </li>
                <li>
                  <strong>Device Information:</strong> Browser type, operating
                  system, IP address, and device identifiers
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies to
                  maintain your session and improve your experience
                </li>
              </ul>

              <h3 className="text-[18px] font-semibold text-black md:text-[20px]">
                2.3 Information from Integrations
              </h3>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Practice Management Systems:</strong> With your
                  authorization, we connect to your existing PMS to provide
                  insights
                </li>
                <li>
                  <strong>Third-Party Services:</strong> Data from services you
                  choose to integrate with Alloro
                </li>
              </ul>
            </div>

            {/* Protected Health Information */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                3. Protected Health Information (PHI)
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                As a healthcare technology provider, we take the handling of
                Protected Health Information extremely seriously:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  We are HIPAA compliant and will execute Business Associate
                  Agreements (BAA) with covered entities
                </li>
                <li>
                  PHI is encrypted both in transit (TLS 1.3) and at rest
                  (AES-256)
                </li>
                <li>
                  Access to PHI is strictly limited to authorized personnel on a
                  need-to-know basis
                </li>
                <li>We maintain comprehensive audit logs of all PHI access</li>
                <li>
                  We conduct regular security assessments and penetration
                  testing
                </li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> Our AI analytics are designed to
                  work with aggregated and de-identified data whenever possible.
                  We minimize PHI exposure while maximizing the insights we can
                  provide to help your practice thrive.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                4. How We Use Your Information
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We use the information we collect to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Provide Our Services:</strong> Generate AI-powered
                  insights, practice health snapshots, and recommendations
                </li>
                <li>
                  <strong>Improve Your Experience:</strong> Personalize features
                  and content based on your practice needs
                </li>
                <li>
                  <strong>Communicate With You:</strong> Send service updates,
                  alerts, and respond to your inquiries
                </li>
                <li>
                  <strong>Ensure Security:</strong> Detect and prevent fraud,
                  abuse, and security incidents
                </li>
                <li>
                  <strong>Comply With Law:</strong> Meet legal obligations and
                  respond to lawful requests
                </li>
                <li>
                  <strong>Improve Our Platform:</strong> Analyze usage patterns
                  to enhance features and performance
                </li>
              </ul>
            </div>

            {/* AI and Machine Learning */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                5. AI and Machine Learning
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Our platform uses artificial intelligence and machine learning
                to provide insights:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>AI models are trained on aggregated, de-identified data</li>
                <li>
                  Your specific practice data is not used to train models shared
                  with other customers
                </li>
                <li>
                  AI-generated recommendations are decision-support tools, not
                  replacements for professional judgment
                </li>
                <li>
                  You can request information about how AI conclusions were
                  reached
                </li>
              </ul>
              <div className="rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#92400E] md:text-[15px]">
                  <strong>Important:</strong> Our AI provides plain-English
                  insights to support your practice management decisions. These
                  insights should complement, not replace, your professional
                  expertise and judgment.
                </p>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                6. Information Sharing and Disclosure
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We do not sell your personal information. We may share your
                information only in the following circumstances:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Service Providers:</strong> With trusted vendors who
                  help us operate our platform (under strict confidentiality
                  agreements)
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets (with notice to you)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or
                  to protect our rights and safety
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly
                  authorize sharing with third parties
                </li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Promise:</strong> We will never share your data
                  with third parties for marketing purposes. Your patient and
                  practice information stays yours.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                7. Data Security
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We implement comprehensive security measures to protect your
                information:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Encryption:</strong> All data encrypted in transit and
                  at rest using industry-standard protocols
                </li>
                <li>
                  <strong>Access Controls:</strong> Role-based access with
                  multi-factor authentication
                </li>
                <li>
                  <strong>Infrastructure:</strong> SOC 2 Type II compliant cloud
                  infrastructure
                </li>
                <li>
                  <strong>Monitoring:</strong> 24/7 security monitoring and
                  incident response
                </li>
                <li>
                  <strong>Training:</strong> Regular security training for all
                  team members
                </li>
                <li>
                  <strong>Testing:</strong> Regular penetration testing and
                  vulnerability assessments
                </li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                8. Data Retention
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We retain your information for as long as necessary to provide
                our services and comply with legal obligations:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  Active account data is retained while your subscription is
                  active
                </li>
                <li>
                  Upon account termination, data is retained for 30 days to
                  allow for export
                </li>
                <li>
                  Data is securely deleted within 90 days of termination (unless
                  legally required otherwise)
                </li>
                <li>
                  Some aggregated, de-identified data may be retained for
                  analytics purposes
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                9. Your Rights and Choices
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                You have control over your information:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Access:</strong> Request a copy of your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Export your data in a
                  machine-readable format
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications
                </li>
                <li>
                  <strong>Restrict Processing:</strong> Limit how we use your
                  information
                </li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> Data portability is important to
                  us. If you decide to leave Alloro, we make it easy to take
                  your data with you. Just contact our support team and we'll
                  provide a complete export at no charge.
                </p>
              </div>
            </div>

            {/* California Privacy Rights */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                10. California Privacy Rights (CCPA)
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                California residents have additional rights under the California
                Consumer Privacy Act:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  Right to know what personal information we collect and how
                  it's used
                </li>
                <li>
                  Right to delete personal information (with certain exceptions)
                </li>
                <li>
                  Right to opt-out of the sale of personal information (we don't
                  sell your data)
                </li>
                <li>
                  Right to non-discrimination for exercising your privacy rights
                </li>
              </ul>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                To exercise these rights, contact us at info@getalloro.com.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                11. International Data Transfers
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Our services are primarily operated in the United States. If you
                access our services from outside the US, your information may be
                transferred to and processed in the US. We implement appropriate
                safeguards for international transfers, including:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  Standard Contractual Clauses approved by relevant authorities
                </li>
                <li>
                  Data Processing Agreements with appropriate privacy
                  protections
                </li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                12. Cookies and Tracking Technologies
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We use cookies and similar technologies to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  <strong>Essential Cookies:</strong> Required for platform
                  functionality and security
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how you
                  use our platform
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
              </ul>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                You can control cookies through your browser settings. Note that
                disabling certain cookies may affect platform functionality.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                13. Children's Privacy
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Our services are designed for healthcare professionals and are
                not intended for individuals under 18. We do not knowingly
                collect personal information from children. If you believe we
                have inadvertently collected such information, please contact us
                immediately.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                14. Changes to This Privacy Policy
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a notice within the platform</li>
              </ul>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Your continued use of our services after changes become
                effective constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                15. Contact Us
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="rounded-xl bg-[#F9FAFB] p-4 md:p-5">
                <p className="text-[15px] text-[#666666] md:text-[16px]">
                  <strong className="text-black">Alloro, Inc.</strong>
                  <br />
                  Email: info@getalloro.com
                </p>
              </div>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                For HIPAA-related inquiries or to request a Business Associate
                Agreement, please contact us at info@getalloro.com.
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
              <img src="https://app.getalloro.com/logo.png" alt="Alloro" className="h-6 w-auto" />
            </div>
            <div className="flex items-center gap-6 text-[14px] text-[#777777]">
              <Link to="/terms" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-[14px] text-[#777777]">
              © {new Date().getFullYear()} Alloro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
