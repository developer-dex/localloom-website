import Image from "next/image";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const LEFT_FEATURES: Feature[] = [
  {
    icon: "/figma/icon01.svg",
    title: "Verified Local Tradies",
    description:
      "Every tradie profile is reviewed and verified before going live, helping you find reliable professionals you can trust.",
  },
  {
    icon: "/figma/icon-03.svg",
    title: "Work Photos & Experience",
    description:
      "Browse project galleries, years of experience, services offered, and qualifications before making contact.",
  },
];

const RIGHT_FEATURES: Feature[] = [
  {
    icon: "/figma/icon-02.svg",
    title: "Smart Local Search",
    description:
      "Search tradies by suburb, map location, or service radius to quickly find professionals available near you.",
  },
  {
    icon: "/figma/icon-04.png",
    title: "Direct Contact, No Middleman",
    description:
      "Connect directly via phone, WhatsApp, or chat without commissions, lead fees, or unnecessary intermediaries.",
  },
];

function FeatureCard({ icon, title, description, anim }: Feature & { anim: string }) {
  return (
    <div
      data-anim={anim}
      className="flex flex-col gap-4 rounded-2xl border border-black/10 p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
    >
      <Image src={icon} alt="" width={46} height={46} className="h-[46px] w-[46px]" />
      <h3 className="text-lg font-semibold text-[#171717]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#4E5059]">{description}</p>
    </div>
  );
}

export function FeatureGridSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:py-16">
      <div
        data-anim="fg-head"
        className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center"
      >
        <h2 className="text-[28px] font-bold leading-tight text-[#171717] sm:text-[36px]">
          Everything You Need to Find the Right Tradie
        </h2>
        <p className="text-base text-[#4E5059] sm:text-lg">
          Connect with verified local professionals, compare genuine reviews, and contact
          trusted tradies directly—all in one place.
        </p>
      </div>

      <div data-anim="fg-grid" className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="flex flex-col gap-6 lg:col-span-1">
          {LEFT_FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} anim="fg-card-left" />
          ))}
        </div>

        <div
          data-anim="fg-center"
          className="flex flex-col items-center gap-6 rounded-2xl border border-black/10 p-8 text-center lg:col-span-2"
        >
          <h3 className="text-xl font-semibold text-[#171717]">Genuine Customer Reviews</h3>
          <p className="max-w-[420px] text-sm leading-relaxed text-[#4E5059]">
            Read authentic ratings and reviews from real customers. Every review is tied to
            a genuine customer interaction, ensuring trustworthy feedback and better hiring
            decisions.
          </p>
          <Image
            data-anim="fg-mockup"
            src="/figma/app-mockup.png"
            alt="LocalLoom app showing popular categories and nearby tradies"
            width={314}
            height={382}
            className="w-full max-w-[280px]"
          />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-1">
          {RIGHT_FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} anim="fg-card-right" />
          ))}
        </div>
      </div>
    </section>
  );
}
