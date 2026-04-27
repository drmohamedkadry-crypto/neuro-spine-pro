import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { SERVICES } from "@/lib/data";

export const metadata = {
  title: "Services | Dr. Mohamed Sediq Howdy – Spine Surgery Specialist",
  description: "Comprehensive neurosurgical and spinal care: minimally invasive surgery, cervical & lumbar procedures, pain management and more.",
};

// Medical stock images per service category
const serviceImages: Record<string, string> = {
  "lumbar-discectomy": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
  "cervical-fusion": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  "endoscopic-surgery": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  "deformity-correction": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80",
  "pain-management": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  "thoracic-surgery": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  "vertebroplasty": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  "neural-injury": "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
  "online-consultation": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  "tumor-resection": "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
};

export default function ServicesPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy background, centered text + Book button */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Specialized Services</h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Comprehensive neurosurgical and spinal care using the latest minimally invasive techniques for optimal patient outcomes and faster recovery.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={18}/>Book Consultation
          </Link>
        </div>
      </section>

      {/* ── ADVANCED TREATMENT OPTIONS ── White, centered heading */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3" style={{color:"#1a3557"}}>Advanced Treatment Options</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our comprehensive range of services covers all aspects of neurosurgical and spinal care, utilizing cutting-edge technology and proven techniques.
            </p>
          </div>

          {/* 3-column grid of image cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(service => (
              <div key={service.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                {/* Image with category badge overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={serviceImages[service.slug] || "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full" style={{backgroundColor:"#4db8c8"}}>
                    {service.category}
                  </span>
                </div>

                {/* Card content */}
                <div className="p-5">
                  <h3 className="font-bold text-base mb-2 leading-snug" style={{color:"#1a3557"}}>{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 leading-relaxed">{service.description}</p>

                  <div className="mb-4">
                    <p className="text-xs text-gray-400 font-medium mb-1.5">Conditions Treated:</p>
                    <p className="text-gray-600 text-sm">{service.conditions.join(", ")}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-medium border border-gray-200 px-3 py-1 rounded-full text-gray-500">
                      {service.type}
                    </span>
                    <Link href={`/services/${service.slug}`} className="flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{color:"#1a3557"}}>
                      Learn More <ArrowRight size={14}/>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── Light gray */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2" style={{color:"#1a3557"}}>Why Choose Our Services</h2>
            <p className="text-gray-500 text-sm">Our commitment to excellence ensures the highest quality care with the best possible outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {icon:"❤️", title:"Patient-Centered Care", desc:"Every treatment plan is personalized to meet your specific needs and health goals."},
              {icon:"⚙️", title:"Advanced Technology", desc:"State-of-the-art equipment and minimally invasive techniques for optimal results."},
              {icon:"⚡", title:"Faster Recovery", desc:"Minimally invasive procedures mean shorter hospital stays and quicker return to normal activities."},
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{backgroundColor:"#e0f0f5"}}>{item.icon}</div>
                <h3 className="font-bold mb-2 text-sm" style={{color:"#1a3557"}}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── Navy */}
      <section className="py-16 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Start Your Treatment Journey?</h2>
          <p className="text-white/70 mb-8">Schedule your consultation today to discuss your condition and explore the best treatment options for you.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={16}/>Book Consultation
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
