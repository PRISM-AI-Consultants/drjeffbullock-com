import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// "JB" monogram on brand violet — the browser-tab mark for Dr. Jeff Bullock.
export default function Icon() {
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
          fontSize: 38,
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
