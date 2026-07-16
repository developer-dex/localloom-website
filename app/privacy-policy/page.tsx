import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — LocalLoom",
  description:
    "Read LocalLoom's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-6 py-16 sm:px-10 lg:py-24">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-500">Last updated: January 2025</p>

        <div className="space-y-8 text-base leading-relaxed text-gray-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">1. Introduction</h2>
            <p>
              Welcome to LocalLoom. We are committed to protecting your personal information and
              your right to privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our website and mobile application.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Account credentials and profile information</li>
              <li>Communications you send to us or through our platform</li>
              <li>Location data (with your consent) to connect you with local tradies</li>
              <li>Reviews and feedback you leave for service providers</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Connect homeowners with trusted local tradies in Melbourne</li>
              <li>Send you service-related communications and updates</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Monitor and analyse trends, usage, and activities on our platform</li>
              <li>Detect, investigate, and prevent fraudulent or unauthorised activity</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              4. Information Sharing
            </h2>
            <p>
              LocalLoom does not sell your personal information. We do not engage in lead-selling
              practices. We may share your information only in the following circumstances:
            </p>
            <ul className="ml-6 mt-3 list-disc space-y-2">
              <li>With your consent or at your direction</li>
              <li>
                With service providers who assist us in operating our platform (e.g., hosting,
                analytics)
              </li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect the rights, privacy, safety, or property of LocalLoom and our users</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">5. Data Security</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your
              personal information against unauthorised access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">6. Your Rights</h2>
            <p className="mb-3">
              Under Australian privacy law, you have the right to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our
              platform. You can control cookie preferences through your browser settings. For more
              details, please refer to our Cookie Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the &quot;Last
              updated&quot; date above.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us at:
            </p>
            <div className="mt-3 rounded-lg bg-gray-50 p-4">
              <p className="font-medium text-gray-900">LocalLoom</p>
              <p>Email: privacy@localloom.com.au</p>
              <p>Phone: +123 456 7891</p>
              <p>Melbourne, Australia</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
