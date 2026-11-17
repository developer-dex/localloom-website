import Image from "next/image";

/**
 * Previously advertised "5,000+ Happy Customers" and a "4.9 (15k Review)"
 * rating. Both were placeholder figures from the design mockup for a product
 * that has not launched yet. The card now describes the review mechanism
 * itself, which is accurate regardless of volume.
 */
export function FloatingRatingCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl bg-white p-3 shadow-[0_8px_20px_rgba(0,0,0,0.05),0_60px_24px_rgba(0,0,0,0.01)] ${className}`}
    >
      <p className="whitespace-nowrap text-sm font-semibold text-[#121315]">
        Reviews you can trust
      </p>
      <div className="flex items-center gap-1.5">
        <Image src="/figma/star-yellow.png" alt="" width={20} height={20} />
        <span className="whitespace-nowrap text-xs text-[#5A5A5C]">
          Only after a real connection
        </span>
      </div>
    </div>
  );
}
