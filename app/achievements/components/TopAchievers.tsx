"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Achiever {
  name: string;
  marks: number;
  image: string;
  rollNo: string;
  isWomens: boolean;
}

const achievers: Achiever[] = [
  { name: "Parhta Sarathi Khilar", marks: 598, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/01 - PARHTA SARATHI KHILAR - 598.webp", rollNo: "ET26-001", isWomens: false },
  { name: "Sujit Kumar Rana", marks: 593, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/02 - SUJIT KUMAR RANA - 593.webp", rollNo: "ET26-002", isWomens: false },
  { name: "Swabhiman Biswal", marks: 593, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/03 - SWABHIMAN BISWAL - 593.webp", rollNo: "ET26-003", isWomens: false },
  { name: "Sumitra Pradhan", marks: 592, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/04 - SUMITRA PRADHAN - 592.webp", rollNo: "ET26-004", isWomens: true },
  { name: "Binayak Patra", marks: 590, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/05 - BINAYAK PATRA - 590.webp", rollNo: "ET26-005", isWomens: false },
  { name: "Smruti Ranjan Sahoo", marks: 589, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/06 - SMRUTI RANJAN SAHOO - 589.webp", rollNo: "ET26-006", isWomens: false },
  { name: "Supriya Samal", marks: 589, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/07 - SUPRIYA SAMAL - 589.webp", rollNo: "ET26-007", isWomens: true },
  { name: "Sourav Rout", marks: 585, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/08 - SOURAV ROUT - 585.webp", rollNo: "ET26-008", isWomens: false },
  { name: "Debaprasad Sahoo", marks: 584, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/09 - DEBAPRASAD SAHOO - 584.webp", rollNo: "ET26-009", isWomens: false },
  { name: "Sudarshan Sahoo", marks: 584, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/10 - SUDARSHAN SAHOO - 584.webp", rollNo: "ET26-010", isWomens: false },
  { name: "Jiten Behera", marks: 583, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/11 - JITEN BEHERA - 583.webp", rollNo: "ET26-011", isWomens: false },
  { name: "Prathamesh Sahoo", marks: 582, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/12 - PRATHAMESH SAHOO - 582.webp", rollNo: "ET26-012", isWomens: false },
  { name: "Smrutiprajna Tripathy", marks: 581, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/13 - SMRUTIPRAJNA TRIPATHY - 581.webp", rollNo: "ET26-013", isWomens: true },
  { name: "Jasman Sahoo", marks: 581, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/14 - JASMAN SAHOO - 581.webp", rollNo: "ET26-014", isWomens: false },
  { name: "Bimal Kumar Bai", marks: 580, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/15 - BIMAL KUMAR BAI - 580.webp", rollNo: "ET26-015", isWomens: false },
  { name: "Chiranjib Pal", marks: 579, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/16 - CHIRANJIB PAL - 579.webp", rollNo: "ET26-016", isWomens: false },
  { name: "Shubhrajit Muduli", marks: 579, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/17 - SHUBHRAJIT MUDULI - 579.webp", rollNo: "ET26-017", isWomens: false },
  { name: "Sambit Sahoo", marks: 579, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/18 - SAMBIT SAHOO - 579.webp", rollNo: "ET26-018", isWomens: false },
  { name: "Abhishek Behera", marks: 579, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/19 - ABHISHEK BEHERA - 579.webp", rollNo: "ET26-019", isWomens: false },
  { name: "Pragyan Priyadarshini Roul", marks: 579, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/20 - PRAGYAN PRIYADARSHINI ROUL - 579.webp", rollNo: "ET26-020", isWomens: true },
  { name: "Sama Sania Begum", marks: 578, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/21 - SAMA SANIA BEGUM - 578.webp", rollNo: "ET26-021", isWomens: true },
  { name: "Ananya Priyadarsini Sahoo", marks: 578, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/22 - ANANYA PRIYADARSINI SAHOO - 578.webp", rollNo: "ET26-022", isWomens: true },
  { name: "Sonali Priyadarsini Sahoo", marks: 578, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/23 - SONALI PRIYADARSINI SAHOO - 578.webp", rollNo: "ET26-023", isWomens: true },
  { name: "Suchismita Sahu", marks: 577, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/24 - SUCHISMITA SAHU - 577.webp", rollNo: "ET26-024", isWomens: true },
  { name: "Barsha Mohini Sahu", marks: 577, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/25 - BARSHA MOHINI SAHU - 577.webp", rollNo: "ET26-025", isWomens: true },
  { name: "Jagadish Pattanaik", marks: 576, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/26 - JAGADISH PATTANAIK - 576.webp", rollNo: "ET26-026", isWomens: false },
  { name: "Soumyajit Sahoo", marks: 576, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/27 - SOUMYAJIT SAHOO - 576.webp", rollNo: "ET26-027", isWomens: false },
  { name: "Pritiranjan Sahoo", marks: 576, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/28 - PRITIRANJAN SAHOO - 576.webp", rollNo: "ET26-028", isWomens: false },
  { name: "Barsha Subhadarshani Sahu", marks: 576, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/29 - BARSHA SUBHADARSHANI SAHU - 576.webp", rollNo: "ET26-029", isWomens: true },
  { name: "Swayam Subham Samal", marks: 576, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/30 - SWAYAM SUBHAM SAMAL - 576.webp", rollNo: "ET26-030", isWomens: false },
  { name: "Ankita Priyadarshini", marks: 575, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/31 - ANKITA PRIYADARSHINI - 575.webp", rollNo: "ET26-031", isWomens: true },
  { name: "Madhusmita Sathua Mohapatra", marks: 574, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/32 - MADHUSMITA SATHUA MOHAPATRA - 574.webp", rollNo: "ET26-032", isWomens: true },
  { name: "Jyotiranjan Sahu", marks: 574, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/33 - JYOTIRANJAN SAHU - 574.webp", rollNo: "ET26-033", isWomens: false },
  { name: "T.D Yashraj", marks: 573, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/34 - T.D YASHRAJ - 573.webp", rollNo: "ET26-034", isWomens: false },
  { name: "Omm Prakash Nayak", marks: 573, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/35 - OMM PRAKASH NAYAK - 573.webp", rollNo: "ET26-035", isWomens: false },
  { name: "Rohan Sahoo", marks: 572, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/36 - ROHAN SAHOO - 572.webp", rollNo: "ET26-036", isWomens: false },
  { name: "Satyanarayan Pani", marks: 572, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/37 - SATYANARAYAN PANI - 572.webp", rollNo: "ET26-037", isWomens: false },
  { name: "Rajashree Rajalaxmi Sahoo", marks: 572, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/38 - RAJASHREE RAJALAXMI SAHOO - 572.webp", rollNo: "ET26-038", isWomens: true },
  { name: "Tushar Ranjan Pradhan", marks: 572, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/39 - TUSHAR RANJAN PRADHAN - 572.webp", rollNo: "ET26-039", isWomens: false },
  { name: "Rakesh Rout", marks: 571, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/40 - RAKESH ROUT - 571.webp", rollNo: "ET26-040", isWomens: false },
  { name: "Lusi Sahu", marks: 570, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/41 - LUSI SAHU - 570.webp", rollNo: "ET26-041", isWomens: true },
  { name: "Deepsita Pradhan", marks: 570, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/42 - DEEPSITA PRADHAN - 570.webp", rollNo: "ET26-042", isWomens: true },
  { name: "Ratandeep Sahoo", marks: 570, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/43 - RATANDEEP SAHOO - 570.webp", rollNo: "ET26-043", isWomens: false },
  { name: "Brahmananda Sahu", marks: 570, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/44 - BRAHMANANDA SAHU - 570.webp", rollNo: "ET26-044", isWomens: false },
  { name: "Asutosh Amanta", marks: 570, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/45 - ASUTOSH AMANTA - 570.webp", rollNo: "ET26-045", isWomens: false },
  { name: "Sital Sahoo", marks: 569, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/46 - SITAL SAHOO - 569.webp", rollNo: "ET26-046", isWomens: true },
  { name: "Smrutiranjan Sahu", marks: 569, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/47 - SMRUTIRANJAN SAHU - 569.webp", rollNo: "ET26-047", isWomens: false },
  { name: "Lopamudra Sahoo", marks: 569, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/48 - LOPAMUDRA SAHOO - 569.webp", rollNo: "ET26-048", isWomens: true },
  { name: "Astha Adyasha Mohanty", marks: 569, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/49 - ASTHA ADYASHA MOHANTY - 569.webp", rollNo: "ET26-049", isWomens: true },
  { name: "Sthitipragyan Dash", marks: 568, image: "/RESULT/2026/90%25 ACHIEVERS PHOTOS/50 - STHITIPRAGYAN DASH - 568.webp", rollNo: "ET26-050", isWomens: false },
];

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function TopAchievers() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "coed" | "womens">("all");
  const [showAllCoed, setShowAllCoed] = useState(false);
  const [showAllWomens, setShowAllWomens] = useState(false);
  const [filterLetterCoed, setFilterLetterCoed] = useState<string | null>(null);
  const [filterLetterWomens, setFilterLetterWomens] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const coedTopper = achievers.find(a => !a.isWomens);
  const coedOthers = achievers.filter(a => !a.isWomens && a.name !== coedTopper?.name);

  const womensTopper = achievers.find(a => a.isWomens);
  const womensOthers = achievers.filter(a => a.isWomens && a.name !== womensTopper?.name);

  const renderSection = (
    title: string,
    topper: Achiever | undefined,
    others: Achiever[],
    isWomensSection: boolean,
    showAll: boolean,
    onToggleShowAll: () => void,
    filterLetter: string | null,
    setFilterLetter: (letter: string | null) => void
  ) => {
    if (!topper) return null;

    const filteredOthers = filterLetter
      ? others.filter((a) => a.name.toUpperCase().startsWith(filterLetter))
      : others;
      
    const uniqueLetters = Array.from(new Set(others.map((a) => a.name.charAt(0).toUpperCase()))).sort();

    // Find global rank for the topper
    const globalRank = achievers.findIndex((a) => a.name === topper.name) + 1;
    const sectionId = `toppers-${isWomensSection ? 'womens' : 'coed'}`;

    return (
      <div id={sectionId} className="mb-24 last:mb-0 scroll-mt-32">
        {/* Section Subheading */}
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-3 h-3 rounded-full ${isWomensSection ? "bg-rose-500" : "bg-blue-600"}`} />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Spotlight Rank 1 Card */}
          <div className="w-full lg:w-1/3 max-w-[380px] mx-auto lg:mx-0 lg:sticky lg:top-32">
            <div className="w-full relative bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e293b] rounded-3xl p-6 border-2 border-[#fbbf24]/50 shadow-2xl flex flex-col justify-between overflow-hidden group">
              {/* Internal Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbbf24]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 text-[10px] font-black tracking-widest uppercase rounded-full shadow-md flex items-center gap-1.5">
                    <span>👑</span> School Topper Rank 1
                  </span>
                  <span className="text-slate-400 font-mono text-[10px] font-bold">Global Rank {globalRank.toString().padStart(2, "0")}</span>
                </div>

                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-6 border-2 border-slate-800 bg-slate-800 shadow-inner">
                  <Image 
                    src={topper.image} 
                    alt={topper.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 25vw" 
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Subtle Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Score Badge inside Image */}
                  <div className="absolute bottom-4 left-4 bg-[#fbbf24] text-slate-950 font-black text-sm px-4 py-1.5 rounded-xl shadow-lg">
                    {topper.marks} Marks
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white font-serif tracking-tight mb-1 group-hover:text-[#fbbf24] transition-colors duration-300">
                    {topper.name}
                  </h4>
                  <p className="text-slate-400 font-mono text-xs uppercase tracking-wider mb-2">Roll No: {topper.rollNo}</p>
                </div>
              </div>

              <div className="pt-5 border-t border-slate-800 mt-6 flex justify-between items-center relative z-10">
                <span className="text-slate-500 text-[10px] font-bold tracking-widest uppercase">Academic Excellence</span>
                <span className="text-[#fbbf25] font-black text-xs font-mono">90%+ CLUB</span>
              </div>
            </div>
          </div>

          {/* Grid of Other Toppers */}
          <div className="w-full lg:w-2/3">
            {/* Alphabet Filter */}
            {uniqueLetters.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-6">
                <button
                  onClick={() => { setFilterLetter(null); if(showAll) onToggleShowAll(); }}
                  className={`px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors ${
                    !filterLetter
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-200"
                  }`}
                >
                  All
                </button>
                {ALPHABETS.map(letter => {
                  return (
                    <button
                      key={letter}
                      onClick={() => { setFilterLetter(letter); if(!showAll) onToggleShowAll(); }}
                      className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-[11px] md:text-xs font-bold transition-colors ${
                        filterLetter === letter
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-200"
                      }`}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            )}

            {filteredOthers.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center py-16 bg-slate-50 border border-slate-200 border-dashed rounded-2xl animate-fadeIn">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-slate-800 font-bold text-lg mb-1">No Achievers Found</h4>
                <p className="text-slate-500 font-medium text-sm text-center px-4">
                  There are no students whose name starts with "{filterLetter}" in this section.
                </p>
                <button 
                  onClick={() => { setFilterLetter(null); if(showAll) onToggleShowAll(); }}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Clear Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {(showAll ? filteredOthers : filteredOthers.slice(0, 11)).map((achiever, index) => {
                const globalRankIdx = achievers.findIndex((a) => a.name === achiever.name) + 1;
                const isExpandedItem = showAll && index > 10;
                const hideOnMobile = !showAll && index > 3;
                
                return (
                  <div 
                    key={achiever.rollNo} 
                    className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(30,58,138,0.1)] border border-slate-100 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 ${hideOnMobile ? 'hidden sm:block' : ''}`}
                    style={isExpandedItem ? { animation: `fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${(index - 11) * 40}ms`, opacity: 0 } : {}}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image 
                        src={achiever.image} 
                        alt={achiever.name} 
                        fill
                        sizes="(max-width: 768px) 100vw, 20vw"
                        loading="lazy"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 bg-slate-50"
                      />
                      
                      {/* Badge showing Rank */}
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-bold text-[9px] tracking-wider px-2.5 py-1 rounded-full shadow-sm z-20">
                        Rank {globalRankIdx.toString().padStart(2, "0")}
                      </div>

                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e45]/90 via-[#0f1e45]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500 z-10" />
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 z-20">
                        <div className="inline-block bg-[#fbbf24] text-slate-900 font-bold text-[10px] px-2.5 py-0.5 rounded-lg mb-2 shadow-sm">
                          {achiever.marks} Marks
                        </div>
                        <h4 className="text-white font-serif font-bold text-base leading-tight mb-0.5">
                          {achiever.name}
                        </h4>
                        <p className="text-blue-200/80 text-[9px] font-mono tracking-wide uppercase">
                          Roll: {achiever.rollNo}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            )}

            {/* View All / Less Button for this specific section */}
            {filteredOthers.length > 11 && (
              <div id={`toggle-${sectionId}`} className="flex justify-center mt-10 relative z-20 reveal">
                <button
                  onClick={() => {
                    if (showAll) {
                      onToggleShowAll(); // Collapse first
                      setTimeout(() => {
                        const el = document.getElementById(`toggle-${sectionId}`);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }, 50);
                    } else {
                      onToggleShowAll();
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {showAll ? "View Less" : `View All ${isWomensSection ? "Women's" : "Co-Ed"} Achievers`}
                  <svg className={`w-4 h-4 transition-transform ${showAll ? "group-hover:-translate-y-1" : "group-hover:translate-y-1"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showAll ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="toppers" className="w-full bg-gradient-to-b from-[#f8fafc] to-white py-20 lg:py-32 relative">
      {/* ── Rich Background Decorative Elements ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px]" />
      </div>

      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      <svg className="absolute top-20 left-10 w-8 h-8 text-[#fbbf24]/30 pointer-events-none" style={{ animation: 'floatSlow 6s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-40 right-20 w-12 h-12 text-blue-500/20 pointer-events-none" style={{ animation: 'floatFast 5s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>

      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 reveal">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-600" /> Academic Excellence <span className="w-8 h-[2px] bg-blue-600" />
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight mb-4">
            90%+ Achievers Club
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Honoring the brilliant minds who have consistently pushed the boundaries of academic excellence.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16 relative z-30">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "all"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            All Toppers
          </button>
          <button
            onClick={() => setActiveTab("coed")}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "coed"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            eTech Co-Ed Residential H.S.
          </button>
          <button
            onClick={() => setActiveTab("womens")}
            className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              activeTab === "womens"
                ? "bg-[#1e3a8a] text-white shadow-lg"
                : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            eTech Women's H.S.
          </button>
        </div>

        {/* Sections Grid Layout */}
        <div className={`transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          {(activeTab === "all" || activeTab === "coed") && 
            renderSection("eTech Residential Higher Secondary School Toppers (Co-Ed)", coedTopper, coedOthers, false, showAllCoed, () => setShowAllCoed(!showAllCoed), filterLetterCoed, setFilterLetterCoed)
          }
          {(activeTab === "all" || activeTab === "womens") && 
            renderSection("eTech Women's Higher Secondary School Toppers", womensTopper, womensOthers, true, showAllWomens, () => setShowAllWomens(!showAllWomens), filterLetterWomens, setFilterLetterWomens)
          }
        </div>
      </div>
    </div>
  );
}
