"use client";

import Image from "next/image";
import { useState } from "react";

const showcaseCategories = [
  {
    id: "classrooms",
    name: "Classrooms",
    items: [
      { src: "/new/Gallery/2022/DSC_2211.webp", label: "Smart Classroom Lecture Session", desc: "Interactive digital panels making scientific lectures engaging." },
      { src: "/new/Gallery/2022/DSC_2002.webp", label: "Standard AC Classroom", desc: "Air-conditioned, spacious learning environments built for peak focus." }
    ]
  },
  {
    id: "study-exams",
    name: "Study & Exams",
    items: [
      { src: "/CAMPUS/DSC_0005(1).webp", label: "24/7 Silent Study Room", desc: "Quiet study zones designed for individual preparation and revision." },
      { src: "/CAMPUS/CLASSROOM(2).webp", label: "State-of-the-Art Exam Hall", desc: "Spacious exam halls simulating national CBT and written test environments." }
    ]
  },
  {
    id: "seminar",
    name: "Seminar Hall",
    items: [
      { src: "/new/FACILITIES/SEMINAR HALL.webp", label: "College Seminar Hall", desc: "Hosting expert talk sessions, motivational speeches, and orientations." }
    ]
  },
  {
    id: "doubt-clear",
    name: "Doubt Desk",
    items: [
      { src: "/new/Gallery/2022/DSC_2319.webp", label: "One-to-One Doubt Clearance Desk", desc: "Personalized faculty attention outside lectures to clear complex topics." }
    ]
  },
  {
    id: "banners",
    name: "Banners & Events",
    items: [
      { src: "/new/Glorious Achievments/KEY HIGHLIGHTS ADVT. - 2026.webp", label: "Key Highlights Board Advertisement", desc: "2026 academic milestones and achievements banner." },
      { src: "/new/Glorious Achievments/15x6 - etech.webp", label: "State CHSE Board Rank Holders", desc: "Celebrating our toppers on regional boards." }
    ]
  }
];

export default function EntranceGallery() {
  const [activeTab, setActiveTab] = useState("classrooms");
  const [selectedImg, setSelectedImg] = useState<{ src: string; label: string; desc: string } | null>(null);

  const activeCategory = showcaseCategories.find(cat => cat.id === activeTab) || showcaseCategories[0];

  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] relative z-10 w-full overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600" /> Infrastructure &amp; Environment <span className="w-8 h-[2px] bg-blue-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            Coaching Environment
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Take a look inside our smart classrooms, quiet study halls, exam halls, and doubt-clearance desks.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 relative z-30">
          {showcaseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === category.id
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Category Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer transition-all duration-500 hover:-translate-y-1"
              onClick={() => setSelectedImg(item)}
            >
              <div className="relative aspect-[3/2] w-full bg-slate-100 flex items-center justify-center">
                <Image src={item.src}
                  alt={item.label}
                  className="max-w-full max-h-full object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                 width={800} height={800} unoptimized={false} />
                <div className="absolute inset-0 bg-blue-900/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-slate-900 font-bold text-xl md:text-2xl leading-tight mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.label}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase block mt-4">
                  View Large Image &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedImg !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1526]/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="animate-scaleIn flex flex-col items-center justify-center max-w-[90vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={selectedImg.src}
              alt={selectedImg.label}
              className="max-h-[75vh] object-contain rounded-xl shadow-2xl bg-white p-2"
             width={800} height={800} unoptimized={false} />
            <h4 className="text-white text-lg font-bold mt-4 text-center">{selectedImg.label}</h4>
            <p className="text-slate-400 text-sm mt-1 text-center max-w-xl">{selectedImg.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
