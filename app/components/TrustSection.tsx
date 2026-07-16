import Image from "next/image";

const POINTS = [
  {
    icon: "/figma/star-review.svg",
    title: "Real Reviews From Real Customers",
    description:
      "Our review system is designed to ensure authenticity. Reviews can only be submitted after a customer has genuinely connected with a tradie, helping maintain trustworthy ratings.",
  },
  {
    icon: "/figma/call-calling.svg",
    title: "Direct Contact, No Middleman",
    description:
      "Contact tradies directly through phone, WhatsApp, or chat. No hidden fees, commissions, or unnecessary barriers.",
  },
  {
    icon: "/figma/people.svg",
    title: "Local Experts Near You",
    description:
      "Search by suburb, explore nearby professionals on a map, or find tradies within your preferred radius.",
  },
];

export function TrustSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:py-16">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Image
          data-anim="trust-photo"
          src="/figma/team-photo.png"
          alt="Two tradies reviewing job details on a laptop"
          width={475}
          height={513}
          className="w-full rounded-3xl object-cover"
        />

        <div className="flex flex-col gap-8">
          <h2
            data-anim="trust-title"
            className="text-[28px] font-bold leading-tight text-[#171717] sm:text-[36px]"
          >
            Verified Tradies You Can Trust
          </h2>

          {POINTS.map((point) => (
            <div key={point.title} data-anim="trust-point" className="flex items-start gap-4">
              <Image
                src={point.icon}
                alt=""
                width={48}
                height={48}
                className="mt-1 shrink-0"
              />
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-[#171717]">{point.title}</h3>
                <p className="text-md leading-relaxed text-[#4E5059]">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
