"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SliderButton from "@/components/SliderButton";
import { highlightsData, commonUI } from "@/data/constants";

export default function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : highlightsData.length - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < highlightsData.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="highlights"
      className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit"
    >
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center  text-4xl font-bold text-black lg:text-5xl"
      >
        {commonUI.highlightsProjectTitle}
      </motion.p>

      {/* Carousel Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex w-full flex-col items-center gap-10"
      >
        <div className="relative flex w-full max-w-7xl items-center justify-center min-h-[600px] overflow-visible">
          {/* Left Control Desktop */}
          <div className="absolute left-0 z-30 hidden lg:block xl:-left-6">
            <SliderButton direction="left" onClick={prevSlide} />
          </div>

          {/* Cards Container */}
          <div className="relative flex h-[550px] w-full items-center justify-center perspective-[1000px]">
            {highlightsData.map((project, index) => {
              const offset = index - activeIndex;
              const isFocused = offset === 0;

              // Optional: for looping visuals, you'd calculate shortest distance
              // but for a simple array, offset suffices. We hide cards that are too far away.
              if (Math.abs(offset) > 1 && highlightsData.length > 2) {
                return null; // hide out-of-bounds cards for better performance
              }

              // Desktop layout logic: active is center, previous is left, next is right
              // The unfocused card will be scaled to 75% and 50% opacity
              const desktopX = offset * 340;

              return (
                <motion.div
                  key={project.id}
                  animate={{
                    x: desktopX,
                    scale: isFocused ? 1 : 0.75,
                    opacity: isFocused ? 1 : 0.5,
                    zIndex: isFocused ? 20 : 10,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute w-full max-w-[460px]"
                  // Allow clicking side cards to bring them into focus
                  onClick={() => !isFocused && setActiveIndex(index)}
                >
                  <ProjectCard {...project} isFocused={isFocused} />
                </motion.div>
              );
            })}
          </div>

          {/* Right Control Desktop */}
          <div className="absolute right-0 z-30 hidden lg:block xl:-right-6">
            <SliderButton direction="right" onClick={nextSlide} />
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex gap-4 lg:hidden mt-2">
          <SliderButton direction="left" onClick={prevSlide} />
          <SliderButton direction="right" onClick={nextSlide} />
        </div>
      </motion.div>
    </section>
  );
}
