"use client";

const features = [
  { num: "01", title: "Expert Faculty", desc: "Experienced teachers for Physics, Chemistry & Biology with proven NEET track records." },
  { num: "02", title: "Updated Study Materials", desc: "NCERT-based notes, question banks, and practice modules aligned with the current NEET syllabus." },
  { num: "03", title: "Regular Mock Tests", desc: "Weekly tests with OMR practice and detailed performance analysis after every session." },
  { num: "04", title: "Doubt Clearing Classes", desc: "Dedicated special sessions to address individual student doubts after regular classes." },
  { num: "05", title: "Smart Classrooms", desc: "Projector-based interactive learning with modern audio-visual teaching aids." },
  { num: "06", title: "Performance Tracking", desc: "Regular progress reports shared with students and parents to monitor improvement." },
  { num: "07", title: "Flexible Batch Timings", desc: "Morning and evening batches available to suit every student's schedule." },
  { num: "08", title: "Previous Year Questions", desc: "Complete NEET PYQ discussion with topic-wise analysis to sharpen exam readiness." },
  { num: "09", title: "Parent-Teacher Interaction", desc: "Regular meetings and updates to keep parents informed on student progress." },
  { num: "10", title: "Personal Mentorship", desc: "Individual guidance and mentoring for every student to reach their full potential." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">
      
      {/* ── Section Background Patterns & Glows ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#1E3A8A]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* ── Floating Animated Elements ── */}
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
      <svg className="absolute top-32 left-10 w-10 h-10 text-blue-500/10 pointer-events-none z-0" style={{ animation: 'floatSlow 7s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-40 right-10 w-8 h-8 text-[#fbbf24]/20 pointer-events-none z-0" style={{ animation: 'floatFast 5s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>

      {/* ── Main Content ── */}
      <div className="relative z-10 w-full">
        <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 pt-10 pb-20 md:pt-12 md:pb-28">

          {/* ── LEFT: Sticky Editorial Panel ── */}
          <div className="lg:col-span-4 flex flex-col justify-between mb-12 lg:mb-0 lg:sticky lg:top-28 lg:self-start">
            <div>
              {/* Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[3px] bg-blue-600" />
                <span className="text-[10px] font-black tracking-[0.35em] text-blue-600 uppercase">Why eTech</span>
              </div>

              {/* Heading */}
              <div className="relative inline-block mb-10">
                <h2 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem] font-serif font-black text-slate-900 leading-[0.9] tracking-tight">
                  Why<br />
                  Choose<br />
                  <span className="text-[#1E3A8A]">Us?</span>
                </h2>
                {/* Double Blue Swoosh Underline */}
                <svg className="absolute -bottom-6 left-0 w-[110%] h-[28px] text-blue-600/80" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                  <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                  <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-10 border-l-[3px] border-blue-600/30 pl-5 italic font-serif">
                &ldquo;Building future Doctors through quality education, discipline and personal guidance.&rdquo;
              </p>

            </div>

            {/* Stats row */}
            <div className="hidden lg:flex gap-10 mt-12 pt-8 border-t border-slate-200/60 relative">
              {[["500+", "Students"], ["95%", "NEET Results"], ["15+", "Years"]].map(([val, label]) => (
                <div key={label} className="relative group">
                  <div className="text-3xl font-serif font-black text-[#1E3A8A] group-hover:text-blue-600 transition-colors duration-300">{val}</div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Interactive Staggered Grid ── */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {features.map((item, idx) => (
              <div
                key={idx}
                className={`reveal group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 overflow-hidden ${
                  idx % 2 !== 0 ? "md:mt-12 md:-mb-12" : ""
                }`}
              >
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/[0.15] to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Number Watermark */}
                <div className="absolute -top-4 -right-2 text-[100px] font-serif font-black text-slate-50 opacity-50 group-hover:text-blue-50 transition-colors duration-500 select-none pointer-events-none">
                  {item.num}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 font-black text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-sm">
                      {item.num}
                    </div>
                    <h3 className="text-slate-900 font-bold text-xl tracking-tight mb-3">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mt-2">
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
