import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "./icons";

const QUICK_LINKS = ["Home", "About Us", "Testimonials", "Contact"];
const UTILITIES = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];
const SOCIALS = [
  { src: "/figma/facebook.png", label: "Facebook" },
  { src: "/figma/instagram.png", label: "Instagram" },
  { src: "/figma/twitter.png", label: "Twitter" },
  { src: "/figma/linkedin.png", label: "LinkedIn" },
];

export function Footer() {
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
          <Image src="/figma/footer-logo.png" alt="LocalLoom" width={160} height={74} />
          <p className="max-w-[363px] text-lg leading-[29px] text-white/80">
            Helping homeowners connect with trusted local tradies across Melbourne. No
            commissions. No lead-selling. Just genuine local connections.
          </p>
          <div className="flex items-center gap-3.5">
            <PhoneIcon className="h-[18px] w-[18px] text-white" />
            <span className="text-[17px] font-medium tracking-tight text-white/80">
              +123 456 7891
            </span>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-[50px] gap-y-8 sm:max-w-[502px]">
          <div data-anim="foot-col" className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-white">Quick Links</h3>
            <ul className="flex flex-col">
              {QUICK_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="block py-2 text-base font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-anim="foot-col" className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-white">Utilities</h3>
            <ul className="flex flex-col">
              {UTILITIES.map((item) => (
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
        </div>
      </div>

      <div
        data-anim="foot-bottom"
        className="relative mx-auto flex max-w-[1200px] flex-col gap-5 border-t border-white/50 px-6 py-6 sm:px-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <p className="text-sm text-white">© 2025 LocalLoom. All Rights Reserved.</p>
        <div className="flex items-center gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href="#"
              aria-label={social.label}
              className="flex h-7 w-7 items-center justify-center"
            >
              <Image src={social.src} alt="" width={28} height={28} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
