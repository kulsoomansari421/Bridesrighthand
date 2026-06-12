"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollZoomImage() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-75 w-full overflow-hidden bg-[#f7f3ee] sm:h-95 lg:h-115"
    >
      {/* DOTS BACKGROUND */}
      <div className="absolute inset-0 hero-dots-overlay opacity-70 pointer-events-none" />

      {/* IMAGE */}
      <Image
        src="/addons.png"
        alt="Treat Package"
        fill
        className={`relative z-10 object-contain transition-transform duration-1400 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${inView ? "scale-190" : "scale-100"}
        `}
      />
    </div>
  );
}