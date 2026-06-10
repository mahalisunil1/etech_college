"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const highlightBanners = [
  { src: "/new/Glorious Achievments/15x6 - etech.webp", alt: "State Level Board Toppers Highlights" },
  { src: "/new/Glorious Achievments/12x8 - etech difference.webp", alt: "The eTech Difference - Key Highlights" },
  { src: "/new/Glorious Achievments/15x6 - etech copyA.webp", alt: "AHS Examinations Rank Holders Board" },
  { src: "/new/Glorious Achievments/16x6 - 1 pc - etech - Copy.webp", alt: "State Board Rank 2 Celebrations" },
  { src: "/new/Glorious Achievments/KEY HIGHLIGHTS ADVT. - 2026.webp", alt: "Academic Key Highlights 2026" },
  { src: "/new/Glorious Achievments/ADVT. HALF PAGE-D-02.webp", alt: "Administrative Highlights Board Advertisement" },
  { src: "/new/Glorious Achievments/Parthasarathi Khilar.webp", alt: "Parthasarathi Khilar - 598 Marks Board Topper" },
];

export default function CollegeHighlights() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goNext = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % highlightBanners.length);
  };
  const goPrev = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + highlightBanners.length) % highlightBanners.length);
  };

  return (
    <section className="w-full py-20 bg-slate-50 relative z-20 overflow-hidden">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600" /> College Highlights <span className="w-8 h-[2px] bg-blue-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            This Year's Achievements
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Browse our official banners and board announcements highlighting key milestones for the year.
          </p>
        </div>

        {/* Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightBanners.map((banner, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="relative aspect-[3/2] w-full bg-slate-100 flex items-center justify-center">
                <Image src={banner.src}
                  alt={banner.alt}
                  className="max-w-full max-h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                 width={800} height={800} unoptimized={false} />
              </div>
              <div className="p-5 border-t border-slate-100 bg-white">
                <h4 className="text-slate-900 font-bold text-base leading-snug tracking-tight group-hover:text-blue-600 transition-colors">
                  {banner.alt}
                </h4>
                <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase block mt-2">
                  View Banner &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedIdx !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0d1526]/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedIdx(null); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="animate-scaleIn flex flex-col items-center justify-center max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={highlightBanners[selectedIdx].src}
              alt={highlightBanners[selectedIdx].alt}
              className="max-h-[75vh] object-contain rounded-xl shadow-2xl bg-white p-2"
             width={800} height={800} unoptimized={false} />
            <span className="text-white text-base font-semibold mt-4 text-center">{highlightBanners[selectedIdx].alt}</span>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-bold tracking-widest bg-black/30 px-4 py-1 rounded-full">
            {selectedIdx + 1} / {highlightBanners.length}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
