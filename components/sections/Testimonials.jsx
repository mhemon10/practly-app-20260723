"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

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

export default function Testimonials() {
  const testimonials = pageData?.testimonials;

  const eyebrow =
    testimonials?.eyebrow || "From people who stopped answering the phone";
  const title = testimonials?.title || "What teams are saying";

  const cards = testimonials?.cards || [
    {
      stat: "No-shows ↓",
      quote:
        "Patients book directly now instead of calling in, and our no-show rate dropped noticeably once reminders started going out automatically.",
      avatar: "IC",
      name: "Dr. Imran Chowdhury",
      role: "Founder, CarePoint Clinic",
    },
    {
      stat: "Bookings ↑ 40%",
      quote:
        "We used to lose an hour a day just confirming appointments over the phone. Now that time goes into actually seeing clients.",
      avatar: "FR",
      name: "Farzana Rahman",
      role: "Owner, GlowSpace Studio",
    },
  ];

  return (
    <section
      id="11-00"
      data-time="11:00"
      data-label="Testimonials"
      className="bg-[var(--navy-deep)] text-[var(--white)] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[580px] mb-14 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--mint)] font-semibold">
            <span className="w-5 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--white)] tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              /* min-h, padding, text size বাড়িয়ে কার্ডগুলো বড় করা হয়েছে */
              className="bg-[var(--navy)] border border-[var(--white)]/10 rounded-2xl p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
              {/* Stat Badge */}
              {card.stat && (
                <div className="absolute top-8 right-8 font-mono text-xs text-[var(--mint)] bg-[var(--mint)]/12 px-3.5 py-1.5 rounded-full font-semibold border border-[var(--mint)]/20">
                  {card.stat}
                </div>
              )}

              <div>
                {/* Quote Mark */}
                <div className="font-display text-6xl text-[var(--mint)] opacity-80 leading-none mb-3">
                  &ldquo;
                </div>

                {/* Quote Text */}
                <p className="text-[var(--white)]/90 text-lg sm:text-xl leading-relaxed font-body mb-8">
                  {card.quote}
                </p>
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[var(--white)]/5">
                <div className="w-12 h-12 rounded-full bg-[var(--mint-tint)] text-[var(--mint-deep)] font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {card.avatar}
                </div>
                <div>
                  <strong className="block text-base font-semibold text-[var(--white)] font-display">
                    {card.name}
                  </strong>
                  <span className="block text-sm text-[var(--white)]/60 font-body mt-0.5">
                    {card.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
