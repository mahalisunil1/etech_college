import sys

file_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college\app\leadership\components\LeadershipProfiles.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

broken_str = """          {/* Image Side (Right on Desktop, Bottom on Mobile) */}
              </svg>
            </div>
          </div>"""

fixed_str = """          {/* Image Side (Right on Desktop, Bottom on Mobile) */}
          <div className="w-full lg:w-[45%] relative order-1 lg:order-2 reveal">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 bg-[#fbbf24]/20 rounded-2xl -rotate-2 scale-105 -z-10" />
            <div className="absolute -inset-4 bg-blue-900/10 rounded-2xl rotate-2 scale-105 -z-10" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
              <Image src="/WEBSITE CHANGES 3/principal eTech womens college.webp" 
                alt="Mr. Sarada Prasad Mohanty" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
               width={800} height={800} unoptimized={false} />
            </div>
            
            {/* Yellow Accent Badge */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-4 border-[#f8fafc] text-[#fbbf24]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/>
              </svg>
            </div>
          </div>"""

if broken_str in content:
    content = content.replace(broken_str, fixed_str)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Fix applied successfully.')
else:
    print('Could not find the broken string to replace.')
