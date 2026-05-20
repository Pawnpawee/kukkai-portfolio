"use client";

import { motion } from "framer-motion";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link?: string;
  repository?: string;
  media?: React.ReactNode;
}

export default function DetailProjects({ project }: { project: ProjectData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white/50 backdrop-blur-[10px] flex flex-col lg:flex-row gap-8 lg:gap-[56px] items-center p-6 lg:p-[32px] rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-full lg:max-w-[1018px]"
    >
      {/* Media Box */}
      <div className="flex-[1_0_0] w-full min-w-px h-[250px] lg:h-[294px]">
        <div className="bg-[#d9d9d9] w-full h-full rounded-[20px] overflow-hidden shadow-sm relative">
          {project.media || (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-manjari">
              Video / Image Preview
            </div>
          )}
        </div>
      </div>

      {/* Detail Box (CardDetail) */}
      <div className="flex-[1_0_0] flex flex-col gap-[24px] items-start w-full min-w-px lg:max-w-[449px]">
        <h4 className="font-bitcount font-bold text-[#f875aa] text-3xl">
          {project.title}
        </h4>
        <p className="font-manjari text-lg lg:text-[20px] text-black w-full max-w-[372px]">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-[16px] w-full items-start">
          {project.skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#AEDEFC]/50 px-[16px] py-[10px] rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] shrink-0 flex items-center"
            >
              <span className="font-manjari text-[16px] leading-normal text-black whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="font-manjari text-[20px] leading-normal text-black w-full max-w-[372px]">
          {project.link && (
            <div className="flex gap-2 mb-1">
              <span>Link:</span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Website
              </a>
            </div>
          )}
          {project.repository && (
            <div className="flex gap-2">
              <span>Repository:</span>
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
