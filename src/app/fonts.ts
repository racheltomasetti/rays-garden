import localFont from "next/font/local";
import { Merriweather, Poppins } from "next/font/google";

export const perpetua = localFont({
  src: "./fonts/perpetua.ttf",
  variable: "--font-perpetua",
  display: "swap",
});

export const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
