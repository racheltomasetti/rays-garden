interface HorizontalLineProps {
  width?: "full" | "3/4" | "1/2" | "1/3" | "2/3";
  direction?: "top" | "bottom";
  opacity?: number;
}

export default function HorizontalLine({
  width = "full",
  direction = "bottom",
  opacity = 70,
}: HorizontalLineProps) {
  const widthClass = `w-${width}`;
  const borderClass = direction === "top" ? "border-t" : "border-b";

  return (
    <hr
      className={`${borderClass} border-[var(--ui-2)] ${widthClass} mx-auto opacity-${opacity}`}
    />
  );
}
