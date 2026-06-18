"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const facilities = [
  {
    num: "01",
    title: "Hostel Facilities",
    subtitle: "Residential Life",
    desc: "Fully-furnished, safe, and hygienic residential wings for boys and girls with 24×7 security, nutritious meals, and RO purified water — a true home away from home.",
    tags: ["24×7 Security", "Balanced Nutrition", "RO Purified Water"],
    img: "/images/campus/facilities/hostel-girls-hostel-1.webp",
  },
  {
    num: "02",
    title: "Seminar Hall",
    subtitle: "Events & Discourse",
    desc: "A 300-seat, air-conditioned hall hosting expert lectures, cultural events, and student seminars.",
    tags: ["Expert Sessions", "Cultural Events"],
    img: "/images/campus/facilities/seminar-hall.webp",
  },
  {
    num: "03",
    title: "Digital Classrooms",
    subtitle: "Digital Literacy",
    desc: "High-speed workstations and digital classrooms with broadband internet, developing every student's digital competency.",
    tags: ["Smart Classes", "Broadband Access"],
    img: "/images/campus/CAMPUS-CLASSROOM(2).webp",
  },
];



export default function Features() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % facilities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full py-12 md:py-16 bg-transparent relative z-20 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-50/30 transform skew-x-12 -translate-x-1/2 pointer-events-none" />

      <style>{`
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">

        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24 text-center lg:text-left reveal">
          <div className="max-w-2xl flex flex-col items-center lg:items-start">
            <span className="text-3xl sm:text-4xl lg:text-3xl font-serif text-slate-700 mb-2 block">World-Class</span>
            <div className="relative inline-block">
              <h2 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[6rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85] mb-2">
                Facilities
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-600" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm pb-4 text-center lg:text-left mt-6 lg:mt-0">
            Built to support every dimension of student life — academic, residential, physical, and personal development.
          </p>
        </div>

        {/* ── Interactive Image Canvas ── */}
        <div 
          className="flex flex-col lg:flex-row items-stretch min-h-[400px] mb-12 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Left: Massive Image Canvas */}
          <div className="w-full lg:w-1/2 relative bg-slate-100 order-1 lg:order-1 min-h-[300px] lg:min-h-full group">
            {facilities.map((fac, idx) => (
              <Image key={idx}
                src={fac.img}
                alt={fac.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  idx === activeIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
               width={800} height={800} unoptimized={false} />
            ))}
            <div className="absolute inset-0 bg-blue-900/10 transition-colors duration-500 group-hover:bg-transparent" />
            
            {/* Image Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
               <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-lg shadow-lg transform transition-transform duration-500 translate-y-0">
                 <span className="text-blue-700 font-bold tracking-widest text-[9px] uppercase block mb-1">
                   {facilities[activeIdx].subtitle}
                 </span>
                 <h4 className="text-lg font-serif font-bold text-slate-900">
                   {facilities[activeIdx].title}
                 </h4>
               </div>
            </div>
          </div>

          {/* Right: Interactive Menu */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-2 p-6 lg:p-12 bg-slate-50/50">
            <div className="flex flex-col gap-1">
              {facilities.map((fac, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div 
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`relative py-6 cursor-pointer transition-all duration-500 overflow-hidden border-b border-slate-200 last:border-0 group`}
                  >
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`text-lg font-bold font-serif transition-colors duration-300 mt-1 ${isActive ? "text-blue-700" : "text-slate-300"}`}>
                        {fac.num}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-2xl font-serif font-bold transition-colors duration-300 mb-1 ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                            {fac.title}
                          </h3>
                          <div className={`transition-transform duration-300 ${isActive ? "rotate-180 text-blue-600" : "text-slate-300"}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                        
                        {/* Expandable Description */}
                        <div 
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-slate-600 text-sm leading-relaxed mb-2 pt-1 min-h-[60px]">
                              {fac.desc}
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>
                    
                    {/* Progress Bar (Only visible when active) */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-200 z-50">
                        <div 
                          className="h-full bg-blue-600"
                          style={{
                            animation: "progress-fill 4s linear forwards",
                            animationPlayState: isHovered ? 'paused' : 'running'
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* View All Button */}
            <div className="mt-6 ml-6 reveal">
              <Link href="/facilities" className="inline-flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wider text-xs hover:gap-3 transition-all duration-300">
                View All Facilities
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

          </div>
        </div>



      </div>
    </section>
  );
}
