"use client";
import Image from "next/image";

import { useEffect, useState, useLayoutEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [skipLoader, setSkipLoader] = useState(false);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("heroLoaded") === "true") {
      setSkipLoader(true);
      setImagesLoaded(true);
      setPhase(2);
      return;
    }

    window.scrollTo(0, 0);

    const imagesToLoad = ["/images/landing/landing-hero-bg-hero-bg.webp"];
    const duration = 1000;

    const loadImages = Promise.all(
      imagesToLoad.map(
        (src) =>
          new Promise((resolve) => {
            const img = new window.Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    );

    const minimumDelay = new Promise((resolve) => setTimeout(resolve, duration));

    Promise.all([loadImages, minimumDelay]).then(() => {
      setImagesLoaded(true);
      sessionStorage.setItem("heroLoaded", "true");
    });
  }, []);

  useEffect(() => {
    if (skipLoader || !imagesLoaded) return;
    const t1 = setTimeout(() => setPhase(1), 150);
    const t2 = setTimeout(() => setPhase(2), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [imagesLoaded, skipLoader]);

  useEffect(() => {
    if (!skipLoader && !imagesLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [skipLoader, imagesLoaded]);

  const renderStaggered = (text: string, delayOffset: number) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform:
            phase >= 1
              ? "translateY(0) rotate(0deg)"
              : "translateY(48px) rotate(4deg)",
          transitionDelay: `${delayOffset + i * 40}ms`,
          minWidth: char === " " ? "0.25em" : "auto",
        }}
      >
        {char}
      </span>
    ));

  const stats = [
    { value: "12+ Yrs", label: "District Toppers", icon: "M5 3l14 9-14 9V3z" },
    { value: "100%", label: "Board Pass Rate", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { value: "46%", label: "Elite 90% Club", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
    { value: "NEET & JEE", label: "National Selections", icon: "M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5z" },
  ];

  return (
    <>
      {/* ── CSS ── */}
      <style>{`
        @keyframes ringFill {
          0% { stroke-dashoffset: 351.86; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }
        @keyframes particleDrift {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-120px) translateX(30px) rotate(180deg); opacity: 0; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ══════════════════════════════════════════
           PRELOADER
         ══════════════════════════════════════════ */}
      {!skipLoader && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ${
            imagesLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
        <div className="absolute inset-0 bg-[#0a1628]">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="relative flex flex-col items-center z-10 px-6">
          <div className="relative flex items-center justify-center w-36 h-36 md:w-44 md:h-44 mb-8">
            <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-2xl" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <circle
                cx="60" cy="60" r="56"
                fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"
                strokeDasharray={351.86}
                style={{ animation: "ringFill 1s linear forwards" }}
              />
            </svg>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <Image src="/images/landing/logo1.webp" alt="eTech College" className="w-full h-full object-contain" width={800} height={800} unoptimized={false} />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide font-medium drop-shadow-lg mb-4 text-center">
            eTech Residential College
          </h2>
          <div className="flex items-center gap-4 text-white/60">
            <span className="h-px w-10 bg-[#fbbf24]/60" />
            <span className="font-serif text-sm md:text-base italic tracking-widest text-[#fbbf24]/80">Odisha&apos;s Premier Academy</span>
            <span className="h-px w-10 bg-[#fbbf24]/60" />
          </div>
        </div>
      </div>
      )}

      {/* ══════════════════════════════════════════
           HERO SECTION
         ══════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#0a1628]">

        {/* ── Background image with cinematic dark overlay ── */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/landing/landing-hero-bg-hero-bg.webp"
            alt=""
            className="w-full h-full object-cover transition-all duration-[4000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: phase >= 1 ? "scale(1.02)" : "scale(1.18)",
              opacity: phase >= 1 ? 1 : 0,
            }}
          />
          {/* Deep layered overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/50 to-[#0a1628]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-[#0a1628]/40" />
        </div>

        {/* ── Ambient animated glows ── */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            animation: "heroPulse 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
            animation: "heroPulse 10s ease-in-out infinite 2s",
          }}
        />

        {/* ── Dot Grid overlay ── */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── Floating particles ── */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#fbbf24]/40 z-[2] pointer-events-none"
            style={{
              left: `${10 + i * 12}%`,
              bottom: `${15 + (i % 3) * 10}%`,
              animation: `particleDrift ${5 + i * 1.2}s ease-in-out infinite ${i * 0.7}s`,
            }}
          />
        ))}



        {/* ══ MAIN CONTENT ══ */}
        <div className="relative z-10 flex-1 w-[90vw] mx-auto flex flex-col items-center justify-center text-center py-32 md:py-40 lg:py-48">

          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 bg-[#fbbf24]/10 border border-[#fbbf24]/30 text-[#fbbf24] text-xs font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-10 backdrop-blur-sm transition-all duration-1000"
            style={{ opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? "translateY(0)" : "translateY(-20px)", transitionDelay: "100ms" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Odisha&apos;s Premier Residential College
          </div>

          {/* Main Headline */}
          <h1 className="text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[6.5rem] font-serif font-bold tracking-tighter leading-[0.9] mb-6 text-white drop-shadow-xl relative">
            <span className="block overflow-hidden pb-2">
              <span className="block">{renderStaggered("Where Excellence", 100)}</span>
            </span>
            <span className="relative inline-block text-[#fbbf24] mt-1 overflow-visible pb-5">
              {renderStaggered("Takes Shape.", 100 + 16 * 40)}
              {/* Double Swoosh */}
              <svg
                className="absolute -bottom-1 left-0 w-[108%] h-[20px] md:h-[28px] text-[#fbbf24]/70 overflow-visible"
                viewBox="0 0 200 24" fill="none" preserveAspectRatio="none"
              >
                <path
                  d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5"
                  strokeLinecap="round" fill="none"
                  className={phase >= 2 ? "animate-draw" : "opacity-0"}
                  style={{ animationDelay: "150ms", animationFillMode: "both" }}
                />
                <path
                  d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" fill="none"
                  className={phase >= 2 ? "animate-draw" : "opacity-0"}
                  style={{ animationDelay: "450ms", animationFillMode: "both" }}
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-slate-300/90 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-12 font-light transition-all duration-1000"
            style={{ opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateY(0)" : "translateY(20px)", transitionDelay: "300ms" }}
          >
            Building future doctors, engineers & leaders through quality education, iron discipline and personal guidance.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-center justify-center transition-all duration-1000"
            style={{ opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateY(0)" : "translateY(20px)", transitionDelay: "450ms" }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 bg-[#fbbf24] hover:bg-[#f59e0b] text-slate-900 font-bold text-sm tracking-wide uppercase px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] transition-all duration-300"
            >
              Explore Our College
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-[#fbbf24]/60 text-white hover:text-[#fbbf24] font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-xl backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
            style={{ opacity: phase >= 2 ? 1 : 0 }}
          >
            <span className="text-white/40 text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1 h-2 bg-[#fbbf24]/60 rounded-full animate-bounce" />
            </div>
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════
           STATS BAR — dark glass strip
         ══════════════════════════════════════════ */}
      <div
        className="relative z-30 bg-[#0f1e45] border-t border-white/[0.06] transition-all duration-1000"
        style={{ opacity: phase >= 2 ? 1 : 0, transform: phase >= 2 ? "translateY(0)" : "translateY(16px)", transitionDelay: "200ms" }}
      >
        <div className="w-[90vw] mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 py-6 px-4 md:px-6 group cursor-default hover:bg-white/[0.03] transition-colors duration-300 ${
                i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-white/[0.08]" : ""
              } ${i === 2 ? "border-b md:border-b-0" : ""}`}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#fbbf24]/10 flex items-center justify-center text-[#fbbf24] group-hover:bg-[#fbbf24]/20 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
                </svg>
              </div>
              <div>
                <div className="font-extrabold text-white text-base md:text-lg leading-none mb-1 tracking-tight">{stat.value}</div>
                <div className="text-slate-400 text-[11px] font-semibold uppercase tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
