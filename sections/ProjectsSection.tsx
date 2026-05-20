"use client";

import { motion } from "framer-motion";
import { CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import CategoryBox from "@/components/CategoryBox";

const CATEGORIES = [
  {
    id: "coding",
    title: "Coding &\nProgramming",
    count: 10,
    icon: CodeBracketIcon,
    href: "/projects/coding",
  },
  {
    id: "design",
    title: "UX/UI &\nDesign",
    count: 5,
    icon: PaintBrushIcon,
    href: "/projects/design",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-20">
        {/* Categories Section */}
        <div className="w-full flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex flex-col md:flex-row flex-wrap gap-8 lg:gap-14 justify-center items-stretch w-full"
          >
            {CATEGORIES.map((cat) => (
              <CategoryBox key={cat.id} category={cat} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
