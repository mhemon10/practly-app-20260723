"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

// Card Stagger Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DemoSection() {
  const demoData = pageData?.demo || {
    eyebrow: "See it in action",
    title: "What customers and your team actually see",
  };

  return (
    <section
      id="10-20"
      data-time="10:20"
      data-label="See it in action"
      className="bg-[var(--white)] py-20 md:py-28 text-[var(--navy)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[560px] mb-14 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--mint)] font-semibold">
            <span className="w-5 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
            <span>{demoData.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--navy)] tracking-tight">
            {demoData.title}
          </h2>
        </motion.div>

        {/* Mockups Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* MOCKUP 1: Booking Page */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl overflow-hidden border border-[var(--navy)]/12 bg-[var(--slate-bg)] shadow-[0_18px_40px_-18px_rgba(30,41,59,0.25)] flex flex-col justify-between">
            <div>
              {/* Window Bar */}
              <div className="flex gap-1.5 px-3.5 py-3 bg-[var(--white)] border-b border-[var(--navy)]/8">
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
              </div>

              {/* Mockup Body */}
              <div className="p-4 sm:p-5 space-y-2">
                <div className="flex justify-between items-center p-2.5 rounded-lg bg-[var(--white)] border border-[var(--navy)]/8 text-xs font-mono text-[var(--slate-text)]">
                  <span>10:00 AM</span>
                  <span className="w-3.5 h-3.5 rounded border-2 border-[var(--slate-text)]" />
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-[var(--mint-tint)] border border-[var(--mint)] text-xs font-mono text-[var(--slate-text)]">
                  <span>10:30 AM</span>
                  <span className="w-3.5 h-3.5 rounded bg-[var(--mint-deep)] border-2 border-[var(--mint-deep)]" />
                </div>

                <div className="flex justify-between items-center p-2.5 rounded-lg bg-[var(--white)] border border-[var(--navy)]/8 text-xs font-mono text-[var(--slate-text)]">
                  <span>11:00 AM</span>
                  <span className="w-3.5 h-3.5 rounded border-2 border-[var(--slate-text)]" />
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="px-4 py-3.5 sm:px-5 sm:py-4.5 text-xs text-[var(--slate-text)] bg-[var(--white)] border-t border-[var(--navy)]/5">
              Customers pick a time and confirm in under a minute.
            </p>
          </motion.div>

          {/* MOCKUP 2: Staff Calendar */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl overflow-hidden border border-[var(--navy)]/12 bg-[var(--slate-bg)] shadow-[0_18px_40px_-18px_rgba(30,41,59,0.25)] flex flex-col justify-between">
            <div>
              {/* Window Bar */}
              <div className="flex gap-1.5 px-3.5 py-3 bg-[var(--white)] border-b border-[var(--navy)]/8">
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
              </div>

              {/* Mockup Body */}
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-4 gap-1.5">
                  {/* Amy */}
                  <div className="text-center">
                    <span className="block font-mono text-[10px] text-[var(--slate-text)] mb-1.5">
                      Amy
                    </span>
                    <div className="h-4 rounded bg-[var(--navy)] mb-1" />
                    <div className="h-4 rounded bg-[var(--navy)]/6 mb-1" />
                    <div className="h-4 rounded bg-[var(--mint)] mb-1" />
                  </div>

                  {/* Ravi */}
                  <div className="text-center">
                    <span className="block font-mono text-[10px] text-[var(--slate-text)] mb-1.5">
                      Ravi
                    </span>
                    <div className="h-4 rounded bg-[var(--navy)]/6 mb-1" />
                    <div className="h-4 rounded bg-[var(--mint)] mb-1" />
                    <div className="h-4 rounded bg-[var(--navy)]/6 mb-1" />
                  </div>

                  {/* Lin */}
                  <div className="text-center">
                    <span className="block font-mono text-[10px] text-[var(--slate-text)] mb-1.5">
                      Lin
                    </span>
                    <div className="h-4 rounded bg-[var(--mint)] mb-1" />
                    <div className="h-4 rounded bg-[var(--navy)] mb-1" />
                    <div className="h-4 rounded bg-[var(--navy)]/6 mb-1" />
                  </div>

                  {/* Sam */}
                  <div className="text-center">
                    <span className="block font-mono text-[10px] text-[var(--slate-text)] mb-1.5">
                      Sam
                    </span>
                    <div className="h-4 rounded bg-[var(--navy)]/6 mb-1" />
                    <div className="h-4 rounded bg-[var(--navy)]/6 mb-1" />
                    <div className="h-4 rounded bg-[var(--navy)] mb-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="px-4 py-3.5 sm:px-5 sm:py-4.5 text-xs text-[var(--slate-text)] bg-[var(--white)] border-t border-[var(--navy)]/5">
              See every team member&apos;s schedule in one place.
            </p>
          </motion.div>

          {/* MOCKUP 3: Reminders */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl overflow-hidden border border-[var(--navy)]/12 bg-[var(--slate-bg)] shadow-[0_18px_40px_-18px_rgba(30,41,59,0.25)] flex flex-col justify-between">
            <div>
              {/* Window Bar */}
              <div className="flex gap-1.5 px-3.5 py-3 bg-[var(--white)] border-b border-[var(--navy)]/8">
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
                <span className="w-2 h-2 rounded-full bg-[var(--navy)]/15" />
              </div>

              {/* Mockup Body */}
              <div className="p-4 sm:p-5 space-y-2.5">
                {/* Row 1 */}
                <div className="flex justify-between items-center py-1.5 border-b border-[var(--navy)]/8 text-xs font-body text-[var(--navy)]">
                  <span>SMS — 24 hrs before</span>
                  <div className="w-8.5 h-4.5 rounded-full bg-[var(--mint)] relative shrink-0">
                    <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--white)]" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center py-1.5 border-b border-[var(--navy)]/8 text-xs font-body text-[var(--navy)]">
                  <span>Email — 1 hr before</span>
                  <div className="w-8.5 h-4.5 rounded-full bg-[var(--mint)] relative shrink-0">
                    <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--white)]" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex justify-between items-center py-1.5 text-xs font-body text-[var(--navy)]">
                  <span>Follow-up survey</span>
                  <div className="w-8.5 h-4.5 rounded-full bg-[var(--navy)]/15 relative shrink-0">
                    <span className="absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-[var(--white)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="px-4 py-3.5 sm:px-5 sm:py-4.5 text-xs text-[var(--slate-text)] bg-[var(--white)] border-t border-[var(--navy)]/5">
              Control exactly when SMS and email reminders go out.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
