"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative background elements with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo with decorative circle and shadow */}
        <div
          className="mb-8 relative inline-block"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-50 scale-110"></div>
          <div className="relative bg-white rounded-full p-8 shadow-2xl ring-4 ring-amber-200/50">
            <Image
              src="/assets/BNC-Logo transparent (1).png"
              alt="Bruckfelder Narren-Club Logo"
              width={260}
              height={260}
              className="mx-auto"
              priority
            />
          </div>
          {/* Decorative stars */}
          <div className="absolute -top-2 -right-2 text-4xl animate-pulse">✨</div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-pulse delay-150">⭐</div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-caveat)]">
          Bruckfelder Narren-Club e.V.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Wir sind ein kleiner, traditioneller Fasnetsverein aus Bruckfelden, der die
          schwäbisch-alemannische Fasnet lebt und das Dorfleben das ganze Jahr über bereichert.
          Bei uns verbinden sich Brauchtum, Gemeinschaft und echte Dorfkultur –
          offen für Jung und Alt, für alle, die gerne mit anpacken und dabei sind.
        </p>
      </div>
    </section>
  );
}
