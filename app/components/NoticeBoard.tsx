import Link from "next/link";

export default function NoticeBoard() {
  const announcements = [
    { date: "New", text: "Admission open for CHSE 2026-27", tag: "Entrance" },
    { date: "Closed", text: "Summer course 2026 closed", tag: "Summer" },
    { date: "New", text: "Admission open for NEET 2026-27", tag: "Entrance" },
    { date: "New", text: "Admission open for CBSE", tag: "Entrance" },
    { date: "Alert", text: "We don’t have arts and commerce", tag: "Warning" },
  ];

  const getTagStyle = (tag: string) => {
    switch(tag) {
      case 'Urgent': 
        return { badge: 'text-red-600 border-red-200 bg-red-50' };
      case 'Warning':
        return { badge: 'text-amber-700 border-amber-200 bg-amber-50' };
      case 'Summer':
        return { badge: 'text-orange-600 border-orange-200 bg-orange-50' };
      case 'Entrance':
      default:
        return { badge: 'text-blue-700 border-blue-200 bg-blue-50' };
    }
  };

  return (
    <section className="w-full bg-slate-50 py-16 relative z-20 overflow-hidden border-b border-slate-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="relative inline-block">
            <h2 className="text-[3.25rem] sm:text-[4.5rem] lg:text-[6rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85] mb-2">
              Notice Board
            </h2>
            {/* Double Blue Swoosh Underline */}
            <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-600" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
               <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
               <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>

        {/* Informational Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-10">
          {announcements.map((item, idx) => {
            const styles = getTagStyle(item.tag);
            return (
              <div 
                key={idx} 
                className="group flex flex-row items-center gap-4 sm:gap-6 bg-white/90 backdrop-blur-sm border border-slate-200 p-5 rounded-xl hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center shrink-0 border-r border-slate-100 pr-4 sm:pr-6 min-w-[70px]">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-slate-400 mb-1.5">{item.date}</span>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border ${styles.badge}`}>
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-slate-800 text-[15px] sm:text-[16px] font-semibold leading-snug group-hover:text-blue-700 transition-colors">
                  {item.text}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Short Horizontal CTA */}
        <div className="w-full bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">Have Questions About Admissions?</h4>
            <p className="text-blue-200/80 text-sm font-light">Reach out to our counseling team for the 2026-27 academic session.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-950 font-bold py-3.5 px-8 rounded-xl hover:bg-blue-50 transition-all hover:scale-105 duration-300 uppercase tracking-wider text-sm shadow-md group">
            Contact Us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
