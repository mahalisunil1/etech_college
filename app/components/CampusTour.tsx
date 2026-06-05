"use client";

import { useState } from "react";

const stats = [
  { value: "50+", label: "Acre Campus" },
  { value: "12",  label: "Hi-Tech Labs" },
  { value: "24/7", label: "Digital Library" },
  { value: "1000+", label: "Students" },
];

const notices = [
  {
    id: "admissions",
    tabName: "Admissions",
    badge: "Active",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    title: "+2 Science Admissions Open (Session 2026-27)",
    date: "June 05, 2026",
    desc: "Admissions are now open for both CHSE (State Board) and CBSE (Central Board) streams. Hostels and integrated coaching registrations are active. Limited seats are allocated on a merit basis.",
    linkText: "Enquire Online Now",
    linkUrl: "/contact"
  },
  {
    id: "summer",
    tabName: "Summer Course",
    badge: "Starting Soon",
    badgeColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    title: "Summer Bridge Course Classes Start on June 20, 2026",
    date: "Starts June 20",
    desc: "A special prep curriculum designed for students transitioning from 10th to +2 Science. Build a solid conceptual foundation in Physics, Chemistry, Mathematics, and Biology.",
    linkText: "Register for Bridge Course",
    linkUrl: "/contact"
  },
  {
    id: "entrance",
    tabName: "Entrance Exam",
    badge: "Notice",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    title: "JEE & NEET Integrated Batch Registrations Closing Soon",
    date: "Urgent",
    desc: "Integrated entrance training batches for NEET/JEE competitive exams start alongside board preparation. Register at the administrative block to secure your slot.",
    linkText: "Entrance Batches Details",
    linkUrl: "/entrance"
  }
];

export default function CampusTour() {
  const [activeTab, setActiveTab] = useState("admissions");

  const currentNotice = notices.find(n => n.id === activeTab) || notices[0];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#0d1526] relative z-20 overflow-hidden">
      
      {/* ── Chessboard Background Pattern ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'conic-gradient(white 90deg, transparent 90deg 180deg, white 180deg 270deg, transparent 270deg)', backgroundSize: '256px 256px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1526] via-transparent to-[#0d1526] pointer-events-none" />

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8 reveal text-left">
          <div className="max-w-2xl">
            <span className="text-2xl lg:text-3xl font-serif text-blue-200 mb-2 block">Campus</span>
            <div className="relative inline-block self-start">
              <h2 className="text-[4rem] lg:text-[6rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2">
                Tour
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-400" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm pb-4 sm:text-right">
            Take a drone journey through our lush green campus — where students live, learn, and grow under premium facilities.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.6)] border border-white/10 reveal">
          <video
            className="w-full h-full object-cover"
            src="/new/e-Tech Campus - Drone View.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mt-8 reveal">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-5 md:py-6 text-center rounded-2xl shadow-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 group flex flex-col justify-center items-center">
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 mb-1 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">{s.value}</div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-widest font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Admissions & News Bulletin (DRAG CHANGE REQUEST REQUIREMENT) ── */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">Live Campus Bulletin</h3>
            </div>

            {/* Tab Controls */}
            <div className="flex flex-wrap gap-2">
              {notices.map((notice) => (
                <button
                  key={notice.id}
                  onClick={() => setActiveTab(notice.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeTab === notice.id
                      ? "bg-white text-[#0d1526] border-white"
                      : "bg-transparent text-slate-400 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {notice.tabName}
                </button>
              ))}
            </div>
          </div>

          {/* Active Notice Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${currentNotice.badgeColor}`}>
                  {currentNotice.badge}
                </span>
                <span className="text-slate-500 text-xs font-medium font-mono">{currentNotice.date}</span>
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight leading-snug">
                {currentNotice.title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                {currentNotice.desc}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex items-center lg:justify-end h-full">
              <a
                href={currentNotice.linkUrl}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                {currentNotice.linkText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
