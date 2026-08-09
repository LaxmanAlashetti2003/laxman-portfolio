"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Image Alchemy",
    subtitle: "AI-Powered Image Editing Web Application",
    description:
      "Built with Next.js, TypeScript, MongoDB, Cloudinary APIs and Stripe. The app supports image restoration, inpainting, object removal and background removal in a production-ready workflow.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Cloudinary", "Stripe"],
    features: ["Image restoration", "Inpainting", "Object removal", "Background removal"],
  },
  {
    title: "Instagram Clone",
    subtitle: "Real-Time Social Media Application",
    description:
      "A MERN stack social application with Socket.io for live messaging and notifications, plus core post interactions built for responsive use across devices.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    features: ["Posts", "Messaging", "Real-time notifications", "Responsive UI"],
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Selected Projects
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
          {PROJECTS.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/[0.12] hover:-translate-y-1.5"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex flex-col gap-2 mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{project.subtitle}</p>
                </div>

                <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-600 mb-3">Features</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium text-zinc-300 bg-white/[0.04] rounded-full border border-white/[0.06]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

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

                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Public links not provided
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
