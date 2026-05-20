"use client";

import { useRef, useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { aboutMeData, commonUI } from "@/data/constants";

interface AboutMeSectionProps {
  photos?: string[];
}

export default function AboutMeSection({ photos }: AboutMeSectionProps) {
  const dragRef = useRef<HTMLDivElement | null>(null);
  const initialStack =
    photos && photos.length > 0 ? photos.slice(0, 4) : aboutMeData.photos;

  const [index, setIndex] = useState(0); // top card index
  const [swipeState, setSwipeState] = useState<{
    idx: number;
    dir: number;
  } | null>(null);

  const handleDragEnd = (
    i: number,
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;
    const shouldThrow = Math.abs(offsetX) > 80 || Math.abs(velocityX) > 400;

    if (shouldThrow && i === index) {
      const dir = offsetX > 0 ? 1 : -1;
      setSwipeState({ idx: i, dir });

      // Wait for animation to complete (200ms)
      setTimeout(() => {
        setSwipeState(null);
        setIndex((prevIndex) => (prevIndex + 1) % initialStack.length);
      }, 200);
    }
  };

  const { details } = aboutMeData;

  return (
    <section
      id="about"
      className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit"
    >
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full text-start font-manjari text-4xl font-bold text-black lg:text-5xl"
      >
        {commonUI.knowMeBetterTitle}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col xl:flex-row items-center xl:items-start gap-10 xl:gap-20 w-full h-full"
      >
        {/* Photo stack column */}
        <div className="w-[300px] xl:w-1/3 h-[550px]">
          <div className="relative h-full">
            {initialStack.map((src, i) => {
              // Logic to determine stack position relative to active index
              const depth =
                (i - index + initialStack.length) % initialStack.length;

              // Only render top 3 for performance, others are hidden
              if (depth > 2) return null;

              const isTop = depth === 0;
              const z = 30 - depth;
              const scale = isTop ? 1 : 0.92 - depth * 0.03;
              const yOffset = depth * 12;

              const isSwiped = swipeState && swipeState.idx === i;
              const swipeDir = isSwiped ? swipeState!.dir : 0;

              return (
                <motion.div
                  key={`photo-${src}`}
                  ref={isTop ? dragRef : undefined}
                  drag={isTop ? "x" : false}
                  dragConstraints={{ left: -300, right: 300 }}
                  dragElastic={0.12}
                  onDragEnd={(e, info) => handleDragEnd(i, e, info)}
                  whileTap={isTop ? { scale: 0.98 } : undefined}
                  className="absolute left-0 top-0 h-full w-full cursor-grab rounded-[30px] overflow-hidden shadow-[0px_3px_30px_0px_rgba(0,0,0,0.25)] bg-[#d9d9d9]"
                  style={{ zIndex: z }}
                  initial={false}
                  animate={{
                    x: isSwiped ? swipeDir * 400 : 0,
                    rotate: isSwiped ? swipeDir * 15 : 0,
                    y: yOffset,
                    scale,
                    opacity: isSwiped ? 0 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 28,
                    duration: 0.35,
                  }}
                >
                  <img
                    src={src}
                    alt={`photo-${i}`}
                    className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                  />
                </motion.div>
              );
            })}

            {index >= initialStack.length && (
              <div className="absolute inset-0 flex items-center justify-center rounded-[30px] bg-white/60">
                <p className="text-lg">{commonUI.noMorePhotosLabel}</p>
              </div>
            )}

            {/* Swipe tip animation (blink twice, pause 2s) */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1, 0, 1] }}
              transition={{
                duration: 0.6,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute flex gap-3 items-center bottom-10 left-1/2 transform -translate-x-1/2 z-30"
            >
              <div className="rounded-full bg-white/60 p-3 shadow-[0px_2px_20px_0px_rgba(0,0,0,0.1)] w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8l4 4-4 4" />
                  <path d="M6 8l-4 4 4 4" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <span className="font-manjari text-lg text-black">
                {commonUI.swipeMoreLabel}
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full gap-8 lg:gap-12">
          {/* Detail column */}
          <div className="flex flex-col justify-between h-full gap-5 flex-1">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,246,246,0.5)] px-6 py-3 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-max">
                <span className="font-manjari font-bold text-xl">
                  Full Name
                </span>
              </div>

              <h3 className="text-3xl font-manjari font-semibold ml-3 mt-3">
                {details.fullName}
              </h3>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,246,246,0.5)] px-6 py-3 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-max">
                <span className="font-manjari font-bold text-xl">
                  Education
                </span>
              </div>
              <ul className="mt-3 list-disc pl-6 text-lg font-manjari ml-3">
                {details.education.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,246,246,0.5)] px-6 py-3 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-max">
                <span className="font-manjari font-bold text-xl">Hobbies</span>
              </div>
              <ul className="mt-3 list-disc pl-6 text-lg font-manjari ml-3">
                {details.hobbies.map((hobby, idx) => (
                  <li key={idx}>
                    <strong>{hobby.label}</strong>: {hobby.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full gap-5 flex-1">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,246,246,0.5)] px-6 py-3 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-max">
                <span className="font-manjari font-bold text-xl">
                  Personality Types
                </span>
              </div>
              <ul className="mt-3 list-disc pl-6 text-lg font-manjari">
                {details.personalityTypes.map((type, idx) => (
                  <li key={idx}>{type}</li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,246,246,0.5)] px-6 py-3 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-max">
                <span className="font-manjari font-bold text-xl">
                  Who am I?
                </span>
              </div>
              <ul className="mt-3 list-disc pl-6 text-lg font-manjari">
                <li>{details.whoAmI}</li>
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-[rgba(255,246,246,0.5)] px-6 py-3 shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-max">
                <span className="font-manjari font-bold text-xl">
                  Career Goals
                </span>
              </div>
              <ul className="mt-3 list-disc pl-6 text-lg font-manjari">
                {details.careerGoals.map((goal, idx) => (
                  <li key={idx}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
