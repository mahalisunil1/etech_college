"use client";
import Image from "next/image";

const facilities = [
  { num: "01", title: "Dedicated Study Environment", desc: "Quiet, air-conditioned study rooms available round-the-clock to ensure absolute focus and undisturbed preparation." },
  { num: "02", title: "Extensive Reference Library", desc: "A comprehensive repository of NEET & JEE reference books, previous year question banks, and specialized study modules." },
  { num: "03", title: "Smart Classroom Integration", desc: "Tech-enabled learning spaces utilizing interactive panels to visualize complex physics and biology concepts." },
  { num: "04", title: "One-on-One Doubt Desks", desc: "Dedicated faculty stationed at doubt-clearing counters outside regular class hours for personalized attention." },
  { num: "05", title: "CBT Simulation Labs", desc: "High-tech computer laboratories designed to perfectly simulate the exact NTA computer-based test environment." },
  { num: "06", title: "Performance Analytics", desc: "Detailed post-test statistical breakdown of strengths and weaknesses to guide targeted revision." },
];

export default function EntranceFeatures() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc]">
      
      {/* ── Main Content ── */}
      <div className="w-full">
        <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 py-20 md:py-28">

          {/* ── LEFT: Sticky Editorial Panel ── */}
          <div className="lg:col-span-5 flex flex-col justify-start mb-16 lg:mb-0 lg:sticky lg:top-32 lg:self-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-slate-900" />
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Our Facilities</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-slate-900 leading-[0.95] tracking-tight mb-8">
                Designed<br />
                <span className="text-blue-600">For Absolute</span><br />
                Focus
              </h2>

              <div className="w-full h-px bg-slate-200 mb-8" />

              <p className="text-slate-600 text-sm leading-relaxed mb-10 border-l-2 border-blue-600/30 pl-4 font-serif italic">
                An ecosystem engineered to minimize distractions and maximize productivity, allowing students to focus entirely on their academic goals.
              </p>
            </div>
            
            {/* Minimal Contextual Image */}
            <div className="hidden lg:block relative w-full h-[280px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <Image src="/images/campus/facilities/laibrary-dsc-7958.webp" alt="Study Environment" className="w-full h-full object-cover opacity-90 grayscale-[20%]"  width={800} height={800} unoptimized={false} />
            </div>
          </div>

          {/* ── RIGHT: Minimal Numbered List ── */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200">
            {facilities.map((item, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-6 py-6 md:py-8 transition-colors duration-300 hover:bg-slate-50/50"
              >
                {/* Number */}
                <div className="flex flex-col items-center gap-2 shrink-0 pt-1 w-8">
                  <span className="text-[12px] font-black text-blue-600 tracking-widest">
                    {item.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-slate-900 font-bold text-lg md:text-xl tracking-tight mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed pr-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
