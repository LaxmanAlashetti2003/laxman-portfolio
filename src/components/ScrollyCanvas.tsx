"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ScrollProvider } from "./ScrollContext";

const FRAME_COUNT = 192;

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Format: frame_000_delay-0.066s.webp
      const paddedIndex = String(i).padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.041s.webp`;
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

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

    const img = images[index];
    if (!img) return;
    
    // Draw only if it's completely loaded
    if (!img.complete) {
      img.onload = () => drawImage(index);
      return;
    }

    // Set canvas dimensions to window innerHeight/innerWidth to match CSS
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
    }

    // Object-fit: cover logic
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  useMotionValueEvent(currentIndex, "change", (latest) => {
    drawImage(Math.round(latest));
  });

  // Initial draw and resize handler
  useEffect(() => {
    if (images.length > 0) {
      if (images[0].complete) {
        drawImage(0);
      } else {
        images[0].onload = () => drawImage(0);
      }
    }
    
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      // Debounce slightly to prevent thrashing
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        drawImage(Math.round(currentIndex.get()));
      }, 50);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[1500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          role="presentation"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay content placed over the canvas */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <ScrollProvider value={scrollYProgress}>
            {children}
          </ScrollProvider>
        </div>
      </div>
    </div>
  );
}
