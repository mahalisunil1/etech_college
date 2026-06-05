"use client";

import { useEffect, useState } from "react";

export default function LeadershipHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1e45] via-[#1e3a8a] to-[#0f1e45] opacity-90" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glowing Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-[90vw] mx-auto text-center flex flex-col items-center">
        {/* Tag */}
        <div
          className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="w-8 h-[2px] bg-[#fbbf24]" />
          <span className="text-[11px] font-bold tracking-[0.3em] text-[#fbbf24] uppercase">
            Guiding the Future
          </span>
          <span className="w-8 h-[2px] bg-[#fbbf24]" />
        </div>

        {/* Heading */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight mb-6">
            Our <span className="text-[#fbbf24]">Leadership</span>
          </h1>
          {/* SVG Swoosh */}
          <svg
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-[16px] text-[#fbbf24]/60"
            viewBox="0 0 200 16"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M5,12 Q100,0 195,10"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className={loaded ? "animate-draw" : "opacity-0"}
              style={{ animationDelay: "800ms", animationFillMode: "both" }}
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className={`text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 mt-4 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Meet the visionary educator driving academic excellence and shaping future medical professionals at Etech Residential College.
        </p>
      </div>

      {/* ── Bottom Wave ── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#f8fafc"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120H0Z"
            fill="#f8fafc"
            opacity=".5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
