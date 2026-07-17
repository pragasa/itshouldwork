import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nova Recs | Movie recommendations platform",
  description:
    "A production-shaped movie recommendation platform with personalized discovery, social features, and explainable AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
