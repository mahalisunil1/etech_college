"use client";
import Image from "next/image";

export default function Management() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-900 relative z-20 overflow-hidden">
      {/* ── Background Elements ── */}
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-900/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/25 rounded-full blur-[120px] pointer-events-none" />

      {/* ── Flowing SVG Background ── */}
      <style>{`
        @keyframes mgmtRiverFlow {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1400px] h-full pointer-events-none"
        viewBox="0 0 1400 800"
        fill="none"
      >
        <defs>
          <linearGradient
            id="mgmtRiverStream"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.02" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path
          d="M -200 400 C 200 400, 400 200, 800 350 C 1100 450, 1300 250, 1600 150"
          stroke="url(#mgmtRiverStream)"
          strokeWidth="100"
          strokeLinecap="round"
        />
        <path
          d="M -200 400 C 200 400, 400 200, 800 350 C 1100 450, 1300 250, 1600 150"
          stroke="#60A5FA"
          strokeOpacity="0.06"
          strokeWidth="2"
          strokeDasharray="40 20"
          style={{ animation: "mgmtRiverFlow 20s linear infinite" }}
        />
      </svg>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-8 reveal text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <span className="text-[11px] font-bold tracking-[0.3em] text-blue-400/70 uppercase mb-4">
              Governance &amp; Leadership
            </span>
            <div className="relative inline-block">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2">
                Management
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg
                className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-400"
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
                />
                <path
                  d="M25,22 Q100,10 170,19"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm pb-4 text-center md:text-left mt-6 md:mt-0">
            Led by visionary leaders committed to creating a nurturing ecosystem for academic excellence.
          </p>
        </div>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT: Text Content */}
          <div className="flex flex-col gap-8 reveal reveal-delay-100">
            <p className="text-slate-300 text-base md:text-lg leading-[1.85]">
              <strong className="text-white font-bold">
                Vidyaniketana Charitable Trust
              </strong>{" "}
              has established &amp; promoted eTech Residential Higher
              Secondary School &amp; eTech Women&apos;s Higher Secondary
              School to provide and ensure quality education in +2 Science and
              different entrance-oriented courses with{" "}
              <span className="text-blue-400 font-semibold">
                100% result in AHS Examinations since 2013
              </span>
              , reaching at the glory of being{" "}
              <span className="text-blue-400 font-semibold">
                one of the leading Higher Secondary Schools of Odisha
              </span>
              .
            </p>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 font-serif">
                  2009
                </div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Foundation Year
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-bold text-blue-400 mb-1 font-serif tracking-wide">
                  Top Tier
                </div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Institution in Odisha
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Images */}
          <div className="flex flex-col gap-5 reveal reveal-delay-200">
            {/* Campus panoramic */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image src="/new/CAMPUS PHOTO.webp"
                alt="eTech Campus Building"
                className="w-full h-[220px] md:h-[260px] object-cover transition-transform duration-[1.5s] group-hover:scale-105"
               width={800} height={800} unoptimized={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="text-white/90 text-xs font-bold tracking-[0.15em] uppercase">
                  Campus Infrastructure
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
