"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

interface ScrollDownHintProps {
  className?: string;
}

export default function ScrollDownHint({ className }: ScrollDownHintProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

      setIsVisible(scrollTop + viewportHeight < scrollHeight - 1);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={
            className ||
            "fixed bottom-10 right-10 hidden items-center gap-2 lg:flex z-10"
          }
        >
          <div className="flex items-center rounded-[50px] bg-white p-4 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)]">
            <span className="relative h-7.5 w-7.5">
              <ArrowDownIcon className="absolute inset-0 h-full w-full" />
            </span>
          </div>
          <span className="text-xl font-bold text-black">Scroll Down</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
