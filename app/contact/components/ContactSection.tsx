"use client";

export default function ContactSection() {
  const contactDetails = [
    {
      title: "Address",
      desc: "eTech Residential Higher Secondary School, At- Mangalpur, Po- Sadar, Dist- Dhenkanal, Odisha",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    },
    {
      title: "Email",
      desc: "etechdkl1@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      title: "Mobile",
      desc: "+91 9439626264, 9938558611, 9938576950, 9776892852, 9938085650, 9938754469",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white relative z-20 overflow-hidden">
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

      <div className="w-[90vw] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* ── Left Column: Contact Details ── */}
          <div className="lg:col-span-5 flex flex-col gap-8 reveal">
            <div>
              <span className="text-[11px] font-bold tracking-[0.3em] text-slate-400 uppercase mb-4 block">
                Reach Out
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight mb-2">
                Contact Information
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Whether you have a question about admission, curriculum, or campus facilities, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {contactDetails.map((item, idx) => (
                <div key={idx} className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-5 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-900 font-bold text-sm md:text-base mb-1 tracking-tight">
                      {item.title}
                    </h4>
                    {item.title === "Email" ? (
                      <a href={`mailto:${item.desc}`} className="text-blue-600 hover:underline text-sm font-semibold block transition-colors">
                        {item.desc}
                      </a>
                    ) : item.title === "Mobile" ? (
                      <div className="text-slate-600 text-sm leading-relaxed font-semibold">
                        {item.desc}
                      </div>
                    ) : (
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6 flex flex-col gap-4">
              <h4 className="text-slate-900 font-bold text-sm md:text-base tracking-tight capitalize">
                Follow us on Facebook and YouTube
              </h4>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/etech1etech" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm border border-blue-100 transition-all duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>


              </div>
            </div>
          </div>

          {/* ── Right Column: Location Map ── */}
          <div className="lg:col-span-7 reveal reveal-delay-200">
            <div className="bg-white p-2 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden h-[400px] lg:h-full min-h-[400px]">
              <iframe
                className="w-full h-full rounded-2xl grayscale-[20%] contrast-[1.1]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://maps.google.com/maps?q=eTech%20Residential%20Higher%20Secondary%20School,%20Mangalpur,%20Dhenkanal,%20Odisha&t=&z=14&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
