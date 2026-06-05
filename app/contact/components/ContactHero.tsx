"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Slight delay to trigger enter animations
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden bg-[#1E3A8A]">
      {/* ── Dynamic SVG Background ── */}
      <style>{`
        @keyframes contactWaveFloat {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-5%) scaleY(1.1); }
          100% { transform: translateY(0) scaleY(1); }
        }
      `}</style>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
        {/* Deep background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[140px]" />
        
        {/* Flowing Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Abstract animated wave layers */}
        <svg
          className="absolute bottom-0 left-[-20%] w-[150%] h-[300px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          style={{ animation: "contactWaveFloat 20s ease-in-out infinite alternate" }}
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="rgba(255,255,255,0.03)"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="rgba(255,255,255,0.06)"
          />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-[90vw] mx-auto px-6 text-center pt-16">
        {/* Breadcrumb */}
        <nav
          className={`flex items-center justify-center gap-2 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/"
            className="text-blue-200/70 text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors"
          >
            Home
          </Link>
          <svg className="w-3 h-3 text-blue-300/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white text-xs font-semibold tracking-widest uppercase">
            Contact
          </span>
        </nav>

        {/* Heading */}
        <div
          className={`relative inline-block transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-[0.95] mb-2">
            Get in Touch
          </h1>
          {/* Double swoosh underline */}
          <svg
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[110%] h-[20px] md:h-[24px] text-blue-400"
            viewBox="0 0 200 24"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M5,16 Q100,0 195,14"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
              className={loaded ? "animate-draw" : "opacity-0"}
              style={{ animationDelay: "600ms", animationFillMode: "both" }}
            />
            <path
              d="M25,22 Q100,10 170,19"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className={loaded ? "animate-draw" : "opacity-0"}
              style={{ animationDelay: "900ms", animationFillMode: "both" }}
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className={`text-blue-100/80 mt-10 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-serif italic transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          Have questions about admissions, campus facilities, or academic programs? We&apos;re here to help guide you.
        </p>
      </div>

      {/* ── Bottom Transition Wave ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
