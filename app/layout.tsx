import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DHRUV.EXE — Frontend Software Engineer",
  description:
    "Frontend Software Engineer building production-grade fintech and Web3 platforms with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
