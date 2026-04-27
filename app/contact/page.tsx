import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock, Calendar, ArrowRight, AlertTriangle } from "lucide-react";
import { CLINICS, SITE_CONFIG } from "@/lib/data";

export const metadata = {
  title: "Contact | Dr. Mohamed Sediq Howdy – 4 Clinic Locations Across Egypt",
  description: "Contact Professor Dr. Mohamed Sediq Howdy. 4 clinics: Mohandessin, Giza, 6th October, Fayoum. Book by WhatsApp, phone, or online.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg mb-8">
            Get in touch with our team to schedule your consultation or learn more about our advanced spine surgery services. We're here to help you on your journey to better health.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={18}/>Book Consultation
            </Link>
            <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
              <MessageCircle size={18}/>WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR CLINICS ── White bg */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-1" style={{color:"#1a3557"}}>Our Clinics</h2>
            <p className="text-gray-500 text-sm">We serve you at 4 convenient locations across Egypt</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CLINICS.map(clinic => (
              <div key={clinic.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                {/* Clinic icon + name */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor:"#e0f0f5"}}>
                    <Calendar size={20} style={{color:"#4db8c8"}}/>
                  </div>
                  <h3 className="font-bold text-base leading-tight pt-1" style={{color:"#1a3557"}}>{clinic.name}</h3>
                </div>

                {/* Info rows */}
                <div className="space-y-3 mb-5">
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{backgroundColor:"#e0f0f5"}}>
                      <MapPin size={14} style={{color:"#4db8c8"}}/>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{color:"#4db8c8"}}>Location</div>
                      <div className="text-gray-600 text-sm">{clinic.address}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{backgroundColor:"#e0f0f5"}}>
                      <Phone size={14} style={{color:"#4db8c8"}}/>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{color:"#4db8c8"}}>Phone</div>
                      <div className="text-gray-600 text-sm">
                        Land Line: {clinic.phones[0]}<br/>
                        Mobile: {clinic.phones.slice(1).join(" / ")}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{backgroundColor:"#e0f0f5"}}>
                      <Calendar size={14} style={{color:"#4db8c8"}}/>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{color:"#4db8c8"}}>Clinic Days</div>
                      <div className="text-gray-600 text-sm">{clinic.days}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0" style={{backgroundColor:"#e0f0f5"}}>
                      <Clock size={14} style={{color:"#4db8c8"}}/>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{color:"#4db8c8"}}>Clinic Hours</div>
                      <div className="text-gray-600 text-sm">{clinic.hours}</div>
                      {clinic.note && <div className="text-gray-400 text-xs mt-1">{clinic.note}</div>}
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-2">
                  <Link href="/booking" className="flex-1 text-center text-white text-xs font-semibold py-2.5 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
                    Book Consultation
                  </Link>
                  {clinic.whatsapp && (
                    <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors">
                      <MessageCircle size={13}/>WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEND MESSAGE + GET IN TOUCH ── Light gray, 2-col */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-6" style={{color:"#1a3557"}}>Send us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">First Name *</label>
                  <input type="text" placeholder="Enter your first name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">Last Name *</label>
                  <input type="text" placeholder="Enter your last name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Email Address *</label>
                <input type="email" placeholder="Enter your email address" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Phone Number</label>
                <input type="tel" placeholder="Enter your phone number" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Subject *</label>
                <input type="text" placeholder="What is this regarding?" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Message *</label>
                <textarea rows={4} placeholder="Describe your condition or question..." className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors resize-none"/>
              </div>
              <button type="submit" className="w-full text-white font-semibold py-3 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
                Send Message
              </button>
              <Link href="/booking" className="w-full border-2 font-semibold py-3 rounded-lg transition-colors text-center block text-sm" style={{borderColor:"#1a3557",color:"#1a3557"}}>
                Book Appointment
              </Link>
            </form>
          </div>

          {/* Get In Touch info */}
          <div>
            <h2 className="text-xl font-bold mb-2" style={{color:"#1a3557"}}>Get in Touch</h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              We're committed to providing you with the highest quality care and support. Reach out to us through any of the following methods, and our team will respond promptly.
            </p>

            <div className="space-y-4">
              {/* Email card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{backgroundColor:"#e0f0f5"}}>
                    <Mail size={16} style={{color:"#4db8c8"}}/>
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1.5" style={{color:"#4db8c8"}}>Email</div>
                    <div className="text-sm text-gray-600 space-y-0.5">
                      <div>General Inquiries: <a href={`mailto:${SITE_CONFIG.email}`} className="hover:underline" style={{color:"#4db8c8"}}>{SITE_CONFIG.email}</a></div>
                      <div>Appointments: <a href={`mailto:${SITE_CONFIG.appointmentsEmail}`} className="hover:underline" style={{color:"#4db8c8"}}>{SITE_CONFIG.appointmentsEmail}</a></div>
                      <div>Emergency: <a href={`mailto:${SITE_CONFIG.emergencyEmail}`} className="hover:underline" style={{color:"#4db8c8"}}>{SITE_CONFIG.emergencyEmail}</a></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp + Phone cards side by side */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{backgroundColor:"#e0f0f5"}}>
                    <MessageCircle size={16} style={{color:"#4db8c8"}}/>
                  </div>
                  <div className="font-semibold text-sm mb-1" style={{color:"#4db8c8"}}>Quick WhatsApp</div>
                  <p className="text-gray-500 text-xs mb-3">For quick inquiries and immediate support</p>
                  <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors">
                    <MessageCircle size={12}/>Start Chat
                  </a>
                </div>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{backgroundColor:"#e0f0f5"}}>
                    <Phone size={16} style={{color:"#4db8c8"}}/>
                  </div>
                  <div className="font-semibold text-sm mb-1" style={{color:"#4db8c8"}}>Main Helpline</div>
                  <p className="text-gray-500 text-xs mb-3">Available during office hours</p>
                  <a href={`tel:${SITE_CONFIG.phone}`}
                    className="inline-flex items-center gap-1.5 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors" style={{backgroundColor:"#1a3557"}}>
                    <Phone size={12}/>Call Now
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="rounded-2xl p-5 border" style={{backgroundColor:"#fff5f5",borderColor:"#fed7d7"}}>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={16} className="text-red-500"/>
                  <span className="text-red-600 text-xs font-bold uppercase tracking-wide">Medical Emergency?</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">If you're experiencing a medical emergency, please call our emergency line immediately or visit the nearest emergency room.</p>
                <a href={`tel:${SITE_CONFIG.emergencyPhone}`} className="text-red-600 font-semibold text-sm hover:underline">
                  Emergency Line: {SITE_CONFIG.emergencyPhone}
                </a>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="font-semibold text-sm mb-3" style={{color:"#1a3557"}}>Quick Actions</div>
                <div className="space-y-2">
                  {[
                    {label:"Online Booking", desc:"Schedule your consultation at your convenience", href:"/booking", btn:"Book Now"},
                    {label:"WhatsApp Chat", desc:"Get instant responses to your questions", href:`https://wa.me/${SITE_CONFIG.whatsapp}`, btn:"Start Chat", ext:true},
                    {label:"Call Directly", desc:"Speak directly with our team for immediate assistance", href:`tel:${SITE_CONFIG.phone}`, btn:"Call Now"},
                  ].map(action => (
                    <div key={action.label} className="flex items-center justify-between gap-3 py-2 border-b border-gray-50 last:border-0">
                      <div>
                        <div className="text-sm font-medium" style={{color:"#1a3557"}}>{action.label}</div>
                        <div className="text-xs text-gray-400">{action.desc}</div>
                      </div>
                      <a href={action.href} target={action.ext ? "_blank" : undefined} rel={action.ext ? "noopener noreferrer" : undefined}
                        className="text-xs font-semibold text-white px-4 py-1.5 rounded-lg shrink-0 transition-colors" style={{backgroundColor:"#4db8c8"}}>
                        {action.btn}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
