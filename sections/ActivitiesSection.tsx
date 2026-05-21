"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { activitiesData } from "@/data/constants";

interface Activity {
  year: string;
  title: string;
  description: string[] | string;
  images: string[];
}

function ActivityItem({ item }: { item: Activity }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getGridCols = (count: number) => {
    if (count === 1) return "grid-cols-1";
    return "grid-cols-2";
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 w-full"
      >
        {/* Year Badge */}
        <div className="bg-[#AEDEFC] border-2 border-white px-8 py-2 rounded-full shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] self-start">
          <span className="font-sans font-bold text-xl md:text-2xl text-black">
            {item.year}
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/50 backdrop-blur-[10px] flex flex-col lg:flex-row gap-8 lg:gap-[56px] items-stretch p-6 lg:p-[32px] rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-full">
          {/* Detail Box */}
          <div className="lg:w-1/2 flex flex-col gap-6 items-start w-full">
            <h3 className="font-bitcount font-bold text-[#f875aa] text-2xl md:text-3xl lg:text-4xl">
              {item.title}
            </h3>

            {/* Description */}
            <div className="flex flex-col gap-3 w-full">
              {Array.isArray(item.description) ? (
                item.description.map((desc, i) => (
                  <div
                    key={i}
                    className="flex gap-4 bg-white/40 p-4 rounded-xl border border-white/60 shadow-sm"
                  >
                    <span className="text-[#f875aa] text-xl font-bold shrink-0">
                      •
                    </span>
                    <p className="font-sans text-base md:text-lg text-black leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-sans text-lg text-black leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </div>

          {/* Image Box (Photo Gallery) */}
          {item.images && item.images.length > 0 && (
            <div className="lg:w-1/2 w-full flex">
              <div className="bg-[#d9d9d9]/30 w-full min-h-[300px] rounded-[20px] overflow-hidden shadow-inner border border-white/20 flex flex-col">
                <div
                  className={`grid ${getGridCols(item.images.length)} gap-3 p-3 flex-1`}
                >
                  {item.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className={`relative rounded-xl overflow-hidden cursor-pointer shadow-md bg-white/20 ${
                        item.images.length === 1
                          ? "aspect-auto h-full"
                          : "aspect-video lg:aspect-square"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${item.title} - ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-8 h-8 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Activity fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ActivitiesSection() {
  const sortedActivities = [...activitiesData].sort((a, b) =>
    b.year.localeCompare(a.year),
  );

  return (
    <section
      id="activities"
      className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10 h-fit"
    >
      <div className="flex flex-col gap-14 items-center justify-center w-full max-w-7xl mx-auto relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans text-4xl md:text-5xl lg:text-6xl text-center font-bold text-black"
        >
          Activities
        </motion.h1>

        <div className="flex flex-col w-full gap-16 md:gap-24">
          {sortedActivities.length > 0 ? (
            sortedActivities.map((item, index) => (
              <ActivityItem key={index} item={item} />
            ))
          ) : (
            <div className="flex justify-center py-20">
              <p className="font-sans text-xl text-gray-500 italic">
                Coming Soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
