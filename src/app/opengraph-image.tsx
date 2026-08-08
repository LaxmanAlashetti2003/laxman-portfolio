import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — MERN Stack Developer Portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#121212",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#71717a",
            marginBottom: 24,
          }}
        >
          MERN Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          Laxman Alashetti
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 30,
            color: "#a1a1aa",
          }}
        >
          Next.js · React · Node.js · MongoDB · Express
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            gap: 16,
          }}
        >
          {["MongoDB", "Express", "React", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                display: "flex",
                fontSize: 22,
                color: "#e4e4e7",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
