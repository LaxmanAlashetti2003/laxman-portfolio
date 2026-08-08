import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white px-4 text-center">
      <p className="text-sm tracking-[0.3em] uppercase text-zinc-500 mb-4">Error 404</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        Page Not Found
      </h1>
      <p className="text-zinc-500 max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors duration-300"
      >
        Back to Home
      </a>
    </main>
  );
}
