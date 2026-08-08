/**
 * Central site configuration for SEO / GEO metadata.
 *
 * IMPORTANT: Update NEXT_PUBLIC_SITE_URL in your production environment
 * (e.g. Vercel Project Settings → Environment Variables) to your real
 * deployed domain. Every canonical URL, OG tag, sitemap entry, and
 * JSON-LD "url" field derives from this single value.
 */
export const siteConfig = {
  name: "Laxman Alashetti",
  title: "Laxman Alashetti | MERN Stack & Full-Stack Developer",
  shortName: "Laxman Alashetti",
  description:
    "Laxman Alashetti is a MERN stack developer specializing in Next.js, React, Node.js, MongoDB, and Express. View projects, skills, and experience in this developer portfolio.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://laxmanalashetti.vercel.app",
  ogImage: "/opengraph-image",
  keywords: [
    "Laxman Alashetti",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Portfolio",
    "Frontend Developer India",
    "JavaScript Developer",
  ],
  author: {
    name: "Laxman Alashetti",
    email: "alashettilaxman@gmail.com",
    phone: "+91-8623998893",
  },
  social: {
    github: "https://github.com/LaxmanAlashetti2003",
    linkedin: "https://linkedin.com/in/laxmanalashetti2003",
  },
  locale: "en_US",
  themeColor: "#121212",
};

export type SiteConfig = typeof siteConfig;
