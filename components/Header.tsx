"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { headerData } from "@/data/constants";

interface HeaderProps {
  isNavOpen: boolean;
  onToggleNav: () => void;
}

export default function Header({ isNavOpen, onToggleNav }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      className="sticky top-6 z-50 w-full"
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-3 items-center lg:flex lg:justify-between">
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            onClick={onToggleNav}
            className="relative z-50 h-15 w-15 lg:hidden"
          >
            <span
              className={`absolute left-1/2 top-5 h-0.5 w-10 -translate-x-1/2 rounded bg-black transition-all duration-300 ease-in-out ${
                isNavOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-1/2 top-7 h-0.5 w-10 -translate-x-1/2 rounded bg-black transition-all duration-300 ease-in-out ${
                isNavOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-1/2 top-9 h-0.5 w-10 -translate-x-1/2 rounded bg-black transition-all duration-300 ease-in-out ${
                isNavOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-4 place-self-center"
            aria-label={`${headerData.brandName.first} ${headerData.brandName.second}`}
          >
            <div className="h-10 w-11">
              <img
                alt="Kukkai logo"
                className="block h-full w-full object-cover"
                src={headerData.logoImg}
              />
            </div>
            <div className="flex-col text-xl font-bold leading-none text-black lg:text-2xl hidden lg:flex">
              <span>{headerData.brandName.first}</span>
              <span>{headerData.brandName.second}</span>
            </div>
          </Link>

          <div className="place-self-end lg:self-stretch">
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
                transition={{
                  duration: 0.4,
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              >
                <Link
                  href={headerData.askBot.href}
                  className="flex items-center justify-center gap-2.5 rounded-2xl border border-white bg-[rgba(174,222,252,0.5)] px-6 py-4 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)]"
                >
                  <span className="relative h-7.5 w-7.5">
                    <ChatBubbleLeftRightIcon className="absolute inset-0 h-full w-full" />
                  </span>
                  <span className="text-lg font-bold text-black lg:text-xl hidden lg:inline">
                    {headerData.askBot.label}
                  </span>
                </Link>
              </motion.div>
              <span className="hidden text-sm font-bold text-black lg:block lg:text-base">
                {headerData.askBot.subLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
