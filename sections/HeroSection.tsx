"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import Badge from "@/components/Badge";
import CTAButton from "@/components/CTAButton";
import { heroData } from "@/data/constants";

type TextSegment = {
  text: string;
  className?: string;
};

type Line = {
  segments: TextSegment[];
};

const lines: Line[] = heroData.lines;

function renderSegments(segments: TextSegment[], visibleChars: number) {
  let remaining = visibleChars;

  return segments.map((segment, index) => {
    const sliceLength = Math.max(0, Math.min(segment.text.length, remaining));
    const slicedText = segment.text
      .slice(0, sliceLength)
      .replace(/ /g, "\u00A0");
    remaining -= segment.text.length;

    return (
      <span key={`${segment.text}-${index}`} className={segment.className}>
        {slicedText}
      </span>
    );
  });
}

export default function HeroSection() {
  const lineLengths = useMemo(
    () =>
      lines.map((line) =>
        line.segments.reduce((sum, segment) => sum + segment.text.length, 0),
      ),
    [],
  );

  const lineStarts = useMemo(() => {
    const starts: number[] = [];
    let total = 0;
    lineLengths.forEach((length) => {
      starts.push(total);
      total += length;
    });
    return starts;
  }, [lineLengths]);

  const totalChars = useMemo(
    () => lineLengths.reduce((sum, length) => sum + length, 0),
    [lineLengths],
  );

  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const typingSpeed = 100; // ความเร็วตอนพิมพ์
    const deletingSpeed = 70; // ความเร็วตอนลบ
    const pauseEnd = 3000; // เวลาหยุดพักเมื่อพิมพ์จบ (3 วินาที)
    const pauseStart = 500; // เวลาหยุดพักเมื่อลบหมดก่อนเริ่มพิมพ์ใหม่

    if (!isDeleting && charIndex < totalChars) {
      // เฟสที่ 1: กำลังพิมพ์
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex >= totalChars) {
      // เฟสที่ 2: พิมพ์จบครบทุกตัวแล้ว -> หยุดรอ แล้วเปลี่ยนเป็นสถานะลบ
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseEnd);
    } else if (isDeleting && charIndex > 0) {
      // เฟสที่ 3: กำลังลบย้อนกลับ
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      // เฟสที่ 4: ลบจนหมดแล้ว -> หยุดรอ แล้วเปลี่ยนเป็นสถานะพิมพ์
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseStart);
    }

    return () => clearTimeout(timer); // Cleanup ป้องกัน Memory Leak
  }, [charIndex, isDeleting, totalChars]);

  const activeLineIndex =
    charIndex >= totalChars
      ? lines.length - 1
      : lineStarts.findIndex(
          (start, index) => charIndex < start + lineLengths[index],
        );

  return (
    <section className="relative flex w-full lg:w-9/10 flex-col items-center px-4 py-16 md:px-8 lg:px-16 gap-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex w-full flex-col gap-6 text-center lg:gap-12"
      >
        <div className="flex flex-col gap-2 text-2xl leading-[normal] text-black md:text-3xl lg:text-5xl">
          {lines.map((line, index) => {
            const lineStart = lineStarts[index];
            const lineLength = lineLengths[index];
            const visibleChars = Math.max(
              0,
              Math.min(lineLength, charIndex - lineStart),
            );
            const isActive = index === activeLineIndex;

            return (
              <p
                key={`line-${index}`}
                className="flex min-h-[1.5em] items-center justify-center"
              >
                <span className="select-none opacity-0">&#8203;</span>
                {renderSegments(line.segments, visibleChars)}
                {isActive ? (
                  <span className="blink-cursor ml-1 inline-block h-[1em] w-0.5 bg-black align-middle" />
                ) : null}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-2.5">
          <div className="text-base leading-[normal] text-black md:text-lg lg:text-2xl">
            {heroData.quotes.map((quote, idx) => (
              <p key={idx} className="whitespace-pre text-center">
                {quote}
              </p>
            ))}
          </div>
          <CTAButton label="explore now!" href="/projects" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex w-full flex-wrap items-center justify-center gap-4 lg:gap-4"
      >
        {heroData.badges.map((badge, idx) => (
          <Badge key={idx} text={badge} />
        ))}
      </motion.div>
    </section>
  );
}
