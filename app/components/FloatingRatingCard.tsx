import Image from "next/image";

export function FloatingRatingCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl bg-white p-3 shadow-[0_8px_20px_rgba(0,0,0,0.05),0_60px_24px_rgba(0,0,0,0.01)] ${className}`}
    >
      <p className="whitespace-nowrap text-sm text-[#121315]">5,000+ Happy Customers</p>
      <div className="flex items-center gap-1.5">
        <Image src="/figma/star-yellow.png" alt="" width={20} height={20} />
        <div className="flex items-center gap-1">
          <span className="text-xs font-semibold text-[#121315]">4.9</span>
          <span className="text-xs text-[#5A5A5C]">(15k Review)</span>
        </div>
      </div>
    </div>
  );
}
