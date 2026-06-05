"use client";

const pillars = [
  {
    num: "01",
    title: "Supportive Environment",
    desc: "We foster a congenial teacher-student relationship, creating a comfortable atmosphere for open inquiry.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Scientific Temper",
    desc: "We ignite and accelerate a scientific temperament in our students, encouraging logical reasoning and a spirit of curiosity.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Modern Assessment",
    desc: "Our teaching is supported by analytical assessments and practical tests integrated with audio-visual programmes for a deeper understanding of concepts.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Holistic Development",
    desc: "The institution focuses on holistic development by promoting academic achievement, scientific temperament, leadership qualities, and confidence among students, preparing them for higher education and future success.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Competitive Preparation",
    desc: "Providing expert coaching for National Eligibility cum Entrance Test (NEET) and Joint Entrance Examination (JEE) to help students achieve success in competitive examinations.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function CorePillars() {
  return (
    <section className="w-full py-20 md:py-28 bg-white relative z-20 border-t border-slate-100 overflow-hidden">
      {/* ── Background Patterns ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-500/[0.04] rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-16 md:mb-20 reveal">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4">
            Educational Methodology
          </span>
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.9]">
            Our Core{" "}
            <span className="relative inline-block">
              <span className="text-[#1E3A8A]">Pillars</span>
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
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-8">
            The five foundational principles that define our educational
            philosophy and set eTech apart.
          </p>
        </div>

        {/* ── Featured Two Cards (Top) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 reveal reveal-delay-100">
          {pillars.slice(0, 2).map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#1D4ED8] text-white overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20"
            >
              {/* Background pattern inside card */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Ambient glow */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm border border-white/10">
                    {pillar.icon}
                  </div>
                  <span className="text-[52px] font-serif font-black text-white/15 leading-none select-none">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Remaining Three Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-200">
          {pillars.slice(2).map((pillar, idx) => (
            <div
              key={idx}
              className="relative p-7 md:p-8 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden group hover:border-blue-200 hover:shadow-md transition-all duration-400"
            >
              {/* Micro-dot pattern */}
              <div className="absolute -top-6 -right-6 w-44 h-44 pointer-events-none transition-transform duration-[2s] group-hover:scale-110">
                <div className="absolute inset-0 bg-[#1E3A8A]/[0.06] rounded-full blur-3xl scale-125" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(#1E3A8A 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                    WebkitMaskImage:
                      "radial-gradient(circle at 60% 40%, black 10%, transparent 75%)",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A]">
                    {pillar.icon}
                  </div>
                  <span className="text-[44px] font-serif font-black text-slate-100 group-hover:text-blue-100 leading-none select-none transition-colors duration-300">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-2 tracking-tight group-hover:text-[#1E3A8A] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
