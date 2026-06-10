"use client";

import React from "react";
import Image from "next/image";

const toppers = [
  { rank: 1, name: "PARHTA SARATHI KHILAR", score: 598, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/01 - PARHTA SARATHI KHILAR - 598.webp", rollNo: "349DB213", stateRank: 1 },
  { rank: 2, name: "SUJIT KUMAR RANA", score: 593, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/02 - SUJIT KUMAR RANA - 593.webp", rollNo: "349DB038", stateRank: 6 },
  { rank: 3, name: "SWABHIMAN BISWAL", score: 593, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/03 - SWABHIMAN BISWAL - 593.webp", rollNo: "349DB245", stateRank: 6 },
  { rank: 4, name: "SUMITRA PRADHAN", score: 592, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/04 - SUMITRA PRADHAN - 592.webp", rollNo: "349DB225", stateRank: 7 },
  { rank: 5, name: "BINAYAK PATRA", score: 590, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/05 - BINAYAK PATRA - 590.webp", rollNo: "349DB167", stateRank: 9 },
  { rank: 6, name: "SMRUTI RANJAN SAHOO", score: 589, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/06 - SMRUTI RANJAN SAHOO - 589.webp", rollNo: "349DB141", stateRank: 10 },
  { rank: 7, name: "SUPRIYA SAMAL", score: 589, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/07 - SUPRIYA SAMAL - 589.webp", rollNo: "349DB020", stateRank: 10 },
  { rank: 8, name: "SOURAV ROUT", score: 585, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/08 - SOURAV ROUT - 585.webp", rollNo: "349DB249", stateRank: 14 },
  { rank: 9, name: "DEBAPRASAD SAHOO", score: 584, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/09 - DEBAPRASAD SAHOO - 584.webp", rollNo: "349DB024", stateRank: 15 },
  { rank: 10, name: "SUDARSHAN SAHOO", score: 584, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/10 - SUDARSHAN SAHOO - 584.webp", rollNo: "349DB193", stateRank: 15 },
  { rank: 11, name: "JITEN BEHERA", score: 583, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/11 - JITEN BEHERA - 583.webp", rollNo: "349DB256", stateRank: 16 },
  { rank: 12, name: "PRATHAMESH SAHOO", score: 582, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/12 - PRATHAMESH SAHOO - 582.webp", rollNo: "349DB025", stateRank: 17 },
  { rank: 13, name: "SMRUTIPRAJNA TRIPATHY", score: 581, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/13 - SMRUTIPRAJNA TRIPATHY - 581.webp", rollNo: "349DB173", stateRank: 18 },
  { rank: 14, name: "JASMAN SAHOO", score: 581, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/14 - JASMAN SAHOO - 581.webp", rollNo: "349DB261", stateRank: 18 },
  { rank: 15, name: "BIMAL KUMAR BAI", score: 580, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/15 - BIMAL KUMAR BAI - 580.webp", rollNo: "349DB143", stateRank: 19 },
  { rank: 16, name: "CHIRANJIB PAL", score: 579, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/16 - CHIRANJIB PAL - 579.webp", rollNo: "349DB013", stateRank: 20 },
  { rank: 17, name: "SHUBHRAJIT MUDULI", score: 579, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/17 - SHUBHRAJIT MUDULI - 579.webp", rollNo: "349DB034", stateRank: 20 },
  { rank: 18, name: "SAMBIT SAHOO", score: 579, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/18 - SAMBIT SAHOO - 579.webp", rollNo: "349DB088", stateRank: 20 },
  { rank: 19, name: "ABHISHEK BEHERA", score: 579, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/19 - ABHISHEK BEHERA - 579.webp", rollNo: "349DB145", stateRank: 20 },
  { rank: 20, name: "PRAGYAN PRIYADARSHINI ROUL", score: 579, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/20 - PRAGYAN PRIYADARSHINI ROUL - 579.webp", rollNo: "349DB212", stateRank: 20 },
  { rank: 21, name: "TUSHAR RANJAN PRADHAN", score: 572, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/39 - TUSHAR RANJAN PRADHAN - 572.webp", rollNo: "349DB236" },
  { rank: 22, name: "STHITIPRAGYAN DASH", score: 568, img: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/50 - STHITIPRAGYAN DASH - 568.webp", rollNo: "349DB237" },
];

export default function Toppers() {
  const top3 = toppers.slice(0, 3);
  const remaining = toppers.slice(3);

  return (
    <section className="w-full py-16 md:py-32 bg-slate-900 relative z-20 border-t border-slate-800 overflow-hidden">
      
      {/* ── Background Patterns ── */}
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* ── Dynamic Background Watermarks ── */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(-10deg) scale(1); }
          50% { transform: translate(30px, -60px) rotate(5deg) scale(1.05); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(15deg) scale(1); }
          50% { transform: translate(-40px, -70px) rotate(-5deg) scale(1.1); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(45deg) scale(1); }
          50% { transform: translate(50px, -40px) rotate(25deg) scale(0.95); }
        }
      `}</style>

      {/* Lightbulb */}
      <div className="absolute top-10 -left-10 text-yellow-100 opacity-[0.04] pointer-events-none" style={{ animation: 'float1 20s ease-in-out infinite' }}>
        <svg width="250" height="250" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.5.5 2.5 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>
        </svg>
      </div>
      
      {/* Award Ribbon */}
      <div className="absolute bottom-10 -right-10 text-blue-100 opacity-[0.04] pointer-events-none" style={{ animation: 'float2 25s ease-in-out infinite' }}>
        <svg width="350" height="350" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/>
        </svg>
      </div>

      {/* Pen / Pencil */}
      <div className="absolute top-[25%] right-[5%] text-indigo-100 opacity-[0.05] pointer-events-none" style={{ animation: 'float3 22s ease-in-out infinite' }}>
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
        </svg>
      </div>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 reveal text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <span className="text-3xl sm:text-4xl lg:text-3xl font-serif text-blue-200 mb-2 block">District</span>
            <div className="relative inline-block">
              <h2 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[6rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2">
                Toppers
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-400" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-sm pb-4 text-center md:text-left mt-6 md:mt-0">
            Celebrating these incredible students who scored above 90% in their board examinations, continuing our legacy of academic excellence.
          </p>
        </div>

        {/* ── Top 3 Podium ── */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-6 md:gap-8 mb-16 md:mb-32 reveal">
          
          {/* Rank 2 (Left) */}
          <div className="w-full md:w-1/3 max-w-[320px] mx-auto order-2 md:order-1 flex flex-col items-center">
            <div className="w-full bg-slate-900/50 backdrop-blur rounded-t-2xl rounded-b-lg p-4 shadow-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative bg-slate-800">
                <Image src={top3[1].img} alt={top3[1].name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-slate-200/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Rank 02
                </div>
              </div>
              <div className="text-center pb-4">
                <h3 className="text-xl font-bold text-slate-100 mb-1">{top3[1].name}</h3>
                <div className="text-xs text-slate-400 font-mono mb-1">CHSE Roll: {top3[1].rollNo}</div>
                {top3[1].stateRank && <div className="text-sm font-bold text-blue-300 mb-2">State Rank: {top3[1].stateRank}</div>}
                <div className="text-3xl font-black text-blue-400">{top3[1].score}</div>
              </div>
            </div>
            <div className="w-[80%] h-12 bg-slate-800 border border-t-0 border-slate-700 rounded-b-xl flex items-center justify-center">
              <span className="text-slate-400 font-bold tracking-widest text-sm">SILVER</span>
            </div>
          </div>

          {/* Rank 1 (Center) */}
          <div className="w-full md:w-1/3 max-w-[360px] mx-auto order-1 md:order-2 flex flex-col items-center relative z-10 -mt-12 md:-mt-0">
            <div className="w-full bg-slate-900/80 backdrop-blur rounded-t-2xl rounded-b-lg p-4 shadow-2xl border-2 border-yellow-400/30 hover:border-yellow-400/50 hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border-4 border-slate-800 shadow-inner bg-slate-800">
                <Image src={top3[0].img} alt={top3[0].name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  Rank 01
                </div>
              </div>
              <div className="text-center pb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{top3[0].name}</h3>
                <div className="text-xs text-slate-400 font-mono mb-1">CHSE Roll: {top3[0].rollNo}</div>
                {top3[0].stateRank && <div className="text-sm font-bold text-yellow-300 mb-2">State Rank: {top3[0].stateRank}</div>}
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-yellow-700">{top3[0].score}</div>
                <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                  <span className="text-lg">👑</span>
                  <span className="text-xs font-bold text-yellow-500 uppercase tracking-[0.15em]">2026 State Topper</span>
                </div>
              </div>
            </div>
            <div className="w-[90%] h-20 bg-yellow-900/20 border border-yellow-600/30 rounded-b-2xl flex flex-col items-center justify-center">
              <div className="w-8 h-1 bg-yellow-400 rounded-full mb-2"></div>
              <span className="text-yellow-600 font-bold tracking-widest text-sm">GOLD</span>
            </div>
          </div>

          {/* Rank 3 (Right) */}
          <div className="w-full md:w-1/3 max-w-[320px] mx-auto order-3 md:order-3 flex flex-col items-center">
            <div className="w-full bg-slate-900/50 backdrop-blur rounded-t-2xl rounded-b-lg p-4 shadow-xl border border-slate-800 hover:border-slate-700 hover:-translate-y-2 transition-all duration-300">
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative bg-slate-800">
                <Image src={top3[2].img} alt={top3[2].name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                <div className="absolute top-4 left-4 bg-amber-700/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Rank 03
                </div>
              </div>
              <div className="text-center pb-4">
                <h3 className="text-xl font-bold text-slate-100 mb-1">{top3[2].name}</h3>
                <div className="text-xs text-slate-400 font-mono mb-1">CHSE Roll: {top3[2].rollNo}</div>
                {top3[2].stateRank && <div className="text-sm font-bold text-amber-300 mb-2">State Rank: {top3[2].stateRank}</div>}
                <div className="text-3xl font-black text-blue-400">{top3[2].score}</div>
              </div>
            </div>
            <div className="w-[80%] h-8 bg-amber-900/20 rounded-b-xl flex items-center justify-center border border-t-0 border-amber-700/30">
              <span className="text-amber-600/70 font-bold tracking-widest text-xs">BRONZE</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Single Infinite Marquee ── */}
      <div className="w-full relative reveal">
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        {/* Marquee Row */}
        <div className="flex w-[300%] md:w-[200%] xl:w-[150%] gap-6 overflow-hidden">
           <div className="flex gap-6 min-w-max animate-marquee">
             {[...remaining, ...remaining].map((student, idx) => (
                <div key={`m-${idx}`} className="w-64 bg-slate-900/50 backdrop-blur rounded-xl p-3 shadow-sm border border-slate-800 flex items-center gap-4 hover:border-slate-700 transition-colors">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-800 shrink-0">
                    <Image src={student.img} alt={student.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-200 line-clamp-1">{student.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono">CHSE Roll: {student.rollNo}</span>
                    {student.stateRank && <span className="text-[10px] font-bold text-blue-300">State Rank: {student.stateRank}</span>}
                    <span className="text-lg font-black text-blue-400 leading-none mt-1">{student.score}</span>
                  </div>
                </div>
             ))}
           </div>
        </div>
      </div>

      {/* ── View All Button ── */}
      <div className="flex justify-center mt-16 relative z-10 reveal">
        <a href="/achievements#toppers" className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 group">
          View All Toppers
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </div>

    </section>
  );
}
