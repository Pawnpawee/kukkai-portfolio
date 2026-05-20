import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface CTAArrowButtonProps {
  label: string;
  href: string;
  className?: string;
}

export default function CTAArrowButton({
  label,
  href,
  className,
}: CTAArrowButtonProps) {
  // mapped padding: px-6 py-4
  // BG pink (#ffdfdf), border white
  const baseClassName =
    "inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white bg-[#ffdfdf] px-6 py-4 shadow-[0px_2px_15px_0px_rgba(0,0,0,0.1)] hover:bg-[#ffcfcf] transition-colors duration-200";

  return (
    <Link
      href={href}
      className={className ? `${baseClassName} ${className}` : baseClassName}
    >
      <span className="font-manjari font-bold text-xl leading-none text-black mt-1">
        {label}
      </span>
      <ArrowRightIcon className="size-6 text-black" />
    </Link>
  );
}
