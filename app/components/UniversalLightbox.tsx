"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export interface LightboxImage {
  src: string;
  label?: string;
  desc?: string;
  alt?: string;
}

interface UniversalLightboxProps {
  isOpen: boolean;
  onClose: () => void;

  // Single image mode
  image?: LightboxImage | string | null;

  // Gallery mode (if controlled by parent)
  onNext?: () => void;
  onPrev?: () => void;
  showNavigation?: boolean;
}

export default function UniversalLightbox({
  isOpen,
  onClose,
  image,
  onNext,
  onPrev,
  showNavigation = false,
}: UniversalLightboxProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // Prevent scrolling on html as well for some mobile browsers
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      
      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  // Normalize image data
  let currentImg: LightboxImage | null = null;
  if (typeof image === "string") {
    currentImg = { src: image };
  } else if (image) {
    currentImg = image;
  }

  if (!currentImg) return null;

  const content = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0d1526]/95 backdrop-blur-md animate-fadeIn touch-none"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-50 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev Button */}
      {showNavigation && onPrev && (
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-50 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {showNavigation && onNext && (
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#fbbf24] hover:text-[#0f1e45] hover:border-[#fbbf24] transition-all duration-200 z-50 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image Container */}
      <div
        className="animate-scaleIn flex flex-col items-center justify-center max-w-[95vw] max-h-[90vh] relative w-full h-full p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[75vh] flex items-center justify-center flex-1">
          <Image
            src={currentImg.src}
            alt={currentImg.label || currentImg.alt || "Expanded view"}
            fill
            className="object-contain drop-shadow-2xl"
            unoptimized={false}
          />
        </div>

        {/* Optional Label and Description */}
        {(currentImg.label || currentImg.desc) && (
          <div className="mt-6 text-center max-w-2xl bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
            {currentImg.label && <h4 className="text-white text-lg md:text-xl font-bold">{currentImg.label}</h4>}
            {currentImg.desc && <p className="text-slate-300 text-sm md:text-base mt-2">{currentImg.desc}</p>}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
