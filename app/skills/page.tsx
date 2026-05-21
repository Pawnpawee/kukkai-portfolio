"use client";

import { motion } from "framer-motion";
import SkillsComponent from "@/components/SkillsComponent";
import { skillsData } from "@/data/constants";

export default function SkillsPage() {
  return (
    <section className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-manjari text-4xl md:text-5xl lg:text-6xl text-center font-bold"
        >
          Skills
        </motion.h1>

        <div className="flex flex-col gap-20 w-full">
          {skillsData.map((category) => (
            <SkillsComponent
              key={category.category}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
