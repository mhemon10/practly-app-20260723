"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

export default function HowItWorks() {

  const howData = pageData?.howItWorks || {
    eyebrow: "Three steps, once",
    title: "How it works",
    steps: [
      {
        num: "01",
        title: "Set your availability",
        desc: "Define your working hours, staff schedules, and buffer time once — Practly handles the rest going forward.",
      },
      {
        num: "02",
        title: "Share your booking link",
        desc: "Add it to your website, social bio, or send it directly, and customers book a slot without a single phone call.",
      },
      {
        num: "03",
        title: "Show up, no chasing required",
        desc: "Confirmations and reminders go out automatically, and every booking updates your calendar and CRM record in real time.",
      },
    ],
  };

  const sectionRef = useRef(null);

  // Scroll Progress Tracking for the Timeline Line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 60%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="how"
      data-time="09:40"
      data-label="How it works"
      className="bg-[var(--navy-deep)] text-[var(--white)] py-20 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[520px] mx-auto mb-16 text-center space-y-3">
          {/* Eyebrow with Dash Decoration */}
          <div className="inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--mint)] font-semibold">
            <span className="w-4 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
            <span>{howData.eyebrow}</span>
            <span className="w-4 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--white)] tracking-tight">
            {howData.title}
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-[720px] mx-auto">
          {/* Background Line */}
          <div className="absolute left-[27px] top-[28px] bottom-[28px] w-[2px] bg-[var(--white)]/10" />

          {/* Animated Scroll Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-[28px] max-h-[calc(100%-56px)] w-[2px] bg-[var(--mint)] origin-top rounded-full z-0"
          />

          {/* Steps List */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {howData.steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex items-start gap-6 sm:gap-7 py-4 group">
                {/* Step Number Circle with Scroll Reveal Glow */}
                <motion.div
                  initial={{
                    borderColor: "rgba(248,250,252,0.15)",
                    color: "rgba(248,250,252,0.6)",
                  }}
                  whileInView={{
                    borderColor: "var(--mint)",
                    color: "var(--mint)",
                    boxShadow: "0 0 0 6px rgba(16,185,129,0.12)",
                  }}
                  viewport={{ margin: "-100px" }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 w-14 h-14 rounded-full bg-[var(--navy)] border-2 flex items-center justify-center font-mono text-base font-semibold transition-colors duration-300 z-10">
                  {step.num}
                </motion.div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-xl font-bold font-display text-[var(--white)] mb-2 tracking-tight group-hover:text-[var(--mint)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[var(--white)]/60 text-base leading-relaxed font-body max-w-[480px]">
                    {step.desc || step.p}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
