type ImagePlaceholderProps = {
  label: string;
  figmaNode?: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Stand-in for a real Figma-exported asset. Swap the parent usage for
 * next/image once the corresponding node has been exported — see
 * public/figma/README.md for the pending export list.
 */
export function ImagePlaceholder({
  label,
  figmaNode,
  tone = "light",
  className = "",
}: ImagePlaceholderProps) {
  const toneClasses =
    tone === "dark"
      ? "border-white/20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_10px,transparent_10px,transparent_20px)] text-white/50"
      : "border-black/15 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_10px,transparent_10px,transparent_20px)] text-black/40";

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex select-none items-center justify-center gap-1 overflow-hidden rounded-[inherit] border border-dashed px-2 text-center text-[11px] font-medium leading-tight ${toneClasses} ${className}`}
    >
      <span>
        {label}
        {figmaNode ? <span className="block text-[10px] font-normal opacity-70">{figmaNode}</span> : null}
      </span>
    </div>
  );
}
