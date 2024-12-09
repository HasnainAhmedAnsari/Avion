import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Add Clash Display
const clashDisplay = localFont({
  src: "/fonts/ClashDisplay-Regular.ttf",
  variable: "--font-clash-display",
  weight: "400 700",
});

// Add Satoshi
const satoshi = localFont({
  src: "/fonts/Satoshi-Regular.ttf", 
  variable: "--font-satoshi",
  weight: "300 700", 
});

export const metadata: Metadata = {
  title: "Avion - Timeless Furniture",
  description: "Furniture brand for the future with timeless designs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${satoshi.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
