"use client";

import { motion } from "framer-motion";

export interface LinkItem {
  label: string;
  href: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description?: string;
  skills: string[];
  link?: string | LinkItem;
  repository?: string | string[] | LinkItem | LinkItem[];
  videoEmbedUrl?: string;
  media?: React.ReactNode;
}

export default function DetailProjects({
  project,
  layout = "row",
  mediaClass,
  detailClass,
}: {
  project: ProjectData;
  layout?: "row" | "column";
  mediaClass?: string;
  detailClass?: string;
}) {
  // Helper to determine if the URL is for YouTube
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Helper to determine if the URL is for Figma
  const isFigmaUrl = (url: string) => {
    return url.includes("figma.com/embed") || url.includes("embed.figma.com");
  };

  // Helper to normalize image paths (e.g., public\assets\sql.png -> /assets/sql.png)
  const normalizeImagePath = (path: string) => {
    return path
      .replace(/\\/g, "/")
      .replace(/^public\//, "/")
      .replace(/^\/?assets\//, "/assets/");
  };

  // Normalize website link
  const websiteLink: LinkItem | null = project.link
    ? typeof project.link === "string"
      ? { label: "Website", href: project.link }
      : project.link
    : null;

  // Normalize repository links
  const normalizeRepo = (repo: string | LinkItem): LinkItem =>
    typeof repo === "string" ? { label: "GitHub", href: repo } : repo;

  const repositories: LinkItem[] = project.repository
    ? Array.isArray(project.repository)
      ? (project.repository as (string | LinkItem)[]).map(normalizeRepo)
      : [normalizeRepo(project.repository as string | LinkItem)]
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`bg-white/50 backdrop-blur-[10px] flex flex-col ${
        layout === "row" ? "lg:flex-row" : "lg:flex-col"
      } gap-8 lg:gap-[56px] items-center p-6 lg:p-[32px] rounded-[20px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] w-full`}
    >
      {/* Media Box */}
      <div
        className={`${
          layout === "row" ? mediaClass || "flex-[1_0_0]" : "w-full"
        } aspect-video h-auto`}
      >
        <div className="bg-[#d9d9d9] w-full h-full rounded-[20px] overflow-hidden shadow-sm relative">
          {project.videoEmbedUrl ? (
            isYouTubeUrl(project.videoEmbedUrl) ||
            isFigmaUrl(project.videoEmbedUrl) ? (
              <iframe
                src={project.videoEmbedUrl}
                title={project.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                src={normalizeImagePath(project.videoEmbedUrl)}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )
          ) : (
            project.media || (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-manjari">
                Video / Image Preview
              </div>
            )
          )}
        </div>
      </div>

      {/* Detail Box (CardDetail) */}
      <div
        className={`${
          layout === "row" ? detailClass || "flex-[1_0_0]" : "w-full"
        } flex flex-col gap-6 items-start w-full`}
      >
        <h4 className="font-bitcount font-bold text-[#f875aa] text-3xl">
          {project.title}
        </h4>
        <p className="font-manjari text-base lg:text-lg text-black w-full">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 w-full items-start">
          {project.skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#AEDEFC]/50 px-4 py-2.5 rounded-[50px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.1)] shrink-0 flex items-center"
            >
              <span className="font-manjari text-base leading-normal text-black whitespace-nowrap">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col gap-1 font-manjari text-[20px] leading-normal text-black w-full">
          {websiteLink && (
            <div className="flex gap-2">
              <span className="shrink-0">Link:</span>
              <a
                href={websiteLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {websiteLink.label}
              </a>
            </div>
          )}
          {repositories.length > 0 && (
            <div className="flex gap-2">
              <span className="shrink-0">Repository:</span>
              <div className="flex flex-wrap items-center">
                {repositories.map((repo, index) => (
                  <div
                    key={`${repo.href}-${index}`}
                    className="flex items-center"
                  >
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {repo.label}
                      {repositories.length > 1 && repo.label === "GitHub"
                        ? ` #${index + 1}`
                        : ""}
                    </a>
                    {index < repositories.length - 1 && (
                      <span className="mx-2 text-black/30">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
