"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import UniversalLightbox from "../../components/UniversalLightbox";

const galleryImages = [
  { id: 1, src: "/new/AWARDS & CEREMONIES/DSC_7614.webp", alt: "State Level Felicitation 2026" },
  { id: 2, src: "/new/AWARDS & CEREMONIES/DSC_7621.webp", alt: "Academic Excellence Ceremony" },
  { id: 3, src: "/new/AWARDS & CEREMONIES/DSC_7633.webp", alt: "Principal Honoring Toppers" },
  { id: 4, src: "/new/AWARDS & CEREMONIES/DSC_7665.webp", alt: "CHSE Board Felicitation" },
  { id: 5, src: "/new/AWARDS & CEREMONIES/DSC_7678.webp", alt: "Student Achievements Award" },
  { id: 6, src: "/new/AWARDS & CEREMONIES/CHSE-2025/DSC_1871.webp", alt: "CHSE 2025 Top Achievers" },
  { id: 7, src: "/new/AWARDS & CEREMONIES/CHSE-2024/_DSC6761.webp", alt: "CHSE 2024 Felicitation program" },
  { id: 8, src: "/feliciations 2026/DSC_7836.JPG", alt: "2026 Felicitation Ceremony" },
  { id: 9, src: "/feliciations 2026/DSC_7843.JPG", alt: "2026 Achievers Awards" },
];

export default function AchievementGallery() {

  const [mounted, setMounted] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open handled by UniversalLightbox

  return (
    <div id="awards" className="w-full bg-[#0f1e45] py-20 lg:py-32 relative text-white">
      {/* ── Top Transition Wave ── */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-8 md:h-12">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-[#fbbf24]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-[#fbbf24] font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-[#fbbf24]" /> Milestone Moments <span className="w-8 h-[2px] bg-[#fbbf24]" />
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-4">
            Awards & Ceremonies
          </h2>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Capturing the proud moments where our students shine on the grandest stages.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className={`columns-1 sm:columns-2 lg:columns-3 gap-6 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {galleryImages.map((img, idx) => (
            <div 
              key={img.id}
              className="relative break-inside-avoid mb-6 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-blue-900 hover:border-[#fbbf24]/80 transition-all duration-500 reveal hover:-translate-y-2"
              onClick={() => setSelectedIdx(idx)}
            >
              <Image src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                loading="lazy"
               width={800} height={800} unoptimized={false} />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e45]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbbf24] bg-white/10 px-2 py-0.5 rounded mb-1 inline-block">
                    Highlight
                  </span>
                  <span className="text-white text-sm font-semibold tracking-wide block">{img.alt}</span>
                </div>
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
                src: galleryImages[selectedIdx].src,
                label: galleryImages[selectedIdx].alt,
              }
            : null
        }
        showNavigation={true}
        onNext={() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % galleryImages.length : 0))}
        onPrev={() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0))}
      />
    </div>
  );
}
