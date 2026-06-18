"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import UniversalLightbox from "../components/UniversalLightbox";
import ScrollReveal from "../components/ScrollReveal";

const eventsData = [
  {
    id: "felicitation",
    title: "Felicitation Program",
    desc: "Celebrating our academic champions and board toppers at state level award ceremonies.",
    cover: "/images/misc/awards-&-ceremonies-dsc-7614.webp",
    images: [
      { src: "/images/misc/awards-&-ceremonies-dsc-7614.webp", alt: "Felicitation Ceremony - State Topper Award" },
      { src: "/images/misc/awards-&-ceremonies-dsc-7621.webp", alt: "Academic Excellence Board Felicitation" },
      { src: "/images/misc/awards-&-ceremonies-dsc-7633.webp", alt: "Felicitation Ceremony Stage Group Photo" },
      { src: "/images/misc/awards-&-ceremonies-dsc-7665.webp", alt: "Board Achievers Felicitation" },
      { src: "/images/misc/awards-&-ceremonies-dsc-7678.webp", alt: "Toppers Honored by Dignitaries" },
      { src: "/images/events/events-2026-events-falicitation-dsc-7508.webp", alt: "Academic Excellence Felicitation" },
      { src: "/images/events/events-2026-events-falicitation-dsc-7541.webp", alt: "Board Toppers Group Felicitation" },
      { src: "/images/events/events-2026-events-falicitation-dsc-7828.webp", alt: "Staff and Toppers Celebrations" },
      { src: "/images/events/events-2026-events-falicitation-dsc-7835.webp", alt: "Student receiving State-level Award" },
      { src: "/images/events/events-2026-events-falicitation-dsc-7846.webp", alt: "2026 Felicitation Ceremony Stage" },
      { src: "/images/misc/falicitation-dsc-7836.webp", alt: "Felicitation Program Awardee" },
      { src: "/images/misc/falicitation-dsc-7837.webp", alt: "Felicitation Program Celebration" },
    ]
  },
  {
    id: "annual-function",
    title: "Annual Function",
    desc: "A vibrant showcase of art, music, dance, and cultural performances by our talented students.",
    cover: "/images/events/annual-function-2026-DSC-9210.webp",
    images: [
      { src: "/images/events/events-annual-function-dsc-9210.webp", alt: "Annual Function 2026 Inauguration" },
      { src: "/images/events/events-annual-function-dsc-9312.webp", alt: "Annual Function Dance Performance" },
      { src: "/images/events/events-annual-function-dsc-9323.webp", alt: "Traditional Dance Performance" },
      { src: "/images/events/events-annual-function-dsc-9364.webp", alt: "Vibrant Student Performance" },
      { src: "/images/events/events-annual-function-dsc-9391.webp", alt: "Group Song Presentation" },
      { src: "/images/events/events-annual-function-dsc-9445.webp", alt: "Student Play Act" },
      { src: "/images/events/events-annual-function-dsc-9535.webp", alt: "Classical Dance Performance" },
      { src: "/images/events/events-annual-function-dsc-9574.webp", alt: "Audience and Stage view" },
      { src: "/images/events/events-annual-function-dsc-9755.webp", alt: "Prize Distribution Ceremony" },
      { src: "/images/events/events-annual-function-dsc-9960.webp", alt: "Cultural Event Finale" },
    ]
  },
  {
    id: "farewell",
    title: "Farewell Ceremony",
    desc: "A bittersweet occasion to bid adieu to our graduating batch as they set out to conquer new heights.",
    cover: "/images/events/events-farewell-dsc-2513.webp",
    images: [
      { src: "/images/events/events-farewell-dsc-2513.webp", alt: "Farewell Ceremony Group Celebration" },
      { src: "/images/events/events-farewell-dsc-2496.webp", alt: "Seniors Farewell Group Photo" },
      { src: "/images/events/events-farewell-dsc-2523.webp", alt: "Farewell Function Candle Lighting" },
      { src: "/images/events/events-farewell-dsc-2555.webp", alt: "Juniors Performing for Seniors" },
      { src: "/images/events/events-farewell-dsc-2597.webp", alt: "Staff and Graduating Batch" },
      { src: "/images/events/events-farewell-dsc-2606.webp", alt: "Seniors Receiving Memorabilia" },
      { src: "/images/events/events-farewell-dsc-2640.webp", alt: "Principal Addressing the Batch" },
      { src: "/images/events/events-farewell-dsc-2687.webp", alt: "Emotional Farewell Moment" },
      { src: "/images/events/events-farewell-dsc-0010.webp", alt: "Graduation Celebration Batch photo" },
      { src: "/images/events/events-farewell-dsc-0025.webp", alt: "Farewell Cake Cutting" },
      { src: "/images/events/events-farewell-dsc-0048.webp", alt: "Seniors Group Photo Outdoors" },
      { src: "/images/events/events-farewell-dsc-0060.webp", alt: "Farewell Speech Session" },
      { src: "/images/events/events-farewell-dsc-0126.webp", alt: "Student Cultural Program" },
    ]
  },
  {
    id: "jan-26",
    title: "Republic Day (Jan 26)",
    desc: "Celebrating our nation's constitutional values with patriotic flag hoisting and parade displays.",
    cover: "/images/events/events-jan-26-dsc-9251.webp",
    images: [
      { src: "/images/events/events-jan-26-dsc-9251.webp", alt: "Republic Day Flag Hoisting" },
      { src: "/images/events/events-jan-26-dsc-9220.webp", alt: "Republic Day Parade Drill" },
      { src: "/images/events/events-jan-26-dsc-9239.webp", alt: "Student Parade Formations" },
      { src: "/images/events/events-jan-26-dsc-9267.webp", alt: "Republic Day Address by Management" },
    ]
  },
  {
    id: "national-unity-day",
    title: "National Unity Day",
    desc: "Commemorating the birth anniversary of Sardar Vallabhbhai Patel with Unity Run and pledges.",
    cover: "/images/events/events-national-unity-day-dsc-0002.webp",
    images: [
      { src: "/images/events/events-national-unity-day-dsc-0002.webp", alt: "Run for Unity March" },
      { src: "/images/events/events-national-unity-day-dsc-0014.webp", alt: "National Unity Pledge Ceremony" },
    ]
  },
  {
    id: "prathamastami",
    title: "Prathamastami",
    desc: "Celebrating the traditional Odia festival with pooja rituals, special attire, and temple visits.",
    cover: "/images/events/events-prathamastami-dsc-6791.webp",
    images: [
      { src: "/images/events/events-prathamastami-dsc-6791.webp", alt: "Prathamastami Pooja Celebrations" },
      { src: "/images/events/events-prathamastami-dsc-6812.webp", alt: "Traditional Dance Presentation" },
      { src: "/images/events/events-prathamastami-dsc-6822.webp", alt: "Sweet Distribution & Festivities" },
    ]
  },
  {
    id: "swachata-abhiyan",
    title: "Swachata Abhiyan",
    desc: "Promoting cleanliness, hygiene, and community responsibility through campus cleanliness drives.",
    cover: "/images/events/events-swacchata-abhiyan-dsc-0004.webp",
    images: [
      { src: "/images/events/events-swacchata-abhiyan-dsc-0004.webp", alt: "Swachhata Cleanliness Drive Launch" },
      { src: "/images/events/events-swacchata-abhiyan-dsc-0027.webp", alt: "Student volunteers cleaning campus grounds" },
    ]
  }
];

