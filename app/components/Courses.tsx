"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const dotColors = ['bg-blue-400', 'bg-emerald-400', 'bg-rose-400'];

export default function Courses() {
  const [activeIdx, setActiveIdx] = useState(0);
  const goToPrev = () => setActiveIdx((idx) => Math.max(0, idx - 1));
  const goToNext = () => setActiveIdx((idx) => Math.min(dotColors.length - 1, idx + 1));

  /* ── Card content ── */
  const cards = (mobile: boolean) => (
    <>
      {/* CHSE */}
      <Link
        href="/courses#chse"
        className={`group relative rounded-[2rem] p-[1px] bg-gradient-to-br from-blue-500/50 via-slate-800 to-indigo-600/50 overflow-hidden min-h-[300px]${mobile ? ' shrink-0 w-full min-h-[270px]' : ''}`}
      >
        <div className="absolute inset-[1px] bg-slate-950 rounded-[calc(2rem-1px)] z-0 overflow-hidden">
          <div className="absolute -bottom-10 -right-4 text-[10rem] font-black text-white/[0.02] leading-none pointer-events-none -rotate-6 select-none">CHSE</div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">CHSE</h3>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.315 48.315 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>
            </div>
          </div>
          <div className="mt-8 relative flex flex-col h-full">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2 border-l-2 border-blue-400 pl-2 bg-slate-950/50 inline-block pr-2 rounded">State Board</p>
              <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4 line-clamp-2">A meticulously crafted curriculum providing intensive coaching and dedicated mentorship to ensure outstanding state board results.</p>
              
              <div className="mb-5">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Subjects Covered</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Physics", "Chemistry", "Maths", "Biology", "IT", "Hindi", "Sanskrit", "Electronics", "Alt. English"].map(sub => (
                    <span key={sub} className="text-[9px] uppercase tracking-wider bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">{sub}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto text-white font-bold uppercase tracking-widest text-[10px] inline-flex items-center gap-2 group-hover:text-blue-400 transition-colors">Explore <span className="text-base">&rarr;</span></div>
          </div>
        </div>
      </Link>

      {/* CBSE */}
      <Link
        href="/courses#cbse"
        className={`group relative rounded-[2rem] p-[1px] bg-gradient-to-br from-slate-800 to-slate-900 hover:from-emerald-500/40 hover:to-teal-600/40 transition-colors duration-500 overflow-hidden min-h-[360px]${mobile ? ' shrink-0 w-full min-h-[340px]' : ''}`}
      >
        <div className="absolute inset-[1px] bg-slate-900 rounded-[calc(2rem-1px)] z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#334155 0,#334155 1px,transparent 1px,transparent 12px)' }} />
          <div className="absolute -top-12 -right-12 w-32 h-32 border-[0.5px] border-slate-700/50 rounded-full" />
        </div>
        <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">CBSE</h3>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
            </div>
          </div>
          <div className="mt-8 relative flex flex-col h-full">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 border-l-2 border-emerald-400 pl-2 bg-slate-900/50 inline-block pr-2 rounded">Central Board</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-200 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-500/20">Only Science Stream</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#fbbf24] bg-yellow-900/40 px-2 py-0.5 rounded border border-yellow-500/20">100% Result</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4 line-clamp-2">Aligned strictly with central guidelines, building a rock-solid foundation through modern pedagogy.</p>
              
              <div className="mb-5">
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2">Subjects Covered</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Physics", "Chemistry", "Maths", "Biology", "English", "Comp. Science", "Physical Ed.", "Odia"].map(sub => (
                    <span key={sub} className="text-[9px] uppercase tracking-wider bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20">{sub}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto text-white font-bold uppercase tracking-widest text-[10px] inline-flex items-center gap-2 group-hover:text-emerald-400 transition-colors">Explore <span className="text-base">&rarr;</span></div>
          </div>
        </div>
      </Link>

      {/* NEET */}
      <Link
        href="/courses#neet"
        className={`group relative rounded-[2rem] p-[1px] bg-gradient-to-br from-slate-800 to-slate-900 hover:from-rose-500/40 hover:to-red-600/40 transition-colors duration-500 overflow-hidden min-h-[300px]${mobile ? ' shrink-0 w-full min-h-[270px]' : ''}`}
      >
        <div className="absolute inset-[1px] bg-slate-900 rounded-[calc(2rem-1px)] z-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '16px 16px' }} />
          <div className="absolute top-6 right-6 text-slate-700/50 font-mono text-xs tracking-widest">+ + +</div>
          <div className="absolute bottom-6 right-6 text-slate-700/50 font-mono text-xs tracking-widest">+ + +</div>
        </div>
        <div className="relative z-20 h-full p-6 md:p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">NEET</h3>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-slate-400 group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5V6.94a2.25 2.25 0 011.53-2.136l1.5-.5a2.25 2.25 0 011.94.004l.115.06a2.25 2.25 0 001.94.004l.115-.06a2.25 2.25 0 011.94-.004l.115.06a2.25 2.25 0 001.94.004l.115-.06a2.25 2.25 0 011.94-.004l1.5.5A2.25 2.25 0 0120.25 6.94v3.56M12 10.5v10.5m0 0l-1.5-1.5m1.5 1.5l1.5-1.5" /></svg>
            </div>
          </div>
          <div className="mt-8 relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-400 mb-2 border-l-2 border-rose-400 pl-2 bg-slate-900/50 inline-block pr-2 rounded">Medical Prep</p>
            <p className="text-slate-400 text-sm leading-relaxed font-medium mb-5">Our flagship intensive training featuring exhaustive mock tests and specialized study materials.</p>
            <div className="text-white font-bold uppercase tracking-widest text-[10px] inline-flex items-center gap-2 group-hover:text-rose-400">Explore <span className="text-base">&rarr;</span></div>
          </div>
        </div>
      </Link>
    </>
  );

  return (
    <>
      {/* ── MOBILE: Native horizontal snap scroll ── */}
      <div className="md:hidden bg-slate-950 py-14 relative overflow-hidden">
        {/* BG decor */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-7">
          {/* Header */}
          <div className="text-center px-5">
            <span className="text-xl font-serif text-slate-400 block mb-1">Our</span>
            <div className="relative inline-block">
              <h2 className="text-[2.75rem] font-serif font-bold text-white tracking-tighter leading-[0.85]">Courses</h2>
              <svg className="absolute -bottom-3 left-0 w-[105%] h-[18px] text-blue-500" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Slider */}
          <div className="relative px-5">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `translate3d(-${activeIdx * 100}%, 0, 0)` }}
              >
                {cards(true)}
              </div>
            </div>

            <button
              type="button"
              onClick={goToPrev}
              disabled={activeIdx === 0}
              aria-label="Previous course"
              className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/85 text-white shadow-lg backdrop-blur transition disabled:cursor-not-allowed disabled:opacity-35"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNext}
              disabled={activeIdx === dotColors.length - 1}
              aria-label="Next course"
              className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/85 text-white shadow-lg backdrop-blur transition disabled:cursor-not-allowed disabled:opacity-35"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2">
            {dotColors.map((c, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setActiveIdx(i)}
                aria-label={`Show course ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${c} ${i === activeIdx ? 'w-5 h-2 opacity-100' : 'w-2 h-2 opacity-30'}`}
              />
            ))}
          </div>

          {/* Scroll cue */}
          <p className="text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest mt-[-10px]">Use arrows to explore</p>
        </div>
      </div>

      {/* ── DESKTOP: normal 3-col grid ── */}
      <section className="hidden md:block py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-row justify-between items-end mb-16 md:mb-24 gap-8 relative">
            <div className="max-w-2xl flex flex-col items-start">
              <span className="text-3xl lg:text-3xl font-serif text-slate-400 mb-2 block">Our</span>
              <div className="relative inline-block">
                <h2 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[6rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2">Courses</h2>
                <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-500" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                  <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm pb-4 text-right">
              Premium curriculums crafted for elite performance in board and competitive entrance examinations.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {cards(false)}
          </div>
        </div>
      </section>
    </>
  );
}
