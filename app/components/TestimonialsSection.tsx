import Image from "next/image";

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua tempor ut labore et dolore.";
const LOREM_MED =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";
const LOREM_LONG =
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const TESTIMONIALS = [
  { name: "Daniel Carter", role: "Customer", quote: LOREM_SHORT, avatar: "/figma/profile-01.png" },
  { name: "Michael Smith", role: "Member", quote: LOREM_MED, avatar: "/figma/profile-02.png" },
  { name: "Daniel Carter", role: "Customer", quote: LOREM_SHORT, avatar: "/figma/profile-03.png" },
  { name: "Michael Smith", role: "Member", quote: LOREM_MED, avatar: "/figma/profile-04.png" },
  { name: "Emily Johnson", role: "Client", quote: LOREM_LONG, avatar: "/figma/profile_o1.png" },
  { name: "Michael Smith", role: "Member", quote: LOREM_MED, avatar: "/figma/profile-02.png" },
  { name: "Emily Johnson", role: "Client", quote: LOREM_LONG, avatar: "/figma/profile-01.png" },
  { name: "Daniel Carter", role: "Customer", quote: LOREM_SHORT, avatar: "/figma/profile-03.png" },
  { name: "Michael Smith", role: "Member", quote: LOREM_MED, avatar: "/figma/profile-04.png" },
];

const BADGE_AVATARS = ["/figma/profile-01.png", "/figma/profile-02.png", "/figma/profile-03.png"];

export function TestimonialsSection() {
  return (
    <section className="relative mx-auto w-full max-w-[1200px] px-6 pb-20 pt-10 sm:px-10 lg:pt-16">
      <div
        data-anim="ts-head"
        className="mx-auto flex max-w-[700px] flex-col items-center gap-4 text-center"
      >
        <h2 className="text-[28px] font-bold leading-tight text-[#171717] sm:text-[36px]">
          Proven Results from Satisfied Clients Worldwide
        </h2>
        <p className="text-sm italic text-[#4E5059] sm:text-base">
          &quot;{LOREM_SHORT}&quot;
        </p>
      </div>

      <div
        data-anim="ts-grid"
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 12%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%)",
        }}
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            data-anim="ts-card"
            className="flex flex-col gap-3 rounded-2xl border border-black/10 p-5 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image key={star} src="/figma/star.png" alt="" width={16} height={16} />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-[#4E5059]">&quot;{t.quote}&quot;</p>
            <div className="mt-1 flex items-center gap-3">
              <Image
                src={t.avatar}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#171717]">{t.name}</span>
                <span className="text-xs text-[#4E5059]">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        data-anim="ts-badge"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary py-2 pl-2 pr-4 shadow-lg"
      >
        <div className="flex -space-x-2">
          {BADGE_AVATARS.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-full border-2 border-primary object-cover"
              style={{ zIndex: BADGE_AVATARS.length - i }}
            />
          ))}
        </div>
        <span className="whitespace-nowrap text-sm font-medium text-white">
          Trusted by 17,000+ users
        </span>
      </div>
    </section>
  );
}
