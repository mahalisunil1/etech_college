"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const allToppers = [
  { name: "ASHISH KUMAR SAHOO", rank: "AIR 12", score: "715/720", exam: "NEET", img: "/RESULT/2025/E-TECH/01 - ASHISH KUMAR SAHOO - 584.webp" },
  { name: "S.RAMESWAREE NANDA", rank: "AIR 45", score: "710/720", exam: "NEET", img: "/RESULT/2025/E-TECH/02 - S.RAMESWAREE NANDA - 580.webp" },
  { name: "DARSHAN ROUT", rank: "AIR 89", score: "705/720", exam: "NEET", img: "/RESULT/2025/E-TECH/03 - DARSHAN ROUT - 575.webp" },
  { name: "AMBIKA PRASAD DASH", rank: "AIR 34", score: "292/300", exam: "JEE", img: "/RESULT/2025/E-TECH/04 - AMBIKA PRASAD DASH - 573.webp" },
  { name: "ITISHREE MAJHI", rank: "AIR 89", score: "285/300", exam: "JEE", img: "/RESULT/2025/E-TECH/05 - ITISHREE MAJHI - 573.webp" },
  { name: "SWAYAN PRAVA PANDA", rank: "AIR 145", score: "278/300", exam: "JEE", img: "/RESULT/2025/E-TECH/06 - SWAYAN PRAVA PANDA - 571.webp" },
  { name: "TEJASWINI PRIYADARSINI", rank: "AIR 156", score: "700/720", exam: "NEET", img: "/RESULT/2025/E-TECH/07 - TEJASWINI PRIYADARSINI - 570.webp" },
  { name: "SUBHASMITA SAHOO", rank: "AIR 234", score: "695/720", exam: "NEET", img: "/RESULT/2025/E-TECH/08 - SUBHASMITA SAHOO - 570.webp" },
  { name: "SATYAJIT SAHOO", rank: "AIR 234", score: "272/300", exam: "JEE", img: "/RESULT/2025/E-TECH/09 - SATYAJIT SAHOO - 569.webp" },
  { name: "RAHUL SAHOO", rank: "AIR 312", score: "265/300", exam: "JEE", img: "/RESULT/2025/E-TECH/10 - RAHUL SAHOO - 568.webp" },
  { name: "UMAKANTA SAHOO", rank: "AIR 312", score: "690/720", exam: "NEET", img: "/RESULT/2025/E-TECH/11 - UMAKANTA SAHOO - 568.webp" },
  { name: "PRIYAM KUMAR MALLIK", rank: "AIR 456", score: "258/300", exam: "JEE", img: "/RESULT/2025/E-TECH/12 - PRIYAM KUMAR MALLIK - 566.webp" },
];

export default function EntranceToppers({ transparentBg = false, theme = "light", limit, showViewAll = false }: { transparentBg?: boolean, theme?: "light" | "dark", limit?: number, showViewAll?: boolean }) {
  const displayedToppers = limit ? allToppers.slice(0, limit) : allToppers;

  return (
    <section className={`w-full py-20 md:py-32 relative z-20 overflow-hidden ${transparentBg ? 'bg-transparent' : theme === 'dark' ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-y border-slate-200'}`}>
      
      {/* ── Section Background Patterns & Glows ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-blue-400/[0.03] rounded-full blur-[120px] pointer-events-none -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1E3A8A]/[0.04] rounded-full blur-[100px] pointer-events-none translate-x-1/3" />

      {/* ── Floating Animated Elements ── */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
      `}</style>
      <svg className="absolute top-20 right-16 w-12 h-12 text-blue-500/10 pointer-events-none z-0" style={{ animation: 'floatSlow 6s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-32 left-12 w-8 h-8 text-indigo-500/10 pointer-events-none z-0" style={{ animation: 'floatFast 4s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>

      <div className="w-[90vw] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="flex flex-col items-center gap-3 mb-6">
            <span className={`text-[11px] font-black tracking-[0.3em] uppercase ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>NEET & JEE Excellence</span>
          </div>
          <div className="relative inline-block mb-8 group">
            {/* Header Ambient Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 via-cyan-400/10 to-blue-600/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
            <h2 className={`relative text-[3.25rem] sm:text-[4.5rem] lg:text-[5rem] font-serif font-black tracking-tighter leading-[0.9] ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Entrance <span className={theme === 'dark' ? 'text-blue-400' : 'text-[#1E3A8A]'}>Toppers</span>
            </h2>
            {/* Double Blue Swoosh Underline */}
            <svg className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[110%] h-[28px] ${theme === 'dark' ? 'text-blue-500' : 'text-blue-600/80'}`} viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
              <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <p className={`text-sm md:text-base leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            A visual legacy of our students who have successfully cracked the nation's toughest entrance examinations.
          </p>
        </div>



        {/* ── Keyframe Animations ── */}
        <style>{`
          @keyframes smoothFade {
            0% { opacity: 0; transform: translateY(10px) scale(0.98); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>

        {/* ── Grid of Images ── */}
        <div className={`grid grid-cols-2 gap-4 md:gap-6 min-h-[400px] ${limit === 3 ? 'md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto' : 'md:grid-cols-3 lg:grid-cols-4'}`} style={{ animation: 'smoothFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}>
          {displayedToppers.map((student, idx) => (
            <div 
              key={idx} 
              className={`group flex flex-col relative rounded-2xl overflow-hidden border hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${theme === 'dark' ? 'bg-slate-800 border-slate-700 hover:border-blue-500/50 shadow-lg hover:shadow-2xl hover:shadow-blue-900/20' : 'bg-white border-slate-200 hover:border-blue-400/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10'}`}
            >
              {/* Image Section */}
              <div className="relative w-full h-[260px] md:h-[280px] overflow-hidden bg-slate-100">
                <Image 
                  src={student.img} 
                  alt={student.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-500 mix-blend-overlay" />
                
                {/* Floating Score Badge inside Image */}
                <div className={`absolute top-4 right-4 text-[10px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase border shadow-sm transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900/80 text-blue-400 border-slate-700 backdrop-blur-md' : 'bg-white/90 text-blue-700 border-white/50 backdrop-blur-md'}`}>
                  {student.score}
                </div>
                
                {/* Floating Exam Badge inside Image Bottom Left */}
                <div className={`absolute bottom-0 left-0 text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-tr-xl ${theme === 'dark' ? 'bg-slate-800 text-blue-400' : 'bg-white text-blue-600'}`}>
                  {student.exam}
                </div>
              </div>
              
              {/* Text Data Section */}
              <div className={`flex flex-col p-5 md:p-6 flex-1 ${theme === 'dark' ? 'bg-slate-800' : 'bg-white'}`}>
                <h3 className={`font-serif font-bold text-xl leading-tight mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {student.name}
                </h3>
                
                {/* Rank Display */}
                <div className={`flex items-center gap-3 mt-auto pt-4 border-t border-dashed ${theme === 'dark' ? 'border-slate-700' : 'border-slate-200'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className={`font-bold text-sm tracking-widest uppercase ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{student.rank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Button ── */}
        {showViewAll && (
          <div className="flex justify-center mt-12 reveal">
            <Link 
              href="/entrance" 
              className={`inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:gap-3 transition-all duration-300 ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
            >
              View All Achievers
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
