"use client";

import React from "react";

export default function Button({
  children,
  variant = "primary", // 'primary' | 'outline' | 'onDark'
  size = "md", // 'sm' | 'md' | 'lg'
  href,
  onClick,
  className = "",
  ...props
}) {
  // Base styles applied to all buttons
  const baseStyles =
    "inline-flex items-center justify-center font-body font-semibold transition-all duration-200 cursor-pointer rounded-lg select-none whitespace-nowrap";

  // Variant styles based on project theme
  const variants = {
    // Mint Solid Button (e.g., Start Free Trial in Navbar/Hero)
    primary:
      "bg-mint text-navy-deep hover:bg-mint-deep hover:text-white shadow-sm active:scale-[0.98]",

    // Outline / Border Button (e.g., Log in in Navbar)
    outline:
      "border border-navy/20 text-navy hover:border-navy hover:bg-navy/5 active:scale-[0.98]",

    // On-Dark Transparent / Border Button (e.g., Watch Demo in Hero)
    onDark:
      "border border-white/20 text-white hover:border-white hover:bg-white/5 active:scale-[0.98]",
  };

  // Size variations
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-xs sm:text-sm",
    lg: "px-6 py-3.5 text-sm",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // If href is passed, render as an anchor link <a>
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  // Otherwise render as <button>
  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
