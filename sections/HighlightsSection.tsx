"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SliderButton from "@/components/SliderButton";

const MOCK_PROJECTS = [
  {
    id: "ikigai",
    title: "Ikigai: The Journey Of Life",
    description:
      "AI-driven interactive storytelling for personalized student career discovery",
    videoEmbedUrl:
      "https://www.youtube.com/embed/i4pC7B5hVac?si=kqLwpjfYVAEQdk_e",
    exploreHref: "/projects/ikigai",
  },
  {
    id: "second-project",
    title: "STARBOUND Thailand Teaching Academy Award",
    description:
      "using Unity and C# to simplify C++ programming and flowchart logic into an interactive, award-winning educational experience.",
    videoEmbedUrl:
      "https://www.youtube.com/embed/vbmbC4S2wjc?si=fvDXCbDFQ1ofc2g4",
    exploreHref: "/projects/future-learn",
  },
  {
    id: "third-project",
    title: "Xiaofumeow.com",
    description:
      "a responsive food e-commerce platform, using ASP.NET (C#) and Bootstrap.",
    videoEmbedUrl:
      "https://www.youtube.com/embed/iSLqXRpaCtY?si=tbe2hDxfVxV8Bhvz",
    exploreHref: "/projects/xiaofumeow",
  },
];

export default function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : MOCK_PROJECTS.length - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev < MOCK_PROJECTS.length - 1 ? prev + 1 : 0));
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
        className="text-center font-manjari text-4xl font-bold text-black lg:text-5xl"
      >
        Highlights Project
      </motion.p>

      {/* Carousel Wrapper */}
      <div className="relative flex w-full max-w-7xl items-center justify-center min-h-[600px] overflow-visible">
        {/* Left Control Desktop */}
        <div className="absolute left-0 z-30 hidden lg:block xl:-left-6">
          <SliderButton direction="left" onClick={prevSlide} />
        </div>

        {/* Cards Container */}
        <div className="relative flex h-[550px] w-full items-center justify-center perspective-[1000px]">
          {MOCK_PROJECTS.map((project, index) => {
            const offset = index - activeIndex;
            const isFocused = offset === 0;

            // Optional: for looping visuals, you'd calculate shortest distance
            // but for a simple array, offset suffices. We hide cards that are too far away.
            if (Math.abs(offset) > 1 && MOCK_PROJECTS.length > 2) {
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
    </section>
  );
}
