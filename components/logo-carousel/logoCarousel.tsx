"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import "./logoCarousel.css";

const logos = [
  "/logos/logo.png",
  "/logos/logo.png",
  "/logos/logo.png",
  "/logos/logo.png",
  "/logos/logo.png",
  "/logos/logo.png"
];

export default function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const SPEED = 100; // Speed in pixels per second

  useEffect(() => {
    if (!carouselRef.current) return;

    const updateWidths = () => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      const items = Array.from(carousel.children) as HTMLElement[];
      if (items.length === 0) return;

      const firstItemWidth = items[0].offsetWidth;
      setItemWidth(firstItemWidth);

      const totalWidth = firstItemWidth * logos.length;

      // Kill previous animations before starting a new one
      gsap.killTweensOf(carousel);

      // GSAP infinite scrolling animation
      gsap.fromTo(
        carousel,
        { x: 0 },
        {
          x: `-${totalWidth}px`,
          ease: "none",
          duration: totalWidth / SPEED, // Ensures constant speed regardless of screen width
          repeat: -1,
          onRepeat: () => gsap.set(carousel, { x: 0 }), // Instantly reset position to loop seamlessly
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
        {[...logos, ...logos].map((src, index) => (
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
