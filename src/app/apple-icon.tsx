import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen / bookmark icon — "JB" monogram on brand violet.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#7C3AED",
          color: "#FAFAF9",
          fontSize: 104,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          fontFamily: "sans-serif",
        }}
      >
        JB
      </div>
    ),
    { ...size }
  );
}
