import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import type { Metadata } from "next";
import { company, contact, formattedAddress, product } from "../lib/company";

export const metadata: Metadata = {
  title: `Delete Your Account — ${product.name}`,
  description: `How to permanently delete your ${product.name} account and what happens to your data. ${product.name} is operated by ${company.legalName}.`,
};

export default function DeleteAccountPage() {
  const address = formattedAddress();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[800px] px-6 py-16 sm:px-10 lg:py-24">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 lg:text-5xl">
          Delete Your Account
        </h1>
        <p className="mb-6 text-sm text-gray-500">Last updated: October 2026</p>

        <div className="space-y-8 text-base leading-relaxed text-gray-700">
          <section>
            <p>
              You can permanently delete your {product.name} account directly from the app.
              No website login or additional steps are required. {product.name} is operated
              by <strong className="font-semibold text-gray-900">{company.legalName}</strong>
              , which is the entity that holds and deletes your data.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              How to Delete Your Account
            </h2>
            <ol className="ml-6 list-decimal space-y-2">
              <li>Open the LocalLoom app.</li>
              <li>Go to Profile → Settings.</li>
              <li>Tap Delete Account.</li>
              <li>Confirm the deletion.</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">
              What Happens When You Delete Your Account
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>Your profile and personal information are permanently deleted.</li>
              <li>Your uploaded content (such as photos, messages, and reviews) is deleted.</li>
              <li>
                Certain records may be retained where required by law (e.g., for tax, fraud
                prevention, or dispute resolution purposes), and are kept only for as long as
                legally necessary.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-gray-900">Need Help?</h2>
            <p>
              If you are unable to delete your account from within the app, or have questions
              about your data, please contact us at:
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
