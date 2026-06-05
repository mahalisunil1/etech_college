"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  { id: 1, src: "/new/AWARDS & CEREMONIES/DSC_7614.webp", alt: "State Level Felicitation 2026" },
  { id: 2, src: "/new/AWARDS & CEREMONIES/DSC_7621.webp", alt: "Academic Excellence Ceremony" },
  { id: 3, src: "/new/AWARDS & CEREMONIES/DSC_7633.webp", alt: "Principal Honoring Toppers" },
  { id: 4, src: "/new/AWARDS & CEREMONIES/DSC_7665.webp", alt: "CHSE Board Felicitation" },
  { id: 5, src: "/new/AWARDS & CEREMONIES/DSC_7678.webp", alt: "Student Achievements Award" },
  { id: 6, src: "/new/AWARDS & CEREMONIES/CHSE-2025/DSC_1871.webp", alt: "CHSE 2025 Top Achievers" },
  { id: 7, src: "/new/AWARDS & CEREMONIES/CHSE-2024/_DSC6761.webp", alt: "CHSE 2024 Felicitation program" },
];

export default function AchievementGallery() {
  const [mounted, setMounted] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Keyboard navigation for Lightbox
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") setSelectedIdx((prev) => (prev! + 1) % galleryImages.length);
      if (e.key === "ArrowLeft") setSelectedIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

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
        <div className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {galleryImages.map((img, idx) => (
            <div 
              key={img.id}
              className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-blue-900 hover:border-[#fbbf24]/80 transition-all duration-500 reveal hover:-translate-y-2"
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

      {/* ── LIGHTBOX MODAL ── */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1e45]/95 backdrop-blur-sm p-4 animate-fadeIn">
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#fbbf24] text-white hover:text-slate-900 rounded-full flex items-center justify-center transition-colors z-50"
            onClick={() => setSelectedIdx(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbbf24] text-white hover:text-slate-900 rounded-full flex items-center justify-center transition-colors z-50 hidden md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbbf24] text-white hover:text-slate-900 rounded-full flex items-center justify-center transition-colors z-50 hidden md:flex"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((prev) => (prev! + 1) % galleryImages.length);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image src={galleryImages[selectedIdx].src} 
              alt={galleryImages[selectedIdx].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
             width={800} height={800} unoptimized={false} />
            
            {/* Image Counter */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 font-medium tracking-widest text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-md">
              {selectedIdx + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
