"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useCanvasScroll } from "./ScrollContext";

export default function Overlay() {
  const scrollYProgress = useCanvasScroll();

  const opacity2 = useTransform(scrollYProgress, [0, 0.02, 0.08, 0.12], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.12], [30, -30]);

  const opacity3Head = useTransform(scrollYProgress, [0.08, 0.12, 0.33, 0.38], [0, 1, 1, 0]);

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "SASS", "Bootstrap"];
  const feStart = 0.13;
  const feEnd = 0.33;
  const feStep = (feEnd - feStart) / frontendSkills.length;

  const opacity4Head = useTransform(scrollYProgress, [0.33, 0.37, 0.58, 0.63], [0, 1, 1, 0]);

  const backendSkills = ["Node.js", "Express", "REST API", "MongoDB", "JWT Auth"];
  const beStart = 0.38;
  const beEnd = 0.58;
  const beStep = (beEnd - beStart) / backendSkills.length;

  const opacity5 = useTransform(scrollYProgress, [0.58, 0.65, 0.98, 1], [0, 1, 1, 1]);
  const y5 = useTransform(scrollYProgress, [0.58, 0.75], [50, 0]);
  const scale5 = useTransform(scrollYProgress, [0.58, 0.75], [0.9, 1]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none text-white font-sans">
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute top-20 md:top-28 left-8 md:left-20 text-left"
      >
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-zinc-500 mb-2">
          I am Laxman
        </p>
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
          Started Learning <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Web Dev
          </span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3Head }}
        className="absolute top-20 md:top-28 left-8 md:left-20 text-left"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-2">Phase 01</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Learning Frontend
        </h2>

        <div className="space-y-3">
          {frontendSkills.map((skill, i) => {
            const skillStart = feStart + i * feStep;
            const skillMid = skillStart + feStep * 0.3;
            return (
              <SkillLine
                key={skill}
                label={skill}
                index={i + 1}
                scrollYProgress={scrollYProgress}
                fadeIn={[skillStart, skillMid]}
                fadeOut={[feEnd - 0.02, feEnd + 0.02]}
                direction="left"
              />
            );
          })}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity4Head }}
        className="absolute top-20 md:top-28 right-8 md:right-20 text-right"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-2">Phase 02</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
          Learning Backend
        </h2>

        <div className="space-y-3">
          {backendSkills.map((skill, i) => {
            const skillStart = beStart + i * beStep;
            const skillMid = skillStart + beStep * 0.3;
            return (
              <SkillLine
                key={skill}
                label={skill}
                index={i + 1}
                scrollYProgress={scrollYProgress}
                fadeIn={[skillStart, skillMid]}
                fadeOut={[beEnd - 0.02, beEnd + 0.02]}
                direction="right"
              />
            );
          })}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity5, y: y5, scale: scale5 }}
        className="absolute bottom-16 md:bottom-24 w-full text-center px-4"
      >
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-zinc-500 mb-3">
          Full-Stack Developer
        </p>
        <h1 className="text-4xl md:text-7xl font-black tracking-tight">
          Laxman Alashetti - Full-Stack Developer
        </h1>
        <p className="mt-5 mx-auto max-w-3xl text-sm md:text-base text-zinc-400 leading-7">
          I build production-ready web applications and SaaS platforms using
          React, Angular, Next.js, TypeScript, Node.js and MongoDB.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {["React", "Angular", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SkillLine({
  label,
  index,
  scrollYProgress,
  fadeIn,
  fadeOut,
  direction,
}: {
  label: string;
  index: number;
  scrollYProgress: MotionValue<number>;
  fadeIn: [number, number];
  fadeOut: [number, number];
  direction: "left" | "right";
}) {
  const opacity = useTransform(
    scrollYProgress,
    [fadeIn[0], fadeIn[1], fadeOut[0], fadeOut[1]],
    [0, 1, 1, 0]
  );
  const x = useTransform(
    scrollYProgress,
    [fadeIn[0], fadeIn[1]],
    [direction === "right" ? 40 : -40, 0]
  );

  return (
    <motion.div
      style={{ opacity, x }}
      className={`flex items-center gap-3 ${direction === "right" ? "justify-end" : "justify-start"}`}
    >
      {direction === "left" && (
        <span className="text-xs text-zinc-600 font-mono w-5">0{index}</span>
      )}
      <span className="text-lg md:text-2xl text-zinc-200 font-light">{label}</span>
      {direction === "right" && (
        <span className="text-xs text-zinc-600 font-mono w-5">0{index}</span>
      )}
    </motion.div>
  );
}
