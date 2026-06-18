"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const stats = [
  { value: "16+", label: "Facilities" },
  { value: "100%", label: "Results" },
  { value: "24×7", label: "Support" },
  { value: "2009", label: "Est." },
];

const tags = [
  "Hostel & Mess",
  "Smart Classrooms",
  "Science Labs",
  "Computer Lab",
  "Sports",
  "Transportation",
  "Library",
  "NEET & JEE Coaching",
];

export default function FacilitiesHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden">

      {/* ── Background Image ── */}
      <Image src="/images/campus/campus-photo.webp"
        alt="eTech Campus"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.38) saturate(1.1)" }}
       width={800} height={800} unoptimized={false} />

      {/* ── Gradient overlays ── */}
      {/* deep navy tint */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(10,20,60,0.75) 0%, rgba(15,23,42,0.55) 50%, rgba(10,20,60,0.80) 100%)" }} />
      {/* bottom fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, #f8fafc)" }} />
      {/* Subtle top fade */}
      <div className="absolute top-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to bottom, rgba(10,20,60,0.5), transparent)" }} />

      {/* ── Animated glowing orbs ── */}
      <div className="absolute top-[15%] left-[8%] w-80 h-80 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(59,130,246,0.18)" }} />
      <div className="absolute bottom-[20%] right-[6%] w-72 h-72 rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(251,191,36,0.12)" }} />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-[90vw] mx-auto max-w-5xl flex flex-col items-center text-center pt-28 pb-16 gap-8">

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)", transitionDelay: "0ms" }}
        >
          <Link href="/" className="text-white/50 text-[11px] font-bold tracking-[0.22em] uppercase hover:text-white/80 transition-colors">
            Home
          </Link>
          <svg className="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[#fbbf24] text-[11px] font-bold tracking-[0.22em] uppercase">Facilities</span>
        </nav>

        {/* Label chip */}
        <div
          className="transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)", transitionDelay: "100ms" }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black tracking-[0.25em] uppercase"
            style={{ background: "rgba(251,191,36,0.15)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] animate-pulse" />
            World-Class Campus
          </span>
        </div>

        {/* Main heading */}
        <div
          className="relative transition-all duration-1000"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)", transitionDelay: "200ms" }}
        >
          <h1 className="text-[3.2rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-serif font-bold text-white tracking-tight leading-[0.9]">
            Our <span style={{ color: "#fbbf24" }}>Facilities</span>
          </h1>
          {/* Underline swoosh */}
          <svg
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-5 text-[#fbbf24]"
            viewBox="0 0 300 20" fill="none" preserveAspectRatio="none"
          >
            <path d="M5,14 Q150,0 295,12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)", transitionDelay: "350ms" }}
        >
          A premium residential campus engineered for academic excellence, holistic growth, and uncompromised student comfort — from day one.
        </p>

        {/* Scrolling tag pills */}
        <div
          className="w-full overflow-hidden transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transitionDelay: "450ms" }}
        >
          <style>{`
            @keyframes scrollTags {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="flex gap-3 w-max" style={{ animation: "scrollTags 22s linear infinite" }}>
            {[...tags, ...tags].map((tag, i) => (
              <span
                key={i}
                className="shrink-0 px-4 py-2 rounded-full text-[12px] font-bold tracking-wide whitespace-nowrap"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stat chips */}
        <div
          className="flex flex-wrap justify-center gap-4 mt-2 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)", transitionDelay: "550ms" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center px-7 py-4 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="text-2xl md:text-3xl font-black text-white font-serif">{s.value}</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex flex-wrap gap-4 justify-center transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)", transitionDelay: "650ms" }}
        >
          <a
            href="#hostel"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-slate-900 hover:scale-105 active:scale-95 transition-transform"
            style={{ background: "linear-gradient(135deg,#fbbf24,#f59e0b)" }}
          >
            Explore Facilities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold text-white hover:scale-105 active:scale-95 transition-transform"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* ── Bottom wave transition ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-10 md:h-16">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
