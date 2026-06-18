"use client";

import Image from "next/image";
import { useState } from "react";
import UniversalLightbox from "../../components/UniversalLightbox";

const showcaseCategories = [
  {
    id: "classrooms",
    name: "Classrooms",
    items: [
      { src: "/images/campus/entrance-page-entrance-class-room-dsc-7885.webp", label: "Interactive Classroom", desc: "Highly focused academic environment." },
      { src: "/images/campus/entrance-page-entrance-class-room-dsc-7890.webp", label: "Entrance Preparation Layout", desc: "Spacious learning spaces designed for peak focus." },
      { src: "/images/campus/entrance-page-smart-class-room-dsc-7887.webp", label: "Smart Classroom Tech", desc: "Advanced digital panels for dynamic learning." },
      { src: "/images/campus/entrance-page-smart-class-room-dsc-7889.webp", label: "Modern Smart Class", desc: "Interactive digital panels making scientific lectures engaging." }
    ]
  },
  {
    id: "study-exams",
    name: "Study & Exams",
    items: [
      { src: "/images/results/misc/STUDY-ROOM.webp", label: "Dedicated Study Room", desc: "Focused study environment for continuous preparation." },
      { src: "/images/results/exam/DSC-7896.webp", label: "State-of-the-Art Exam Hall", desc: "Spacious exam halls simulating national test environments." },
      { src: "/images/results/exam/DSC-7897.webp", label: "CBT Practice", desc: "Rigorous testing environments to build exam temperment." }
    ]
  },
  {
    id: "seminar",
    name: "Seminar Hall",
    items: [
      { src: "/images/campus/facilities/seminar-hall.webp", label: "College Seminar Hall", desc: "Hosting expert talk sessions, motivational speeches, and orientations." }
    ]
  },
  {
    id: "doubt-clear",
    name: "Doubt Desk",
    items: [
      { src: "/images/results/misc/ONE-TO-ONE-DOUBT-CLEAR.webp", label: "One-to-One Doubt Clearance Desk", desc: "Personalized faculty attention outside lectures to clear complex topics." }
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

      <UniversalLightbox
        isOpen={selectedImg !== null}
        onClose={() => setSelectedImg(null)}
        image={selectedImg}
      />
    </section>
  );
}
