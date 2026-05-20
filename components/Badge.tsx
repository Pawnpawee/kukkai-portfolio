interface BadgeProps {
  text: string;
  variant?: "default";
  className?: string;
}

export default function Badge({ text, className }: BadgeProps) {
  const baseClassName =
    "inline-flex items-center rounded-[50px] bg-[rgba(255,246,246,0.5)] px-6 py-4 text-base font-bold text-black shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] lg:text-lg text-center";

  return (
    <span
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      {text}
    </span>
  );
}
