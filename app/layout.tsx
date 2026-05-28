import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentID",
  description: "Onchain identity and trust scoring for AI agents on Base.",
  other: {
    "talentapp:project_verification":
      "1948e94c3baeb8c17eaf4081e8c69c34d8bfd4d921a8619d2d0fa478464b96d5d122186c82c0e251ab4abc1b5ce4a6d3a482d3dbe1b4aebbb197b76a2ac0e370",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
