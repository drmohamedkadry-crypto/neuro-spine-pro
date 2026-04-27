import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export const metadata = {
  title: "Medical Blog | Dr. Mohamed Sediq Howdy – Spine Health Insights",
  description: "Latest insights on spine health, treatment advances, and expert medical advice from Professor Dr. Mohamed Sediq Howdy.",
};

const categories = ["All","Treatments","Symptoms","Myths","Education"];

const categoryColors: Record<string,string> = {
  Treatments: "#4db8c8",
  Symptoms: "#d97706",
  Myths: "#7c3aed",
  Education: "#059669",
};

const postImages: Record<string, string> = {
  "future-spine-surgery-minimally-invasive": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80",
  "lumbar-disc-herniation-symptoms-causes": "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&q=80",
  "spine-surgery-myths-debunked": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
  "tech-neck-cervical-spine-prevention": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80",
  "advanced-imaging-spine-diagnostics": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find(p => p.featured);
  const rest = BLOG_POSTS.filter(p => !p.featured);

  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy */}
      <section className="py-20 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Medical Blog & Insights</h1>
          <p className="text-white/70 text-lg mb-8">
            Stay informed with the latest insights on spine health, treatment advances, and expert advice from Dr. Mohamed Sediq Howdy and our medical team.
          </p>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-lg" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={18}/>Schedule Consultation
          </Link>
        </div>
      </section>

      {/* ── FILTER TABS ── White bg, right-aligned pills */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/></svg>
            Filter by category:
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`text-xs font-semibold px-4 py-2 rounded-full transition-colors ${i === 0 ? "text-white" : "border border-gray-200 text-gray-600 hover:border-[#1a3557] hover:text-[#1a3557]"}`}
                style={i === 0 ? {backgroundColor:"#1a3557"} : {}}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* ── FEATURED ARTICLE ── Large 2-col card */}
          {featured && (
            <div className="mb-12">
              <div className="mb-4">
                <span className="text-xs font-semibold text-white px-3 py-1 rounded-full" style={{backgroundColor:"#4db8c8"}}>Featured Article</span>
              </div>
              <Link href={`/blog/${featured.slug}`} className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group block">
                {/* Image */}
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img src={postImages[featured.slug]} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col justify-center bg-white">
                  <span className="text-xs font-semibold text-white px-3 py-1 rounded-full w-fit mb-4" style={{backgroundColor: categoryColors[featured.category] || "#4db8c8"}}>
                    {featured.category}
                  </span>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-[#4db8c8] transition-colors leading-snug" style={{color:"#1a3557"}}>
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                        <User size={12}/>Prof. Dr. Mohamed Sediq Howdy
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar size={12}/>{featured.date}
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-white font-semibold px-5 py-2.5 rounded-lg text-sm" style={{backgroundColor:"#1a3557"}}>
                      Read Full Article <ArrowRight size={14}/>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* ── ARTICLES GRID ── 3 cols */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1" style={{color:"#1a3557"}}>Latest Articles</h3>
            <p className="text-gray-500 text-sm">Explore our comprehensive collection of medical insights and educational content.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group block">
                <div className="aspect-video overflow-hidden">
                  <img src={postImages[post.slug] || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80"} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-white px-3 py-1 rounded-full inline-block mb-3" style={{backgroundColor: categoryColors[post.category] || "#4db8c8"}}>
                    {post.category}
                  </span>
                  <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-[#4db8c8] transition-colors" style={{color:"#1a3557"}}>{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Prof. Dr. Mohamed Sediq Howdy</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER + CTA ── */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3" style={{color:"#1a3557"}}>Stay Updated with Medical Insights</h2>
          <p className="text-gray-500 text-sm mb-6">Subscribe to our newsletter to receive the latest articles, treatment updates, and health tips directly in your inbox.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg mb-8" style={{backgroundColor:"#4db8c8"}}>
            Subscribe to Newsletter <ArrowRight size={15}/>
          </Link>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold mb-2" style={{color:"#1a3557"}}>Have Questions About Your Condition?</h3>
            <p className="text-gray-500 text-sm mb-5">Our articles provide valuable information, but every case is unique. Schedule a consultation for personalized medical advice.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg" style={{backgroundColor:"#1a3557"}}>
                <Calendar size={16}/>Book Consultation
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 font-semibold px-7 py-3 rounded-lg border-2 transition-colors" style={{borderColor:"#1a3557",color:"#1a3557"}}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
