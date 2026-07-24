"use client";

import React from "react";
import { pageData } from "@/lib/data/PageData";
import Button from "@/components/common/Button";

export default function Navbar() {
  return (
    <header className="w-full h-20 bg-slate-bg px-6 md:px-12 flex items-center justify-between border-b border-navy/10 sticky top-0 z-40">
      {/* Brand Logo */}
      <div className="flex items-center gap-2.5 font-bold text-xl text-navy">
        <span className="w-2.5 h-2.5 rounded-full bg-mint" />
        {pageData.brand.name}
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-text">
        {pageData.nav.links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="hover:text-navy transition-colors">
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action Buttons with Standard Size */}
      <div className="flex items-center gap-3">
        <Button href="#login" variant="outline" size="md">
          {pageData.nav.cta.login}
        </Button>
        <Button href="#signup" variant="primary" size="md">
          {pageData.nav.cta.trial}
        </Button>
      </div>
    </header>
  );
}
