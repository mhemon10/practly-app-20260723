"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

export default function SideRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <aside className="hidden md:flex flex-col items-center w-rail h-screen fixed top-0 left-0 z-50 bg-slate-bg border-r border-navy/10 select-none">
      <div className="w-[1.5px] h-[calc(100vh-100px)] my-auto bg-navy/10 relative">
        {/* Active Line Progress */}
        <motion.div
          style={{ scaleY }}
          className="w-full h-full origin-top bg-mint"
        />

        {/* Timestamps */}
        <div className="flex flex-col justify-between w-full h-full absolute inset-0">
          {pageData.railTicks.map((tick, i) => (
            <a
              key={i}
              href={`#${tick.id}`}
              className="flex items-center absolute left-1/2 -translate-x-1/2 group"
              style={{
                top: `${(i / (pageData.railTicks.length - 1)) * 100}%`,
              }}>
              <span className="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-text group-hover:border-mint group-hover:bg-mint transition-all shrink-0" />
              <span className="font-mono text-[10px] font-medium text-slate-text group-hover:text-navy absolute left-4 [writing-mode:vertical-rl] rotate-180 transition-colors whitespace-nowrap">
                {tick.time}
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
