"use client";

import React from "react";
import { motion } from "framer-motion";
import { pageData } from "@/lib/data/PageData";

// Stagger Animation Variants
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

export default function Pricing() {
  const pricingData = pageData?.pricing;

  const eyebrow =
    pricingData?.eyebrow || "Start free, upgrade when it pays for itself";
  const title = pricingData?.title || "Pricing";
  const footerText =
    pricingData?.footerText || "Start Free Trial — no credit card required";
  const footerLinkText = pricingData?.footerLinkText || "See full pricing →";
  const footerLinkUrl = pricingData?.footerLinkUrl || "#";

  const plans = pricingData?.plans || [
    {
      name: "Starter",
      price: "Free",
      period: "",
      isPopular: false,
      features: [
        "1 staff calendar",
        "Online booking page",
        "Email & SMS reminders",
      ],
      buttonText: "Start Free Trial",
      buttonUrl: "#",
    },
    {
      name: "Growth",
      price: "$19",
      period: "/month",
      isPopular: true,
      ribbonText: "MOST POPULAR",
      features: [
        "Multiple staff calendars",
        "Online payments & deposits",
        "SMS reminders",
      ],
      buttonText: "Start Free Trial",
      buttonUrl: "#",
    },
    {
      name: "Team",
      price: "$49",
      period: "/month",
      isPopular: false,
      features: [
        "Multi-location support",
        "Advanced reporting",
        "Everything in Growth",
      ],
      buttonText: "Start Free Trial",
      buttonUrl: "#",
    },
  ];

  return (
    <section
      id="11-20"
      data-time="11:20"
      data-label="Pricing"
      className="bg-[var(--slate-bg)] py-20 md:py-28 text-[var(--navy)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[520px] mx-auto text-center mb-14 space-y-3">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-2.5 font-mono text-xs uppercase tracking-widest text-[var(--mint)] font-semibold">
            <span className="w-4 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
            <span>{eyebrow}</span>
            <span className="w-4 h-[2px] bg-[var(--mint)] rounded-full shrink-0" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[var(--navy)] tracking-tight">
            {title}
          </h2>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => {
            const isHighlighted = plan.isPopular;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: isHighlighted ? -12 : -6 }}
                transition={{ duration: 0.2 }}
                className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? "bg-[var(--navy-deep)] text-[var(--white)] border-2 border-[var(--navy-deep)] shadow-2xl lg:-translate-y-3"
                    : "bg-[var(--white)] text-[var(--navy)] border border-[var(--navy)]/12 shadow-sm"
                }`}>
                {/* Ribbon for Highlighted Card */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-7 bg-[var(--mint)] text-[var(--navy-deep)] font-mono text-[11px] font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {plan.ribbonText || "MOST POPULAR"}
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3
                    className={`font-display text-xl font-bold mb-2 ${
                      isHighlighted
                        ? "text-[var(--white)]"
                        : "text-[var(--navy)]"
                    }`}>
                    {plan.name}
                  </h3>

                  {/* Plan Price */}
                  <div className="font-display text-4xl font-extrabold mb-6 flex items-baseline gap-1">
                    <span>{plan.price}</span>
                    {plan.period && (
                      <span
                        className={`font-body text-sm font-normal ${
                          isHighlighted
                            ? "text-[var(--white)]/60"
                            : "text-[var(--slate-text)]"
                        }`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features?.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-3 text-sm leading-snug font-body ${
                          isHighlighted
                            ? "text-[var(--white)]/80"
                            : "text-[var(--slate-text)]"
                        }`}>
                        <svg
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isHighlighted
                              ? "stroke-[var(--mint)]"
                              : "stroke-[var(--mint-deep)]"
                          }`}
                          viewBox="0 0 16 16"
                          fill="none">
                          <path
                            d="M3 8l3.5 3.5L13 4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Action */}
                <a
                  href={plan.buttonUrl || "#"}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-center text-sm transition-all duration-200 block ${
                    isHighlighted
                      ? "bg-[var(--mint)] text-[var(--navy-deep)] hover:bg-[var(--mint)]/90 shadow-md"
                      : "bg-[var(--navy)]/5 text-[var(--navy)] hover:bg-[var(--navy)]/10 border border-[var(--navy)]/10"
                  }`}>
                  {plan.buttonText || "Start Free Trial"}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-[var(--slate-text)] text-sm font-body">
          {footerText} ·{" "}
          <a
            href={footerLinkUrl}
            className="underline hover:text-[var(--navy)] transition-colors font-medium">
            {footerLinkText}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
