"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutPageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative flex flex-col items-center justify-center z-10 px-6">
        {/* Logo with Golden Ring */}
        <style>{`
          @keyframes aboutRingFill {
            0% { stroke-dashoffset: 351.86; }
            100% { stroke-dashoffset: 0; }
          }
        `}</style>
        <div className="relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36 mb-6">
          <svg
            className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-2xl"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={351.86}
              style={{ animation: "aboutRingFill 1s linear forwards" }}
            />
          </svg>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Image src="/images/landing/logo1.webp"
              alt="eTech College"
              className="w-full h-full object-contain"
             width={800} height={800} unoptimized={false} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-serif text-white tracking-wide font-medium drop-shadow-lg mb-3 text-center">
          eTech Residential College
        </h2>

        <div className="flex items-center gap-4 text-white/80">
          <span className="h-[1px] w-8 md:w-12 bg-white/30" />
          <span className="font-serif text-sm md:text-base italic tracking-widest drop-shadow-md">
            About Us
          </span>
          <span className="h-[1px] w-8 md:w-12 bg-white/30" />
        </div>
      </div>
    </div>
  );
}
