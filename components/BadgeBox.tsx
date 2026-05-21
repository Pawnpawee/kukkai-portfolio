"use client";

import { motion } from "framer-motion";

interface BadgeBoxProps {
  icon: React.ReactNode;
  text: string;
  href: string;
  className?: string;
}

export default function BadgeBox({
  icon,
  text,
  href,
  className,
}: BadgeBoxProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full max-w-[400px] ${className}`}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-4 rounded-[50px] bg-[rgba(255,246,246,0.5)] px-6 py-4 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm shrink-0">
          <div className="h-7 w-7 text-[#AEDEFC] flex items-center justify-center">
            {icon}
          </div>
        </div>
        <span className=" text-lg font-bold text-black lg:text-xl truncate">
          {text}
        </span>
      </motion.div>
    </a>
  );
}
