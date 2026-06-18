"use client";
import Image from "next/image";

export default function AboutIntro() {
  const highlights = [
    { stat: "Since 2009", label: "Established" },
    { stat: "#1", label: "Leading H.S. School" },
    { stat: "100%", label: "AHS Exam Results" },
  ];

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

      {/* ── Ambient Glows ── */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/[0.06] rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.05] rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-8 reveal text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <span className="text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4">
              Who We Are
            </span>
            <div className="relative inline-block">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85] mb-2">
                About eTech
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg
                className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-600"
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
            </div>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm pb-4 text-center md:text-left mt-6 md:mt-0">
            An institution driven by a singular purpose — to provide transformative, high-quality education accessible to all.
          </p>
        </div>

        {/* ── Editorial Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Image + Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8 reveal">
            {/* Campus Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <Image src="/images/campus/campus-photo.webp"
                alt="eTech College Campus"
                className="w-full h-[280px] md:h-[340px] object-cover transition-transform duration-[1.5s] group-hover:scale-105"
               width={800} height={800} unoptimized={false} />
              {/* Image overlay tag */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
                  Mangalpur, Dhenkanal
                </span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 reveal reveal-delay-100">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 border border-slate-200 shadow-sm relative overflow-hidden text-center"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1E3A8A]" />
                  <div className="text-xl md:text-2xl font-bold text-[#1E3A8A] mb-1 tracking-tight">
                    {item.stat}
                  </div>
                  <div className="text-[9px] md:text-[10px] font-semibold text-slate-500 uppercase tracking-wider leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 reveal reveal-delay-200">
            <div className="relative">
              {/* Large decorative quote mark */}
              <div className="absolute -top-6 -left-4 text-[120px] font-serif text-blue-100 leading-none select-none pointer-events-none z-0">
                &ldquo;
              </div>

              <div className="relative z-10">
                <p className="text-slate-700 text-base md:text-lg leading-[1.85] mb-6">
                  Under the esteemed management of{" "}
                  <strong className="text-slate-900 font-bold">
                    Vidyaniketana Charitable Trust
                  </strong>
                  , eTech Residential Higher Secondary School was established in{" "}
                  <strong className="text-[#1E3A8A] font-bold">2009</strong>{" "}
                  and eTech Women&apos;s Higher Secondary School in{" "}
                  <strong className="text-[#1E3A8A] font-bold">2016</strong>{" "}
                  with the vision of providing quality higher secondary education
                  and empowering students through academic excellence.
                </p>

                {/* Second campus image inline */}
                <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 mb-8 group">
                  <Image src="/images/campus/facilities/hostel-boys-hostel-front.webp"
                    alt="eTech Student Hostel"
                    className="w-full h-[200px] md:h-[240px] object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                   width={800} height={800} unoptimized={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-white text-xs font-bold tracking-[0.15em] uppercase">
                      Student Hostel
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-[1.85]">
                  Since its establishment in 2009, eTech has grown to become
                  one of the leading Higher Secondary Schools in Odisha, with a
                  proud record of{" "}
                  <strong className="text-[#1E3A8A] font-semibold">100% AHS Exam Results</strong>.
                  Our campus at Mangalpur, Dhenkanal, is nestled amidst lush
                  greenery, offering a tranquil environment perfectly suited for
                  academic growth, with well-equipped labs, digital classrooms,
                  and separate hostels for boys &amp; girls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
