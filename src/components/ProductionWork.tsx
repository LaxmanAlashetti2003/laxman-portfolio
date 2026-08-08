"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  LayoutDashboard,
  GraduationCap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const WORKS = [
 {
  icon: Building2,
  title: "Bhojsoft Solutions",
  subtitle: "Frontend Developer Intern",
  highlight: "5+ Production Platforms",
  description:
    "Contributed to the development of multiple production-grade platforms including Ximboa.com, Recruiter, Institute, Campus Drive and Super Admin. Worked on React, Angular, TypeScript, REST APIs, Firebase Analytics, SEO, responsive UI and production deployments.",
  tags: [
    "React",
    "Angular",
    "TypeScript",
    "REST APIs",
    "Firebase",
    "SEO"
  ],
  link: "https://ximboa.com",
},
 {
  icon: Briefcase,
  title: "Recruiter Platform",
  subtitle: "Recruitment SaaS",
  highlight: "Flagship Frontend Module",
  description:
    "Built and enhanced an Indeed-inspired recruiter workflow including multi-step job posting, TipTap editor, premium posting, draft management, authentication improvements, applicant management and responsive UI.",
  tags: [
    "React",
    "TypeScript",
    "TipTap",
    "Framer Motion",
    "Material UI"
  ],
  link: "https://recruiter.ximboa.com",
},
  {
  icon: LayoutDashboard,
  title: "Super Admin",
  subtitle: "Enterprise Dashboard",
  highlight: "25+ API Integrations",
  description:
    "Contributed to the Angular-based Super Admin platform by building dashboard interfaces, sidebar navigation, CRUD modules, search, pagination, Excel export, responsive layouts and integrating REST APIs for enterprise administration workflows.",
  tags: [
    "Angular",
    "TypeScript",
    "PrimeNG",
    "Dashboard",
    "REST APIs",
    "Responsive"
  ],
  link: "/super-admin-showcase",
  internal: true,
},
  {
  icon: GraduationCap,
  title: "Institute Platform",
  subtitle: "Education Ecosystem",
  highlight: "Analytics + Landing Pages",
  description:
    "Developed institute landing pages, internship request flow, campus drive features, Firebase Analytics, Google Analytics, responsive layouts, guest tracking and SEO improvements.",
  tags: [
    "React",
    "Analytics",
    "Firebase",
    "SEO",
    "Responsive"
  ],
  link: "https://institute.ximboa.com",
},
  {
  icon: BarChart3,
  title: "Career Counselling",
  subtitle: "Assessment Experience",
  highlight: "Complete Report UI",
  description:
    "Designed and implemented the Career Report experience including student profile, ability profile, orientation profile, coping style, recommendations, roadmap and modern responsive layouts.",
  tags: [
    "React",
    "TypeScript",
    "UI Design",
    "Charts",
    "Responsive"
  ],
  link: "https://ximboa.com/career_counseling",
},
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ProductionWork() {
  return (
    <section
      id="production-work"
      className="relative bg-[#0f0f10] py-32 px-4 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-sm text-zinc-500 mb-4">
            Professional Experience
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Production Work
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-zinc-400 leading-8 text-lg">
            Real-world software engineering experience building enterprise SaaS
            products, recruitment platforms, admin dashboards and assessment
            systems used in production.
          </p>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto mt-8" />
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {WORKS.map((work, index) => {
            const Icon = work.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-center justify-between">

                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon className="text-blue-400" size={26} />
                  </div>

                  <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-3 py-1">
                    {work.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-8">
                  {work.title}
                </h3>

                <p className="text-zinc-500 mt-1">{work.subtitle}</p>

                <p className="text-zinc-400 mt-6 leading-7">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               {work.internal ? (
  <a
    href={work.link}
    aria-label={`View ${work.title} showcase`}
    className="inline-flex items-center gap-2 mt-8 text-amber-400 hover:text-amber-300 transition-colors"
  >
    View Screenshots & Contributions
    <ArrowUpRight size={18} />
  </a>
) : (
  <a
    href={work.link}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${work.title}`}
    className="inline-flex items-center gap-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors"
  >
    View Live Platform
    <ArrowUpRight size={18} />
  </a>
)}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}