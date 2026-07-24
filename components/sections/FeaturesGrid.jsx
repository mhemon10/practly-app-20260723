"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageData } from "@/lib/data/PageData";
import Icons from "@/components/common/Icons";

// Motion Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesGrid() {
  const { features } = pageData;

  return (
    <section
      id="features"
      data-time="09:20"
      data-label="Features"
      className="py-20 md:py-28 bg-slate-bg text-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-16 space-y-4">
          {/* Eyebrow with Left Dash Line */}
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[#10b981] font-semibold">
            <span className="w-5 h-[2px] bg-[#10b981] rounded-full shrink-0" />
            <span>{features?.eyebrow || "Everything scheduling needs"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-navy leading-[1.15] max-w-2xl tracking-tight">
            {features?.title ||
              "Eight small tools that add up to no more phone tag"}
          </h2>
        </motion.div>

        {/* 4x2 Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white rounded-3xl border border-navy/10 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-y-0">
          {features?.items?.map((item, index) => {
            const IconComponent = Icons?.[item.icon] || Icons?.Calendar;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 sm:p-9 flex flex-col justify-start transition-all duration-300 relative group bg-white hover:bg-mint-tint/80 cursor-pointer ${
                  // Grid Borders
                  index % 4 !== 3 ? "lg:border-r lg:border-navy/10" : ""
                } ${
                  index % 2 !== 1
                    ? "md:max-lg:border-r md:max-lg:border-navy/10"
                    : ""
                } ${index < 4 ? "lg:border-b lg:border-navy/10" : ""} ${
                  index < 6 ? "md:max-lg:border-b md:max-lg:border-navy/10" : ""
                }`}>
                {/* Icon Box with Wiggle/Move Animation on Hover */}
                <div className="mb-6 flex items-center justify-start text-[#10b981] transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-6">
                  {IconComponent && <IconComponent className="w-7 h-7" />}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold font-display text-navy mb-3 group-hover:text-navy-deep transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-slate-text leading-relaxed font-body">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
