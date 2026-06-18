"use client";
import Image from "next/image";

export default function AboutPrincipal() {
  return (
    <section className="w-full pt-12 md:pt-20 pb-0 lg:pt-32 lg:pb-0 bg-[#ccd9ff] relative overflow-hidden">
      {/* ── Premium Background: Dynamic Abstract Waves ── */}
      <style>{`
        @keyframes aboutWaveShift {
          0% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-15%) scaleY(1.5); }
          100% { transform: translateX(-30%) scaleY(1); }
        }
      `}</style>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
        {/* Subtle Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(#3B82F6 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Top Waves */}
        <svg
          className="absolute top-0 left-0 w-[300%] h-[250px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          style={{
            animation: "aboutWaveShift 25s ease-in-out infinite alternate",
          }}
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#60A5FA"
            opacity=".15"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#3B82F6"
            opacity=".15"
          />
        </svg>

        {/* Bottom Waves */}
        <svg
          className="absolute bottom-[-10%] left-[-50%] w-[300%] h-[350px] rotate-180"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          style={{
            animation:
              "aboutWaveShift 30s ease-in-out infinite alternate-reverse",
          }}
        >
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#2563EB"
            opacity=".1"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="#1D4ED8"
            opacity=".1"
          />
        </svg>
      </div>

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 relative z-20 reveal">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8 mb-0 relative z-30">
          {/* Left Header */}
          <div className="w-full lg:w-[55%] flex flex-col items-center md:items-start justify-start pt-12 lg:pt-16 text-center md:text-left">
            <span className="text-[11px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-3">
              Principal&apos;s Message
            </span>
            <span className="text-3xl sm:text-4xl lg:text-4xl font-serif text-slate-700 mb-2">
              Our
            </span>
            <div className="relative inline-block">
              <h2 className="text-[3.25rem] sm:text-[4rem] lg:text-[7.5rem] font-serif font-bold text-slate-900 tracking-tighter leading-[0.85]">
                Principal
              </h2>
              {/* Double Blue Swoosh Underline */}
              <svg
                className="absolute -bottom-8 left-0 w-[105%] h-[32px] text-blue-600"
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

          {/* Right Header */}
          <div className="w-full lg:w-[45%] flex flex-col items-center md:items-start lg:items-end justify-start lg:pt-12 lg:pr-8">
            <div className="text-center md:text-left lg:text-right">
              <span className="text-2xl sm:text-3xl lg:text-3xl font-serif text-slate-800 mb-2 block">
                Prof.
              </span>
              <h3 className="text-[2.5rem] sm:text-[3.25rem] lg:text-[4.2rem] font-serif font-semibold text-blue-600 leading-[0.95] tracking-tight">
                Dr. Suresh
                <br />
                Mishra
              </h3>
            </div>
          </div>
        </div>

        {/* ── Main Content: Image & Full Message ── */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-16 relative z-10">
          {/* Left: Principal Cutout */}
          <div className="w-full lg:w-[50%] relative flex justify-center group perspective-[1000px] -mt-8 md:-mt-16 lg:-mt-24">
            {/* Decorative dots */}
            <div className="absolute -right-8 top-1/4 w-24 h-24 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:12px_12px] opacity-40 rounded-full animate-pulse z-0" />
            {/* The Cutout Image */}
            <Image src="/images/about/principal-principal.webp"
              alt="Dr. Suresh Mishra"
              className="relative z-10 block w-[140%] max-w-[750px] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] -mb-8 lg:-mb-12 origin-bottom transform transition-transform duration-[1500ms] ease-out group-hover:scale-[1.03]"
             width={800} height={800} unoptimized={false} />
          </div>

          {/* Right: Full Principal's Message */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center lg:self-center lg:pl-4 pb-12 lg:pb-16">
            <div className="relative">
              {/* Large decorative quote mark */}
              <div className="absolute -top-8 -left-4 text-[100px] font-serif text-blue-300/40 leading-none select-none pointer-events-none z-0">
                &ldquo;
              </div>

              <div className="relative z-10 text-slate-700 text-base sm:text-[1.1rem] font-medium leading-[1.75] max-w-2xl">
                <p className="mb-5">
                  I extend my heartfelt congratulations and best wishes to you
                  all.
                </p>

                <p className="mb-5">
                  What began as an aspirational startup in 2009 has blossomed
                  into eTech Residential Higher Secondary School &amp; eTech
                  Women&apos;s Higher Secondary School. Our founding motto was
                  simple yet profound:{" "}
                  <span className="text-blue-600 font-semibold">
                    to empower students and make high-quality +2 Science
                    education accessible to people from every walk of life.
                  </span>
                </p>

                <p className="mb-5">
                  Today, we are proud to be acknowledged as a leading academy
                  in Odisha. Our goal is all-round upliftment; our sole purpose
                  is{" "}
                  <strong className="text-slate-900 font-bold">
                    Quality Education
                  </strong>
                  . We are committed to making science and technology relevant
                  to the modern world—if you have a dream, we provide the
                  immense support needed to materialise it and reach your
                  desired destination.
                </p>

                <p className="mb-5">
                  Our campus at Mangalpur, Dhenkanal, is nestled amidst lush
                  greenery, offering a tranquil milieu perfectly suited for
                  academic growth. With well-equipped labs, a computerized
                  library, digital classrooms, and separate hostels for both
                  boys &amp; girls, our infrastructure is designed to groom
                  students for life&apos;s challenges and prepare them to be
                  responsible citizens of tomorrow.
                </p>

                <p className="mb-6 text-blue-600 font-semibold italic">
                  I invite you to join us and seize this opportunity. A
                  covetous career awaits, and with the right foundation,
                  nothing can stop you from flying high. We eagerly await the
                  opportunity to welcome you.
                </p>

                {/* Signature Block */}
                <div className="border-t border-slate-300/50 pt-5 mt-2">
                  <p className="text-slate-500 text-sm italic mb-1">
                    Sincerely Yours,
                  </p>
                  <p className="text-slate-900 font-bold text-base">
                    Dr. Suresh Mishra
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Principal,
                    <br />
                    eTech Residential H.S. School,
                    <br />
                    Mangalpur, Dhenkanal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
