"use client";

const stats = [
  { value: "50+", label: "Acre Campus" },
  { value: "12",  label: "Hi-Tech Labs" },
  { value: "24/7", label: "Digital Library" },
  { value: "1000+", label: "Students" },
];

export default function CampusTour() {

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



      </div>
    </section>
  );
}
