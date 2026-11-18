import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";
import { company, contact, formattedAddress, product } from "../lib/company";

export const metadata: Metadata = {
  title: `Privacy Policy — ${product.name}`,
  description: `How ${company.legalName}, the operator of ${product.name}, collects, uses and protects your personal information under Australian privacy law.`,
};

export default function PrivacyPolicyPage() {
  const address = formattedAddress();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-6 py-16 sm:px-10 lg:py-24">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-500">Last updated: October 2026</p>

        <div className="space-y-8 text-base leading-relaxed text-gray-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">1. Introduction</h2>
            <p>
              This Privacy Policy applies to{" "}
              <strong className="font-semibold text-gray-900">{product.name}</strong>, a
              product owned and operated by{" "}
              <strong className="font-semibold text-gray-900">{company.legalName}</strong>, a
              company registered in {company.incorporatedIn}
              {company.abn ? ` (ABN ${company.abn})` : ""}. In this policy,
              &quot;we&quot;, &quot;us&quot; and &quot;our&quot; mean {company.legalName}.
            </p>
            <p className="mt-3">
              We are the entity responsible for the personal information collected through
              the {product.name} mobile applications and the website at {product.domain}. We
              handle personal information in accordance with the Privacy Act 1988 (Cth) and
              the Australian Privacy Principles. This policy explains how we collect, use,
              disclose and safeguard your information.
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
              <li>Location data (with your consent) to connect you with local service providers</li>
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
              <li>Connect homeowners with trusted local service providers in Melbourne</li>
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
              We use cookies and similar technologies on {product.domain} to keep the site
              working correctly and to understand how it is used in aggregate. You can
              control or clear cookies at any time through your browser settings. Blocking
              cookies may affect some parts of the site.
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
              If you have any questions about this Privacy Policy or our data practices, or
              wish to make a privacy complaint, please contact the entity responsible for{" "}
              {product.name}:
            </p>
            <div className="mt-3 rounded-lg bg-gray-50 p-4">
              <p className="font-medium text-gray-900">{company.legalName}</p>
              <p>
                {product.name} — a product of {company.legalName}
              </p>
              {company.abn ? <p>ABN: {company.abn}</p> : null}
              {company.acn ? <p>ACN: {company.acn}</p> : null}
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <p>{address}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
