import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentID",
  description: "Onchain identity and trust scoring for AI agents on Base.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
