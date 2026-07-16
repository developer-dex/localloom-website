import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Contact Us — LocalLoom",
  description:
    "Get in touch for bulk orders, wholesale inquiries, or any questions about our products and services.",
};

const CONTACT_DETAILS = [
  {
    label: "Address",
    value: "Shop No. XX, Stationery Market, Ahmedabad, Gujarat – 380001",
  },
  { label: "Phone", value: "+91 98XXX XXXXX" },
  { label: "Email", value: "enquiry@Localloom.in" },
  { label: "Business Hours", value: "Mon – Sat: 10:00 AM – 7:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <section className="mx-auto w-full max-w-[1200px] px-6 py-10 sm:px-10 lg:py-14">
        <div className="mx-auto flex max-w-[640px] flex-col items-center gap-3 text-center">
          <h1 className="text-[32px] font-bold leading-tight text-[#171717] sm:text-[40px]">
            Contact Us
          </h1>
          <p className="text-sm text-[#4E5059] sm:text-base">
            Get in touch for bulk orders, wholesale inquiries, or any questions about our
            products and services
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            {CONTACT_DETAILS.map((item, i) => (
              <div
                key={item.label}
                className={`flex flex-col gap-1.5 pb-6 ${
                  i < CONTACT_DETAILS.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <h3 className="text-base font-semibold text-[#171717]">{item.label}</h3>
                <p className="text-sm leading-relaxed text-[#4E5059]">{item.value}</p>
              </div>
            ))}
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#171717]">Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#171717]">Phone / WhatsApp</span>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#171717]">Email Address</span>
              <input
                type="email"
                placeholder="your@gmail.com"
                className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#171717]">
                Organisation / Business Name
              </span>
              <input
                type="text"
                placeholder="Company name"
                className="rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#171717]">Message</span>
              <textarea
                placeholder="Your message..."
                rows={4}
                className="resize-none rounded-lg border border-black/15 px-4 py-3 text-sm text-[#171717] placeholder:text-black/35 focus:border-primary focus:outline-none"
              />
            </label>

            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get in Touch
              </button>
            </div>
          </form>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
