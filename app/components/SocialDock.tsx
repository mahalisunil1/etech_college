"use client";

import React, { useState, useEffect } from "react";

export default function SocialDock() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay slightly to allow page intro animations to play first
    const t = setTimeout(() => setMounted(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const socialLinks = [
    {
      label: "Email",
      path: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 7l9 6 9-6" /></>,
      href: "mailto:etechdkl1@gmail.com"
    },
    {
      label: "Phone",
      path: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
      href: "tel:+919439626264"
    },
    {
      label: "YouTube",
      path: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3V9z" /></>,
      href: "#"
    },
    {
      label: "Facebook",
      path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
      href: "#"
    },
  ];

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 flex-col bg-white/80 backdrop-blur-xl border border-white/60 border-r-0 rounded-l-2xl z-[99] shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden hidden sm:flex transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          title={item.label}
          className="flex items-center justify-center p-3.5 md:p-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-300 border-b border-slate-200/50 last:border-0 group"
        >
          <svg className="w-5 h-5 lg:w-5 lg:h-5 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            {item.path}
          </svg>
        </a>
      ))}
    </div>
  );
}
