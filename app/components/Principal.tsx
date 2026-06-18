"use client";
import Image from "next/image";

export default function Principal() {
  return (
    <section className="w-full pt-12 md:pt-20 pb-0 lg:pt-32 lg:pb-0 bg-[#ccd9ff] relative overflow-hidden">

      {/* ── Premium Background: Dynamic Abstract Waves (Top & Bottom) ── */}
      <style>{`
        @keyframes waveShift {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-15%) scaleY(1.5); }
          100% { transform: translateX(-30%) scaleY(1); }
        }
      `}</style>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
         {/* Subtle Dot Pattern */}
         <div 
            className="absolute inset-0 opacity-[0.25]" 
            style={{ 
              backgroundImage: 'radial-gradient(#3B82F6 1.5px, transparent 1.5px)', 
              backgroundSize: '28px 28px' 
            }} 
         />
         
         {/* Top Waves (Dynamic & Full Width Guaranteed) */}
         <svg className="absolute top-0 left-0 w-[300%] h-[250px]" preserveAspectRatio="none" viewBox="0 0 1200 120" style={{ animation: 'waveShift 25s ease-in-out infinite alternate' }}>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#60A5FA" opacity=".15"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3B82F6" opacity=".15"></path>
         </svg>
         
         {/* Bottom Waves */}
         <svg className="absolute bottom-[-10%] left-[-50%] w-[300%] h-[350px] rotate-180" preserveAspectRatio="none" viewBox="0 0 1200 120" style={{ animation: 'waveShift 30s ease-in-out infinite alternate-reverse' }}>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#2563EB" opacity=".1"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#1D4ED8" opacity=".1"></path>
         </svg>
      </div>
      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-20 reveal">

        {/* ── Section Header (Dynamic Editorial Layout) ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-8 lg:mb-12">
           
           {/* Left Header: Massive & Stacked */}
           <div className="w-full lg:w-[55%] flex flex-col items-center md:items-start justify-start pt-4 text-center md:text-left">
              <span className="text-3xl sm:text-4xl lg:text-4xl font-serif text-slate-700 mb-2">Our</span>
              <div className="relative inline-block">
                <h2 className="text-[3.25rem] sm:text-[4rem] lg:text-[7.5rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85]">
                  Principal
                </h2>
                {/* Double Blue Swoosh Underline */}
                <svg className="absolute -bottom-8 left-0 w-[105%] h-[32px] text-blue-600" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                   <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                   <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
           </div>
           
           {/* Right Header: Dynamic Placement */}
           <div className="w-full lg:w-[45%] flex flex-col items-center md:items-start lg:items-end justify-start lg:pt-12 lg:pr-8">
              <div className="text-center md:text-left lg:text-right">
                <span className="text-2xl sm:text-3xl lg:text-3xl font-serif text-slate-800 mb-2 block">Prof.</span>
                <h3 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4.2rem] font-serif font-semibold text-blue-600 leading-[0.95] tracking-tight">
                  Dr. Suresh<br />Mishra
                </h3>
              </div>
           </div>
        </div>

        {/* ── Main Content: Image & Quote ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">

          {/* Left: Enhanced Cutout Presentation */}
          <div className="w-full lg:w-[55%] relative flex justify-center group perspective-[1000px] order-2 lg:order-1">


            {/* Subtle decorative dots */}
            <div className="absolute -right-8 top-1/4 w-24 h-24 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px] opacity-40 rounded-full animate-pulse z-0" />
            {/* The Cutout Image (Flushed to bottom edge) */}
            <Image src="/images/about/principal-principal.webp"
              alt="Dr. Suresh Mishra"
              className="relative z-10 block w-[140%] max-w-[750px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] -mb-8 lg:-mb-12 origin-bottom transform transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
             width={800} height={800} unoptimized={false} />
          </div>

          {/* Right: Premium Typography */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center lg:self-center lg:pl-8 pb-12 lg:pb-0 order-1 lg:order-2">

            {/* Body Text & Quote */}
            <div className="relative">
              <div className="relative z-10 text-slate-700 text-lg sm:text-[1.35rem] font-medium leading-[1.6] max-w-2xl">
                <p>
                  &quot;Education is not just the filling of a mind, but the shaping of a soul. <span className="text-blue-600">At eTech, we don&apos;t just teach we transform.</span>&quot;
                </p>
                <p className="mt-6 sm:mt-8 text-base sm:text-lg font-light text-slate-600 leading-[1.8]">
                  What began as an aspirational vision in 2009 is now a leading academy dedicated to Quality Education. If you have a dream, we provide the immense support and strong foundation needed to materialise it.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
