"use client";

import { renderingProjectsData } from "@/data/constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function RenderingProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-10">
      <div className="flex flex-col items-center w-full max-w-7xl mx-auto gap-20">
        <div className="flex flex-col w-full gap-20">
          <div className="flex flex-col gap-10 items-center">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center font-manjari text-4xl font-bold text-black lg:text-5xl"
            >
              3D <br />
              Rendering
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {renderingProjectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-[20px] bg-[#d9d9d9] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] cursor-zoom-in"
                onClick={() => setSelectedImage(project.videoEmbedUrl!)}
              >
                <img
                  src={project.videoEmbedUrl}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-white font-bitcount text-2xl font-bold mb-2">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-white/80 font-manjari text-sm mb-4">
                      {project.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.skills.map((skill) => (
                      <span key={skill} className="bg-[#AEDEFC] text-black text-[10px] px-2 py-1 rounded-full font-manjari font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#AEDEFC] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="size-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Preview"
              className="max-h-full max-w-full rounded-[10px] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
