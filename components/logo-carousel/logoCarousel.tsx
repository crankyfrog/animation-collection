"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "./logoCarousel.css";

interface LogoCarouselProps{
  photos: string[]
  speed: number
}

export default function LogoCarousel({photos, speed}:LogoCarouselProps) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const SPEED = speed /* pixels per second */

  useEffect(() => {
    if (!carouselRef.current) return;

    const updateWidths = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const items = Array.from(carousel.children) as HTMLElement[];
      if (items.length === 0) return;

      const firstItemWidth = items[0].offsetWidth;
      setItemWidth(firstItemWidth);

      const totalWidth = firstItemWidth * photos.length;

      gsap.killTweensOf(carousel);

      gsap.fromTo(
        carousel,
        { x: 0 },
        {
          x: `-${totalWidth}px`,
          ease: "none",
          duration: totalWidth / SPEED,
          repeat: -1,
          onRepeat: () => {
            gsap.set(carousel, { x: 0 });
            return undefined;
          },
        }
      );
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  return (
    <div className="carousel-container">
      <div ref={carouselRef} className="logo-container">
        {/* Duplicate items for seamless looping */}
        {[...photos, ...photos].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="logo"
            className="logo"
            width={itemWidth || 200}
            height={itemWidth || 144}
          />
        ))}
      </div>
    </div>
  );
}
