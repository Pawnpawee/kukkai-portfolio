"use client";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface SliderButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function SliderButton({
  direction,
  onClick,
  className,
  disabled,
}: SliderButtonProps) {
  const Icon = direction === "left" ? ChevronLeftIcon : ChevronRightIcon;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0px_2px_15px_0px_rgba(0,0,0,0.05)] transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 ${className || ""}`}
      aria-label={`Slide ${direction}`}
    >
      <Icon className="size-6 text-black" />
    </button>
  );
}
