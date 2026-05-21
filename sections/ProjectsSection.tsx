"use client";

import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  FilmIcon,
  CubeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import CategoryBox from "@/components/CategoryBox";
import { categoriesData, commonUI } from "@/data/constants";

const getIcon = (type: string) => {
  switch (type) {
    case "code":
      return CodeBracketIcon;
    case "design":
      return PaintBrushIcon;
    case "animation":
      return FilmIcon;
    case "3d":
      return CubeIcon;
    case "movie":
      return VideoCameraIcon;
    default:
      return CodeBracketIcon;
  }
};

export default function ProjectsSection() {
  return (
    <section className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-20">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center  text-4xl font-bold text-black lg:text-5xl"
        >
          {commonUI.projectsLabel}
        </motion.p>

        {/* Categories Section */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex flex-col md:flex-row flex-wrap gap-8 lg:gap-14 justify-center items-stretch w-full"
          >
            {categoriesData.map((cat) => (
              <CategoryBox
                key={cat.id}
                category={{
                  id: cat.id,
                  title: cat.title,
                  count: cat.count,
                  icon: getIcon(cat.iconType),
                  href: cat.href,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
