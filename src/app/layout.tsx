import type { Metadata } from "next";
import "./globals.css";
import { merriweather, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "raybuilds021",
  description: "rachel tomasetti — founder · builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
