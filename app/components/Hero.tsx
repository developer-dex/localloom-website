import Image from "next/image";
import { FloatingRatingCard } from "./FloatingRatingCard";
import { Header } from "./Header";

const AVATARS = [
  "/figma/profile-01.png",
  "/figma/profile-02.png",
  "/figma/profile-03.png",
  "/figma/profile-04.png",
  "/figma/profile_o1.png",
];

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
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`Customer ${i + 1}`}
                    width={45}
                    height={45}
                    data-anim="hero-avatar"
                    className="h-[45px] w-[45px] shrink-0 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                      key={i}
                      data-anim="hero-star"
                      src="/figma/star-yellow.png"
                      alt=""
                      width={18}
                      height={18}
                    />
                  ))}
                </div>
                <p data-anim="hero-social-text" className="text-sm text-[#333333]">
                  5,000+ Happy Customers
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h1
                data-anim="hero-title"
                className="text-[34px] font-bold leading-[1.15] text-[#171717] sm:text-[44px] lg:text-[56px] lg:leading-[70px]"
              >
                Find Trusted Local Tradies Near You
              </h1>
              <p
                data-anim="hero-desc"
                className="max-w-[653px] text-base font-medium leading-[1.55] text-[#4E5059] sm:text-lg lg:text-xl lg:leading-[29px]"
              >
                LocalLoom helps homeowners connect with verified local tradies across
                Melbourne. Browse trusted professionals, view real customer reviews, and
                contact them directly without paying commissions or dealing with
                lead-selling platforms.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#"
              data-anim="hero-cta"
              className="flex items-center gap-2.5 rounded-full bg-primary px-3.5 py-3 transition-transform duration-300 hover:scale-[1.04]"
            >
              <Image src="/figma/appstore.png" alt="" width={36} height={36} />
              <span className="flex flex-col">
                <span className="text-[10px] leading-[14px] text-white">Get it on</span>
                <span className="text-base font-medium leading-4 text-white">App Store</span>
              </span>
            </a>
            <a
              href="#"
              data-anim="hero-cta"
              className="flex items-center gap-2.5 rounded-full border border-primary px-3.5 py-3 transition-transform duration-300 hover:scale-[1.04]"
            >
              <Image src="/figma/playstore.png" alt="" width={36} height={36} />
              <span className="flex flex-col">
                <span className="text-[10px] leading-[14px] text-[#333333]">Get it on</span>
                <span className="text-base font-medium leading-4 text-[#333333]">
                  Google Play
                </span>
              </span>
            </a>
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
