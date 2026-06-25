import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

export default function PrivacyPolicy() {
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
          <h1 className="font-heading text-3xl md:text-4xl font-bold metal-text">Privacy Policy</h1>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-10 space-y-8 max-w-4xl">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="text-muted-foreground leading-relaxed">
            This Privacy Policy is maintained by S-P-B MultiCorp to explain how we collect, use,
            and protect your information when you visit our website or use our services. This page is
            app-owned content and is not an independent certification or legal review.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information you voluntarily provide, such as your name, email
              address, phone number, and company details when you contact us or submit a form. We
              also collect standard technical data such as IP address, browser type, device
              information, and pages visited through cookies and analytics tools.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your information to respond to inquiries, provide requested services, improve
              our website, send updates or promotional materials, and ensure the security of our
              systems. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">3. Cookies and Analytics</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies and similar technologies to enhance your experience and analyze
              site usage. You can manage cookie preferences through your browser settings. Analytics
              data is used to understand how visitors interact with our site and improve its
              functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share information with trusted service providers who help us operate the site
              or deliver services, provided they agree to keep the information confidential. We may
              also disclose information if required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect
              your information. However, no internet transmission or storage system can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the right to access, correct, delete, or
              restrict the use of your personal information. To make a request, contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold mb-3">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
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
