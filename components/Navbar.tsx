"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/videos", label: "Videos" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/msh-logo.png" alt="MSH Logo" width={40} height={40} className="rounded-lg shrink-0" />
            <div>
              <div className="text-sm font-bold leading-tight" style={{color:"#1a3557"}}>Dr. Mohamed Sediq Howdy</div>
              <div className="text-[10px] text-gray-400 leading-tight">Professor of Neurosurgery and Spine Surgery<br/>Faculty of Medicine – Cairo University</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="text-gray-600 hover:text-[#1a3557] text-sm font-medium transition-colors">{l.label}</Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border-2 border-gray-200 text-gray-500 hover:border-[#1a3557] hover:text-[#1a3557] text-xs font-bold transition-colors">AR</button>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-600 hover:text-[#1a3557] text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <MessageCircle size={15}/>WhatsApp
            </a>
            <Link href="/booking" className="flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={14}/>Book Now
            </Link>
          </div>

          <button className="md:hidden text-gray-600 p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 mb-5">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="text-gray-700 text-base font-medium" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-lg font-semibold text-sm">
              <MessageCircle size={16}/>WhatsApp
            </a>
            <Link href="/booking" className="flex items-center justify-center gap-2 text-white py-2.5 rounded-lg font-semibold text-sm" style={{backgroundColor:"#4db8c8"}} onClick={() => setOpen(false)}>
              <Calendar size={15}/>Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
