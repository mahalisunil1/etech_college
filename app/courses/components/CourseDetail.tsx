import Link from "next/link";

export default function CourseDetail() {
  const courses = [
    {
      id: "chse",
      title: "CHSE",
      fullName: "Council of Higher Secondary Education",
      tag: "State Board",
      accentColor: "#1E3A8A",
      accentLight: "bg-blue-50",
      accentBorder: "border-blue-200",
      accentText: "text-[#1E3A8A]",
      accentDot: "bg-[#1E3A8A]",
      tagBg: "bg-blue-50 text-[#1E3A8A] border-blue-200",
      ctaBg: "bg-[#1E3A8A] hover:bg-blue-800",
      topBorder: "bg-[#1E3A8A]",
      description:
        "Our CHSE program is built around Odisha's state board curriculum, combining rigorous academic preparation with personalized mentorship. Students receive expert coaching from seasoned faculty, structured study materials, and regular assessments designed to maximize board performance.",
      highlights: [
        "Expert faculty aligned to CHSE syllabus",
        "Regular mock tests & full-length practice papers",
        "One-on-one doubt clearing sessions",
        "Structured revision programs before boards",
        "Performance tracking & parent updates",
      ],
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "English", "Odia", "Information Technology (IT)", "Hindi", "Sanskrit", "Electronics", "Alternative English"],
      stat1: { label: "Pass Rate", value: "100%" },
      stat2: { label: "First Division", value: "92%" },
    },
    {
      id: "cbse",
      title: "CBSE",
      fullName: "Central Board of Secondary Education",
      tag: "Central Board",
      accentColor: "#065f46",
      accentLight: "bg-emerald-50",
      accentBorder: "border-emerald-200",
      accentText: "text-emerald-700",
      accentDot: "bg-emerald-600",
      tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      ctaBg: "bg-emerald-700 hover:bg-emerald-800",
      topBorder: "bg-emerald-600",
      description:
        "Our CBSE stream follows the Central Board curriculum with a modern pedagogical approach. With NCERT-aligned teaching, concept-first learning, and application-based assessments, we ensure every student develops a strong academic foundation.",
      highlights: [
        "NCERT-aligned curriculum with concept-first teaching",
        "Application-based learning and problem solving",
        "CBSE sample paper practice every month",
        "Only Science stream available",
        "Digital learning resources & study material",
      ],
      subjects: ["Physics", "Chemistry", "English", "Mathematics", "Biology", "Computer Science", "Physical Education", "Odia"],
      stat1: { label: "Top Result", value: "100%" },
      stat2: { label: "Avg Score", value: "88%" },
    },
    {
      id: "neet",
      title: "NEET",
      fullName: "National Eligibility cum Entrance Test",
      tag: "Medical Prep",
      accentColor: "#9f1239",
      accentLight: "bg-rose-50",
      accentBorder: "border-rose-200",
      accentText: "text-rose-700",
      accentDot: "bg-rose-600",
      tagBg: "bg-rose-50 text-rose-700 border-rose-200",
      ctaBg: "bg-rose-700 hover:bg-rose-800",
      topBorder: "bg-rose-600",
      description:
        "Our flagship NEET preparation program is an intensive, structured course designed to prepare students for India's most competitive medical entrance exam. With exhaustive test series, specialized biology coaching, and proven strategies, we've guided hundreds of students into top medical colleges.",
      highlights: [
        "Chapter-wise & full-length NEET mock tests",
        "Specialized Biology coaching (200 marks focus)",
        "Physics & Chemistry shortcut strategies",
        "Previous year paper analysis sessions",
        "All-India rank benchmarking after each test",
      ],
      subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
      stat1: { label: "Selections", value: "100+" },
      stat2: { label: "Cutoff Hit Rate", value: "87%" },
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-[#f8fafc] relative z-20 border-t border-slate-100 overflow-hidden">
      {/* Blueprint grid — consistent with site-wide background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating animated elements — consistent with site style */}
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
      <svg className="absolute top-1/2 right-10 w-6 h-6 text-[#fbbf24]/20 pointer-events-none z-0" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '2s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-20 left-1/4 w-5 h-5 text-blue-400/20 pointer-events-none z-0" style={{ animation: 'floatFast 7s ease-in-out infinite', animationDelay: '1s' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>


      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <span className="text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4">Academic Programs</span>
            <div className="relative inline-block">
              <h2 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[5rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85] mb-2">
                Our Courses
              </h2>
              <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-600" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm pb-4 text-center md:text-left mt-6 md:mt-0">
            Three meticulously designed programs to help every student reach their highest academic potential.
          </p>
        </div>

        {/* Course Cards */}
        {courses.map((course, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              id={course.id}
              key={course.id}
              className="scroll-mt-24 reveal"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white`}>

                {/* Info Panel */}
                <div className={`p-8 md:p-12 relative ${!isEven ? "lg:order-2" : ""}`}>
                  {/* L-bracket corner accent — 25% of each side */}
                  <div className={`absolute top-0 left-0 w-1/4 h-[3px] ${course.topBorder}`} />
                  <div className={`absolute top-0 left-0 w-[3px] h-1/4 ${course.topBorder}`} />

                  {/* Tag */}
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-6 ${course.tagBg} ${course.accentBorder}`}>
                    {course.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 tracking-tighter leading-none mb-1">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium mb-6">{course.fullName}</p>

                  {/* Description */}
                  <p className="text-slate-600 text-base leading-[1.85] mb-8">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[course.stat1, course.stat2].map((s, i) => (
                      <div key={i} className={`p-4 border ${course.accentBorder} ${course.accentLight} relative overflow-hidden`}>
                        {/* L-bracket corner accent on stat cards */}
                        <div className={`absolute top-0 left-0 w-1/4 h-[2px] ${course.topBorder}`} />
                        <div className={`absolute top-0 left-0 w-[2px] h-1/4 ${course.topBorder}`} />
                        <div className={`text-2xl md:text-3xl font-bold mb-1 ${course.accentText}`}>{s.value}</div>
                        <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-white text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90 ${course.ctaBg}`}
                  >
                    Enquire Now <span>&rarr;</span>
                  </Link>
                </div>

                {/* Details Panel */}
                <div className={`p-8 md:p-12 border-slate-100 ${isEven ? "lg:border-l" : "lg:border-r lg:order-1"} bg-slate-50/50`}>

                  {/* Highlights */}
                  <div className="mb-10">
                    <h4 className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-5">Program Highlights</h4>
                    <ul className="space-y-4">
                      {course.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${course.accentDot}`} />
                          <span className="text-slate-700 text-sm leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Subjects */}
                  <div>
                    <h4 className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase mb-4">Subjects Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((s, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${course.tagBg} ${course.accentBorder}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
