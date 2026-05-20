"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { workExperienceData } from "@/data/constants";

interface Experience {
  year: string;
  title: string;
  description: string;
  skills: string[];
  images: number[]; // Number of images to mock for the gallery
}

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  const isLeft = index % 2 === 0;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, rotate: isLeft ? -5 : 5 }}
      whileInView={{ opacity: 1, x: 0, rotate: isLeft ? -2 : 2 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex flex-col gap-6 w-full ${
        isLeft ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
      } ${!isLeft ? "lg:-mt-32" : ""}`}
    >
      {/* Year Badge */}
      <div
        className={`bg-[#AEDEFC]/50 border border-white px-6 py-2 rounded-full shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] self-start ${
          isLeft ? "lg:self-end" : "lg:self-start"
        }`}
      >
        <span className="font-manjari font-bold text-xl md:text-2xl text-black">
          {item.year}
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-[450px] relative">
        {/* Card */}
        <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-full relative z-10">
          <h3 className="font-bitcount font-bold text-[#f875aa] text-2xl md:text-3xl mb-4">
            {item.title}
          </h3>
          <p className="font-manjari text-lg text-black mb-6">
            {item.description}
          </p>

          {/* Skills */}
          <div
            className={`flex flex-wrap gap-3 ${
              isLeft ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            {item.skills.map((skill) => (
              <div
                key={skill}
                className="bg-[#AEDEFC]/50 px-4 py-2 rounded-full shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)]"
              >
                <span className="font-manjari text-sm text-black">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expand Button */}
        {item.images.length > 0 && (
          <div
            className={`flex w-full relative z-20 ${
              isLeft ? "justify-start lg:justify-end" : "justify-start"
            }`}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-white hover:bg-gray-50 transition-colors flex items-center justify-center p-4 rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] group"
              aria-label={isExpanded ? "Collapse gallery" : "Expand gallery"}
            >
              <motion.div
                initial={{ rotate: isLeft ? 0 : 180 }}
                animate={{
                  rotate: isExpanded ? (isLeft ? 180 : 0) : isLeft ? 0 : 180,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ChevronRightIcon
                  className="w-6 h-6 text-black group-hover:text-[#f875aa] transition-colors"
                  strokeWidth={2.5}
                />
              </motion.div>
            </button>
          </div>
        )}

        {/* Desktop Expandable Gallery (Side Slide) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 596, opacity: 1 }} // 564px gallery + 32px gap = 596px
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`hidden lg:block absolute bottom-16 ${
                !isLeft ? "right-[100%]" : "left-[100%]"
              } z-0 overflow-hidden`}
            >
              <div
                className={`w-[564px] h-[371px] ${!isLeft ? "mr-8" : "ml-8"}`}
              >
                <div className="bg-white/50 backdrop-blur-[10px] p-8 rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] size-full flex flex-wrap gap-4 items-center justify-center content-center">
                  {item.images.map((img) => (
                    <div
                      key={img}
                      className="bg-[#d9d9d9] rounded-[20px] shrink-0 w-[150px] h-[150px] shadow-sm transform hover:scale-105 transition-transform"
                    >
                      {/* Image Mockup */}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Expandable Gallery (Vertical Slide) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="bg-white/50 backdrop-blur-[10px] p-6 rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-full flex flex-wrap gap-4 items-center justify-center mt-2 relative z-0">
                {item.images.map((img) => (
                  <div
                    key={img}
                    className="bg-[#d9d9d9] rounded-[20px] shrink-0 w-[120px] h-[120px] shadow-sm transform hover:scale-105 transition-transform"
                  >
                    {/* Image Mockup */}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function WorkExperienceSection() {
  return (
    <section className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-[100px] w-full min-h-screen relative overflow-hidden">
      <div className="flex flex-col gap-14 items-center justify-center w-full max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-manjari text-4xl md:text-5xl lg:text-6xl text-center"
        >
          Work Experience
        </motion.h1>

        {/* Timeline Container */}
        <div className="relative w-full flex justify-center mt-10">
          {/* Center Timeline Line (Desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0 border-l-[3px] border-dashed border-gray-300 -translate-x-1/2 z-0" />

          {/* Timeline Items Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-y-32 gap-x-[100px] w-full relative z-10">
            {workExperienceData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="contents" // Use contents so TimelineItem dictates its own grid placement
                >
                  {isLeft ? (
                    <>
                      <TimelineItem item={item} index={index} />
                      <div className="hidden lg:block" />{" "}
                      {/* Empty slot for grid layout */}
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block lg:mt-32" />{" "}
                      {/* Offset right column down */}
                      <TimelineItem item={item} index={index} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
