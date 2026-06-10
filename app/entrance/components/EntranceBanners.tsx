"use client";

import { useState } from "react";
import Image from "next/image";
import { entranceData } from "./EntranceResultsData";

export default function EntranceBanners() {
  const [activeTab, setActiveTab] = useState<"JEE" | "NEET" | "AWARDS">("JEE");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const activeImages = entranceData.banners[activeTab] || [];

  return (
    <section className="py-20 bg-slate-50 relative z-10 w-full overflow-hidden">
      <div className="w-[90vw] mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Banners & Events</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {(["JEE", "NEET", "AWARDS"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? "bg-[#1E3A8A] text-white shadow-md" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {tab === "AWARDS" ? "Awards & Ceremony" : `${tab} Banners`}
              </button>
            ))}
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {activeImages.length > 0 ? (
            activeImages.map((src, idx) => (
              <div 
                key={idx} 
                className="group relative aspect-video bg-slate-200 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedImg(`/${src}`)}
              >
                <Image 
                  src={`/${src}`} 
                  alt={`${activeTab} Banner`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  unoptimized={false} 
                />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-slate-500 font-medium bg-white rounded-2xl border border-dashed border-slate-200">
              No banners available for this selection yet.
            </div>
          )}
        </div>
      </div>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedImg !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0d1526]/95 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-10 cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="animate-scaleIn flex items-center justify-center max-w-[95vw] max-h-[90vh] relative w-full h-full p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImg}
              alt="Expanded view"
              fill
              className="object-contain drop-shadow-2xl"
              unoptimized={false} 
            />
          </div>
        </div>
      )}
    </section>
  );
}
