import Image from "next/image";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-8 sm:px-10">
      <div
        data-anim="contact-card"
        className="relative flex flex-col items-center gap-10 overflow-hidden rounded-[26px] border border-[#DCE0E3] bg-[#FBFDFF] px-6 py-10 sm:flex-row sm:justify-between sm:px-12 sm:py-12 lg:px-16"
        style={{
          backgroundImage: "radial-gradient(#DCE0E3 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <div
          data-anim="contact-copy"
          className="relative z-10 flex max-w-[480px] flex-col items-start gap-5"
        >
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Contact Us
          </span>
          <h2 className="text-[26px] font-bold leading-tight text-[#171717] sm:text-[32px]">
            Have a question? Our team is happy to assist you
          </h2>
          <p className="text-sm leading-relaxed text-[#4E5059] sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            ut labore et dolore magna aliqua tempor ut labore et dolore.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <Image
          data-anim="contact-photo"
          src="/figma/contact-photo.png"
          alt="Support team member holding a tablet"
          width={338}
          height={380}
          className="relative z-10 h-auto w-full max-w-[280px]"
        />
      </div>
    </section>
  );
}
