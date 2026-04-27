import Link from "next/link";
import { Calendar, Play, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export const metadata = {
  title: "Patient Testimonials | Dr. Mohamed Sediq Howdy",
  description: "Real patient success stories from people whose lives were transformed by Professor Dr. Mohamed Sediq Howdy's expert spine care.",
};

const avatarImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80",
];

const thumbImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
];

export default function TestimonialsPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Patient Success Stories</h1>
          <p className="text-white/70 text-lg mb-8">
            Hear from patients whose lives have been transformed through our expert care and advanced treatment approaches. Their stories inspire us every day.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={18}/>Start Your Journey
          </Link>
        </div>
      </section>

      {/* ── STATS ROW ── White bg */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              {stat:"1000+", label:"Successful Surgeries"},
              {stat:"98%", label:"Patient Satisfaction"},
              {stat:"32+", label:"Years of Experience"},
            ].map(item => (
              <div key={item.stat}>
                <div className="text-4xl font-extrabold mb-1" style={{color:"#1a3557"}}>{item.stat}</div>
                <div className="text-gray-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ── White */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm mb-8">Real stories from real patients who have experienced life-changing results through our care.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({length:5}).map((_,i)=><Star key={i} size={14} className="fill-amber-400 text-amber-400"/>)}
                </div>
                {/* Quote mark */}
                <div className="text-4xl font-serif leading-none mb-2" style={{color:"#e0f0f5"}}>"</div>
                {/* Quote text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5 italic">{t.text}</p>
                {/* Patient info */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <img
                    src={avatarImages[idx % avatarImages.length]}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-bold text-sm" style={{color:"#1a3557"}}>{t.name}</div>
                    <div className="text-xs" style={{color:"#4db8c8"}}>{t.condition}</div>
                  </div>
                  <div className="text-gray-400 text-xs">{t.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ── Light gray */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2" style={{color:"#1a3557"}}>Video Testimonials</h2>
          <p className="text-gray-500 text-sm mb-8">Watch our patients share their recovery stories in their own words.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0,3).map((t, idx) => (
              <div key={t.name} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img src={thumbImages[idx]} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-black/30"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor:"#4db8c8"}}>
                      <Play size={22} className="text-white ml-1 fill-white"/>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-bold text-sm" style={{color:"#1a3557"}}>{t.name}</div>
                  <div className="text-xs" style={{color:"#4db8c8"}}>{t.condition}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── Navy */}
      <section className="py-16 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Write Your Success Story?</h2>
          <p className="text-white/70 mb-8">Join thousands of patients who have found relief and renewed hope through our expert care.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
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
