import React from 'react';

export default function MarqueeTicker() {
  const announcements = [
    "ADMISSIONS OPEN FOR ACADEMIC YEAR 2026-27",
    "INTEGRATED JEE & NEET PATHWAYS FOR +2 SCIENCE",
    "EARLY CA FOUNDATION COACHING FOR +2 COMMERCE",
    "CIVIL SERVICES (UPSC) FOUNDATION FOR +2 ARTS",
    "100% BOARD SUCCESS RATE ASSURED"
  ];

  const tickerText = announcements.join("   ✦   ");

  return (
    <div className="w-full bg-[#fbbf24] border-y-4 border-slate-900 py-3 overflow-hidden whitespace-nowrap flex relative shadow-[0_4px_20px_rgba(251,191,36,0.3)] z-20">
      
      {/* Fixed Advertisement Badge on the left */}
      <div className="absolute left-0 top-0 bottom-0 bg-slate-900 text-white z-30 flex items-center justify-center px-4 md:px-8 skew-x-12 -ml-4 border-r-4 border-white">
        <span className="skew-x-[-12deg] flex items-center gap-2 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Live Bulletin
        </span>
      </div>

      {/* Scrolling Content */}
      <div className="flex animate-marquee shrink-0 pl-[140px] md:pl-[180px]">
        <span className="text-slate-900 text-[11px] md:text-sm font-black uppercase tracking-[0.15em] px-8">
          {tickerText}
        </span>
        <span className="text-slate-900 text-[11px] md:text-sm font-black px-4">
          ✦
        </span>
      </div>
      <div className="flex animate-marquee shrink-0" aria-hidden="true">
        <span className="text-slate-900 text-[11px] md:text-sm font-black uppercase tracking-[0.15em] px-8">
          {tickerText}
        </span>
        <span className="text-slate-900 text-[11px] md:text-sm font-black px-4">
          ✦
        </span>
      </div>
    </div>
  );
}
