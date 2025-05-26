import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BottomDock } from "@/components/BottomDock";
import GeoLocationWidget from "@/components/GeoLocationWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chirag Bang",
  description: "Fullstack Developer specialized in NextJs, ReactJS, ExpressJS, NodeJS, MongoDB",
  icons:{
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <BottomDock/>
        <GeoLocationWidget/>
      </body>
    </html>
  );
}
