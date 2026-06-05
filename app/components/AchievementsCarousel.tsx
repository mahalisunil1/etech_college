"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const carouselImages = [
  "/new/Glorious Achievments/15x6 - etech.webp",
  "/new/Glorious Achievments/12x8 - etech difference.webp",
  "/new/Glorious Achievments/15x6 - etech copyA.webp",
  "/new/Glorious Achievments/16x6 - 1 pc - etech - Copy.webp",
  "/new/Glorious Achievments/KEY HIGHLIGHTS ADVT. - 2026.webp",
  "/new/Glorious Achievments/ADVT. HALF PAGE-D-02.webp",
  "/new/Glorious Achievments/Parthasarathi Khilar.webp",
];

export default function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 md:py-24 bg-transparent relative z-20 overflow-hidden">
      
      {/* ── Sharp Diagonal Split Background ── */}
      <div className="absolute top-0 left-0 w-full h-[65%] bg-slate-900 skew-y-[-5deg] origin-top-left z-0 border-b-[8px] border-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 reveal">
        
        {/* ── Section header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24 text-center lg:text-left">
          <div className="max-w-2xl relative z-10 pt-10 flex flex-col items-center lg:items-start">
            <span className="text-2xl sm:text-3xl lg:text-3xl font-serif text-blue-400 mb-2 block tracking-wide uppercase font-bold">Glorious</span>
            <div className="relative inline-block">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2 drop-shadow-md">
                Achievements
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[24px] text-blue-500" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-md pb-4 relative z-10 lg:pt-10 text-center lg:text-left mt-6 lg:mt-0">
            Inspiring journeys of dedication, discipline, and distinction that set the benchmark for future generations.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full mx-auto group flex flex-col items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Inner Track (The Image) */}
          <div className="w-full overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselImages.map((img, idx) => (
                <div key={idx} className="w-full min-w-full aspect-[16/9] md:aspect-[21/9] relative flex items-center justify-center bg-transparent">
                  <Image src={img} 
                    alt={`Achievement ${idx + 1}`} 
                    className="w-full h-full object-contain"
                   width={800} height={800} unoptimized={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Below the Image) */}
          <div className="flex items-center justify-center gap-6 mt-10">
            
            {/* Prev Button */}
            <button 
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all duration-300"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3 mx-4">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex 
                      ? "w-4 h-2 bg-blue-600 rounded-full" 
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-slate-900 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all duration-300"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
