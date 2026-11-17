import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { company, contact, formattedAddress, product } from "../lib/company";

export const metadata: Metadata = {
  title: `Terms & Conditions — ${product.name}`,
  description: `The terms and conditions governing use of ${product.name}, a product operated by ${company.legalName}.`,
};

export default function TermsPage() {
  const address = formattedAddress();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-6 py-16 sm:px-10 lg:py-24">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mb-6 text-sm text-gray-500">Last updated: October 2026</p>

        <div className="space-y-8 text-base leading-relaxed text-gray-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              1. Who these terms are with
            </h2>
            <p>
              These Terms &amp; Conditions are an agreement between you and{" "}
              <strong className="font-semibold text-gray-900">{company.legalName}</strong>, a
              company registered in {company.incorporatedIn} (&quot;{company.legalNameShort}
              &quot;, &quot;we&quot;, &quot;us&quot;). {product.name} is a product owned and
              operated by {company.legalName}, and references to {product.name} in these
              terms mean the {product.name} mobile applications, the website at{" "}
              {product.domain}, and the related services we provide.
            </p>
            <p className="mt-3">
              By creating an account or using {product.name}, you accept these terms. If you
              do not accept them, please do not use the service.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              2. What {product.name} is
            </h2>
            <p>
              {product.name} is a directory and connection platform. It helps homeowners
              find local trade professionals (&quot;tradies&quot;), view their profiles and
              reviews, and contact them directly.
            </p>
            <p className="mt-3">
              {company.legalName} is not a party to any agreement you make with a tradie. We
              do not perform trade work, do not supervise it, do not set prices, and do not
              act as an agent for either side. Any quote, contract, payment or warranty is
              strictly between you and the tradie you engage.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              3. Eligibility and your account
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>You must be at least 18 years old to create an account.</li>
              <li>
                You are responsible for the accuracy of the information you provide and for
                keeping your login credentials secure.
              </li>
              <li>
                You are responsible for activity carried out under your account. Tell us
                promptly if you believe your account has been used without your permission.
              </li>
              <li>
                You may delete your account at any time. See{" "}
                <Link href="/delete-account" className="font-medium text-primary underline">
                  Delete your account
                </Link>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              4. Obligations for tradies
            </h2>
            <p className="mb-3">
              If you register as a tradie, you additionally agree that:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                Your business details, ABN, licences, insurance and qualifications are
                current and truthful, and you will keep them up to date.
              </li>
              <li>
                You hold every licence, registration and insurance policy required by law
                for the work you offer in your state or territory.
              </li>
              <li>
                Photographs and descriptions you upload represent your own work, and you
                have the right to publish them.
              </li>
              <li>
                You will respond to customer enquiries honestly and will not misrepresent
                your experience, availability or pricing.
              </li>
            </ul>
            <p className="mt-3">
              We review tradie profiles before they are published and may suspend or remove
              a profile that does not meet these obligations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              5. Reviews and user content
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                Reviews may only be submitted after a genuine interaction with the tradie
                being reviewed, and must reflect your honest experience.
              </li>
              <li>
                Do not post content that is false, misleading, defamatory, offensive,
                discriminatory, or that infringes someone else&apos;s rights.
              </li>
              <li>
                You keep ownership of content you upload, and grant {company.legalName} a
                non-exclusive licence to host, display and distribute it within{" "}
                {product.name} for the purpose of operating the service.
              </li>
              <li>
                We may remove content that breaches these terms or applicable law.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">6. Acceptable use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Use {product.name} for any unlawful or fraudulent purpose.</li>
              <li>
                Scrape, harvest or bulk-extract data from the platform, or resell listings or
                enquiries.
              </li>
              <li>
                Interfere with the security or operation of the service, or attempt to access
                accounts or data that are not yours.
              </li>
              <li>Impersonate another person or business.</li>
              <li>Send unsolicited commercial messages to other users.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              7. Fees and commissions
            </h2>
            <p>
              {product.name} does not charge a commission on work won through the platform
              and does not sell customer enquiries as leads. Where a paid feature or
              subscription is offered to tradies, its price and terms will be shown clearly
              before you purchase it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              8. Verification and its limits
            </h2>
            <p>
              We check the documents tradies provide and verify ABNs against the Australian
              Business Register. That check reduces risk but does not guarantee the quality,
              safety, timeliness or legality of any work performed. You should still make
              your own enquiries, confirm licences and insurance, and get a written quote
              before engaging a tradie.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              9. Intellectual property
            </h2>
            <p>
              The {product.name} name, logo, software, design and content are owned by{" "}
              {company.legalName} or its licensors and are protected by Australian and
              international intellectual property law. You may not copy, modify, distribute
              or create derivative works from them without our written permission.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              10. Liability and Australian Consumer Law
            </h2>
            <p>
              Nothing in these terms excludes, restricts or modifies any guarantee, right or
              remedy you have under the Australian Consumer Law that cannot lawfully be
              excluded.
            </p>
            <p className="mt-3">
              Subject to that, {company.legalName} is not liable for any loss arising from
              work performed or not performed by a tradie, from a dispute between you and
              another user, or from indirect or consequential loss. Where we are permitted to
              limit our liability, it is limited to resupplying the relevant service or
              paying the cost of having it resupplied.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">11. Suspension</h2>
            <p>
              We may suspend or terminate access to {product.name} where these terms are
              breached, where we are required to by law, or where continued access poses a
              risk to other users. You may stop using the service and delete your account at
              any time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">12. Privacy</h2>
            <p>
              Personal information is handled in accordance with our{" "}
              <Link href="/privacy-policy" className="font-medium text-primary underline">
                Privacy Policy
              </Link>
              , which forms part of these terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              13. Changes to these terms
            </h2>
            <p>
              We may update these terms from time to time. The revised version will be posted
              on this page with an updated date. Continuing to use {product.name} after a
              change takes effect means you accept the revised terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">14. Governing law</h2>
            <p>
              These terms are governed by the laws of Victoria, Australia, and you and{" "}
              {company.legalName} submit to the non-exclusive jurisdiction of the courts of
              that state.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">15. Contact us</h2>
            <p>Questions about these terms can be directed to:</p>
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
