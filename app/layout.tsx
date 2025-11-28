import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMachina = localFont({
  src: [
    {
      path: "./fonts/NeueMachina-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
});

export const metadata: Metadata = {
  title: "Moonex - Trusted Multi-Chain DEX",
  description: "Trade, earn, and own crypto on the all-in-one multi-chain DEX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMachina.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
