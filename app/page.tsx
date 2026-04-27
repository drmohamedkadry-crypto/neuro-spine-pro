import Link from "next/link";
import { ArrowRight, Calendar, Stethoscope, Star, Play, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { SERVICES, TESTIMONIALS, BLOG_POSTS } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Full-width surgical image + navy overlay */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0"
          style={{backgroundImage:"url('/hero-surgeon.png')",backgroundSize:"cover",backgroundPosition:"center top"}}
        />
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(15,32,53,0.45) 0%, rgba(15,32,53,0.65) 100%)"}} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
          <p className="text-white text-sm font-semibold tracking-widest mb-4">
            Professor Dr. Mohamed Sediq Howdy · Leading Neurosurgery & Spine Surgery Specialist at Cairo University · 32+ Years of Excellence in Minimally Invasive Procedures and Patient-Centered Care.
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Advancing Spinal Care
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={18}/>Book Consultation
            </Link>
            <Link href="/services" className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg text-base border-2 border-white/50 hover:border-white hover:bg-white/10 transition-colors">
              <Stethoscope size={18}/>Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION ── White bg, centered */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{color:"#1a3557"}}>Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide world-class neurosurgical and spinal care with compassion, precision, and innovation. We are committed to advancing medical knowledge while ensuring every patient receives personalized, evidence-based treatment in a supportive environment.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── Light gray bg, 4 icon cards */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color:"#1a3557"}}>Why Choose Us</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {icon:"🏆", title:"32+ Years Experience", desc:"Decades of expertise in neurosurgery and spine care at Cairo University"},
              {icon:"👥", title:"Thousands of Surgeries", desc:"Successfully performed complex spinal and neurological procedures"},
              {icon:"🩺", title:"Minimally Invasive", desc:"Advanced endoscopic and microscopic surgical techniques"},
              {icon:"❤️", title:"Patient-Centered", desc:"Compassionate care tailored to each patient's unique needs"},
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{backgroundColor:"#e0f0f5"}}>
                  {item.icon}
                </div>
                <h3 className="font-bold mb-2 text-sm" style={{color:"#1a3557"}}>{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE PROFESSOR ── White, 2-col: text left + video right */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4" style={{color:"#1a3557"}}>
              Meet Professor Dr. Mohamed<br/>Sediq Howdy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              A distinguished professor at Cairo University and leading expert in neurosurgery and spine surgery. With over three decades of experience, Professor Howdy has dedicated his career to advancing spinal care through innovative techniques and compassionate patient treatment.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Cairo University Professor","Neurosurgery Specialist","Spine Surgery Expert"].map(t=>(
                <span key={t} className="text-xs font-semibold px-4 py-1.5 rounded-full text-white" style={{backgroundColor:"#1a3557"}}>{t}</span>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg transition-colors" style={{backgroundColor:"#1a3557"}}>
              Learn More About Dr. Howdy <ArrowRight size={16}/>
            </Link>
          </div>
          {/* Video placeholder */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video flex flex-col items-center justify-center cursor-pointer group hover:bg-gray-200 transition-colors">
            <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor:"#4db8c8"}}>
              <Play size={24} className="text-white ml-1"/>
            </div>
            <p className="text-gray-500 text-sm mt-3">Watch Dr. Howdy's introduction video</p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── Light gray, image cards */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3557"}}>Our Specialized Services</h2>
            <p className="text-gray-500">Comprehensive neurosurgical and spinal care using the latest minimally invasive techniques</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {title:"Cervical Spine Disorders", desc:"Advanced treatment for neck pain, herniated discs, and cervical spine conditions", img:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80"},
              {title:"Lumbar Spine Care", desc:"Comprehensive treatment for lower back pain, sciatica, and lumbar disc problems", img:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"},
              {title:"Minimally Invasive Surgery", desc:"Endoscopic and microscopic procedures for faster recovery and better outcomes", img:"https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80"},
            ].map(s => (
              <div key={s.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2" style={{color:"#1a3557"}}>{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <button className="text-sm font-medium border border-gray-200 px-4 py-1.5 rounded-lg hover:border-[#4db8c8] hover:text-[#4db8c8] transition-colors">Learn More</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#1a3557"}}>
              View All Services <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── White bg */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3557"}}>Patient Success Stories</h2>
            <p className="text-gray-500">Hear from patients whose lives have been transformed through our care</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {text:"Dr. Howdy's expertise and compassionate care changed my life. After years of chronic back pain, his minimally invasive surgery gave me my mobility back.", name:"Sarah M.", condition:"Lumbar Disc Surgery"},
              {text:"The professionalism and advanced techniques used by Professor Howdy exceeded all expectations. My cervical spine surgery was a complete success.", name:"Ahmed K.", condition:"Cervical Spine Treatment"},
              {text:"From consultation to recovery, the entire team provided exceptional care. Dr. Howdy's expertise in endoscopic surgery made all the difference.", name:"Fatima A.", condition:"Endoscopic Surgery"},
            ].map(t => (
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
              Read More Testimonials <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO LIBRARY ── Light gray */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3557"}}>Educational Video Library</h2>
            <p className="text-gray-500">Access our comprehensive collection of educational videos and TV interviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {title:"Understanding Spine Health", type:"Educational"},
              {title:"TV Interview: Modern Surgery", type:"TV Interview"},
              {title:"Surgery Insights", type:"Surgery"},
            ].map(v => (
              <div key={v.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor:"#4db8c8"}}>
                    <Play size={22} className="text-white ml-1"/>
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full text-white" style={{backgroundColor:"#1a3557"}}>{v.type}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-sm" style={{color:"#1a3557"}}>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/videos" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors text-sm" style={{backgroundColor:"#1a3557"}}>
              Explore Video Library <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG ── White bg, image cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{color:"#1a3557"}}>Latest Insights</h2>
            <p className="text-gray-500">Stay informed with our latest articles on spine health and treatment advances</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {tag:"Education", tagColor:"#4db8c8", title:"5 Common Spine Surgery Myths Debunked", desc:"Separating fact from fiction about modern spine surgery techniques and recovery...", date:"March 15, 2024", img:"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80"},
              {tag:"Symptoms", tagColor:"#f59e0b", title:"When Back Pain Requires Medical Attention", desc:"Understanding the warning signs that indicate you should seek professional help...", date:"March 10, 2024", img:"https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80"},
              {tag:"Recovery", tagColor:"#10b981", title:"Optimizing Your Recovery After Spine Surgery", desc:"Essential tips and guidelines for a successful recovery journey...", date:"March 5, 2024", img:"https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80"},
            ].map(p => (
              <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full text-white inline-block mb-3" style={{backgroundColor:p.tagColor}}>{p.tag}</span>
                  <h3 className="font-bold text-sm mb-2 leading-snug" style={{color:"#1a3557"}}>{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.desc}</p>
                  <div className="text-gray-400 text-xs">{p.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg border-2 transition-colors text-sm" style={{borderColor:"#1a3557",color:"#1a3557"}}>
              Read More Articles <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── Navy background */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Schedule your consultation today and discover how our advanced spinal care can help you return to the life you love. We offer both in-clinic and video consultations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={17}/>Book Online Consultation
            </Link>
            <a href="tel:+201005568333" className="flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors">
              <Phone size={16}/>Call Now
            </a>
            <a href="https://wa.me/201005568333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              <MessageCircle size={16}/>WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
