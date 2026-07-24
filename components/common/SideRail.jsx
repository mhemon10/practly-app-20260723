"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

export default function SideRail() {
  const { scrollYProgress } = useScroll();

  // Smooth progress bar calculation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Convert scroll progress (0 to 1) into height percentage (0% to 100%)
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Active timestamp tracker based on scroll percentage
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const totalTicks = pageData.railTicks.length;
      const index = Math.min(Math.floor(latest * totalTicks), totalTicks - 1);
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  return (
    <aside className="hidden md:flex flex-col items-center w-rail h-screen fixed top-0 left-0 z-50 bg-slate-bg border-r border-navy/10 select-none">
      {/* Rail Main Container */}
      <div className="w-[2px] h-[calc(100vh-140px)] my-auto bg-navy/15 relative">
        {/* Dynamic Growing Progress Line on Scroll */}
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-mint absolute top-0 left-0 rounded-full"
        />

        {/* Timestamps & Nodes List */}
        <div className="flex flex-col justify-between w-full h-full absolute inset-0">
          {pageData.railTicks.map((tick, i) => {
            const isActive = i === activeIndex;

            return (
              <a
                key={i}
                href={`#${tick.id}`}
                className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 group transition-all"
                style={{
                  top: `${(i / (pageData.railTicks.length - 1)) * 100}%`,
                }}>
                {/* Node Ring & Active Halo */}
                <div className="relative flex items-center justify-center">
                  {/* Active Soft Green Glow */}
                  {isActive && (
                    <motion.span
                      layoutId="activeGlow"
                      className="absolute w-5 h-5 rounded-full bg-mint/25 border border-mint/40"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* Node Circle */}
                  <span
                    className={`w-3 h-3 rounded-full transition-all duration-300 z-10 shrink-0 ${
                      isActive
                        ? "bg-mint border-2 border-mint shadow-sm scale-110"
                        : "bg-white border-2 border-navy/40 group-hover:border-mint group-hover:scale-110"
                    }`}
                  />
                </div>

                {/* Vertical Time Label */}
                <span
                  className={`font-mono text-[11px] tracking-wide absolute top-4 [writing-mode:vertical-rl] rotate-180 transition-colors duration-200 whitespace-nowrap select-none ${
                    isActive
                      ? "text-navy font-bold"
                      : "text-slate-text/60 group-hover:text-navy font-medium"
                  }`}>
                  {tick.time}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
