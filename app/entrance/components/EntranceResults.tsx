"use client";

import { useState } from "react";
import Image from "next/image";
import { entranceData } from "./EntranceResultsData";
import UniversalLightbox from "../../components/UniversalLightbox";

const results = [
  {
    year: "2025",
    neetSelections: "55+",
    jeeQualifiers: "38+",
    topAIR: "Top NEET: 599 (Monalisha Sahoo)",
    highlight: "Top JEE: 97.79% (Chandan Sahoo)"
  },
  {
    year: "2024",
    neetSelections: "48+",
    jeeQualifiers: "32+",
    topAIR: "Top NEET: 680 (Animesh Shee)",
    highlight: "Top JEE: 99.1% (Swadhin Kumar Kar)"
  },
  {
    year: "2023",
    neetSelections: "42+",
    jeeQualifiers: "28+",
    topAIR: "Top NEET: 657 (Subham Dash)",
    highlight: "Consistent State Excellence"
  }
];

export default function EntranceResults() {
  const [activeExam, setActiveExam] = useState<"NEET" | "JEE">("NEET");
  const [activeYear, setActiveYear] = useState<"2025" | "2024" | "2023">("2025");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Get active images based on selected tabs
  const activeImages: string[] = entranceData.results[activeExam]?.[activeYear] || [];

  return (
    <section className="py-20 md:py-28 bg-transparent relative z-10 w-full overflow-hidden">
      
      {/* ── Background Patterns ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-[90vw] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-slate-900" />
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Proven Track Record</span>
            </div>
            <h2 className="text-[3rem] sm:text-[4rem] font-serif font-black text-slate-900 tracking-tighter leading-[0.9]">
              Consistency in <span className="text-[#1E3A8A]">Excellence</span>
            </h2>
            {/* Double Blue Swoosh Underline */}
            <div className="relative mt-2">
              <svg className="absolute top-0 left-0 w-full max-w-sm h-[20px] text-blue-600/80" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
            Our results over the last three years stand as a testament to our dedicated faculty, rigorous curriculum, and focused study environment.
          </p>
        </div>

        {/* ── Custom Animations ── */}
        <style>{`
          @keyframes gradientPan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            animation: gradientPan 6s ease infinite;
          }
        `}</style>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {results.map((res, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[340px] relative overflow-hidden group ${idx === 1 ? 'md:-translate-y-6 hover:-translate-y-9' : ''}`}
            >
              
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-400/[0.1] to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-slate-50 text-[#1E3A8A] text-xs font-black tracking-widest uppercase rounded-full mb-10 border border-slate-200 shadow-sm group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                  {res.year}
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors duration-300">NEET Selections</div>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-blue-500 to-[#1E3A8A] bg-[length:200%_auto] animate-gradient-slow pb-2 leading-none">
                      {res.neetSelections}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors duration-300">JEE Qualifiers</div>
                    <div className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
                      {res.jeeQualifiers}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100 space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-shadow duration-300" />
                  <span className="font-semibold text-slate-900 tracking-wider">{res.topAIR}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-shadow duration-300" />
                  <span className="font-semibold text-slate-900 tracking-wider">{res.highlight}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Results Gallery */}
        <div className="mt-16 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Explore Our Star Achievers</h3>
            
            {/* Sub Tabs for Results */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8 animate-fadeIn">
              <div className="flex bg-slate-100 p-1 rounded-full">
                {(["NEET", "JEE"] as const).map(exam => (
                  <button
                    key={exam}
                    onClick={() => setActiveExam(exam)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      activeExam === exam ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {exam}
                  </button>
                ))}
              </div>
              
              <div className="flex bg-slate-100 p-1 rounded-full">
                {(["2025", "2024", "2023"] as const).map(year => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      activeYear === year ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {activeImages.length > 0 ? (
              activeImages.map((src, idx) => {
                let name = "Student";
                let score = "";
                let rank = "";
                
                const filename = src.split('/').pop()?.replace('.webp', '') || '';
                const parts = filename.split(/\s*[-_]\s*/);
                if (parts.length >= 3) {
                  rank = parts[0];
                  name = parts[1];
                  score = parts.slice(2).join(" ");
                } else {
                  name = filename;
                }

                return (
                  <div 
                    key={idx} 
                    className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                    onClick={() => setSelectedImg(`/${src}`)}
                  >
                    <div className="relative aspect-[4/5] w-full bg-slate-50 overflow-hidden">
                      <Image 
                        src={`/${src}`} 
                        alt={name} 
                        fill 
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                        unoptimized={false} 
                      />
                      <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300" />
                      
                      {/* Hover Overlay Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Render Name/Score only */}
                    <div className="p-5 flex flex-col items-center text-center bg-white border-t border-slate-50 relative z-10">
                      <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-3 line-clamp-1 w-full group-hover:text-blue-600 transition-colors">{name}</h4>
                      <div className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-widest border-t border-dashed border-slate-200 pt-3 mt-auto">
                        <span className="text-slate-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>Rank {rank}</span>
                        <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-md">{score} {activeExam === "JEE" ? "%ile" : ""}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center text-slate-500 font-medium bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                No images available for this selection yet.
              </div>
            )}
          </div>
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
