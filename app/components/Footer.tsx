"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 relative z-20 overflow-hidden border-t border-slate-900">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 pt-20 pb-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3 cursor-pointer">
                {/* Logo Icon */}
                <div className="w-12 h-12 relative flex items-center justify-center bg-white rounded-full p-1 shadow-md">
                  <Image src="/logo1.webp" alt="eTech Logo" className="w-full h-full object-contain"  width={800} height={800} unoptimized={false} />
                </div>
                {/* Logo Text */}
                <div className="flex flex-col">
                   <span className="text-[24px] font-serif font-bold text-white leading-none tracking-tight">eTech</span>
                   <span className="text-[10px] text-slate-400 font-semibold tracking-[0.15em] mt-1 leading-[1.2]">RESIDENTIAL<br/>COLLEGE</span>
                </div>
              </div>
            </Link>
            <p className="text-[#a0b0d0] text-sm leading-relaxed max-w-xs mt-1">
              Building future Doctors through quality education, discipline, and personal guidance.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="https://www.facebook.com/etech1etech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://www.instagram.com/etech_group_of_institutions?igsh=MW5yc2V2cG5wcG8xbQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/admissions" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Admissions</Link></li>
              <li><Link href="/facilities" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Facilities</Link></li>
              <li><Link href="/gallery" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Gallery</Link></li>
              <li><Link href="/results" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Results</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">Programs</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/programs/science" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">+2 Science</Link></li>
              <li><Link href="/programs/residential" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Residential Coaching</Link></li>
              <li><Link href="/programs/neet" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">NEET Preparation</Link></li>
              <li><Link href="/programs/jee" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">JEE Preparation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-slate-400 text-sm leading-relaxed">
                  eTech Residential H.S. School,<br />
                  Mangalpur, Dhenkanal,<br />
                  Odisha, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="text-slate-400 text-sm">+91-9439626264</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:etechdkl1@gmail.com" className="text-slate-400 text-sm hover:text-blue-400 transition-colors">etechdkl1@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium">
            &copy; {currentYear} eTech Residential College. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
