"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Frontend Software Engineer Intern",
    company: "Bhojsoft Solutions Pvt. Ltd.",
    period: "Mar 2026 – Present",
    points: [
      "Worked on production-scale SaaS platforms including Ximboa.com, Recruiter, Institute, Campus Drive and Super Admin Portal.",
      "Learned Angular within 4 days and successfully contributed to an existing enterprise Angular project.",
      "Developed complete Admin Dashboard modules with CRUD operations, search, pagination, export and integrated 25+ REST APIs.",
      "Built an Indeed/LinkedIn-inspired multi-step Job Posting System using React, TypeScript, TipTap, Material UI and Framer Motion.",
      "Created reusable React components and scalable frontend architecture for multiple production applications.",
      "Designed and developed Career Counselling Report UI including Ability Profile, Orientation Profile, Coping Style, Roadmap and Recommendations.",
      "Integrated Google Analytics, Firebase Analytics, Guest Token APIs, User Tracking and IP Tracking across multiple platforms.",
      "Implemented responsive landing pages, authentication flows, SEO improvements, Canonical URLs and performance optimizations.",
      "Migrated multiple JavaScript + Tailwind projects into TypeScript + SCSS while preserving existing business logic.",
      "Collaborated closely with backend developers to handle changing APIs, frontend workflows and production deployments."
    ],
  },
  {
    role: "Frontend Engineer Intern",
    company: "Katare Informatics, Solapur",
    period: "Jan 2024 – Feb 2024",
    points: [
      "Built responsive user interfaces using HTML, CSS, JavaScript and React.",
      "Converted Figma designs into pixel-perfect web pages.",
      "Worked on live client projects while improving frontend development fundamentals."
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "SVERI's COE, Pandharpur",
    period: "Pursuing",
    score: "CGPA: 7.72",
  },
  {
    degree: "HSC (12th)",
    institution: "D.B.F. Dayanand College of Arts & Science",
    period: "2021",
    score: "86.50%",
  },
  {
    degree: "SSC (10th)",
    institution: "Sambhaji Rao Shinde Prashala, Solapur",
    period: "2019",
    score: "73.20%",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" aria-label="About Laxman Alashetti: experience and education" className="relative z-20 bg-[#0e0e0e] py-32 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Experience ─────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-28"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Briefcase size={20} className="text-blue-400" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
          </div>

          {EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 border-l border-zinc-800 ml-4"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-[#0e0e0e]" />

              <div className="pb-8">
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <span className="text-sm text-zinc-500">{exp.company}</span>
                </div>
                <span className="text-xs tracking-widest uppercase text-zinc-600 mb-4 block">
                  {exp.period}
                </span>
                <ul className="space-y-2 mt-3">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-zinc-400 text-sm md:text-base leading-relaxed flex gap-2">
                      <span className="text-zinc-600 mt-1 shrink-0">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Education ──────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <GraduationCap size={20} className="text-emerald-400" aria-hidden="true" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-300"
              >
                <span className="text-xs tracking-widest uppercase text-zinc-600 mb-3 block">
                  {edu.period}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm text-zinc-500 mb-3">{edu.institution}</p>
                <span className="text-sm font-medium text-emerald-400">{edu.score}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
