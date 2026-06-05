import Image from "next/image";
import React from 'react';

export default function Programs() {
  const streams = [
    {
      title: "+2 Science Stream",
      subtitle: "Medical & Engineering Pathway",
      desc: "A rigorous curriculum designed to prepare students for both high-level board exams and national competitive assessments.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English Core", "Computer Science"],
      highlights: [
        "Integrated JEE / NEET Entrance Coaching",
        "Advanced Scientific Laboratory Experiments",
        "Bi-weekly Performance Monitoring & Mock Exams"
      ]
    },
    {
      title: "+2 Commerce Stream",
      subtitle: "Finance & Business Administration",
      desc: "Equipping students with real-world financial literacy and a robust academic foundation for professional degrees.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
      subjects: ["Accountancy", "Business Studies", "Economics", "Applied Mathematics", "English Core", "Entrepreneurship"],
      highlights: [
        "Early CA / CS / CMA Foundation Preparation",
        "FinTech Workshops & Capital Markets Exposure",
        "Case Study Competitions & Industrial Visits"
      ]
    },
    {
      title: "+2 Arts Stream",
      subtitle: "Humanities & Social Sciences",
      desc: "A comprehensive pathway focused on critical thinking, historical perspective, and analytical writing.",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000",
      subjects: ["History", "Political Science", "Geography", "Sociology / Economics", "English Elective", "Psychology"],
      highlights: [
        "Early Foundation Coaching for Civil Services (UPSC)",
        "Debating Society & Public Policy Seminars",
        "Intensive Analytical Essay Writing Workshops"
      ]
    }
  ];

  return (
    <section className="w-full py-20 bg-white relative z-20">
      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8 reveal text-left">
          <div className="max-w-2xl">
            <span className="text-2xl lg:text-3xl font-serif text-slate-700 mb-2 block">Academic</span>
            <div className="relative inline-block self-start">
              <h2 className="text-[4rem] lg:text-[6rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85] mb-2">
                Programs
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-600" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                 <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                 <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-sm pb-4">
            eTech offers specialized, highly disciplined pathways designed to ensure academic success and career readiness.
          </p>
        </div>

        {/* 3-Column Streams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {streams.map((stream, idx) => (
            <div 
              key={idx}
              className={`bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group reveal ${
                idx === 1 ? 'reveal-delay-100' : idx === 2 ? 'reveal-delay-200' : ''
              }`}
            >
              {/* Top Section */}
              <div>
                {/* Image */}
                <div className="h-52 w-full overflow-hidden relative">
                  <Image src={stream.img} 
                    alt={stream.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   width={800} height={800} unoptimized={false} />
                  <div className="absolute inset-0 bg-slate-950/10"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest block mb-2">
                    {stream.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {stream.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {stream.desc}
                  </p>

                  <div className="h-px bg-slate-100 mb-6"></div>

                  {/* Subject List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                      Subjects Offered
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {stream.subjects.map((sub, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-[11px] font-medium bg-slate-50 border border-slate-200 text-slate-600 px-2 py-0.5"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-slate-100 mb-6"></div>

                  {/* Highlights Checklist */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                      Key Program Features
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {stream.highlights.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-slate-500 text-[11px] sm:text-xs">
                          <svg className="w-3.5 h-3.5 text-blue-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>



            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
