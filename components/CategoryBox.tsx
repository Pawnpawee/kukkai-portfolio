"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface CategoryData {
  id: string;
  title: string;
  count: number;
  icon: React.ElementType;
  href: string;
}

export default function CategoryBox({ category }: { category: CategoryData }) {
  const Icon = category.icon;

  return (
    <Link href={category.href} className="block w-full max-w-[480px]">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/50 backdrop-blur-sm flex flex-col gap-10 lg:gap-[56px] items-start justify-center px-10 py-10 lg:px-[56px] lg:py-[48px] rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-full text-left"
      >
        <div className="flex items-center justify-between w-full h-[70px]">
          <div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-full shadow-sm shrink-0">
            <Icon className="w-10 h-10 text-[#AEDEFC]" />
          </div>
          <div className="bg-[#AEDEFC]/50 px-6 py-4 rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] shrink-0">
            <span className=" font-bold text-lg lg:text-xl text-black whitespace-nowrap">
              {category.count} Projects
            </span>
          </div>
        </div>

        <div className="w-full py-4">
          <h3 className=" text-3xl lg:text-4xl text-black leading-tight whitespace-pre-line">
            {category.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
