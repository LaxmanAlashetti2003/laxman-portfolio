
"use client";

import { useEffect, useRef, useState } from "react";

const MIN_DURATION_MS = 2600;
const FADE_DURATION_MS = 900;
const HOLD_PROGRESS = 94;

function easeOutQuart(value: number) {
  return 1 - Math.pow(1 - value, 4);
}

export default function InitialLoader() {
  const [progress, setProgress] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const progressRef = useRef(1);
  const startTimeRef = useRef<number | null>(null);
  const readyRef = useRef(false);

  const rafRef = useRef<number | null>(null);
  const fadeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const restoreOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const unlockScroll = () => {
      document.body.style.overflow = restoreOverflow;
    };

    const markReady = () => {
      readyRef.current = true;
    };

    if (document.readyState === "complete") {
      markReady();
    }

    const onLoad = () => {
      markReady();
    };

    window.addEventListener("load", onLoad, { once: true });

    if (document.fonts?.ready) {
      document.fonts.ready.then(markReady).catch(() => {});
    }

    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }

      const elapsed = now - startTimeRef.current;

      const normalizedTime = Math.min(
        elapsed / MIN_DURATION_MS,
        1
      );

      const easedProgress =
        easeOutQuart(normalizedTime);

      const baseTarget =
        1 + easedProgress * (HOLD_PROGRESS - 1);

      const canFinish =
        readyRef.current &&
        elapsed >= MIN_DURATION_MS;

      const target = canFinish
        ? 100
        : baseTarget;

      /*
       * Smooth interpolation.
       * Lower value = slower / more cinematic.
       */
      const smoothing = canFinish ? 0.12 : 0.055;

      const nextProgress =
        progressRef.current +
        (target - progressRef.current) * smoothing;

      const clampedProgress = canFinish
        ? Math.min(100, nextProgress)
        : Math.min(nextProgress, HOLD_PROGRESS);

      progressRef.current = clampedProgress;

      setProgress(
        Math.max(1, Math.round(clampedProgress))
      );

      if (
        canFinish &&
        clampedProgress >= 99.5
      ) {
        setProgress(100);
        setIsFadingOut(true);

        fadeTimerRef.current =
          window.setTimeout(() => {
            unlockScroll();
            setIsMounted(false);
          }, FADE_DURATION_MS);

        return;
      }

      rafRef.current =
        window.requestAnimationFrame(tick);
    };

    rafRef.current =
      window.requestAnimationFrame(tick);

    return () => {
      unlockScroll();

      window.removeEventListener(
        "load",
        onLoad
      );

      if (rafRef.current !== null) {
        window.cancelAnimationFrame(
          rafRef.current
        );
      }

      if (fadeTimerRef.current !== null) {
        window.clearTimeout(
          fadeTimerRef.current
        );
      }
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#090909]
        transition-all
        ease-[cubic-bezier(0.76,0,0.24,1)]
        ${
          isFadingOut
            ? "pointer-events-none opacity-0 scale-[1.02] duration-[900ms]"
            : "opacity-100 scale-100 duration-300"
        }
      `}
    >
      {/* Ambient background glow */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.07), transparent 38%)",
        }}
      />

      {/* Main content */}
      <div
        className="
          relative
          flex w-[min(520px,86vw)]
          flex-col
          items-center
        "
      >
        {/* Percentage */}
        <div
          className="
            overflow-hidden
            leading-none
          "
        >
          <div
            className="
              font-mono
              text-[clamp(5rem,16vw,9rem)]
              font-medium
              tracking-[-0.09em]
              text-white
              transition-transform
              duration-500
              ease-out
            "
          >
            {progress}
            <span
              className="
                ml-2
                text-[0.85em]
                font-normal
                tracking-normal
                text-white/35
              "
            >
              %
            </span>
          </div>
        </div>

        {/* Small label */}
        <div
          className="
            mt-5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.5em]
            text-white/35
          "
        >
          Please wait
        </div>

        {/* Progress line */}
        <div
          className="
            mt-10
            h-px
            w-full
            overflow-hidden
            bg-white/[0.12]
          "
        >
          <div
            className="
              h-full
              bg-white
              transition-[width]
              duration-100
              ease-linear
            "
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        {/* Bottom information */}
        <div
          className="
            mt-3
            flex
            w-full
            items-center
            justify-between
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-white/25
          "
        >
          <span>Loading</span>

          <span>
            {progress >= 100
              ? "Ready"
              : "Experience"}
          </span>
        </div>
      </div>
    </div>
  );
}

