import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mimo",
  description: "Strategic Content System for SMB owners in Egypt and the GCC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
