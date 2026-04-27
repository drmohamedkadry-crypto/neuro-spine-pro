import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{backgroundColor:"#1a3557"}} className="pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center text-white text-[10px] font-bold">MSH</div>
              <div>
                <div className="text-white text-sm font-semibold leading-tight">Dr. Mohamed Sediq Howdy</div>
                <div className="text-white/50 text-[10px]">Neurosurgery & Spine Surgery</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Leading neurosurgery and spine surgery specialist at Cairo University with 32+ years of experience in advanced minimally invasive procedures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[{href:"/about",label:"About Dr. Howdy"},{href:"/services",label:"Our Services"},{href:"/booking",label:"Book Consultation"},{href:"/testimonials",label:"Patient Stories"},{href:"/faq",label:"FAQ"}].map(l=>(
                <li key={l.href}><Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Specialized Services</h4>
            <ul className="space-y-2.5">
              {[{href:"/services/cervical-fusion",label:"Cervical Spine Disorders"},{href:"/services/lumbar-discectomy",label:"Lumbar Spine Care"},{href:"/services/endoscopic-surgery",label:"Minimally Invasive Surgery"},{href:"/services/pain-management",label:"Pain Management"},{href:"/services/online-consultation",label:"Online Consultations"}].map(l=>(
                <li key={l.href}><Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex gap-2.5 text-white/60 text-sm">
                <MapPin size={14} className="text-[#4db8c8] mt-0.5 shrink-0"/>
                <span>6th of October City, Central Axis<br/>Diamond Mall, Tower (D), next to Cinema Magda Complex</span>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex gap-2.5 text-white/60 hover:text-white text-sm transition-colors">
                  <Phone size={14} className="text-[#4db8c8] mt-0.5 shrink-0"/>{SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex gap-2.5 text-white/60 hover:text-white text-sm transition-colors">
                  <Mail size={14} className="text-[#4db8c8] mt-0.5 shrink-0"/>{SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors">
                  <MessageCircle size={14}/>WhatsApp Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">{SITE_CONFIG.copyright}</p>
          <div className="flex gap-6">
            {[{href:"/privacy",label:"Privacy Policy"},{href:"/terms",label:"Terms of Service"},{href:"/sitemap",label:"Sitemap"}].map(l=>(
              <Link key={l.href} href={l.href} className="text-white/40 hover:text-white/70 text-xs transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
