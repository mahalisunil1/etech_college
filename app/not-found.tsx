"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function NotFound() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-slate-900">


      <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* ── Cinematic Background ── */}
        <div className="absolute inset-0 z-0">
          <Image src="/about-us/eTech/DSC_0005(1).webp"
            alt="eTech Campus 404"
            className={`w-full h-full object-cover transition-transform duration-[3s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              loaded ? "scale-100" : "scale-110"
            }`}
           width={800} height={800} unoptimized={false} />
          {/* Heavy dark & blue overlays for premium feel */}
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/90 via-slate-900/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.8)_100%)]" />
        </div>

        {/* Decorative Grid Lines */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 80px)",
          }}
        />

        {/* ── Massive Ambient Glows ── */}
        <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none overflow-hidden mix-blend-overlay">
          <div className="w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 text-center mt-12">
          
          {/* Tag */}
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="w-8 h-px bg-[#fbbf24]" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#fbbf24] uppercase">
              Page Not Found
            </span>
            <span className="w-8 h-px bg-[#fbbf24]" />
          </div>

          {/* Main Heading Group */}
          <div
            className={`relative inline-flex flex-col items-center transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {/* The 404 */}
            <div className="text-[100px] sm:text-[140px] md:text-[180px] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 leading-none drop-shadow-2xl tracking-tighter mb-4">
              404
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-2 max-w-4xl mx-auto">
              Wandered off the <span className="text-blue-400">Campus Map?</span>
            </h1>
            
            {/* Double swoosh underline */}
            <svg
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[20px] md:h-[24px] text-blue-400"
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
                style={{ animationDelay: "1200ms", animationFillMode: "both" }}
              />
              <path
                d="M25,22 Q100,10 170,19"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                className={loaded ? "animate-draw" : "opacity-0"}
                style={{ animationDelay: "1500ms", animationFillMode: "both" }}
              />
            </svg>
          </div>

          {/* Subtitle */}
          <p
            className={`text-white/70 mt-10 text-base md:text-lg max-w-2xl mx-auto font-serif italic transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            The page you are looking for has been moved or no longer exists in our archives. Let&apos;s guide you back to eTech.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <Link
              href="/"
              className="px-8 py-4 bg-[#fbbf24] text-slate-900 text-sm font-bold tracking-widest uppercase rounded-xl shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:bg-white hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 text-sm font-bold tracking-widest uppercase rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </main>


    </div>
  );
}
