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
  title: "Laxman Alashetti | Full-Stack Developer | React, Angular & MERN",
  shortName: "Laxman Alashetti",
  description:
    "Laxman Alashetti is a Full-Stack Developer experienced in React, Angular, Next.js, TypeScript, Node.js and MongoDB, building production SaaS platforms, dashboards and modern web applications.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://laxman-portfolio-jade.vercel.app").replace(/\/$/, ""),
  ogImage: "/opengraph-image",
  keywords: [
    "Laxman Alashetti",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Angular Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "TypeScript Developer",
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
