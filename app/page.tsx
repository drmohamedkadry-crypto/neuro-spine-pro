"use client";
import Link from "next/link";
import { ArrowRight, Calendar, Stethoscope, Star, Play, MessageCircle, Phone } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function HomePage() {
  const { tr } = useLang();
  const h = tr.home;
  const n = tr.nav;

  const whyItems = [
    { icon: "🏆", title: h.exp, desc: h.expDesc },
    { icon: "👥", title: h.surgeries, desc: h.surgeriesDesc },
    { icon: "🩺", title: h.minimally, desc: h.minimallyDesc },
    { icon: "❤️", title: h.patient, desc: h.patientDesc },
  ];

  const services = [
    { title: tr.nav.home === "Home" ? "Cervical Spine Disorders" : "اضطرابات عنق الرحم", desc: tr.nav.home === "Home" ? "Advanced treatment for neck pain, herniated discs, and cervical spine conditions" : "علاج متقدم لآلام الرقبة وانزلاق الغضاريف وحالات العمود الفقري العنقي", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80" },
    { title: tr.nav.home === "Home" ? "Lumbar Spine Care" : "رعاية العمود الفقري القطني", desc: tr.nav.home === "Home" ? "Comprehensive treatment for lower back pain, sciatica, and lumbar disc problems" : "علاج شامل لآلام أسفل الظهر والعرق النسا ومشكلات الغضاريف القطنية", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" },
    { title: tr.nav.home === "Home" ? "Minimally Invasive Surgery" : "الجراحة الطفيفة التوغل", desc: tr.nav.home === "Home" ? "Endoscopic and microscopic procedures for faster recovery and better outcomes" : "إجراءات بالمنظار والمجهر للتعافي السريع ونتائج أفضل", img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80" },
  ];

  const testimonials = [
    { text: tr.nav.home === "Home" ? "Dr. Howdy's expertise and compassionate care changed my life. After years of chronic back pain, his minimally invasive surgery gave me my mobility back." : "غيّرت خبرة الدكتور هويدي ورعايته المتعاطفة حياتي. بعد سنوات من آلام الظهر المزمنة، أعادت لي جراحته الطفيفة التوغل قدرتي على الحركة.", name: "Sarah M.", condition: tr.nav.home === "Home" ? "Lumbar Disc Surgery" : "جراحة الغضروف القطني" },
    { text: tr.nav.home === "Home" ? "The professionalism and advanced techniques used by Professor Howdy exceeded all expectations. My cervical spine surgery was a complete success." : "تجاوز احترافية الأستاذ الدكتور هويدي وتقنياته المتقدمة كل التوقعات. كانت عملية عنق الرحم ناجحة تمامًا.", name: "Ahmed K.", condition: tr.nav.home === "Home" ? "Cervical Spine Treatment" : "علاج العمود الفقري العنقي" },
    { text: tr.nav.home === "Home" ? "From consultation to recovery, the entire team provided exceptional care. Dr. Howdy's expertise in endoscopic surgery made all the difference." : "من الاستشارة حتى التعافي، قدّم الفريق بأكمله رعاية استثنائية. خبرة الدكتور هويدي في جراحة المنظار أحدثت الفارق.", name: "Fatima A.", condition: tr.nav.home === "Home" ? "Endoscopic Surgery" : "الجراحة بالمنظار" },
  ];

  return (
    <div className="pt-[72px]">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0" style={{backgroundImage:"url('/hero-surgeon.png')",backgroundSize:"cover",backgroundPosition:"center top"}} />
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(15,32,53,0.45) 0%, rgba(15,32,53,0.65) 100%)"}} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <p className="text-white text-sm font-semibold tracking-widest mb-4">{h.badge}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">{h.hero}</h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={18}/>{h.bookConsultation}
            </Link>
            <Link href="/services" className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg text-base border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors">
              <Stethoscope size={18}/>{h.services}
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color:"#1a3557"}}>{h.mission}</h2>
          <p className="text-gray-600 text-lg leading-relaxed">{h.missionText}</p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color:"#1a3557"}}>{h.whyUs}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{backgroundColor:"#e0f0f5"}}>{item.icon}</div>
                <h3 className="font-bold mb-2 text-sm" style={{color:"#1a3557"}}>{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE PROFESSOR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4" style={{color:"#1a3557"}}>{h.meetTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-5">{h.meetDesc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[h.badge1, h.badge2, h.badge3].map(b => (
                <span key={b} className="text-xs font-semibold px-4 py-1.5 rounded-full text-white" style={{backgroundColor:"#1a3557"}}>{b}</span>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors" style={{backgroundColor:"#1a3557"}}>
              {h.learnMore} <ArrowRight size={16}/>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video flex flex-col items-center justify-center cursor-pointer group hover:bg-gray-200 transition-colors">
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor:"#4db8c8"}}>
              <Play size={24} className="text-white ml-1"/>
            </div>
            <p className="text-gray-500 text-sm mt-3">{h.watchVideo}</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3557"}}>{h.ourServices}</h2>
            <p className="text-gray-500">{h.ourServicesDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {services.map(s => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2" style={{color:"#1a3557"}}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <button className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-lg hover:border-[#4db8c8] hover:text-[#4db8c8] transition-colors">{tr.learnMore}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#1a3557"}}>
              {h.viewAll} <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3557"}}>{h.testimonials}</h2>
            <p className="text-gray-500">{h.testimonialsDesc}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({length:5}).map((_,i)=><Star key={i} size={14} className="fill-amber-400 text-amber-400"/>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor:"#e0f0f5"}}>
                    <span className="text-[#4db8c8] text-lg">👤</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{color:"#1a3557"}}>{t.name}</div>
                    <div className="text-xs" style={{color:"#4db8c8"}}>{t.condition}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/testimonials" className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg border-2 transition-colors text-sm" style={{borderColor:"#1a3557",color:"#1a3557"}}>
              {h.viewAllTest} <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{h.ctaTitle}</h2>
          <p className="text-white/70 leading-relaxed mb-8">{h.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={17}/>{h.bookAppt}
            </Link>
            <a href="tel:+201005568333" className="flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors">
              <Phone size={16}/>{h.callUs}
            </a>
            <a href="https://wa.me/201005568333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              <MessageCircle size={16}/>{n.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
