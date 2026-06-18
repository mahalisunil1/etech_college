"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import UniversalLightbox from "../../components/UniversalLightbox";

const highlightBanners = [
  { src: "/images/achievements/glorious-achievments-15x6-etech.webp", alt: "State Level Board Toppers Highlights" },
  { src: "/images/achievements/glorious-achievments-12x8-etech-difference.webp", alt: "The eTech Difference - Key Highlights" },
  { src: "/images/achievements/glorious-achievments-15x6-etech-copya.webp", alt: "AHS Examinations Rank Holders Board" },
  { src: "/images/achievements/glorious-achievments-16x6-1-pc-etech-copy.webp", alt: "State Board Rank 2 Celebrations" },
  { src: "/images/achievements/glorious-achievments-key-highlights-advt.2026.webp", alt: "Academic Key Highlights 2026" },
  { src: "/images/achievements/glorious-achievments-advt.half-page-d-02.webp", alt: "Administrative Highlights Board Advertisement" },
  { src: "/images/achievements/glorious-achievments-parthasarathi-khilar.webp", alt: "Parthasarathi Khilar - 598 Marks Board Topper" },
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

      <UniversalLightbox
        isOpen={selectedIdx !== null}
        onClose={() => setSelectedIdx(null)}
        image={
          selectedIdx !== null
            ? {
                src: highlightBanners[selectedIdx].src,
                label: highlightBanners[selectedIdx].alt,
              }
            : null
        }
        showNavigation={true}
        onNext={goNext}
        onPrev={goPrev}
      />
    </section>
  );
}
