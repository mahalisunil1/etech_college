import React from 'react';

export default function Success() {
  const students = [
    { name: "Aarav Sharma", score: "99.2", unit: "%", exam: "CBSE 12th Board" },
    { name: "Priya Patel", score: "142", unit: "AIR", exam: "JEE Advanced" },
    { name: "Rohan Singh", score: "685", unit: "/720", exam: "NEET UG" },
    { name: "Ananya Das", score: "98.8", unit: "%", exam: "State Board" },
  ];

  return (
    <section className="w-full py-24 lg:py-32 bg-blue-900 relative z-20 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-overlay filter blur-[150px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-[150px] opacity-20"></div>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 mb-16 lg:mb-20 reveal">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 text-left mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="text-2xl lg:text-3xl font-serif text-blue-200 mb-2 block">Success</span>
            <div className="relative inline-block self-start">
              <h2 className="text-[4rem] lg:text-[6rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2">
                Stories
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-400" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-sm pb-4">
            Showcasing the phenomenal success of our students across various competitive examinations and academic boards.
          </p>
        </div>
      </div>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {students.map((student, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-xl p-8 lg:p-10 flex flex-col items-center text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 border-b-4 border-blue-600 reveal ${
                idx === 1 ? 'reveal-delay-100' : idx === 2 ? 'reveal-delay-200' : idx === 3 ? 'reveal-delay-300' : ''
              }`}
            >
              <p className="text-slate-400 font-bold tracking-widest uppercase text-xs mb-4">
                {student.exam}
              </p>
              
              <div className="flex items-baseline justify-center mb-8">
                <h4 className="text-5xl md:text-6xl font-bold text-blue-950 tracking-tighter">
                  {student.score}
                </h4>
                <span className="text-xl text-blue-600 ml-1 font-bold uppercase">
                  {student.unit}
                </span>
              </div>
              
              <div className="flex flex-col items-center gap-3 mt-auto w-full pt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-sm">
                  {student.name.charAt(0)}
                </div>
                <p className="text-blue-950 font-bold text-base tracking-tight">
                  {student.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <button className="inline-flex relative overflow-hidden z-10 items-center justify-center rounded-lg text-lg font-medium cursor-pointer transition-colors duration-200 before:content-[''] before:absolute before:inset-0 hover:before:scale-x-100 before:scale-x-0 before:transition-transform before:duration-300 before:ease-out before:origin-left before:-z-10 bg-white text-blue-700 hover:text-white hover:before:bg-blue-950 px-8 py-4 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] group">
            View All Alumni
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>

    </section>
  );
}
