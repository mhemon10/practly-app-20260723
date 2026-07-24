"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageData } from "@/lib/data/PageData";
import Icons from "@/components/common/Icons";

export default function WhoItsFor() {
  const [activeTab, setActiveTab] = useState(0);
  const whoData = pageData?.whoItsFor;

  return (
    <section
      id="10-00"
      data-time="10:00"
      data-label="Who it's for"
      className="bg-[var(--slate-bg)] py-20 md:py-28 text-[var(--navy)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px] mb-12 space-y-3">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--mint)] font-semibold">
            <span className="w-5 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
            <span>
              {whoData?.eyebrow || "Built for appointment-based work"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--navy)] tracking-tight">
            {whoData?.title || "Who it's for"}
          </h2>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-9">
          {whoData?.tabs?.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-[var(--white)]"
                    : "bg-[var(--white)] text-[var(--slate-text)] border border-[var(--navy)]/15 hover:border-[var(--navy)]/30"
                }`}>
                {/* Active Pill Animation */}
                {isActive && (
                  <motion.div
                    layoutId="activeWhoTab"
                    className="absolute inset-0 bg-[var(--navy)] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="min-h-[230px] relative">
          <AnimatePresence mode="wait">
            {whoData?.tabs?.[activeTab] &&
              (() => {
                const currentTab = whoData.tabs[activeTab];
                const IconComponent =
                  Icons?.[currentTab.icon] || Icons?.Calendar;

                return (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-[var(--white)] border border-[var(--navy)]/10 rounded-2xl p-8 sm:p-10 shadow-sm">
                    {/* Text Info */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-[var(--navy)]">
                        {currentTab.heading}
                      </h3>
                      <p className="text-[var(--slate-text)] text-base leading-relaxed font-body">
                        {currentTab.desc}
                      </p>
                    </div>

                    {/* Dynamic Icon Box */}
                    <div className="flex items-center justify-center">
                      <div className="w-[120px] h-[120px] rounded-2xl bg-[var(--mint-tint)] flex items-center justify-center shrink-0 text-[var(--mint)]">
                        {IconComponent && (
                          <IconComponent className="w-13 h-13 stroke-[var(--mint)]" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
