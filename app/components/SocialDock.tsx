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
      label: "Instagram",
      path: <><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></>,
      href: "https://www.instagram.com/etech_group_of_institutions?igsh=MW5yc2V2cG5wcG8xbQ=="
    },
    {
      label: "Facebook",
      path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
      href: "https://www.facebook.com/etech1etech"
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
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
