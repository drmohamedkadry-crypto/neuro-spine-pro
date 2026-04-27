import Link from "next/link";
import { ArrowRight, Calendar, Play, ExternalLink } from "lucide-react";
import { MEDIA } from "@/lib/data";

export const metadata = {
  title: "Media Appearances | Dr. Mohamed Sediq Howdy",
  description: "TV interviews, press coverage, conference keynotes, podcasts and more from Dr. Mohamed Sediq Howdy.",
};

const filterTypes = ["All","TV","Press","Conference","Campaign","Online Event","Podcast"];

const typeColors: Record<string,string> = {
  TV: "#7c3aed",
  Press: "#2563eb",
  Conference: "#4db8c8",
  Campaign: "#059669",
  "Online Event": "#d97706",
  Podcast: "#db2777",
};

const mediaImages = [
  "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&q=80",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
  "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&q=80",
];

export default function MediaPage() {
  const featured = MEDIA.find(m => m.featured);
  const rest = MEDIA.filter(m => !m.featured);

  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Media Appearances</h1>
          <p className="text-white/70 text-lg mb-8">
            Stay informed with Dr. Mohamed Sediq Howdy's latest TV interviews, radio appearances, and media coverage highlighting advances in spine surgery and patient care.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={18}/>Schedule Consultation
          </Link>
        </div>
      </section>

      {/* ── FILTER TABS ── with play icons */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-500 mr-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/></svg>
            Filter by type:
          </div>
          {filterTypes.map((t, i) => (
            <button key={t} className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full border transition-colors ${i === 0 ? "text-white border-transparent" : "border-gray-200 text-gray-600 hover:border-[#1a3557] hover:text-[#1a3557]"}`}
              style={i === 0 ? {backgroundColor:"#1a3557"} : {}}>
              {t === "Podcast" ? <span className="w-2 h-2 rounded-full bg-current"/> : <Play size={9} className="fill-current"/>}
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* ── FEATURED ── Large 2-col */}
          {featured && (
            <div className="mb-12">
              <div className="mb-4">
                <span className="text-xs font-semibold text-white px-3 py-1 rounded-full" style={{backgroundColor:"#f59e0b"}}>Featured</span>
              </div>
              <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img src={mediaImages[0]} alt={featured.title} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{backgroundColor:"#4db8c8"}}>
                      <Play size={26} className="text-white ml-1 fill-white"/>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center bg-white">
                  <span className="text-xs font-semibold text-white px-3 py-1 rounded-full w-fit mb-3" style={{backgroundColor: typeColors[featured.type] || "#4db8c8"}}>{featured.type}</span>
                  <h2 className="text-2xl font-bold mb-2 leading-snug" style={{color:"#1a3557"}}>{featured.title}</h2>
                  <div className="text-sm font-medium mb-3" style={{color:"#4db8c8"}}>{featured.outlet}</div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{featured.date}</span>
                    <button className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm" style={{backgroundColor:"#1a3557"}}>
                      Watch/Read Full Coverage <ExternalLink size={13}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── RECENT COVERAGE ── */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2" style={{color:"#1a3557"}}>Recent Media Coverage</h2>
            <p className="text-gray-500 text-sm">Explore Dr. Howdy's media appearances and expert commentary on spine health topics.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item, idx) => (
              <div key={item.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img src={mediaImages[(idx+1) % mediaImages.length]} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-black/25"/>
                  <span className="absolute top-3 left-3 text-xs font-semibold text-white px-3 py-1 rounded-full" style={{backgroundColor: typeColors[item.type] || "#4db8c8"}}>{item.type}</span>
                </div>
                <div className="p-5">
                  <div className="text-xs font-medium mb-1" style={{color:"#4db8c8"}}>{item.outlet}</div>
                  <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-[#4db8c8] transition-colors" style={{color:"#1a3557"}}>{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-xs">{item.date}</span>
                    <button className="text-xs font-semibold flex items-center gap-1 hover:underline" style={{color:"#1a3557"}}>
                      View Coverage <ExternalLink size={11}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── Navy */}
      <section className="py-16 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-3">Experience Expert Care Featured in Media</h2>
          <p className="text-white/70 mb-8">See why Dr. Howdy is recognized as a leading expert in spine surgery. Schedule your consultation to experience this acclaimed care firsthand.</p>
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
