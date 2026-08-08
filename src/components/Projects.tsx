"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const GithubIcon = ({ size = 24, "aria-hidden": ariaHidden }: { size?: number; "aria-hidden"?: boolean | "true" | "false" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden={ariaHidden}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const PROJECTS = [
  {
    title: "Image Alchemy",
    subtitle: "AI-Powered Image Editing Web App",
    description:
      "Built with Next.js, TypeScript, MongoDB, Cloudinary APIs, and Stripe. Features include AI-powered image restoration, inpainting, object removal/recoloring, and background removal. Gained over 110 users in just two months.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Stripe"],
    link: "#",
    github: "#",
    highlight: "110+ users in 2 months",
  },
  {
    title: "Instagram Clone",
    subtitle: "Real-Time Social Media Application",
    description:
      "A full-stack social media app built with the MERN stack and Socket.io. Features include posts, messaging, and real-time notifications — fostering a community of 50+ active users.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    link: "#",
    github: "#",
    highlight: "50+ active users",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-[#121212] py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Selected Works
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-1.5"
            >
              {/* Hover glow */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3 text-zinc-600 pointer-events-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="hover:text-white transition-colors duration-300 p-1"
                    >
                      <GithubIcon size={20} aria-hidden="true" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="hover:text-white transition-colors duration-300 p-1"
                    >
                      <ExternalLink size={20} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Highlight badge */}
                <div className="inline-flex self-start mt-3 mb-5">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.highlight}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-zinc-400 bg-white/[0.04] rounded-full border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
