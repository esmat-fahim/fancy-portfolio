import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esmat Fahim — Geospatial Scientist",
  description: "Portfolio of Esmat Fahim — geospatial science, remote sensing, spatial AI, urban analytics and mobility modelling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}