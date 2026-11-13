import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ultra Clipper — Turn long videos into viral 9:16 clips with AI",
  description:
    "Upload long-form video and Ultra Clipper's AI finds the viral hooks, crops to vertical 9:16, and burns in dynamic captions for TikTok, Reels, and YouTube Shorts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
