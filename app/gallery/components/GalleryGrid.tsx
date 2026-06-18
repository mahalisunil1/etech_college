"use client";

import Image from "next/image";
import UniversalLightbox from '../../components/UniversalLightbox';
import { useState, useEffect, useCallback } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  year: string;
  category: string;
}

const galleryData: GalleryItem[] = [
  // New Additions
  { src: "/images/gallery/new/DSC_7836.JPG", alt: "New Gallery Image 1", year: "2026", category: "campus-life" },
  { src: "/images/gallery/new/DSC_7843.JPG", alt: "New Gallery Image 2", year: "2026", category: "campus-life" },
  // 2026 - Felicitation
  { src: "/images/misc/feliciations-2026-DSC-7836.JPG", alt: "Felicitation Ceremony Award", year: "2026", category: "felicitation" },
  { src: "/images/misc/feliciations-2026-DSC-7843.JPG", alt: "Felicitation Function Honours", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7508.webp", alt: "Felicitation Stage Ceremony", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7541.webp", alt: "Academic Excellence Awards", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7546.webp", alt: "Outstanding Performance Honors", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7614.webp", alt: "State Level Felicitation 2026", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7621.webp", alt: "Academic Excellence Ceremony", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7633.webp", alt: "Principal Honoring Toppers", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7817.webp", alt: "Felicitation Stage 2026", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7819.webp", alt: "Award Stage Presentations", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7822.webp", alt: "Dignitaries Honoring Achievers", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7828.webp", alt: "Staff and Toppers Group Photo", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7831.webp", alt: "Management & Award Winners", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7835.webp", alt: "Student receiving State Award", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7839.webp", alt: "Felicitation Stage Speeches", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7841.webp", alt: "Toppers Addressing the gathering", year: "2026", category: "felicitation" },
  { src: "/images/gallery/gallery-2026-dsc-7846.webp", alt: "2026 Board Felicitation Function", year: "2026", category: "felicitation" },

  // 2026 - Republic Day
  { src: "/images/events/events-jan-26-dsc-9220.webp", alt: "Republic Day Celebration 2026", year: "2026", category: "national-days" },
  { src: "/images/events/events-jan-26-dsc-9239.webp", alt: "Republic Day Parade", year: "2026", category: "national-days" },
  { src: "/images/events/events-jan-26-dsc-9251.webp", alt: "Flag Hoisting Ceremony 2026", year: "2026", category: "national-days" },
  { src: "/images/events/events-jan-26-dsc-9267.webp", alt: "Republic Day Student Address", year: "2026", category: "national-days" },

  // 2026 - Annual Function
  { src: "/images/events/events-annual-function-dsc-9210.webp", alt: "Annual Function 2026", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9312.webp", alt: "Annual Function Performance", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9323.webp", alt: "Annual Function Dance", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9364.webp", alt: "Annual Function Stage Play", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9391.webp", alt: "Group Song Presentation", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9445.webp", alt: "Student Play Act", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9535.webp", alt: "Classical Dance Performance", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9574.webp", alt: "Audience and Stage View", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9755.webp", alt: "Prize Distribution Ceremony", year: "2026", category: "annual-function" },
  { src: "/images/events/events-annual-function-dsc-9960.webp", alt: "Annual function 2026 Finale", year: "2026", category: "annual-function" },

  // 2026 - Farewell
  { src: "/images/events/events-farewell-dsc-2513.webp", alt: "Farewell Ceremony Celebration", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2496.webp", alt: "Seniors Farewell Group Photo", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2523.webp", alt: "Farewell Candle Lighting", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2555.webp", alt: "Juniors Performing for Seniors", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2597.webp", alt: "Staff and Graduating Batch", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2606.webp", alt: "Seniors Receiving Memorabilia", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2640.webp", alt: "Principal Addressing the Batch", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-2687.webp", alt: "Emotional Farewell Moment", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-0010.webp", alt: "Graduation Celebration Batch", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-0025.webp", alt: "Farewell Cake Cutting", year: "2026", category: "farewell" },
  { src: "/images/events/events-farewell-dsc-0048.webp", alt: "Seniors Group Photo Outdoors", year: "2026", category: "farewell" },

  // 2025 Events
  { src: "/images/events/chse-felicitation-2025-DSC-1970.webp", alt: "CHSE Felicitation 2025", year: "2025", category: "felicitation" },
  { src: "/images/events/chse-felicitation-2025-DSC-1971.webp", alt: "CHSE Toppers felicitation", year: "2025", category: "felicitation" },
  { src: "/images/events/events-annual-sports--2025-dsc-6464.webp", alt: "Annual Sports 2025 - Cricket Match", year: "2025", category: "sports" },
  { src: "/images/events/events-annual-sports--2025-dsc-6505.webp", alt: "Annual Sports 2025 - Running Event", year: "2025", category: "sports" },
  { src: "/new/EVENTS/ANNUAL SPORTS - 2025/DSC_6545.webp", alt: "Annual Sports 2025 - High Jump", year: "2025", category: "sports" },
  { src: "/images/events/events-annual-sports--2025-dsc-6569.webp", alt: "Annual Sports 2025 - Tug of War", year: "2025", category: "sports" },
  { src: "/images/events/events-annual-sports--2025-dsc-6632.webp", alt: "Annual Sports 2025 - Winners Podium", year: "2025", category: "sports" },
  { src: "/images/events/events-national-unity-day-dsc-0002.webp", alt: "National Unity Day March", year: "2025", category: "national-days" },
  { src: "/images/events/events-national-unity-day-dsc-0014.webp", alt: "National Unity Day Oath Ceremony", year: "2025", category: "national-days" },
  { src: "/images/events/events-prathamastami-dsc-6791.webp", alt: "Prathamastami Pooja Celebrations", year: "2025", category: "campus-life" },
  { src: "/images/events/events-prathamastami-dsc-6812.webp", alt: "Prathamastami Traditional Dance", year: "2025", category: "campus-life" },
  { src: "/images/events/events-prathamastami-dsc-6822.webp", alt: "Prathamastami Festivities", year: "2025", category: "campus-life" },
  { src: "/images/events/events-swacchata-abhiyan-dsc-0004.webp", alt: "Swacchata Abhiyan Cleanliness Drive", year: "2025", category: "national-days" },
  { src: "/images/events/events-swacchata-abhiyan-dsc-0027.webp", alt: "Swacchata Abhiyan Student volunteers", year: "2025", category: "national-days" },

  // 2024 Events
  { src: "/images/events/chse-felicitation-2024-DSC6673.webp", alt: "CHSE Felicitation 2024", year: "2024", category: "felicitation" },
  { src: "/images/events/chse-felicitation-2024-DSC6836.webp", alt: "CHSE Toppers group photo 2024", year: "2024", category: "felicitation" },
  { src: "/images/events/chse-felicitation-2024-DSC6839.webp", alt: "CHSE 2024 Merit Awards", year: "2024", category: "felicitation" },
  { src: "/images/events/chse-felicitation-2024-DSC6840.webp", alt: "CHSE 2024 Student speeches", year: "2024", category: "felicitation" },

  // 2023 Events
  { src: "/images/events/oas-felicitation-PHOTO-01.webp", alt: "OAS Felicitation", year: "2023", category: "felicitation" },
  { src: "/images/events/oas-felicitation-WhatsApp-Image-2024-11-19-at-3.37.01-PM-(3).webp", alt: "OAS Felicitation Ceremony", year: "2023", category: "felicitation" },
  { src: "/images/events/oas-felicitation-WhatsApp-Image-2024-11-19-at-3.37.03-PM-(1).webp", alt: "OAS Achievers felicitation", year: "2023", category: "felicitation" },
  { src: "/images/events/oas-felicitation-WhatsApp-Image-2025-11-18-at-10.17.54-AM.webp", alt: "OAS Rank Holders", year: "2023", category: "felicitation" },

  // 2022 Events

  { src: "/images/campus/facilities/class-room-dsc-7920.webp", alt: "Campus Classroom 1", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/class-room-dsc-7929.webp", alt: "Campus Classroom 2", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/class-room-dsc-7931.webp", alt: "Campus Classroom 3", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/class-room-dsc-7971.webp", alt: "Campus Classroom 4", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/class-room-dsc-7974.webp", alt: "Campus Classroom 5", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/class-room-dsc-7975.webp", alt: "Campus Classroom 6", year: "2026", category: "campus-life" },
  { src: "/images/campus/CAMPUS-CLASSROOM(2).webp", alt: "Campus Classroom 2022", year: "2022", category: "campus-life" },
  { src: "/images/campus/CAMPUS-DSC-0005(1).webp", alt: "Campus Study Room 2022", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-1993.webp", alt: "Campus Life 2022", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2002.webp", alt: "2022 Academic Session", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2015.webp", alt: "2022 Student Activities", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2030.webp", alt: "2022 Lab Practicals", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2053.webp", alt: "Classroom group discussion", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2062.webp", alt: "Student Chemistry Lab session", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2146.webp", alt: "2022 Annual Meet", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2211.webp", alt: "2022 Classroom Lecture", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2319.webp", alt: "2022 Seminar Session", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2352.webp", alt: "Computer Lab Mock test", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2585.webp", alt: "Student physical education session", year: "2022", category: "sports" },
  { src: "/images/gallery/gallery-2022-dsc-2676.webp", alt: "Campus outdoor activities", year: "2022", category: "sports" },
  { src: "/images/gallery/gallery-2022-dsc-2708.webp", alt: "Student guidance seminar", year: "2022", category: "campus-life" },
  { src: "/images/gallery/gallery-2022-dsc-2711.webp", alt: "Student doubt clearing desk", year: "2022", category: "campus-life" },
  { src: "/images/campus/facilities/smart-class-room-dsc-7919.webp", alt: "Smart Classroom 1", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/smart-class-room-dsc-7928.webp", alt: "Smart Classroom 2", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/cctv-cctv-1.webp", alt: "Campus CCTV", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/canteen-dsc-7900.webp", alt: "Canteen Area", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/laboratory-it.webp", alt: "Computer Lab", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/laboratory-physics-1.webp", alt: "Physics Lab", year: "2026", category: "campus-life" },
  { src: "/images/campus/facilities/laboratory-chemistry-1.webp", alt: "Chemistry Lab", year: "2026", category: "campus-life" }
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
        <UniversalLightbox
        isOpen={selectedIdx !== null}
        onClose={() => setSelectedIdx(null)}
        image={
          selectedIdx !== null && filteredImages[selectedIdx]
            ? {
                src: filteredImages[selectedIdx].src,
                label: filteredImages[selectedIdx].alt,
                desc: `${filteredImages[selectedIdx].year} • ${categories.find((c) => c.id === filteredImages[selectedIdx].category)?.name}`,
              }
            : null
        }
        showNavigation={true}
        onNext={goNext}
        onPrev={goPrev}
      />
      </section>
    </>
  );
}