export default function EventsPage() {
  const [loaded, setLoaded] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const selectedEvent = eventsData.find(e => e.id === selectedEventId);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <ScrollReveal />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image src="/images/events/events-annual-function-dsc-9960.webp"
            alt="Campus Cultural Events"
            className={`w-full h-full object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-40 ${
              loaded ? "scale-100" : "scale-110"
            }`}
           width={800} height={800} unoptimized={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
        </div>

        <div className="relative z-10 w-[90vw] mx-auto px-6 sm:px-12 lg:px-16 pb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-10 h-px bg-[#fbbf24]" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#fbbf24] uppercase">
              Life at eTech
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-serif font-bold text-white tracking-tight leading-[0.95] mb-6">
            College <span className="text-blue-400">Events</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
            Explore the vibrant campus life at eTech. From state-level award ceremonies and cultural fests to national celebrations and cleanliness drives.
          </p>
        </div>
      </section>

      {/* ── EVENTS LIST GRID ── */}
      <section className="py-20 md:py-32 relative z-10 w-full overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="w-[90vw] mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-blue-600" /> Celebrations & Activities <span className="w-8 h-[2px] bg-blue-600" />
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Event Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, idx) => (
              <div
                key={event.id}
                onClick={() => {
                  setSelectedEventId(event.id);
                  setActiveImgIdx(0);
                }}
                className="group cursor-pointer bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-[420px]"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                  <Image src={event.cover}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   width={800} height={800} unoptimized={false} />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-white/10 shadow-md">
                    {event.images.length} Photos
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-slate-900 font-bold text-xl md:text-2xl tracking-tight leading-snug group-hover:text-blue-600 transition-colors mb-2">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                      {event.desc}
                    </p>
                  </div>

                  <span className="text-blue-600 font-semibold text-xs tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all mt-4">
                    View Gallery &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniversalLightbox
        isOpen={selectedEventId !== null && selectedEvent !== undefined}
        onClose={() => setSelectedEventId(null)}
        image={
          selectedEvent !== undefined && selectedEvent.images[activeImgIdx]
            ? {
                src: selectedEvent.images[activeImgIdx].src,
                label: selectedEvent.images[activeImgIdx].alt,
                desc: selectedEvent.title,
              }
            : null
        }
        showNavigation={selectedEvent !== undefined && selectedEvent.images.length > 1}
        onNext={() => setActiveImgIdx((prev) => (prev + 1) % (selectedEvent?.images.length || 1))}
        onPrev={() => setActiveImgIdx((prev) => (prev - 1 + (selectedEvent?.images.length || 1)) % (selectedEvent?.images.length || 1))}
      />
    </div>
  );
}
