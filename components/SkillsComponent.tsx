"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  iconUrl: string; // We'll use this for placeholder/dynamic icons
}

interface SkillsComponentProps {
  category: string;
  skills: SkillItem[];
}

// Figma: skills-component | node: 62:2404
// Font mapping: Figma 24px → text-2xl → implemented: text-xl
export default function SkillsComponent({ category, skills }: SkillsComponentProps) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {/* Category Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#AEDEFC] px-6 py-4 rounded-full shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)]"
      >
        <h2 className="font-manjari font-bold text-xl text-black">
          {category}
        </h2>
      </motion.div>

      {/* Skills Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-wrap justify-center gap-8 w-full"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            className="bg-white/50 backdrop-blur-sm p-8 rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center gap-8 min-w-[144px] h-fit"
          >
            <p className="font-manjari font-bold text-lg text-black text-center">
              {skill.name}
            </p>
            {/* Icon Placeholder - 80x80 in Figma */}
            <div className="w-20 h-20 rounded-[20px] flex items-center justify-center overflow-hidden">
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="w-15 h-15 object-contain mb-2"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
