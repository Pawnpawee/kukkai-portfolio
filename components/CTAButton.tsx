import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "default";
  className?: string;
}

export default function CTAButton({ label, href, className }: CTAButtonProps) {
  const baseClassName =
    "inline-flex h-[57px] items-center justify-center rounded-[16px] border border-white bg-[rgba(174,222,252,0.5)] px-6 py-4 text-xl font-bold text-black shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] lg:text-2xl";

  return (
    <Link
      href={href}
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      {label}
    </Link>
  );
}
