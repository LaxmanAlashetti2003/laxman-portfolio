"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  LayoutDashboard,
  Code2,
  CheckCircle2,
  Wrench,
  Lightbulb,
} from "lucide-react";

const contributions = [
  "Built Dashboard UI components",
  "Developed Sidebar Navigation",
  "Integrated REST APIs",
  "Implemented CRUD workflows",
  "Search & Pagination",
  "Responsive Layouts",
  "Enterprise UI Components",
  "Angular Routing",
];

const techStack = [
  "Angular",
  "TypeScript",
  "PrimeNG",
  "Bootstrap",
  "REST APIs",
  "Git",
];

export default function SuperAdminShowcase() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition mb-12"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-3">
            Internal Enterprise Application
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Super Admin Dashboard
          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-8">
            During my internship at Bhojsoft Solutions, I contributed to the
            Angular-based Super Admin platform used for managing recruiters,
            institutes, job postings, assessments and enterprise workflows.
          </p>
        </motion.div>

        {/* Overview */}

        <section className="mt-20 grid lg:grid-cols-2 gap-10">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <LayoutDashboard className="text-blue-400" />
              My Contributions
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {contributions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-emerald-400 mt-1"
                  />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Code2 className="text-blue-400" />
              Technology Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </section>

        {/* Dashboard Screenshot */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold mb-8">
            Dashboard Interface
          </h2>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/super-admin/dashboard.png"
              alt="Super Admin Dashboard"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>

          <p className="text-zinc-400 mt-6 leading-8">
            Built responsive dashboard layouts with statistics cards,
            enterprise tables, navigation and API-driven data presentation.
          </p>

        </section>

        {/* Sidebar */}

        <section className="mt-24">

          <h2 className="text-3xl font-bold mb-8">
            Sidebar Navigation
          </h2>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/super-admin/code.png"
              alt="Angular Sidebar"
              width={1600}
              height={900}
              className="w-full"
            />
          </div>

          <p className="text-zinc-400 mt-6 leading-8">
            Developed reusable sidebar navigation using Angular Router,
            nested menus and component-based architecture to improve
            maintainability and navigation across modules.
          </p>

        </section>

        {/* Challenges */}

        <section className="grid lg:grid-cols-2 gap-8 mt-24">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-semibold mb-5 flex items-center gap-2">
              <Wrench className="text-orange-400" />
              Challenges
            </h3>

            <p className="text-zinc-400 leading-8">
              Backend APIs evolved frequently during development.
              I updated frontend modules while ensuring a stable user
              experience and maintaining compatibility with changing
              business requirements.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-semibold mb-5 flex items-center gap-2">
              <Lightbulb className="text-yellow-400" />
              Key Learnings
            </h3>

            <ul className="space-y-3 text-zinc-400">
              <li>• Enterprise Angular architecture</li>
              <li>• Production API integration</li>
              <li>• Component reusability</li>
              <li>• Angular Routing</li>
              <li>• Responsive dashboard design</li>
              <li>• Team collaboration</li>
            </ul>

          </div>

        </section>

      </div>
    </main>
  );
}