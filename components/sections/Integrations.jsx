"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageData } from "@/lib/data/PageData";
import Icons from "@/components/common/Icons";

// Integration name mapping to Icons component keys
const iconMap = {
  "Google Calendar": "Calendar",
  Outlook: "Check",
  "SMS Gateway": "Mail",
  "Card & bKash Payments": "CreditCard",
  "Practly CRM": "PlusCircle",
  "Practly Website": "Home",
};

export default function Integrations() {
  const integrationsData = pageData?.integrations;

  // integrationsData.list যদি সরাসরি string array হয়, তবে সেটাকেই ২ বার ডুপ্লিকেট করা হচ্ছে স্মুথ লুপের জন্য
  const rawList = integrationsData?.list || [];
  const marqueeItems = [...rawList, ...rawList];

  return (
    <section
      id="10-40"
      data-time="10:40"
      data-label="Integrations"
      className="bg-[var(--slate-bg)] py-20 md:py-28 text-center text-[var(--navy)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px] mx-auto mb-11 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--mint)] font-semibold">
            <span className="w-4 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
            <span>
              {integrationsData?.eyebrow || "Fits into what you already use"}
            </span>
            <span className="w-4 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--navy)] tracking-tight">
            {integrationsData?.title || "Integrations"}
          </h2>

          <p className="text-[var(--slate-text)] text-base leading-relaxed font-body max-w-[560px] mx-auto">
            {integrationsData?.desc}
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Loop */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-5 w-max py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}>
          {marqueeItems.map((item, idx) => {
            const iconKey = iconMap[item] || "Calendar";
            const IconComponent = Icons?.[iconKey];

            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-6 py-4 bg-[var(--white)] border border-[var(--navy)]/10 rounded-xl font-semibold text-sm text-[var(--navy)] whitespace-nowrap shadow-sm hover:border-[var(--mint)] transition-colors duration-200">
                {IconComponent && (
                  <IconComponent className="w-5 h-5 stroke-[var(--mint-deep)]" />
                )}
                <span>{item}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
