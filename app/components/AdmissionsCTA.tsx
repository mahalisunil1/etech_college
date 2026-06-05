import Link from "next/link";

export default function AdmissionsCTA() {
  return (
    <section className="w-full py-24 bg-blue-900 relative z-20 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 lg:p-16 reveal">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="text-center lg:text-left">
              <span className="text-2xl lg:text-3xl font-serif text-blue-200 mb-2 block">Join</span>
              <div className="relative inline-block">
                <h2 className="text-[4rem] lg:text-[6rem] font-serif font-bold text-white tracking-tighter leading-[0.85] mb-2">
                  eTech
                </h2>
                {/* Double Blue Swoosh Underline */}
                <svg className="absolute -bottom-6 left-0 w-[105%] h-[28px] text-blue-400" viewBox="0 0 200 24" fill="none" preserveAspectRatio="none">
                   <path d="M5,16 Q100,0 195,14" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" fill="none" />
                   <path d="M25,22 Q100,10 170,19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </div>
            </div>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mt-8 mb-8">
              Discover our admission procedures, fee structures, and the current vacancies for the upcoming academic session. Step into a world of opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/admission" className="w-full sm:w-auto text-center bg-white text-blue-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Admission Procedure
              </Link>
              <Link href="/fee" className="w-full sm:w-auto text-center bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                View Fee Structure
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block w-1/3 relative">
             {/* Decorative element for the CTA */}
             <div className="w-full aspect-square rounded-full bg-gradient-to-tr from-blue-400 to-blue-200 opacity-20 blur-3xl absolute inset-0 animate-pulse" />
             <div className="relative bg-white/10 border border-white/20 rounded-xl p-8 backdrop-blur-sm text-center">
                <div className="text-5xl font-black text-white mb-2">2026</div>
                <div className="text-blue-200 font-semibold tracking-widest uppercase text-sm">Admissions Open</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
