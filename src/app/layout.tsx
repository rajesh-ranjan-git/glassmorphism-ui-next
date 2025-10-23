import type { Metadata } from "next";
import { Alkatra } from "next/font/google";
import "./globals.css";

export const alkatra = Alkatra({
  variable: "--font-alkatra",
});

export const metadata: Metadata = {
  title: "Glassmorphism UI",
  description: "Glassmorphism UI with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alkatra.variable} antialiased overflow-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
