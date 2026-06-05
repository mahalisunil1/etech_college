"use client";

import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Stop observing once it's revealed to prevent extra computation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08, // Trigger when 8% of the element is visible
        rootMargin: '0px 0px -40px 0px' // Slightly offset the trigger point for a better visual cue
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically added nodes or updates (optional, but good practice)
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
