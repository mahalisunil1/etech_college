"use client";

import Image from "next/image";
import { useState } from 'react';

export default function VirtualTour() {
  const [playing, setPlaying] = useState(false);

  const stats = [
    { value: "50+", label: "Acre Campus" },
    { value: "12", label: "Hi-Tech Labs" },
    { value: "24/7", label: "Digital Library" },
    { value: "1000+", label: "Students" },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-[#0d1526] relative overflow-hidden">

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 reveal text-left">
          <div className="max-w-2xl">
            <span className="text-2xl lg:text-3xl font-serif text-blue-200 mb-2 block">Virtual</span>
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
        </div>

        {/* Video */}
        <div 
          className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-[0_30px_80px_rgba(0,0,0,0.5)] reveal group"
        >
          {!playing ? (
            <>
              {/* Thumbnail */}
              <Image src="/landing/hero-bg/hero-bg.webp"
                alt="Campus Tour Thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
               width={800} height={800} unoptimized={false} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/80 via-transparent to-transparent" />

              {/* Play Button */}
              <button
                onClick={() => setPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 group/btn"
                aria-label="Play campus tour"
              >
                <div className="w-18 h-18 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white/20 group-hover/btn:scale-110 shadow-2xl">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span className="text-white/70 text-sm font-medium tracking-wide">Watch Tour</span>
              </button>
            </>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/1YUMBhRI3zI?autoplay=1&mute=0&rel=0&modestbranding=1"
              title="Campus Tour"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 mt-4 rounded-xl overflow-hidden reveal">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0d1526] px-6 py-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

