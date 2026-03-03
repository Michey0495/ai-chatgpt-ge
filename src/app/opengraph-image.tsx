import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GEO Radar - AI検索エンジン可視性モニタリング";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            GEO
          </span>
          <span
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#22d3ee",
              letterSpacing: "-0.02em",
              marginLeft: "16px",
            }}
          >
            Radar
          </span>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          AI検索エンジンでのブランド可視性を監視・分析
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {["ChatGPT", "Gemini", "Perplexity", "Claude"].map((name) => (
            <div
              key={name}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "16px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          geo-radar.ezoai.jp
        </div>
      </div>
    ),
    { ...size }
  );
}
