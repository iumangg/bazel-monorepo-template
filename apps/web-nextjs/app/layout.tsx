import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bazel Monorepo Next App",
  description: "A Next.js app using Bazel within a monorepo",
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
