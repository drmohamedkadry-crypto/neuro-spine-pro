import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dr. Mohamed Sediq Howdy | Neurosurgery & Spine Surgery – Cairo University",
  description:
    "Professor Dr. Mohamed Sediq Howdy – Leading Neurosurgery & Spine Surgery Specialist at Cairo University. 32+ years of excellence in minimally invasive procedures. Book your consultation today.",
  metadataBase: new URL("https://drhoweidy.com"),
  keywords: [
    "neurosurgery Cairo",
    "spine surgery Egypt",
    "lumbar disc herniation",
    "minimally invasive spine surgery",
    "Dr Mohamed Sediq Howdy",
    "cervical spine treatment",
    "endoscopic spine surgery",
  ],
  openGraph: {
    title: "Dr. Mohamed Sediq Howdy | Neurosurgery & Spine Surgery",
    description: "32+ years of excellence in neurosurgery and minimally invasive spine surgery at Cairo University.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
