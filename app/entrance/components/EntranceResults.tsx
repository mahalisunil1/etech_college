"use client";

const results = [
  {
    year: "2025",
    neetSelections: "55+",
    jeeQualifiers: "38+",
    topAIR: "Under 500: 4",
    highlight: "Highest State Rank #3"
  },
  {
    year: "2024",
    neetSelections: "48+",
    jeeQualifiers: "32+",
    topAIR: "Under 500: 2",
    highlight: "Highest State Rank #5"
  },
  {
    year: "2023",
    neetSelections: "42+",
    jeeQualifiers: "28+",
    topAIR: "Under 500: 1",
    highlight: "Highest State Rank #12"
  }
];

export default function EntranceResults() {
  return (
    <section className="py-20 md:py-28 bg-transparent relative z-10 w-full overflow-hidden">
      
      {/* ── Background Patterns ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-[90vw] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-slate-900" />
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">Proven Track Record</span>
            </div>
            <h2 className="text-[3rem] sm:text-[4rem] font-serif font-black text-slate-900 tracking-tighter leading-[0.9]">
              Consistency in <span className="text-[#1E3A8A]">Excellence</span>
            </h2>
            {/* Double Blue Swoosh Underline */}
            <div className="relative mt-2">
              <svg className="absolute top-0 left-0 w-full max-w-sm h-[20px] text-blue-600/80" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm">
            Our results over the last three years stand as a testament to our dedicated faculty, rigorous curriculum, and focused study environment.
          </p>
        </div>

        {/* ── Custom Animations ── */}
        <style>{`
          @keyframes gradientPan {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            animation: gradientPan 6s ease infinite;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((res, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[340px] relative overflow-hidden group ${idx === 1 ? 'md:-translate-y-6 hover:-translate-y-9' : ''}`}
            >
              
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-400/[0.1] to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 bg-slate-50 text-[#1E3A8A] text-xs font-black tracking-widest uppercase rounded-full mb-10 border border-slate-200 shadow-sm group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                  {res.year}
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors duration-300">NEET Selections</div>
                    <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-blue-500 to-[#1E3A8A] bg-[length:200%_auto] animate-gradient-slow pb-2 leading-none">
                      {res.neetSelections}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors duration-300">JEE Qualifiers</div>
                    <div className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
                      {res.jeeQualifiers}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-slate-100 space-y-3 relative z-10">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-shadow duration-300" />
                  <span className="font-semibold text-slate-900 tracking-wider">AIR:</span> {res.topAIR}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-shadow duration-300" />
                  <span className="font-semibold text-slate-900 tracking-wider">State:</span> {res.highlight}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
