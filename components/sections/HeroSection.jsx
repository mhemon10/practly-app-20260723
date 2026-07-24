"use client";

import React from "react";
import { pageData } from "@/lib/data/PageData";
import Button from "@/components/common/Button";

export default function Hero() {
  const { hero } = pageData;

  return (
    <section
      id="hero"
      data-time="09:00"
      data-label="Hero"
      className="bg-navy-deep text-white pt-[170px] pb-24 overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-mint/20 blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-navy/60 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column Text Content */}
        <div className="lg:col-span-6 space-y-6">
          {/* Eyebrow with Left Dash Line Decoration */}
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-mint font-semibold">
            <span className="w-5 h-[2px] bg-mint rounded-full shrink-0" />
            <span>{hero?.eyebrow || "Appointment booking, on autopilot"}</span>
          </div>

          <h1 className="text-[clamp(2.3rem,4.6vw,3.6rem)] leading-[1.06] font-bold text-white mb-5 font-display tracking-tight">
            {hero?.title || "Let customers book you, automatically"}
          </h1>

          <p className="text-white/70 text-[1.08rem] max-w-[480px] leading-relaxed mb-[34px] font-body">
            {hero?.subtitle ||
              "Stop playing phone tag over scheduling. Practly gives customers a link to book a slot on your calendar 24/7, then handles confirmations, reminders, and rescheduling on its own — so your team spends less time on the phone and more time on the actual work."}
          </p>

          {/* Standard Buttons Dynamic Rendering */}
          <div className="flex flex-wrap gap-[14px] mb-[46px]">
            {hero?.ctas ? (
              hero.ctas.map((cta, idx) => (
                <Button
                  key={idx}
                  href={cta.href}
                  variant={cta.primary ? "primary" : "onDark"}
                  size="lg">
                  {cta.label}
                </Button>
              ))
            ) : (
              <>
                <Button href="#signup" variant="primary" size="lg">
                  Start Free Trial
                </Button>
                <Button href="#demo" variant="onDark" size="lg">
                  ▶ Watch Demo
                </Button>
              </>
            )}
          </div>

          <div className="flex gap-[28px] font-mono text-[0.72rem] text-white/45 tracking-[.04em] uppercase">
            {hero?.trust?.map((item, idx) => <span key={idx}>{item}</span>) || (
              <>
                <span>NO CREDIT CARD REQUIRED</span>
                <span>SETUP IN 10 MIN</span>
              </>
            )}
          </div>
        </div>

        {/* Right Column: Animated Booking Card */}
        <div className="lg:col-span-6 relative w-full">
          <div className="bg-navy border border-white/10 rounded-[24px] p-8 sm:p-10 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.65)] backdrop-blur-md">
            {/* Card Head */}
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/10">
              <strong className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight">
                Book a consultation
              </strong>
              <span className="font-mono text-sm text-white/60 bg-white/5 px-3 py-1 rounded-md border border-white/10">
                Tue, Jul 22
              </span>
            </div>

            {/* 10 Time Slots Grid */}
            <div className="grid grid-cols-5 gap-3 sm:gap-4 mb-7">
              <div className="h-14 sm:h-16 rounded-xl bg-white/[0.06] border border-white/5" />
              <div className="h-14 sm:h-16 rounded-xl bg-mint-tint" />
              <div className="h-14 sm:h-16 rounded-xl bg-white/[0.06] border border-white/5" />
              <div className="h-14 sm:h-16 rounded-xl bg-mint-tint" />
              <div className="h-14 sm:h-16 rounded-xl bg-white/[0.06] border border-white/5" />

              <div className="h-14 sm:h-16 rounded-xl bg-mint-tint" />
              <div className="h-14 sm:h-16 rounded-xl bg-mint animate-[pulse_2.6s_ease-in-out_infinite] shadow-lg shadow-mint/30" />
              <div className="h-14 sm:h-16 rounded-xl bg-white/[0.06] border border-white/5" />
              <div className="h-14 sm:h-16 rounded-xl bg-mint-tint" />
              <div className="h-14 sm:h-16 rounded-xl bg-white/[0.06] border border-white/5" />
            </div>

            {/* Toast Notification */}
            <div className="flex items-center gap-4 bg-mint/15 border border-mint/40 rounded-xl p-4 sm:p-5 animate-[toastIn_2.6s_ease-in-out_infinite] shadow-md">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-mint flex items-center justify-center shrink-0">
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  viewBox="0 0 16 16"
                  fill="none">
                  <path
                    d="M3 8L6.5 11.5L13 4"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-white leading-snug">
                  Booking confirmed — 2:30 PM
                </p>
                <span className="block font-mono text-xs sm:text-sm text-white/60 mt-0.5">
                  Reminder scheduled automatically
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
