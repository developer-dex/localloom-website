import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { company, contact, formattedAddress, product } from "../lib/company";

export const metadata: Metadata = {
  title: `Contact Us — ${product.name}`,
  description: `Contact ${company.legalName}, the company that operates ${product.name}. Get in touch about the platform, listing your trade business, partnerships or support.`,
};

/**
 * The previous version of this page shipped with template placeholder data
 * for an unrelated business: an Ahmedabad, Gujarat street address, a +91
 * phone number, an enquiry@Localloom.in email, and copy about bulk stationery
 * orders. On the website submitted for Apple organization verification, those
 * details directly contradicted an Australian Pty Ltd enrollment.
 */
const CONTACT_DETAILS: { label: string; lines: string[] }[] = [
  {
    label: "Company",
    lines: [
      company.legalName,
      ...(company.abn ? [`ABN ${company.abn}`] : []),
      ...(company.acn ? [`ACN ${company.acn}`] : []),
    ],
  },
  { label: "Registered office", lines: [formattedAddress()] },
  { label: "Email", lines: [contact.email] },
  { label: "Phone", lines: [contact.phone] },
  { label: "Support hours", lines: [contact.hours] },
];

const REASONS = [
  "Help finding the right service provider for a job",
  "Listing your trade business on LocalLoom",
  "Questions about profile verification",
  "Privacy, data or account enquiries",
  "Partnership and media enquiries",
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:py-14">
        <div className="mx-auto flex max-w-[680px] flex-col items-center gap-3 text-center">
          <h1 className="text-[32px] font-bold leading-tight text-[#171717] sm:text-[40px]">
            Contact Us
          </h1>
          <p className="text-sm text-[#4E5059] sm:text-base">
            {product.name} is operated by{" "}
            <strong className="font-semibold text-[#171717]">{company.legalName}</strong>,
            registered in {company.incorporatedIn}. Reach the team directly using the
            details below, or send us a message.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            {CONTACT_DETAILS.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1.5 pb-6 ${
                  i < CONTACT_DETAILS.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <h2 className="text-base font-semibold text-[#171717]">{item.label}</h2>
                {item.lines.map((line) => (
                  <p key={line} className="text-sm leading-relaxed text-[#4E5059]">
                    {item.label === "Email" ? (
                      <a href={`mailto:${line}`} className="underline hover:text-primary">
                        {line}
                      </a>
                    ) : item.label === "Phone" ? (
                      <a
                        href={`tel:${contact.phoneHref}`}
                        className="underline hover:text-primary"
                      >
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                  </p>
                ))}
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold text-[#171717]">
                What we can help with
              </h2>
              <ul className="ml-5 list-disc space-y-1.5 text-sm leading-relaxed text-[#4E5059]">
                {REASONS.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/*
              Static export (next.config.ts sets output: "export"), so there is
              no server route to post to. The form is a mailto: submission,
              which keeps every control on the page functional rather than
              presenting a button that silently does nothing.
            */}
            <form
              action={`mailto:${contact.email}`}
              method="post"
              encType="text/plain"
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#171717]">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#171717]">
                    Phone / WhatsApp
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+61 4XX XXX XXX"
                    className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#171717]">Email Address</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com.au"
                  className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#171717]">
                  Business name (if you are a service provider)
                </span>
                <input
                  type="text"
                  name="business"
                  autoComplete="organization"
                  placeholder="Your business name"
                  className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#171717]">Message</span>
                <textarea
                  name="message"
                  required
                  placeholder="How can we help?"
                  rows={5}
                  className="resize-none rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                />
              </label>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-[#4E5059]">
                  By sending a message you agree to our{" "}
                  <Link href="/privacy-policy" className="underline hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Send Message
                </button>
              </div>
            </form>

            <p className="rounded-xl border border-black/10 bg-[#FBFDFF] p-5 text-sm leading-relaxed text-[#4E5059]">
              Prefer email? Write to{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-primary underline"
              >
                {contact.email}
              </a>{" "}
              and we will respond within one business day. Postal correspondence for{" "}
              {company.legalName} can be sent to the registered office listed on this page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
