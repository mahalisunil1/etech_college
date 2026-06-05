"use client";
import Image from "next/image";

export default function LeadershipProfiles() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8fafc] to-white py-20 lg:py-32 relative overflow-hidden">
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
      
      {/* ── PROFILE 1: PRINCIPAL ── */}
      <div className="w-[90vw] mx-auto max-w-7xl mb-24 lg:mb-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side (Left) */}
          <div className="w-full lg:w-[45%] relative reveal">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-[#fbbf24]/20 rounded-2xl rotate-2 scale-105 -z-10" />
            <div className="absolute -inset-4 bg-blue-900/10 rounded-2xl -rotate-2 scale-105 -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
              <Image src="/about-us/leadership/Media (3).webp" 
                alt="Principal" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               width={800} height={800} unoptimized={false} />
            </div>
            
            {/* Yellow Accent Badge */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#fbbf24] rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc] text-white">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/>
              </svg>
            </div>
          </div>

          {/* Text Side (Right) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center reveal">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">
              Principal
            </span>
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight">
                Prof. Dr. Suresh Mishra
              </h2>
              {/* Double Swoosh */}
              <svg className="absolute -bottom-4 left-0 w-[80%] h-[16px] text-blue-500/50" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none">
                <path d="M5,12 Q100,0 195,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M25,16 Q100,6 170,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Quote Block */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative mt-4">
              <svg className="absolute top-6 left-6 w-12 h-12 text-[#fbbf24]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10 text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic pl-10 border-l-4 border-[#fbbf24]">
                &quot;Education is not just the filling of a mind, but the shaping of a soul. At eTech, we don&apos;t just teach we transform.&quot;
              </div>
              <p className="mt-6 text-base text-slate-600 leading-relaxed font-light pl-10">
                What began as an aspirational vision in 2009 is now a leading academy dedicated to Quality Education. If you have a dream, we provide the immense support and strong foundation needed to materialise it. Our goal is to nurture well-rounded professionals who will go on to serve society with excellence and compassion.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="w-[80vw] mx-auto h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-24 lg:mb-40" />

      {/* ── PROFILE 2: SECRETARY MADAM ── */}
      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Side (Left on Desktop, Top on Mobile) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-1 reveal">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">
              Secretary
            </span>
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight">
                Secretary Madam
              </h2>
              {/* Double Swoosh */}
              <svg className="absolute -bottom-4 left-0 w-[80%] h-[16px] text-blue-500/50" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none">
                <path d="M5,12 Q100,0 195,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M25,16 Q100,6 170,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Quote Block */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative mt-4">
              <svg className="absolute top-6 left-6 w-12 h-12 text-[#fbbf24]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10 text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic pl-10 border-l-4 border-[#fbbf24]">
                &quot;To empower young minds with values, discipline, and knowledge, enabling them to build successful careers and become responsible citizens of tomorrow.&quot;
              </div>
              <p className="mt-6 text-base text-slate-600 leading-relaxed font-light pl-10">
                Administrative excellence and student welfare are the bedrocks of our institution. We are committed to maintaining a state-of-the-art campus infrastructure and a supportive academic environment that lets both residential and day-scholar students realize their full potential.
              </p>
            </div>
          </div>

          {/* Image Side (Right on Desktop, Bottom on Mobile) */}
          <div className="w-full lg:w-[45%] relative order-1 lg:order-2 reveal">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-[#fbbf24]/20 rounded-2xl -rotate-2 scale-105 -z-10" />
            <div className="absolute -inset-4 bg-blue-900/10 rounded-2xl rotate-2 scale-105 -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
              <Image src="/new/SECRETARY MADAM.webp" 
                alt="Secretary Madam" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               width={800} height={800} unoptimized={false} />
            </div>
            
            {/* Yellow Accent Badge */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc] text-[#fbbf24]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="w-[80vw] mx-auto h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-24 lg:my-40" />

      {/* ── PROFILE 3: VICE PRINCIPAL ── */}
      <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side (Left on Desktop, Top on Mobile) */}
          <div className="w-full lg:w-[45%] relative order-1 lg:order-1 reveal">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-[#fbbf24]/20 rounded-2xl rotate-2 scale-105 -z-10" />
            <div className="absolute -inset-4 bg-blue-900/10 rounded-2xl -rotate-2 scale-105 -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
              <Image src="/about-us/leadership/Media (2).webp" 
                alt="Vice Principal" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               width={800} height={800} unoptimized={false} />
            </div>
            
            {/* Yellow Accent Badge */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc] text-[#fbbf24]">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
          </div>

          {/* Text Side (Right on Desktop, Bottom on Mobile) */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center order-2 lg:order-2 reveal">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">
              Vice-Principal of eTech Women's
            </span>
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-[1.1] tracking-tight">
                Itishree Routaray
              </h2>
              {/* Double Swoosh */}
              <svg className="absolute -bottom-4 left-0 w-[80%] h-[16px] text-blue-500/50" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none">
                <path d="M5,12 Q100,0 195,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M25,16 Q100,6 170,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Quote Block */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100 relative mt-4">
              <svg className="absolute top-6 left-6 w-12 h-12 text-[#fbbf24]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="relative z-10 text-slate-700 text-lg md:text-xl font-medium leading-relaxed italic pl-10 border-l-4 border-[#fbbf24]">
                &quot;To foster a culture of academic excellence, scientific inquiry, and discipline among young women, empowering them with knowledge, confidence, and values to face future challenges.&quot;
              </div>
              <p className="mt-6 text-base text-slate-600 leading-relaxed font-light pl-10">
                Our vision is to create a supportive learning environment that encourages intellectual growth, innovation, and holistic development, preparing students for higher education and responsible citizenship.
              </p>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  );
}
