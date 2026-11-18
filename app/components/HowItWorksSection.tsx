import { company, product } from "../lib/company";

/**
 * Replaces the previous testimonials block, which carried nine lorem ipsum
 * "reviews" and stock-photo avatars. Placeholder copy of that kind is one of
 * the reasons Apple rejects an organization enrollment website, and publishing
 * invented customer reviews for a pre-launch product is a credibility risk in
 * its own right. This section carries real, verifiable product content instead.
 */

const HOMEOWNER_STEPS = [
  {
    step: "01",
    title: "Search your suburb",
    body: "Tell LocalLoom what you need done and where you are. Results are filtered to service providers who actually service your suburb, either by postcode or by the travel radius they have set.",
  },
  {
    step: "02",
    title: "Compare verified profiles",
    body: "Open a profile to see years of experience, services offered, licence and insurance status, business hours, and a gallery of previously completed work.",
  },
  {
    step: "03",
    title: "Contact the service provider directly",
    body: "Call, message on WhatsApp, or start an in-app chat. The enquiry goes to that one service provider. It is not sold on to a panel of competitors, and no commission is taken on the job.",
  },
];

const TRADIE_STEPS = [
  {
    step: "01",
    title: "Register your business",
    body: "Create a service provider account with your business details and ABN. ABNs are checked against the Australian Business Register during signup.",
  },
  {
    step: "02",
    title: "Submit your credentials",
    body: "Upload your trade licence, public liability insurance and identification. Our team reviews every submission before a profile is published.",
  },
  {
    step: "03",
    title: "Receive enquiries directly",
    body: "Once approved, your profile is listed for the suburbs you cover. Customers contact you directly, so there are no per-lead fees and no commission on work you win.",
  },
];

const FAQS = [
  {
    q: `Does ${product.name} charge commission on a job?`,
    a: "No. LocalLoom does not take a percentage of the work a service provider wins through the platform, and it does not charge homeowners to make contact.",
  },
  {
    q: "Do you sell my enquiry to multiple businesses?",
    a: "No. When you contact a service provider, that enquiry goes to the service provider you chose. We do not operate a lead-resale model.",
  },
  {
    q: "What does verified actually mean?",
    a: "Before a service provider profile goes live, our team checks the submitted business details, ABN, trade licence and insurance documents. Verification reduces risk, but we still recommend you confirm licences and get a written quote before engaging anyone.",
  },
  {
    q: "How do reviews work?",
    a: "A review can only be submitted after a genuine connection between a customer and a service provider has been made through the platform, which is what keeps the ratings meaningful.",
  },
  {
    q: "Which areas do you cover?",
    a: "LocalLoom is launching across Melbourne and the surrounding Victorian suburbs, with other Australian cities to follow.",
  },
  {
    q: `Who operates ${product.name}?`,
    a: `${product.name} is developed and operated by ${company.legalName}, a company registered in ${company.incorporatedIn}.`,
  },
];

function StepCard({
  step,
  title,
  body,
  anim,
}: {
  step: string;
  title: string;
  body: string;
  anim: string;
}) {
  return (
    <div
      data-anim={anim}
      className="flex flex-col gap-3 rounded-2xl border border-black/10 p-6 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
    >
      <span className="text-sm font-bold tracking-[0.18em] text-primary">{step}</span>
      <h3 className="text-lg font-semibold text-[#171717]">{title}</h3>
      <p className="text-sm leading-relaxed text-[#4E5059]">{body}</p>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-[1200px] scroll-mt-24 px-6 py-10 sm:px-10 lg:py-16"
    >
      <div
        data-anim="hiw-head"
        className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center"
      >
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          How it works
        </span>
        <h2 className="text-[28px] font-bold leading-tight text-[#171717] sm:text-[36px]">
          Three steps from a job on your list to a service provider on your street
        </h2>
        <p className="text-base text-[#4E5059] sm:text-lg">
          No commissions, no resold enquiries, no middleman between you and the person
          doing the work.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-[#171717]">For homeowners</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {HOMEOWNER_STEPS.map((s) => (
              <StepCard key={s.title} {...s} anim="hiw-card" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold text-[#171717]">For service providers</h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {TRADIE_STEPS.map((s) => (
              <StepCard key={s.title} {...s} anim="hiw-card" />
            ))}
          </div>
        </div>

        <div id="faq" className="flex scroll-mt-24 flex-col gap-6">
          <h3 className="text-xl font-semibold text-[#171717]">
            Frequently asked questions
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {FAQS.map((item) => (
              <div
                key={item.q}
                data-anim="hiw-card"
                className="flex flex-col gap-2 rounded-2xl border border-black/10 p-6"
              >
                <h4 className="text-base font-semibold text-[#171717]">{item.q}</h4>
                <p className="text-sm leading-relaxed text-[#4E5059]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
