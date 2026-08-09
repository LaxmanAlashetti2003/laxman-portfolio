"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ScrollProvider } from "./ScrollContext";

const FRAME_COUNT = 192;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const framesToLoad = shouldReduceMotion ? 1 : FRAME_COUNT;

    for (let i = 0; i < framesToLoad; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.webp`;
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, [shouldReduceMotion]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawImage = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[shouldReduceMotion ? 0 : index];
    if (!img) return;

    if (!img.complete) {
      img.onload = () => drawImage(index);
      return;
    }

    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShiftX,
      centerShiftY,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(currentIndex, "change", (latest) => {
    if (!shouldReduceMotion) {
      drawImage(Math.round(latest));
    }
  });

  useEffect(() => {
    if (images.length > 0) {
      if (images[0].complete) {
        drawImage(0);
      } else {
        images[0].onload = () => drawImage(0);
      }
    }

    const handleResize = () => {
      drawImage(shouldReduceMotion ? 0 : Math.round(currentIndex.get()));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [images, shouldReduceMotion, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[1500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          role="presentation"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
          <ScrollProvider value={scrollYProgress}>{children}</ScrollProvider>
        </div>
      </div>
    </div>
  );
}
