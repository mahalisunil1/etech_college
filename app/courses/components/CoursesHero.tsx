"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CoursesHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/about-us/e-tech/about_us_cover.webp"
          alt="eTech College Courses"
          className={`w-full h-full object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loaded ? "scale-100" : "scale-110"
          }`}
         width={800} height={800} unoptimized={false} />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />
      </div>

      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 pb-12 md:pb-20">
        {/* Breadcrumb */}
        <nav
          className={`flex items-center gap-2 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <Link href="/" className="text-white/60 text-xs font-semibold tracking-widest uppercase hover:text-white transition-colors">
            Home
          </Link>
          <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">Courses</span>
        </nav>

        {/* Heritage Tag */}
        <div
          className={`flex items-center gap-3 mb-5 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <span className="w-10 h-px bg-[#fbbf24]" />
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#fbbf24] uppercase">
            Vidyaniketana Charitable Trust
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-white tracking-tight leading-[0.95] mb-6 max-w-4xl transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Our{" "}
          <span className="relative inline-block">
            <span className="text-blue-400">Courses</span>
            <svg className="absolute -bottom-3 left-0 w-[105%] h-[20px] md:h-[24px] text-blue-400" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
              <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white/70 text-base md:text-lg leading-relaxed max-w-2xl font-serif italic transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          Precision-engineered academic programs for CHSE, CBSE, and NEET — built to deliver
          exceptional results and shape tomorrow&apos;s leaders.
        </p>
      </div>

      {/* Bottom SVG Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
