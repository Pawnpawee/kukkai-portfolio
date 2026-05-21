"use client";
import { useState } from "react";
import CTAArrowButton from "./CTAArrowButton";
import { commonUI } from "@/data/constants";

interface ProjectCardProps {
  title: string;
  description: string;
  videoEmbedUrl: string;
  exploreHref: string;
  isFocused?: boolean;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  videoEmbedUrl,
  exploreHref,
  isFocused = true,
  className = "",
}: ProjectCardProps) {
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handleMouseEnter = () => {
    if (!videoEmbedUrl) return;
    setIsPreviewing(true);
  };

  const handleMouseLeave = () => {
    setIsPreviewing(false);
  };

  // Helper to determine if the URL is for YouTube
  const isYouTubeUrl = (url: string) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  // Helper to normalize image paths
  const normalizeImagePath = (path: string) => {
    return path
      .replace(/\\/g, "/")
      .replace(/^public\//, "/")
      .replace(/^\/?assets\//, "/assets/");
  };

  // Construct the video URL with autoplay and mute if previewing or focused
  const getEmbedUrl = () => {
    if (!videoEmbedUrl || !isYouTubeUrl(videoEmbedUrl)) return "";

    // Play if hovered OR if it's the focused card
    const shouldPlay = isPreviewing || isFocused;
    if (!shouldPlay) return videoEmbedUrl;

    const separator = videoEmbedUrl.includes("?") ? "&" : "?";
    // Adding autoplay=1 and mute=1 for the preview/focus playback
    return `${videoEmbedUrl}${separator}autoplay=1&mute=1`;
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex w-full max-w-[460px] h-[550px] shrink-0 flex-col gap-6 rounded-[20px] ${
        isFocused
          ? "bg-white shadow-[0px_2px_40px_0px_rgba(0,0,0,0.1)]"
          : "bg-white/70 shadow-[0px_2px_40px_0px_rgba(0,0,0,0.05)]"
      } p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_10px_50px_0px_rgba(0,0,0,0.1)] ${className}`}
    >
      {/* Video Preview Frame */}
      <div className="relative w-full flex-1 overflow-hidden rounded-[20px] bg-[#d9d9d9]">
        {videoEmbedUrl ? (
          isYouTubeUrl(videoEmbedUrl) ? (
            <iframe
              src={getEmbedUrl()}
              title={title}
              className="absolute inset-0 size-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={normalizeImagePath(videoEmbedUrl)}
              alt={title}
              className="absolute inset-0 size-full object-cover"
            />
          )
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500 ">
            {commonUI.previewVideoPlaceholder}
          </div>
        )}

        {/* Overlay to prevent interactions when not focused or to trigger hover */}
        {!isFocused && <div className="absolute inset-0 z-10 cursor-pointer" />}
      </div>

      {/* Card Details */}
      <div className="flex w-full shrink-0 flex-col items-start gap-4">
        <h3 className="font-bitcount text-3xl font-bold text-[#f875aa] leading-tight break-words w-full">
          {title}
        </h3>
        <p className=" text-lg text-black break-words w-full">{description}</p>

        <div className="flex w-full justify-end mt-2">
          {/* Prevent clicks if not focused */}
          <div className={!isFocused ? "pointer-events-none" : ""}>
            <CTAArrowButton
              label={commonUI.exploreButtonLabel}
              href={exploreHref}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
