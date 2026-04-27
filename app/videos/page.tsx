import Link from "next/link";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { VIDEOS } from "@/lib/data";

export const metadata = {
  title: "Educational Videos | Dr. Mohamed Sediq Howdy",
  description: "Educational videos, TV interviews, and surgical insights on spine health from Professor Dr. Mohamed Sediq Howdy.",
};

const categories = ["All","Lumbar Disorders","Minimally Invasive Surgery","General Spine Health","Cervical Disorders","Spinal Deformities","Patient Stories","Pain Management","Surgery Insights"];

// Thumbnail images per video
const videoThumbs = [
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80",
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
];

const typeBadgeColor: Record<string, string> = {
  "Educational Clip": "#4db8c8",
  "TV Interview": "#7c3aed",
  "Testimonial": "#059669",
  "Awareness": "#d97706",
  "Surgery Insight": "#dc2626",
};

export default function VideosPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Educational Video Library</h1>
          <p className="text-white/70 text-lg mb-8">
            Access our comprehensive collection of educational videos, TV interviews, and surgical insights to learn more about spine health and treatment options.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={18}/>Schedule Consultation
          </Link>
        </div>
      </section>

      {/* ── FILTER TABS ── Light gray bg with play icons */}
      <section className="py-5 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/></svg>
            <span className="text-sm font-medium text-gray-600">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border transition-colors ${i === 0 ? "text-white border-transparent" : "border-gray-200 text-gray-600 hover:border-[#1a3557] hover:text-[#1a3557]"}`}
                style={i === 0 ? {backgroundColor:"#1a3557"} : {}}>
                <Play size={10} className="fill-current"/>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO GRID ── White bg, 3 cols */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video, idx) => (
              <div key={video.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                {/* Thumbnail with play button overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={videoThumbs[idx % videoThumbs.length]}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors"/>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{backgroundColor:"#4db8c8"}}>
                      <Play size={22} className="text-white ml-1 fill-white"/>
                    </div>
                  </div>
                  {/* Type badge */}
                  <span className="absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full"
                    style={{backgroundColor: typeBadgeColor[video.type] || "#4db8c8"}}>
                    {video.type}
                  </span>
                </div>

                {/* Card info */}
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1.5 leading-snug group-hover:text-[#4db8c8] transition-colors" style={{color:"#1a3557"}}>
                    {video.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{video.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-3 py-1 rounded-full" style={{backgroundColor:"#e0f0f5", color:"#1a6b7a"}}>
                      {video.category}
                    </span>
                    <span className="text-gray-400 text-xs">{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── Light gray */}
      <section className="py-16 text-center" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-3" style={{color:"#1a3557"}}>Have Questions About Your Condition?</h2>
          <p className="text-gray-500 mb-7">Schedule a consultation with Dr. Howdy to discuss your specific condition and treatment options.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={16}/>Book Consultation
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg border-2 transition-colors" style={{borderColor:"#1a3557",color:"#1a3557"}}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
