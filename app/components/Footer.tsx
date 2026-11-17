import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "./icons";
import {
  COPYRIGHT_LINE,
  OWNERSHIP_LINE,
  company,
  contact,
  formattedAddress,
  product,
} from "../lib/company";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Delete Account", href: "/delete-account" },
  { label: "Company Information", href: "/about#company-information" },
];

export function Footer() {
  const address = formattedAddress();

  return (
    <footer className="relative overflow-hidden bg-[#1C1F24] text-white">
      <Image
        data-anim="foot-graphic"
        src="/figma/footer-graphic.png"
        alt=""
        width={146}
        height={165}
        className="pointer-events-none absolute top-[0px] right-0 hidden lg:block"
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:gap-[50px] lg:py-16">
        <div data-anim="foot-col" className="flex w-full flex-col gap-6 lg:max-w-[410px]">
          <Image src="/figma/footer-logo.png" alt={product.name} width={160} height={74} />
          <p className="max-w-[363px] text-lg leading-[29px] text-white/80">
            Helping homeowners connect with trusted local tradies across Melbourne. No
            commissions. No lead-selling. Just genuine local connections.
          </p>

          {/* Brand → legal entity attribution. Present on every page. */}
          <p className="max-w-[363px] text-base font-semibold leading-relaxed text-white">
            {OWNERSHIP_LINE}
          </p>

          <a
            href={`tel:${contact.phoneHref}`}
            className="flex items-center gap-3.5 transition-colors hover:text-white"
          >
            <PhoneIcon className="h-[18px] w-[18px] text-white" />
            <span className="text-[17px] font-medium tracking-tight text-white/80">
              {contact.phone}
            </span>
          </a>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-[50px] gap-y-8 sm:max-w-[560px] sm:grid-cols-3">
          <div data-anim="foot-col" className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-white">Quick Links</h3>
            <ul className="flex flex-col">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-anim="foot-col" className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-white">Legal</h3>
            <ul className="flex flex-col">
              {LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div data-anim="foot-col" className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-white">Company</h3>
            <address className="flex flex-col gap-2 text-base font-medium not-italic leading-relaxed text-white/80">
              <span className="text-white">{company.legalName}</span>
              {company.abn ? <span>ABN {company.abn}</span> : null}
              {company.acn ? <span>ACN {company.acn}</span> : null}
              <span>{address}</span>
              <a
                href={`mailto:${contact.email}`}
                className="break-all transition-colors hover:text-white"
              >
                {contact.email}
              </a>
            </address>
          </div>
        </div>
      </div>

      <div
        data-anim="foot-bottom"
        className="relative mx-auto flex max-w-[1200px] flex-col gap-3 border-t border-white/50 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col gap-1">
          <p className="text-sm text-white">{COPYRIGHT_LINE}</p>
          <p className="text-sm text-white/70">
            {product.name} and {product.domain} are owned and operated by{" "}
            {company.legalName}, registered in {company.incorporatedIn}.
          </p>
        </div>
      </div>
    </footer>
  );
}
