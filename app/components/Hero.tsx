import Image from "next/image";
import Link from "next/link";
import { FloatingRatingCard } from "./FloatingRatingCard";
import { Header } from "./Header";
import { company, product } from "../lib/company";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 12% 0%, rgba(247, 240, 173, 0.55), rgba(255,255,255,0) 60%), repeating-linear-gradient(to right, rgba(23,23,23,0.06) 0px, rgba(23,23,23,0.06) 1px, transparent 1px, transparent 120px), repeating-linear-gradient(to bottom, rgba(23,23,23,0.06) 0px, rgba(23,23,23,0.06) 1px, transparent 1px, transparent 120px)",
          maskImage:
            "radial-gradient(85% 75% at 30% 15%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(85% 75% at 30% 15%, black 45%, transparent 100%)",
        }}
      />

      <Header />

      <div className="relative mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-14 px-6 pb-10 pt-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-[150px] lg:pb-16 lg:pt-16">
        {/* Hero content */}
        <div className="flex w-full max-w-[657px] flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-5">
            {/*
              Previously an avatar row with "5,000+ Happy Customers" and a
              five-star rating. Both were invented figures for a product that
              has not launched, which is a poor look on the website submitted
              for company verification. Replaced with claims that are true
              today and describe how the platform actually works.
            */}
            <ul
              data-anim="hero-social-text"
              className="flex flex-wrap items-center gap-2"
            >
              {[
                "Licence & insurance checked",
                "ABN verified",
                "No commission on jobs",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#333333] sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4">
              <h1
                data-anim="hero-title"
                className="text-[34px] font-bold leading-[1.15] text-[#171717] sm:text-[44px] lg:text-[56px] lg:leading-[70px]"
              >
                Find Trusted Local Service Providers Near You
              </h1>
              <p
                data-anim="hero-desc"
                className="max-w-[653px] text-base font-medium leading-[1.55] text-[#4E5059] sm:text-lg lg:text-xl lg:leading-[29px]"
              >
                LocalLoom helps homeowners connect with verified local service providers across
                Melbourne. Browse trusted professionals, view real customer reviews, and
                contact them directly without paying commissions or dealing with
                lead-selling platforms.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {/*
                Rendered as static badges rather than links until the store
                listings are live — a store button wired to "#" reads as a
                broken website during review.
              */}
              <div
                data-anim="hero-cta"
                className="flex items-center gap-2.5 rounded-full bg-primary px-3.5 py-3"
              >
                <Image src="/figma/appstore.png" alt="" width={36} height={36} />
                <span className="flex flex-col">
                  <span className="text-[10px] leading-[14px] text-white">Coming soon to</span>
                  <span className="text-base font-medium leading-4 text-white">App Store</span>
                </span>
              </div>
              <div
                data-anim="hero-cta"
                className="flex items-center gap-2.5 rounded-full border border-primary px-3.5 py-3"
              >
                <Image src="/figma/playstore.png" alt="" width={36} height={36} />
                <span className="flex flex-col">
                  <span className="text-[10px] leading-[14px] text-[#333333]">
                    Coming soon to
                  </span>
                  <span className="text-base font-medium leading-4 text-[#333333]">
                    Google Play
                  </span>
                </span>
              </div>
            </div>
            <p className="text-sm text-[#4E5059]">
              The {product.name} apps are built and operated by {company.legalName}.{" "}
              <Link href="/contact" className="font-medium text-primary underline">
                Get in touch
              </Link>{" "}
              to be notified at launch.
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div
          data-anim="hero-visual"
          className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[633px]"
        >
          <Image
            data-anim="hero-photo"
            src="/figma/hero-photo.png"
            alt="Hand holding phone showing the LocalLoom app"
            width={633}
            height={693}
            priority
            className="w-full rounded-3xl object-contain"
          />
          <FloatingRatingCard className="js-rating-card absolute -top-[3%] -right-[12%] z-10" />
        </div>
      </div>
    </section>
  );
}
