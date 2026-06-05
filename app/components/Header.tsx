"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  name: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
};

const navLinks: NavLink[] = [
  { name: "Home",         href: "/" },
  { name: "Courses",      href: "/courses" },
  { 
    name: "About Us", 
    subLinks: [
      { name: "About eTech", href: "/about" },
      { name: "Leadership",   href: "/leadership" }
    ]
  },
  { name: "Entrance",     href: "/entrance" },
  { 
    name: "Facilities", 
    subLinks: [
      // Visual / flagship facilities
      { name: "Hostel",                    href: "/facilities#hostel" },
      { name: "Hostel Mess",               href: "/facilities#hostel-mess" },
      { name: "Seminar Hall",              href: "/facilities#seminar" },
      { name: "Sports & Recreation",       href: "/facilities#sports" },
      { name: "Experienced Faculty",       href: "/facilities#faculty" },
      { name: "Transportation",            href: "/facilities#transportation" },
      // Informational facilities
      { name: "Computer Lab",              href: "/facilities#computer-lab" },
      { name: "Science Labs",              href: "/facilities#science-labs" },
      { name: "Smart Classrooms",          href: "/facilities#smart-classrooms" },
      { name: "Library & Reading Room",    href: "/facilities#library" },
      { name: "NEET & JEE Coaching",       href: "/facilities#coaching" },
      { name: "Doubt-Clearing Sessions",   href: "/facilities#doubt-clearing" },
      { name: "Career Guidance",           href: "/facilities#guidance" },
      { name: "Scholarship Support",       href: "/facilities#scholarships" },
      { name: "CCTV Surveillance",         href: "/facilities#security" },
      { name: "Medical Assistance",        href: "/facilities#medical" },
    ]
  },
  {
    name: "Achievements",
    subLinks: [
      { name: "Toppers", href: "/achievements#toppers" },
      { name: "Awards & Ceremonies", href: "/achievements#awards" },
    ]
  },
  { name: "Events",       href: "/events" },
  { name: "Gallery",      href: "/gallery" },
  { name: "Contact",      href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isLinkActive = (link: NavLink) => {
    if (link.href) {
      if (link.href === '/') return pathname === '/';
      return pathname.startsWith(link.href.split('#')[0]);
    }
    if (link.subLinks) {
      return link.subLinks.some(sub => pathname.startsWith(sub.href.split('#')[0]));
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-dropdown-root]')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Close desktop dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">

      {/* ── Top Utility Bar (Fades out on scroll) ── */}
      <div className={`w-full bg-slate-900 text-white/90 px-4 md:px-8 pointer-events-auto transition-all duration-500 origin-top ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'h-auto opacity-100 py-2.5'}`}>
        <div className="w-[95vw] md:w-[90vw] mx-auto flex justify-between items-center text-[10.5px] md:text-xs font-bold tracking-widest uppercase">
          <div className="flex gap-6">
            <a href="tel:+919439626264" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91-9439626264
            </a>
            <a href="mailto:etechdkl1@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-blue-400 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              etechdkl1@gmail.com
            </a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-red-400 transition-colors">YouTube</a>
          </div>
        </div>
      </div>

      {/* ── Main Header ── */}
      <header className={`w-[95vw] md:w-[90vw] mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white/60 flex items-center justify-between px-5 md:px-7 py-3 md:py-3.5 pointer-events-auto transition-all duration-500 ${scrolled ? 'mt-4 md:mt-6 shadow-[0_16px_48px_rgba(0,0,0,0.1)]' : 'mt-3'}`}>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            <Image src="/logo1.webp" alt="eTech Logo" className="w-10 h-10 md:w-11 md:h-11 object-contain relative z-10"  width={800} height={800} unoptimized={false} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[22px] md:text-[24px] font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">eTech</span>
            <span className="text-[8.5px] md:text-[9px] text-blue-600 font-bold tracking-[0.2em] uppercase mt-0.5">Residential College</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            link.subLinks ? (
              <div key={link.name} className="relative" data-dropdown-root>
                <button
                  onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === link.name ? null : link.name); }}
                  className={`relative px-4 py-2 rounded-full text-[14px] font-bold transition-all duration-300 flex items-center gap-1.5 ${
                    isLinkActive(link)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50/50"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openDropdown === link.name ? '-rotate-180 text-blue-600' : ''
                    } ${isLinkActive(link) ? 'text-blue-600' : 'text-slate-400'}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isLinkActive(link) && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                  )}
                </button>

                {/* Facilities mega dropdown */}
                {link.name === "Facilities" ? (
                  <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[420px] bg-white/97 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_20px_48px_rgba(0,0,0,0.13)] transition-all duration-200 p-4 origin-top z-50 ${
                    openDropdown === link.name
                      ? 'opacity-100 visible top-full'
                      : 'opacity-0 invisible top-[110%] pointer-events-none'
                  }`}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white/97" />

                    <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-400 px-2 mb-2">Campus Facilities</p>
                    <div className="grid grid-cols-2 gap-0.5 mb-3">
                      {link.subLinks.slice(0, 6).map(sub => (
                        <Link key={sub.name} href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 text-slate-600 hover:bg-blue-50 hover:text-blue-700 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover/item:scale-125 transition-transform" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>

                    <div className="h-px bg-slate-100 mx-2 mb-3" />

                    <p className="text-[10px] font-black tracking-[0.18em] uppercase text-slate-400 px-2 mb-2">Services &amp; Support</p>
                    <div className="grid grid-cols-2 gap-0.5 mb-3">
                      {link.subLinks.slice(6).map(sub => (
                        <Link key={sub.name} href={sub.href}
                          onClick={() => setOpenDropdown(null)}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 group-hover/item:scale-125 transition-transform" />
                          {sub.name}
                        </Link>
                      ))}
                    </div>

                    <div className="h-px bg-slate-100 mx-2 mb-3" />
                    <Link href="/facilities"
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600 text-white text-[13px] font-bold hover:bg-blue-700 transition-colors">
                      View All Facilities
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                ) : (
                  <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white/97 backdrop-blur-2xl border border-white/80 rounded-2xl shadow-[0_20px_48px_rgba(0,0,0,0.13)] transition-all duration-200 p-3 origin-top z-50 ${
                    openDropdown === link.name
                      ? 'opacity-100 visible top-full'
                      : 'opacity-0 invisible top-[110%] pointer-events-none'
                  }`}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-b-white/97" />
                    {link.subLinks.map(sub => (
                      <Link key={sub.name} href={sub.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 group/item ${
                          pathname === sub.href.split('#')[0]
                            ? "bg-blue-50 text-blue-700"
                            : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                        }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover/item:scale-125 transition-transform" />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href!}
                className={`relative px-4 py-2 rounded-full text-[14px] font-bold transition-all duration-300 overflow-hidden group/link ${
                  isLinkActive(link)
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50/50"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isLinkActive(link) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                )}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2.5 rounded-full bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile Dropdown Menu ── */}
      <div className={`lg:hidden w-[95vw] md:w-[90vw] mx-auto bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-100 pointer-events-auto flex flex-col transition-all duration-300 origin-top ${menuOpen ? 'mt-3 opacity-100 scale-y-100 max-h-[80vh] overflow-y-auto overscroll-contain' : 'mt-0 opacity-0 scale-y-0 h-0 overflow-hidden'}`}>
        {navLinks.map((link, i) => (
          link.subLinks ? (
            <div key={link.name} className={`flex flex-col border-slate-100 ${i !== 0 && 'border-t'}`}>
              <div className="px-6 py-4 text-[13px] font-black tracking-widest uppercase text-slate-400 bg-slate-50/50">
                {link.name}
              </div>
              {link.name === "Facilities" && (
                <>
                  <div className="px-6 pt-1 pb-0.5 text-[10px] font-black tracking-[0.18em] uppercase text-blue-500">Campus Facilities</div>
                  {link.subLinks.slice(0, 6).map((sub, j) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 pl-8 pr-6 py-3 text-[14px] font-semibold transition-colors border-t border-slate-50 ${
                        pathname === sub.href.split('#')[0] ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {sub.name}
                    </Link>
                  ))}
                  <div className="px-6 pt-3 pb-0.5 text-[10px] font-black tracking-[0.18em] uppercase text-indigo-500">Services &amp; Support</div>
                  {link.subLinks.slice(6).map((sub, j) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-3 pl-8 pr-6 py-3 text-[14px] font-semibold transition-colors border-t border-slate-50 ${
                        pathname === sub.href.split('#')[0] ? "bg-indigo-50 text-indigo-700" : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {sub.name}
                    </Link>
                  ))}
                  <Link href="/facilities" onClick={() => setMenuOpen(false)} className="mx-4 my-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-[13px] font-bold hover:bg-blue-700 transition-colors">
                    View All Facilities
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </>
              )}
              {link.name !== "Facilities" && (
                <div className="flex flex-col">
                  {link.subLinks.map((sub, j) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center pl-10 pr-6 py-3.5 text-[15px] font-semibold transition-colors ${
                        j !== 0 && 'border-t border-slate-50'
                      } ${
                        pathname === sub.href.split('#')[0] ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.href!}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center px-6 py-4 text-[15px] font-bold transition-colors ${
                i !== 0 && 'border-t border-slate-100'
              } ${
                isLinkActive(link) ? "bg-blue-50 text-blue-700" : "text-slate-800 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {link.name}
            </Link>
          )
        ))}
      </div>

    </div>
  );
}
