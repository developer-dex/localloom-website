import Link from "next/link";
import { company, formattedAddress, product } from "../lib/company";

/**
 * Homepage band stating the brand → legal entity relationship.
 *
 * Deliberately placed in the main page flow rather than only in the footer or
 * a legal page: Apple's organization verification needs to find the connection
 * between "LocalLoom" and "HHM TECH PTY LTD" without hunting for it.
 */
export function CompanyStrip() {
  const address = formattedAddress();

  return (
    <section
      id="company"
      aria-labelledby="company-heading"
      className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:py-14"
    >
      <div className="flex flex-col gap-8 rounded-[26px] border border-black/10 bg-[#FBFDFF] px-6 py-10 sm:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-16">
        <div className="flex max-w-[560px] flex-col gap-4">
          <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            The Company
          </span>
          <h2
            id="company-heading"
            className="text-[26px] font-bold leading-tight text-[#171717] sm:text-[32px]"
          >
            {product.name} is operated by {company.legalName}
          </h2>
          <p className="text-sm leading-relaxed text-[#4E5059] sm:text-base">
            {product.name} is designed, developed and operated by{" "}
            <strong className="font-semibold text-[#171717]">{company.legalName}</strong>, a
            company registered in {company.incorporatedIn}. The {product.name} mobile apps,
            this website and the {product.domain} domain are all owned and maintained by{" "}
            {company.legalName}.
          </p>
          <Link
            href="/about"
            className="flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            About the company
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <dl className="grid w-full gap-5 sm:grid-cols-2 lg:max-w-[380px] lg:grid-cols-1">
          <div className="flex flex-col gap-1">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[#4E5059]">
              Registered entity
            </dt>
            <dd className="text-base font-semibold text-[#171717]">{company.legalName}</dd>
          </div>

          {company.abn ? (
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#4E5059]">
                ABN
              </dt>
              <dd className="text-base font-semibold text-[#171717]">{company.abn}</dd>
            </div>
          ) : null}

          {company.acn ? (
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-wide text-[#4E5059]">
                ACN
              </dt>
              <dd className="text-base font-semibold text-[#171717]">{company.acn}</dd>
            </div>
          ) : null}

          <div className="flex flex-col gap-1">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[#4E5059]">
              Registered office
            </dt>
            <dd className="text-base font-medium text-[#171717]">{address}</dd>
          </div>

          <div className="flex flex-col gap-1">
            <dt className="text-xs font-semibold uppercase tracking-wide text-[#4E5059]">
              Product website
            </dt>
            <dd className="text-base font-medium text-[#171717]">{product.domain}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
