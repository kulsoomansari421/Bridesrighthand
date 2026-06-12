"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

const slides = [
  {
    src: "/bridesright1.png",
    alt: "Bridal concierge preparing a bride",
  },
  {
    src: "/bridesright2.png",
    alt: "Luxury wedding day coordination support",
  },
  {
    src: "/bridesright3.png",
    alt: "Bride receiving calm support from concierge",
  },
  {
    src: "/Bridegettingready.png",
    alt: "Bridal preparations with a dedicated assistant",
  },
];

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#f9f4ef] shadow-[0_30px_90px_rgba(17,15,14,0.08)]">
      <div className="relative h-[360px] w-full sm:h-[520px] lg:h-[680px]">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
            />

            {/* Badge overlay on each slide */}
            <div className="absolute bottom-4 left-4 rounded-3xl bg-white px-4 py-3 shadow-xl sm:bottom-6 sm:left-6 sm:px-6 sm:py-4">
              <p className={`${allura.className} text-[24px] text-[#c7a06a] sm:text-[28px]`}>
                Trusted
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#6f625a] sm:text-[10px]">
                By 250+ Brides
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3 rounded-full bg-black/10 px-3 py-2 backdrop-blur-sm">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#bc9b65] w-8" : "bg-white/80"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
