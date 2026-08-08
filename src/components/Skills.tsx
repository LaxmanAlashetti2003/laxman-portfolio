"use client";

import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    color: "from-blue-500 to-cyan-400",
    dotColor: "bg-blue-500",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    label: "Backend",
    color: "from-emerald-500 to-teal-400",
    dotColor: "bg-emerald-500",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    label: "Languages",
    color: "from-violet-500 to-purple-400",
    dotColor: "bg-violet-500",
    skills: ["Java", "SQL", "JavaScript", "TypeScript"],
  },
  {
    label: "Tools & Others",
    color: "from-amber-500 to-orange-400",
    dotColor: "bg-amber-500",
    skills: ["Git", "Cloudinary", "Stripe", "Tableau", "Prompt Engineering"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 bg-[#121212] py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.label}
              variants={item}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`w-2.5 h-2.5 rounded-full ${group.dotColor}`} />
                <h3 className={`text-lg font-semibold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-zinc-300 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
