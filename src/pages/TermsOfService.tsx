import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-[16px] font-medium text-[#777777] md:text-[18px]">
              Last updated: June 8, 2026
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
                Welcome to Alloro. These Terms of Service ("Terms") govern your
                use of our AI-powered healthcare practice management platform
                and related services (collectively, the "Service"). By accessing
                or using Alloro, you agree to be bound by these Terms.
              </p>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> We're committed to transparency.
                  Our platform is designed specifically for healthcare
                  professionals to reduce administrative burden while
                  maintaining the highest standards of compliance and data
                  security.
                </p>
              </div>
            </div>

            {/* Acceptance of Terms */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                2. Acceptance of Terms
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                By creating an account, accessing, or using the Service, you
                acknowledge that you have read, understood, and agree to be
                bound by these Terms. If you are using the Service on behalf of
                a healthcare practice or organization, you represent that you
                have the authority to bind that entity to these Terms.
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>You must be at least 18 years old to use this Service</li>
                <li>
                  You must be a licensed healthcare professional or authorized
                  representative of a healthcare practice
                </li>
                <li>
                  You agree to provide accurate and complete registration
                  information
                </li>
              </ul>
            </div>

            {/* Description of Service */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                3. Description of Service
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Alloro provides an AI-powered platform designed to help
                healthcare practices manage their operations more efficiently.
                Our services include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>AI practice health snapshots and analytics</li>
                <li>24/7 AI agents for practice monitoring</li>
                <li>Plain-English insights and recommendations</li>
                <li>Integration with existing practice management systems</li>
                <li>Performance tracking and competitor analysis</li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> Our 5-minute setup process
                  connects seamlessly with your existing systems. We believe in
                  earning your business every month — that's why we don't lock
                  you into long-term contracts.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                4. User Accounts
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                To access certain features of the Service, you must register for
                an account. You are responsible for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  Maintaining the confidentiality of your account credentials
                </li>
                <li>All activities that occur under your account</li>
                <li>
                  Notifying us immediately of any unauthorized use of your
                  account
                </li>
                <li>
                  Ensuring all users under your practice account comply with
                  these Terms
                </li>
              </ul>
            </div>

            {/* Healthcare Compliance */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                5. Healthcare Compliance & HIPAA
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                As a platform serving healthcare professionals, we take
                compliance seriously:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  We maintain HIPAA-compliant infrastructure and processes
                </li>
                <li>
                  We will enter into Business Associate Agreements (BAA) as
                  required
                </li>
                <li>
                  Protected Health Information (PHI) is encrypted in transit and
                  at rest
                </li>
                <li>
                  Access controls and audit logs are maintained for all PHI
                  access
                </li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> We understand the unique
                  compliance requirements of healthcare. Our platform is built
                  from the ground up with HIPAA compliance in mind, and we're
                  happy to provide documentation of our security practices upon
                  request.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                6. Payment Terms
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Subscription fees are billed monthly or annually, depending on
                your selected plan. By subscribing:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  You authorize us to charge your payment method on a recurring
                  basis
                </li>
                <li>Fees are non-refundable except as required by law</li>
                <li>
                  We may change pricing with 30 days' notice to existing
                  subscribers
                </li>
                <li>
                  You can request cancellation of your subscription at any time
                </li>
                <li>
                  Cancellation is not immediate unless Alloro confirms an
                  exception in writing
                </li>
                <li>
                  If we receive your cancellation request at least 15 days
                  before your next billing date, your current billing cycle will
                  be your final paid period
                </li>
                <li>
                  If we receive your cancellation request fewer than 15 days
                  before your next billing date, you will be charged for the
                  next full billing cycle, which will become your final paid
                  period
                </li>
                <li>
                  Your Service access and any standard offboarding support will
                  continue through the final paid period unless we agree
                  otherwise in writing or terminate access for cause
                </li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> We believe we have to earn your
                  business every month. That's why we offer flexible
                  month-to-month plans with no long-term contracts. You can
                  request cancellation whenever you need to; the notice window
                  simply keeps final billing, data export, and site wind-down
                  predictable for both sides.
                </p>
              </div>
            </div>

            {/* Data Ownership */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                7. Data Ownership & Portability
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Your data belongs to you. We believe businesses should own their
                customer relationships:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>You retain all ownership rights to your practice data</li>
                <li>
                  We provide data export functionality at no additional cost
                </li>
                <li>
                  Upon account termination, you may request a complete export of
                  your data
                </li>
                <li>
                  We will not sell or share your data with third parties for
                  marketing purposes
                </li>
              </ul>
              <div className="rounded-xl bg-[#F0FDFA] border border-[#06B6D4]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#0891B2] md:text-[15px]">
                  <strong>Alloro Note:</strong> One of the cruelest byproducts
                  of tech "innovation" is how businesses are separated from
                  their customers. If you ever decide to leave Alloro, you get
                  to bring your customers and data with you.
                </p>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                8. Prohibited Uses
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                You agree not to use the Service to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  Violate any applicable laws, regulations, or healthcare
                  industry standards
                </li>
                <li>
                  Transmit malicious code or interfere with the Service's
                  security
                </li>
                <li>
                  Attempt to gain unauthorized access to other accounts or
                  systems
                </li>
                <li>
                  Use the Service for any purpose other than legitimate
                  healthcare practice management
                </li>
                <li>
                  Resell or redistribute the Service without authorization
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                9. Intellectual Property
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                The Service, including all content, features, and functionality,
                is owned by Alloro and is protected by intellectual property
                laws. You are granted a limited, non-exclusive, non-transferable
                license to use the Service in accordance with these Terms.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                10. Disclaimers
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.
                Alloro does not warrant that the Service will be uninterrupted,
                error-free, or completely secure. The AI-generated insights and
                recommendations are provided as decision-support tools and
                should not replace professional judgment.
              </p>
              <div className="rounded-xl bg-[#FEF3C7] border border-[#F59E0B]/20 p-4 md:p-5">
                <p className="text-[14px] font-medium text-[#92400E] md:text-[15px]">
                  <strong>Important:</strong> Alloro's AI insights are designed
                  to support your practice management decisions, not replace
                  clinical judgment. Always exercise professional discretion
                  when making patient care decisions.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                11. Limitation of Liability
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALLORO SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
                INCURRED DIRECTLY OR INDIRECTLY.
              </p>
            </div>

            {/* Termination */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                12. Termination
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                Either party may terminate this agreement. Customer
                cancellation follows the notice and final paid-period rules in
                Section 6. We may suspend or terminate access sooner for
                nonpayment, misuse, legal or security risk, or material breach
                of these Terms. Upon termination:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-[15px] text-[#666666] md:text-[16px]">
                <li>
                  Your right to access the Service will end at the close of the
                  final paid period, unless access is terminated sooner for
                  cause or by written agreement
                </li>
                <li>
                  You may request an export of your data during offboarding and
                  for up to 30 days after account closure
                </li>
                <li>
                  Any Alloro-hosted website, dashboard, or related
                  infrastructure tied to your account will wind down according
                  to the cancellation confirmation and final paid-period
                  timeline
                </li>
                <li>
                  We will securely delete your data within 90 days of
                  account closure, unless retention is required by law or
                  necessary for legitimate business, compliance, security, or
                  dispute-resolution purposes
                </li>
                <li>
                  Sections relating to liability, indemnification, and dispute
                  resolution will survive
                </li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                13. Changes to Terms
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                We may update these Terms from time to time. We will notify you
                of any material changes via email or through the Service. Your
                continued use of the Service after such notification constitutes
                acceptance of the updated Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                14. Governing Law
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Delaware, United States, without
                regard to its conflict of law principles.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-[22px] font-semibold text-black md:text-[26px]">
                15. Contact Information
              </h2>
              <p className="text-[15px] leading-relaxed text-[#666666] md:text-[16px]">
                If you have any questions about these Terms of Service, please
                contact us:
              </p>
              <div className="rounded-xl bg-[#F9FAFB] p-4 md:p-5">
                <p className="text-[15px] text-[#666666] md:text-[16px]">
                  <strong className="text-black">Alloro, Inc.</strong>
                  <br />
                  Email: info@getalloro.com
                </p>
              </div>
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
