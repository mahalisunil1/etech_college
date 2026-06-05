"use client";

export default function VisionTradition() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#f8fafc] to-white relative z-20 overflow-hidden">
      {/* ── Rich Background Decorative Elements ── */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Animated Stars */}
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
      <svg className="absolute top-20 left-10 w-8 h-8 text-[#fbbf24]/30 pointer-events-none z-0" style={{ animation: 'floatSlow 6s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-40 right-20 w-12 h-12 text-blue-500/20 pointer-events-none z-0" style={{ animation: 'floatFast 5s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[120px] pointer-events-none translate-x-1/4" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-indigo-400/[0.04] rounded-full blur-[100px] pointer-events-none -translate-x-1/4" />

      {/* ── Flowing SVG ── */}
      <style>{`
        @keyframes mvRiverFlow {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-w-[1400px] h-full pointer-events-none"
        viewBox="0 0 1400 800"
        fill="none"
      >
        <defs>
          <linearGradient
            id="mvRiverGrad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.01" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <path
          d="M -100 500 C 300 500, 500 300, 900 400 C 1200 470, 1400 280, 1600 200"
          stroke="url(#mvRiverGrad)"
          strokeWidth="120"
          strokeLinecap="round"
        />
        <path
          d="M -100 500 C 300 500, 500 300, 900 400 C 1200 470, 1400 280, 1600 200"
          stroke="#1E3A8A"
          strokeOpacity="0.06"
          strokeWidth="2"
          strokeDasharray="50 25"
          style={{ animation: "mvRiverFlow 22s linear infinite" }}
        />
      </svg>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4">
            Our Guiding Principles
          </span>
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.9]">
            Mission{" "}
            <span className="text-slate-400 font-light">&amp;</span>{" "}
            <span className="relative inline-block">
              <span className="text-[#1E3A8A]">Vision</span>
              <svg
                className="absolute -bottom-4 left-0 w-[105%] h-[20px] md:h-[24px] text-blue-600"
                viewBox="0 0 200 24"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M5,16 Q100,0 195,14"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M25,22 Q100,10 170,19"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#1E3A8A]/30 to-transparent" />
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
              </svg>
            </div>
          </div>

          {/* MISSION (Our Vision) */}
          <div className="p-8 md:p-12 lg:p-16 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#1E3A8A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#1E3A8A] uppercase">
                Our Vision
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Nurturing Unique Talents
            </h3>

            <p className="text-slate-600 text-base leading-[1.85] font-serif">
              Our mission is to identify and nurture the unique talents of
              every student, empowering them with the confidence to excel in
              academic pursuits and competitive challenges, while instilling
              the core values of humanity and character.
            </p>

            {/* Decorative accent */}
            <div className="w-16 h-1 bg-[#fbbf24] rounded-full mt-8" />
          </div>

          {/* TRADITION (Our Tradition) */}
          <div className="p-8 md:p-12 lg:p-16 reveal reveal-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#1E3A8A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-[#1E3A8A] uppercase">
                Our Tradition
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Driven by Innovation
            </h3>

            <p className="text-slate-600 text-base leading-[1.85] font-serif">
              Driven by a spirit of innovation, we go beyond the standard +2
              Science syllabus. From day one, our mission has been to equip
              students with the competitive edge needed to succeed in national
              entrance exams (NEET &amp; JEE) through a manifold approach to
              learning.
            </p>

            {/* Decorative accent */}
            <div className="w-16 h-1 bg-[#fbbf24] rounded-full mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
