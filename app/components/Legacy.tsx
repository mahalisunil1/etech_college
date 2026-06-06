"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

export default function Legacy() {
  const achievements = [
    {
      stat: "12+ YRS",
      title: "District Toppers",
      desc: "Consistently producing top ranks since 2012, leading the district with academic excellence.",
      image: "/legacy/toppers.webp"
    },
    {
      stat: "100%",
      title: "Pass Rate",
      desc: "Pass rate – securing 100% success with first division performance, year after year.",
      image: "/legacy/high-pass-rate.webp"
    },
    {
      stat: "7/10",
      title: "State Top Ranks",
      desc: "7 of the Top 10 state rank holders were our institution, earning statewide recognition for academic excellence.",
      image: "/legacy/state-purashkar.webp"
    },
    {
      stat: "12+ YRS",
      title: "Highest Free Laptops",
      desc: "Since 2013, our students have consistently secured the highest number of free laptops in the district.",
      image: "/legacy/laptop.webp"
    },
    {
      stat: "81.8%",
      title: "Competitive Selections",
      desc: "National competitive examination selections including JEE, NEET.",
      image: "/legacy/toppers.webp"
    },
    {
      stat: "46%",
      title: "Elite 90% Club",
      desc: "Competitive selection 80%, national exam only. Proud selections in NEET and JEE.",
      image: "/legacy/high-pass-rate.webp"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const total = achievements.length;

  // Detect mobile breakpoint (matches lg:grid-cols-3 at 1024px)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-advance every 4 seconds on mobile
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (!isMobile || paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isMobile, paused, next]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => (prev + 1) % total);
      } else {
        setCurrent((prev) => (prev - 1 + total) % total);
      }
    }
    // Resume auto-play after 5 seconds
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <section className="w-full py-16 md:py-32 bg-white relative z-20 border-t border-slate-100 overflow-hidden">

      {/* ── Section Background Patterns & Glows ── */}
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1E3A8A]/[0.05] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.05] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* ── Background SVG Shapes ── */}
      <style>{`
        @keyframes riverFlow {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      
      {/* Single Continuously Flowing River Stream */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1400px] h-full pointer-events-none" viewBox="0 0 1400 800" fill="none">
        <defs>
          <linearGradient id="riverStream" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="riverGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Main River Body (Static Glow) */}
        <path d="M -200 600 C 300 600, 500 200, 1000 400 C 1300 500, 1500 300, 1600 200" stroke="url(#riverStream)" strokeWidth="140" strokeLinecap="round" />
        
        {/* Flowing Central Current */}
        <path d="M -200 600 C 300 600, 500 200, 1000 400 C 1300 500, 1500 300, 1600 200" stroke="url(#riverGlow)" strokeWidth="30" strokeLinecap="round" strokeDasharray="300 200" style={{ animation: 'riverFlow 15s linear infinite' }} />
        
        {/* Flowing Fine Ripple Lines */}
        <path d="M -200 540 C 300 540, 500 140, 1000 340 C 1300 440, 1500 240, 1600 140" stroke="#1E3A8A" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="40 20" style={{ animation: 'riverFlow 25s linear infinite' }} />
        <path d="M -200 660 C 300 660, 500 260, 1000 460 C 1300 560, 1500 360, 1600 260" stroke="#1E3A8A" strokeOpacity="0.08" strokeWidth="2" strokeDasharray="60 30" style={{ animation: 'riverFlow 20s linear infinite' }} />
      </svg>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 reveal text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <span className="text-3xl sm:text-4xl lg:text-3xl font-serif text-slate-700 mb-2 block">Our</span>
            <div className="relative inline-block">
              <h2 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[6rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85] mb-2">
                Legacy
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-600" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm pb-4 text-center md:text-left mt-6 md:mt-0">
            We don&apos;t just teach; we produce leaders. Our track record speaks for itself, making eTech a beacon of academic brilliance.
          </p>
        </div>

        {/* ── Desktop: Cards Grid (3 columns) ── */}
        <div className="hidden lg:grid grid-cols-3 gap-6 reveal">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col xl:flex-row items-center gap-5 p-4 rounded-[24px] bg-white border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-400 group relative overflow-hidden"
            >
              {/* Premium Micro-Dot Matrix Pattern — full card coverage */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px]">
                {/* Subtle ambient glow in top-right corner */}
                <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#1E3A8A]/[0.08] rounded-full blur-3xl" />
                {/* Dot grid covering entire card */}
                <div 
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: `radial-gradient(#1E3A8A 1.5px, transparent 1.5px)`,
                    backgroundSize: '18px 18px',
                    WebkitMaskImage: 'linear-gradient(135deg, black 30%, transparent 100%)'
                  }}
                />
              </div>

              {/* Image */}
              <div className="w-full xl:w-[130px] h-[160px] shrink-0 rounded-2xl overflow-hidden relative z-10 shadow-sm border border-slate-100">
                <Image src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                 width={800} height={800} unoptimized={false} />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center py-2 flex-1 pr-6 z-10 relative">
                <span className="text-[44px] sm:text-[48px] font-extrabold text-[#1E3A8A] tracking-tight leading-none mb-3 group-hover:text-[#1D4ED8] transition-colors duration-300">
                  {item.stat}
                </span>
                <span className="text-[16px] sm:text-[18px] font-bold text-slate-900 leading-snug mb-1.5 block">
                  {item.title}
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-slate-600 leading-relaxed block">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: Auto-Carousel ── */}
        <div className="lg:hidden reveal">
          <div
            className="relative overflow-hidden rounded-[24px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Sliding track */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-1"
                >
                  <div className="flex flex-col items-center gap-5 p-5 rounded-[24px] bg-white border border-slate-200 shadow-sm relative overflow-hidden">
                    {/* Premium Micro-Dot Matrix Pattern */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[24px]">
                      <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#1E3A8A]/[0.08] rounded-full blur-3xl" />
                      <div 
                        className="absolute inset-0 opacity-[0.12]"
                        style={{
                          backgroundImage: `radial-gradient(#1E3A8A 1.5px, transparent 1.5px)`,
                          backgroundSize: '18px 18px',
                          WebkitMaskImage: 'linear-gradient(135deg, black 30%, transparent 100%)'
                        }}
                      />
                    </div>

                    {/* Image */}
                    <div className="w-full h-[180px] shrink-0 rounded-2xl overflow-hidden relative z-10 shadow-sm border border-slate-100">
                      <Image src={item.image} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                       width={800} height={800} unoptimized={false} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center py-2 z-10 relative text-center">
                      <span className="text-[44px] font-extrabold text-[#1E3A8A] tracking-tight leading-none mb-3">
                        {item.stat}
                      </span>
                      <span className="text-[17px] font-bold text-slate-900 leading-snug mb-1.5 block">
                        {item.title}
                      </span>
                      <span className="text-[14px] font-medium text-slate-600 leading-relaxed block">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Overlay Nav Arrows ── */}
            <button
              onClick={() => { setCurrent((prev) => (prev - 1 + total) % total); setPaused(true); setTimeout(() => setPaused(false), 5000); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 active:scale-90 transition-all duration-200"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => { setCurrent((prev) => (prev + 1) % total); setPaused(true); setTimeout(() => setPaused(false), 5000); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-blue-50 hover:text-blue-600 active:scale-90 transition-all duration-200"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* ── Bottom Controls: Arrows + Dots + Progress ── */}
          <div className="flex flex-col items-center mt-6 gap-3">
            {/* Progress bar */}
            <div className="w-32 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
            {/* Arrows + Dots row */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => { setCurrent((prev) => (prev - 1 + total) % total); setPaused(true); setTimeout(() => setPaused(false), 5000); }}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 active:scale-90 transition-all duration-200"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                {achievements.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 5000); }}
                    className={`rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-7 h-2.5 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => { setCurrent((prev) => (prev + 1) % total); setPaused(true); setTimeout(() => setPaused(false), 5000); }}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 active:scale-90 transition-all duration-200"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
