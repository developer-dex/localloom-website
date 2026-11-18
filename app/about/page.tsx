import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { company, contact, formattedAddress, product } from "../lib/company";

export const metadata: Metadata = {
  title: `About ${product.name} — A product of ${company.legalName}`,
  description: `${product.name} is a product developed and operated by ${company.legalName}, a company registered in ${company.incorporatedIn}. Learn about the company behind ${product.domain}.`,
};

const WHAT_WE_DO = [
  {
    title: "Verification of service provider profiles",
    body: "Every service provider who joins LocalLoom submits their business details, trade licence and insurance documents. Profiles are reviewed before they go live so homeowners are browsing professionals whose credentials have been checked.",
  },
  {
    title: "Genuine, interaction-backed reviews",
    body: "Reviews can only be left after a real connection between a homeowner and a service provider has taken place. That constraint is what keeps the ratings on the platform worth reading.",
  },
  {
    title: "Direct contact, no lead-selling",
    body: "Homeowners contact service providers directly by phone, WhatsApp or in-app chat. LocalLoom does not resell enquiries as leads and does not take a commission on work that is won through the platform.",
  },
  {
    title: "Local search built around suburbs",
    body: "Search by suburb, browse a map of nearby professionals, or filter by a service radius so the results are service providers who actually travel to the job.",
  },
];

export default function AboutPage() {
  const address = formattedAddress();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[860px] px-6 py-14 sm:px-10 lg:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          About us
        </p>
        <h1 className="mb-6 text-[34px] font-bold leading-tight text-[#171717] lg:text-[46px]">
          About {product.name}
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-[#4E5059]">
          <strong className="font-semibold text-[#171717]">{product.name}</strong> is a
          product developed and operated by{" "}
          <strong className="font-semibold text-[#171717]">{company.legalName}</strong>, a
          company registered in {company.incorporatedIn}. {product.name} is the trading
          name under which {company.legalName} publishes its mobile applications and
          operates this website at {product.domain}.
        </p>

        <div className="space-y-10 text-base leading-relaxed text-[#4E5059]">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#171717]">
              The company behind {product.name}
            </h2>
            <p className="mb-4">
              {company.legalName} is an Australian technology company. It builds and runs
              consumer software, and {product.name} is its marketplace product for the
              Australian home services market. The company owns the {product.name} brand,
              the {product.domain} domain, this website, the LocalLoom iOS and Android
              applications, and the backend services that power them.
            </p>
            <p>
              Enquiries about the company, the product, partnerships or media can be sent
              to {contact.email}, or through the{" "}
              <Link href="/contact" className="font-medium text-primary underline">
                contact page
              </Link>
              .
            </p>
          </section>

          <section id="company-information" className="scroll-mt-24">
            <h2 className="mb-4 text-2xl font-semibold text-[#171717]">
              Company information
            </h2>
            <dl className="divide-y divide-black/10 overflow-hidden rounded-xl border border-black/10">
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Registered company name
                </dt>
                <dd className="text-sm text-[#4E5059]">{company.legalName}</dd>
              </div>
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Trading / product name
                </dt>
                <dd className="text-sm text-[#4E5059]">{product.name}</dd>
              </div>
              {company.abn ? (
                <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                  <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                    ABN
                  </dt>
                  <dd className="text-sm text-[#4E5059]">{company.abn}</dd>
                </div>
              ) : null}
              {company.acn ? (
                <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                  <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                    ACN
                  </dt>
                  <dd className="text-sm text-[#4E5059]">{company.acn}</dd>
                </div>
              ) : null}
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Country of registration
                </dt>
                <dd className="text-sm text-[#4E5059]">{company.incorporatedIn}</dd>
              </div>
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Registered office
                </dt>
                <dd className="text-sm text-[#4E5059]">{address}</dd>
              </div>
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Website
                </dt>
                <dd className="text-sm text-[#4E5059]">{product.url}</dd>
              </div>
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Email
                </dt>
                <dd className="text-sm text-[#4E5059]">
                  <a href={`mailto:${contact.email}`} className="underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-6">
                <dt className="w-full text-sm font-semibold text-[#171717] sm:w-[220px] sm:shrink-0">
                  Phone
                </dt>
                <dd className="text-sm text-[#4E5059]">
                  <a href={`tel:${contact.phoneHref}`} className="underline">
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#171717]">Why we built it</h2>
            <p className="mb-4">
              Finding a reliable service provider in Melbourne usually means one of two bad options:
              asking around and hoping, or going through a platform that sells your enquiry
              to several businesses at once and takes a cut of the job. The second option
              costs service providers money on every enquiry, which eventually shows up in the quote
              the homeowner receives.
            </p>
            <p>
              {company.legalName} built {product.name} to remove that middle layer. Service providers
              keep a verified profile with their work, qualifications and reviews.
              Homeowners find them by suburb and get in touch directly. No commission on
              the job, no resold leads.
            </p>
          </section>

          <section>
            <h2 className="mb-5 text-2xl font-semibold text-[#171717]">What we do</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {WHAT_WE_DO.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 rounded-2xl border border-black/10 p-5"
                >
                  <h3 className="text-base font-semibold text-[#171717]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4E5059]">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#171717]">Who we serve</h2>
            <p>
              {product.name} serves two groups. Homeowners and renters across Melbourne use
              it to find and contact a verified service provider for a specific job. Service providers and small
              trade businesses use it to publish a verified profile, show their completed
              work, and receive enquiries directly from customers in the suburbs they cover.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-[#171717]">
              Legal and policy documents
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <Link href="/privacy-policy" className="font-medium text-primary underline">
                  Privacy Policy
                </Link>{" "}
                — how {company.legalName} collects, uses and protects personal information.
              </li>
              <li>
                <Link href="/terms" className="font-medium text-primary underline">
                  Terms &amp; Conditions
                </Link>{" "}
                — the terms governing use of {product.name}.
              </li>
              <li>
                <Link href="/delete-account" className="font-medium text-primary underline">
                  Delete your account
                </Link>{" "}
                — how to permanently remove your account and data.
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
