import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-10">
          <img src={logo} alt="S-P-B MultiCorp Logo" className="w-10 h-10 object-contain" />
          <h1 className="font-heading text-3xl md:text-4xl font-bold metal-text">Terms & Conditions</h1>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-10 space-y-8 max-w-4xl">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This Terms & Conditions page is maintained by S-P-B MultiCorp and governs your use of
            our website and services. Please review these terms carefully before using our site or
            engaging our services. This page is app-owned content and is not an independent legal
            review or certification.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using this website, you agree to be bound by these Terms & Conditions
              and our Privacy Policy. If you do not agree with any part of these terms, please
              discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              S-P-B MultiCorp provides digital marketing, website development, and related business
              services. All service details, pricing, and deliverables are subject to a separate
              written agreement or statement of work between you and S-P-B MultiCorp.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">3. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, and code, is the
              property of S-P-B MultiCorp or its licensors and is protected by copyright and other
              intellectual property laws. You may not reproduce, distribute, or create derivative
              works without our written permission.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">4. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to use the site for unlawful purposes, interfere with its operation, or
              attempt to gain unauthorized access to any systems or data. We reserve the right to
              suspend or terminate access for violations.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              S-P-B MultiCorp is not liable for any indirect, incidental, or consequential damages
              arising from your use of the website or services. Our total liability is limited to
              the amount you paid for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">6. Payments and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms are specified in your service agreement. Deposits and fees paid are
              generally non-refundable unless otherwise agreed in writing. Late payments may result
              in project delays or suspension of services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">7. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms & Conditions from time to time. Continued use of the website
              after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms are governed by the laws of the State of Oregon, United States, without
              regard to conflict of law principles. Any disputes shall be resolved in the courts
              located in Oregon.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms & Conditions, please contact us at{" "}
              <a
                href="mailto:sstapleton@s-p-b-multicorp.com"
                className="text-primary hover:underline"
              >
                sstapleton@s-p-b-multicorp.com
              </a>{" "}
              or by phone at +1 (458) 272-5246.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
