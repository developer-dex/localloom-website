"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CloseIcon, MenuIcon } from "./icons";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-3.5 sm:px-10 lg:px-[150px]">
      <Link href="/" className="shrink-0">
        <Image src="/figma/footer-logo.png" alt="LocalLoom" width={74} height={34} />
      </Link>

      <nav className="hidden items-center gap-4 lg:flex">
        {NAV_LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`px-1.5 py-2 text-base font-bold transition-colors ${
                active
                  ? "border-b border-primary text-primary"
                  : "border-b border-transparent text-[#333333] hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="hidden lg:block">
        <a
          href="#partner"
          className="rounded-full bg-primary px-3.5 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
        >
          Partner with us
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full text-[#171717] lg:hidden"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {open ? (
        <div className="absolute inset-x-0 top-full z-30 mx-4 flex flex-col gap-1 rounded-2xl border border-black/5 bg-white p-4 shadow-lg lg:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                  active ? "bg-primary/10 text-primary" : "text-[#333333]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="#partner"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-3.5 py-3 text-center text-base font-medium text-white"
          >
            Partner with us
          </a>
        </div>
      ) : null}
    </header>
  );
}
