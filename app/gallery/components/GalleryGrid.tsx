"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  year: string;
  category: string;
}

const galleryData: GalleryItem[] = [
  // 2026 - Felicitation
  { src: "/new/Gallery/2026/DSC_7508.webp", alt: "Felicitation Stage Ceremony", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7541.webp", alt: "Academic Excellence Awards", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7546.webp", alt: "Outstanding Performance Honors", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7614.webp", alt: "State Level Felicitation 2026", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7621.webp", alt: "Academic Excellence Ceremony", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7633.webp", alt: "Principal Honoring Toppers", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7817.webp", alt: "Felicitation Stage 2026", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7819.webp", alt: "Award Stage Presentations", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7822.webp", alt: "Dignitaries Honoring Achievers", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7828.webp", alt: "Staff and Toppers Group Photo", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7831.webp", alt: "Management & Award Winners", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7835.webp", alt: "Student receiving State Award", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7839.webp", alt: "Felicitation Stage Speeches", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7841.webp", alt: "Toppers Addressing the gathering", year: "2026", category: "felicitation" },
  { src: "/new/Gallery/2026/DSC_7846.webp", alt: "2026 Board Felicitation Function", year: "2026", category: "felicitation" },
  { src: "/WEBSITE CHANGES 3/FALICITATION/DSC_7836.webp", alt: "Felicitation Program Awardee", year: "2026", category: "felicitation" },
  { src: "/WEBSITE CHANGES 3/FALICITATION/DSC_7837.webp", alt: "Felicitation Program Celebration", year: "2026", category: "felicitation" },

  // 2026 - Republic Day
  { src: "/new/EVENTS/JAN-26/DSC_9220.webp", alt: "Republic Day Celebration 2026", year: "2026", category: "national-days" },
  { src: "/new/EVENTS/JAN-26/DSC_9239.webp", alt: "Republic Day Parade", year: "2026", category: "national-days" },
  { src: "/new/EVENTS/JAN-26/DSC_9251.webp", alt: "Flag Hoisting Ceremony 2026", year: "2026", category: "national-days" },
  { src: "/new/EVENTS/JAN-26/DSC_9267.webp", alt: "Republic Day Student Address", year: "2026", category: "national-days" },

  // 2026 - Annual Function
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9210.webp", alt: "Annual Function 2026", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9312.webp", alt: "Annual Function Performance", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9323.webp", alt: "Annual Function Dance", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9364.webp", alt: "Annual Function Stage Play", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9391.webp", alt: "Group Song Presentation", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9445.webp", alt: "Student Play Act", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9535.webp", alt: "Classical Dance Performance", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9574.webp", alt: "Audience and Stage View", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9755.webp", alt: "Prize Distribution Ceremony", year: "2026", category: "annual-function" },
  { src: "/new/EVENTS/ANNUAL FUNCTION/DSC_9960.webp", alt: "Annual function 2026 Finale", year: "2026", category: "annual-function" },

  // 2026 - Farewell
  { src: "/new/EVENTS/FAREWELL/DSC_2513.webp", alt: "Farewell Ceremony Celebration", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2496.webp", alt: "Seniors Farewell Group Photo", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2523.webp", alt: "Farewell Candle Lighting", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2555.webp", alt: "Juniors Performing for Seniors", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2597.webp", alt: "Staff and Graduating Batch", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2606.webp", alt: "Seniors Receiving Memorabilia", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2640.webp", alt: "Principal Addressing the Batch", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_2687.webp", alt: "Emotional Farewell Moment", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_0010.webp", alt: "Graduation Celebration Batch", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_0025.webp", alt: "Farewell Cake Cutting", year: "2026", category: "farewell" },
  { src: "/new/EVENTS/FAREWELL/DSC_0048.webp", alt: "Seniors Group Photo Outdoors", year: "2026", category: "farewell" },

  // 2025 Events
  { src: "/chse-felicitation/2025/DSC_1970.webp", alt: "CHSE Felicitation 2025", year: "2025", category: "felicitation" },
  { src: "/chse-felicitation/2025/DSC_1971.webp", alt: "CHSE Toppers felicitation", year: "2025", category: "felicitation" },
  { src: "/new/EVENTS/ANNUAL SPORTS - 2025/DSC_6464.webp", alt: "Annual Sports 2025 - Cricket Match", year: "2025", category: "sports" },
  { src: "/new/EVENTS/ANNUAL SPORTS - 2025/DSC_6505.webp", alt: "Annual Sports 2025 - Running Event", year: "2025", category: "sports" },
  { src: "/new/EVENTS/ANNUAL SPORTS - 2025/DSC_6545.webp", alt: "Annual Sports 2025 - High Jump", year: "2025", category: "sports" },
  { src: "/new/EVENTS/ANNUAL SPORTS - 2025/DSC_6569.webp", alt: "Annual Sports 2025 - Tug of War", year: "2025", category: "sports" },
  { src: "/new/EVENTS/ANNUAL SPORTS - 2025/DSC_6632.webp", alt: "Annual Sports 2025 - Winners Podium", year: "2025", category: "sports" },
  { src: "/new/EVENTS/NATIONAL UNITY DAY/DSC_0002.webp", alt: "National Unity Day March", year: "2025", category: "national-days" },
  { src: "/new/EVENTS/NATIONAL UNITY DAY/DSC_0014.webp", alt: "National Unity Day Oath Ceremony", year: "2025", category: "national-days" },
  { src: "/new/EVENTS/PRATHAMASTAMI/DSC_6791.webp", alt: "Prathamastami Pooja Celebrations", year: "2025", category: "campus-life" },
  { src: "/new/EVENTS/PRATHAMASTAMI/DSC_6812.webp", alt: "Prathamastami Traditional Dance", year: "2025", category: "campus-life" },
  { src: "/new/EVENTS/PRATHAMASTAMI/DSC_6822.webp", alt: "Prathamastami Festivities", year: "2025", category: "campus-life" },
  { src: "/new/EVENTS/SWACCHATA ABHIYAN/DSC_0004.webp", alt: "Swacchata Abhiyan Cleanliness Drive", year: "2025", category: "national-days" },
  { src: "/new/EVENTS/SWACCHATA ABHIYAN/DSC_0027.webp", alt: "Swacchata Abhiyan Student volunteers", year: "2025", category: "national-days" },

  // 2024 Events
  { src: "/chse-felicitation/2024/_DSC6673.webp", alt: "CHSE Felicitation 2024", year: "2024", category: "felicitation" },
  { src: "/chse-felicitation/2024/_DSC6836.webp", alt: "CHSE Toppers group photo 2024", year: "2024", category: "felicitation" },
  { src: "/chse-felicitation/2024/_DSC6839.webp", alt: "CHSE 2024 Merit Awards", year: "2024", category: "felicitation" },
  { src: "/chse-felicitation/2024/_DSC6840.webp", alt: "CHSE 2024 Student speeches", year: "2024", category: "felicitation" },

  // 2023 Events
  { src: "/oas-felicitation/PHOTO-01.webp", alt: "OAS Felicitation", year: "2023", category: "felicitation" },
  { src: "/oas-felicitation/WhatsApp-Image-2024-11-19-at-3.37.01-PM-(3).webp", alt: "OAS Felicitation Ceremony", year: "2023", category: "felicitation" },
  { src: "/oas-felicitation/WhatsApp-Image-2024-11-19-at-3.37.03-PM-(1).webp", alt: "OAS Achievers felicitation", year: "2023", category: "felicitation" },
  { src: "/oas-felicitation/WhatsApp-Image-2025-11-18-at-10.17.54-AM.webp", alt: "OAS Rank Holders", year: "2023", category: "felicitation" },

  // 2022 Events
  { src: "/CAMPUS/CLASSROOM(2).webp", alt: "Campus Classroom 2022", year: "2022", category: "campus-life" },
  { src: "/CAMPUS/DSC_0005(1).webp", alt: "Campus Study Room 2022", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_1993.webp", alt: "Campus Life 2022", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2002.webp", alt: "2022 Academic Session", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2015.webp", alt: "2022 Student Activities", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2030.webp", alt: "2022 Lab Practicals", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2053.webp", alt: "Classroom group discussion", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2062.webp", alt: "Student Chemistry Lab session", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2146.webp", alt: "2022 Annual Meet", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2211.webp", alt: "2022 Classroom Lecture", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2319.webp", alt: "2022 Seminar Session", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2352.webp", alt: "Computer Lab Mock test", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2585.webp", alt: "Student physical education session", year: "2022", category: "sports" },
  { src: "/new/Gallery/2022/DSC_2676.webp", alt: "Campus outdoor activities", year: "2022", category: "sports" },
  { src: "/new/Gallery/2022/DSC_2708.webp", alt: "Student guidance seminar", year: "2022", category: "campus-life" },
  { src: "/new/Gallery/2022/DSC_2711.webp", alt: "Student doubt clearing desk", year: "2022", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7919.webp", alt: "Smart Classroom 1", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7928.webp", alt: "Smart Classroom 2", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CCTV/CCTV 1.webp", alt: "Campus CCTV", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/DSC_7900.webp", alt: "Canteen Area", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/IT.webp", alt: "Computer Lab", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/PHYSICS 1.webp", alt: "Physics Lab", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/CHEMISTRY 1.webp", alt: "Chemistry Lab", year: "2026", category: "campus-life" }
];

const categories = [
  { id: "all", name: "All Events" },
  { id: "felicitation", name: "Felicitation & Awards" },
  { id: "annual-function", name: "Annual Function" },
  { id: "farewell", name: "Farewell" },
  { id: "sports", name: "Sports" },
  { id: "national-days", name: "National Days" },
  { id: "campus-life", name: "Campus Life" }
];

const years = ["All Years", "2026", "2025", "2024", "2023", "2022"];

export default function GalleryGrid() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("All Years");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Reset pagination when filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [selectedYear, selectedCategory]);

  const filteredImages = galleryData.filter((img) => {
    const yearMatch = selectedYear === "All Years" || img.year === selectedYear;
    const catMatch = selectedCategory === "all" || img.category === selectedCategory;
    return yearMatch && catMatch;
  });

  const visibleImages = filteredImages.slice(0, visibleCount);

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (selectedIdx === null) return;
    if (e.key === "Escape") {
      setSelectedIdx(null);
    } else if (e.key === "ArrowRight") {
      setSelectedIdx((prev) => (prev !== null ? (prev + 1) % filteredImages.length : null));
    } else if (e.key === "ArrowLeft") {
      setSelectedIdx((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null));
    }
  }, [filteredImages.length, selectedIdx]);

  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIdx, handleKey]);

  const goNext = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % filteredImages.length);
  };
  const goPrev = () => {
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <>
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
        {/* Decorative grids and orbs */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 w-[90vw] mx-auto max-w-7xl">
          {/* Section Label */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#fbbf24]" />
              <span className="text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase">
                Explore
              </span>
              <span className="w-10 h-[2px] bg-[#fbbf24]" />
            </div>
            <p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Use the filters below to browse our campus events and milestones. Click on any photo to view in full size.
            </p>
          </div>

          {/* ── FILTERING CONTROLS ── */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm mb-12 flex flex-col gap-6">
            {/* Year Filters */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3">Filter By Year</span>
              <div className="flex flex-wrap gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setSelectedYear(y)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                      selectedYear === y
                        ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filters */}
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-3">Filter By Event Category</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                      selectedCategory === c.id
                        ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── PHOTO GRID ── */}
          {filteredImages.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-100/60 cursor-pointer transition-all duration-300 border border-slate-200 hover:border-blue-300 bg-slate-50"
                    onClick={() => setSelectedIdx(idx)}
                  >
                    <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-100">
                      <Image src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                       width={800} height={800} unoptimized={false} />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e45]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbbf24] bg-white/10 px-2 py-0.5 rounded">
                            {img.year}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                            {categories.find(c => c.id === img.category)?.name}
                          </span>
                        </div>
                        <span className="text-white text-sm font-semibold tracking-wide block">{img.alt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredImages.length && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setVisibleCount(filteredImages.length)}
                    className="px-8 py-3.5 bg-white border border-slate-300 text-slate-700 hover:border-[#1e3a8a] hover:text-[#1e3a8a] rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
                  >
                    View All
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <svg className="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-slate-700 font-bold text-lg mb-1">No Photos Found</h3>
              <p className="text-slate-400 text-sm">Try choosing a different year or category filter combination.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── MODAL LIGHTBOX ── */}
      {selectedIdx !== null && filteredImages[selectedIdx] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f1e45]/96 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-50 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedIdx(null); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-50 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-50 cursor-pointer"
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
            <Image src={filteredImages[selectedIdx].src}
              alt={filteredImages[selectedIdx].alt}
              className="max-h-[72vh] object-contain rounded-xl shadow-2xl bg-white p-2"
             width={800} height={800} unoptimized={false} />
            <span className="text-white text-base font-semibold mt-4 text-center">{filteredImages[selectedIdx].alt}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold text-[#fbbf24] uppercase tracking-widest">{filteredImages[selectedIdx].year}</span>
              <span className="text-white/40 text-xs font-bold">•</span>
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                {categories.find(c => c.id === filteredImages[selectedIdx].category)?.name}
              </span>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-bold tracking-widest bg-black/30 px-4 py-1 rounded-full">
            {selectedIdx + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </>
  );
}
