import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DHRUV.EXE — Web3 & Frontend Developer",
  description:
    "Web3 & Frontend Developer building decentralized applications, smart contracts, and immersive interfaces on Ethereum, Polygon, and Base.",
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
