import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import InitialLoader from "@/components/InitialLoader";
import { siteConfig } from "@/lib/seo-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const canonicalUrl = `${siteConfig.url}/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: canonicalUrl }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: canonicalUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full-Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
};

function StructuredData() {
  const personId = `${siteConfig.url}/#person`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.author.name,
        url: canonicalUrl,
        jobTitle: "Full-Stack Developer",
        description: siteConfig.description,
        email: `mailto:${siteConfig.author.email}`,
        telephone: siteConfig.author.phone,
        sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
        knowsAbout: [
          "JavaScript",
          "TypeScript",
          "React",
          "Angular",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "REST APIs",
          "TailwindCSS",
          "Socket.io",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "SVERI's College of Engineering, Pandharpur",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "personal",
          email: siteConfig.author.email,
          telephone: siteConfig.author.phone,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: canonicalUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: canonicalUrl,
        name: siteConfig.title,
        inLanguage: "en",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "CreativeWork",
        name: "Image Alchemy",
        description:
          "AI-powered image editing web app built with Next.js, TypeScript, MongoDB, Cloudinary APIs, and Stripe, featuring image restoration, inpainting, object removal and background removal.",
        creator: { "@id": personId },
        keywords: "Next.js, TypeScript, MongoDB, Cloudinary, Stripe",
      },
      {
        "@type": "CreativeWork",
        name: "Instagram Clone",
        description:
          "Real-time social media application built with the MERN stack and Socket.io, featuring posts, messaging, and live notifications.",
        creator: { "@id": personId },
        keywords: "MongoDB, Express.js, React, Node.js, Socket.io",
      },
    ],
  };

  return (
    <Script
      id="ld-json-person"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/sequence/frame_000_delay-0.041s.webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <StructuredData />
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
