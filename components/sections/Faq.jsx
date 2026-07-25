"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function FAQ() {
  const faq = pageData?.faq;

  const eyebrow = faq?.eyebrow || "COMMON QUESTIONS";
  const title = faq?.title || "FAQ";

  // Default focus on first item
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Extract items from pageData.faq.items safely
  const items = faq?.items || [];

  return (
    <section
      id="11-40"
      data-time="11:40"
      data-label="FAQ"
      className="bg-[var(--white)] py-20 md:py-28 text-[var(--navy)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header (Left Aligned like Design) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--mint-deep)] font-semibold">
            <span className="w-3 h-[2px] bg-[var(--mint-deep)] shrink-0" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-[var(--navy)] tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* FAQ List (Max Width bounded & Left Aligned) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl space-y-0">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;

            {
              /* q এবং question দুটোকেই সাপোর্ট করার জন্য সেফ হ্যান্ডলিং */
            }
            const questionText = item.q || item.question || item.title;
            const answerText = item.a || item.answer || item.desc;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-b border-[var(--navy)]/10 py-5 transition-colors duration-200">
                {/* Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left flex items-center justify-between gap-6 font-display font-bold text-lg sm:text-xl text-[var(--navy)] focus:outline-none cursor-pointer select-none py-2">
                  <span className="leading-snug">{questionText}</span>

                  {/* Circular Toggle Button */}
                  <div className="w-8 h-8 rounded-full bg-[var(--slate-bg)] flex items-center justify-center shrink-0 text-[var(--navy)] transition-colors duration-200 hover:bg-[var(--navy)]/10">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden">
                      <p className="pt-2 pb-4 pr-12 text-[var(--slate-text)] font-body text-base leading-relaxed">
                        {answerText}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
