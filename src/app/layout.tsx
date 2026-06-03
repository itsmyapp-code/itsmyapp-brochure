import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ItsMyApp - Next-Gen Digital Brochure",
  description: "High-performance software suite and zero-server paradigm applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-cyber-black text-white min-h-screen selection:bg-neon-cyan selection:text-cyber-black`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
