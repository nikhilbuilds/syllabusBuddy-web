import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#010f0f",
        }}
      >
        <img
          src="https://syllabusbuddy.com/logo.png"
          alt="SyllabusBuddy"
          width={180}
          height={180}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
