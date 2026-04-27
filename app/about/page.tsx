import Link from "next/link";
import { ArrowRight, Calendar, Stethoscope, Star } from "lucide-react";

export const metadata = {
  title: "About Dr. Howdy | Professor of Neurosurgery – Cairo University",
  description: "Learn about Professor Dr. Mohamed Sediq Howdy, leading neurosurgeon and spine surgery specialist at Cairo University with 32+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy bg split: text left + doctor photo right */}
      <section className="min-h-[75vh] grid lg:grid-cols-2" style={{backgroundColor:"#1a3557"}}>
        {/* Left: text */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Professor Dr. Mohamed<br/>Sediq Howdy
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Leading Neurosurgery & Spine Surgery Specialist at Cairo University
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["32+ Years Experience","Cairo University Professor","Minimally Invasive Surgery Expert"].map(t=>(
              <span key={t} className="text-xs font-semibold px-4 py-1.5 rounded-full" style={{backgroundColor:"#4db8c8",color:"#fff"}}>{t}</span>
            ))}
          </div>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg w-fit transition-colors" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={16}/>Schedule Consultation
          </Link>
        </div>
        {/* Right: Doctor photo */}
        <div className="relative overflow-hidden min-h-[400px]">
          <img
            src="/dr-photo.png"
            alt="Professor Dr. Mohamed Sediq Howdy"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark overlay at bottom for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3557]/40 to-transparent"/>
        </div>
      </section>

      {/* ── ABOUT BIO ── White bg, full-width text */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color:"#1a3557"}}>About Dr. Howdy</h2>
          <div className="max-w-4xl mx-auto space-y-5 text-gray-600 leading-relaxed text-base">
            <p>
              Professor Dr. Mohamed Sediq Howdy is a distinguished neurosurgeon and spine surgery specialist with over 32 years of experience at Cairo University. He has dedicated his career to advancing the field of spinal care through innovative surgical techniques and compassionate patient treatment.
            </p>
            <p>
              Dr. Howdy specializes in minimally invasive spine surgery, utilizing cutting-edge endoscopic and microscopic techniques that result in faster recovery times, reduced pain, and better outcomes for his patients. His expertise spans the full spectrum of spinal conditions, from common degenerative disorders to complex spinal deformities.
            </p>
            <p>
              As a professor at Cairo University, Dr. Howdy is committed to education and research, training the next generation of neurosurgeons while continuously advancing surgical techniques and patient care standards. His patient-centered approach ensures that each individual receives personalized treatment tailored to their specific needs and condition.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUALIFICATIONS ── Light gray, 3 cards with icons */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10" style={{color:"#1a3557"}}>Qualifications & Experience</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon:"🎓",
                title:"Education",
                items:["MD, Cairo University Faculty of Medicine","Neurosurgery Residency, Cairo University","Fellowship in Spine Surgery","Advanced Endoscopic Surgery Training"]
              },
              {
                icon:"🏅",
                title:"Achievements",
                items:["Professor at Cairo University","32+ Years Clinical Experience","Thousands of Successful Surgeries","Pioneer in Minimally Invasive Techniques"]
              },
              {
                icon:"🩺",
                title:"Specializations",
                items:["Cervical Spine Surgery","Lumbar Spine Surgery","Endoscopic Procedures","Pain Management"]
              }
            ].map(group => (
              <div key={group.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{backgroundColor:"#e0f0f5"}}>
                  {group.icon}
                </div>
                <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map(item=>(
                    <li key={item}>
                      <a className="block text-sm py-1 px-3 rounded-lg transition-colors cursor-default hover:bg-gray-50" style={{color:"#4db8c8"}}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── White, text left + OR surgeon photo right */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{color:"#4db8c8"}}>Our Philosophy</p>
            <h2 className="text-3xl font-bold mb-4 leading-tight" style={{color:"#1a3557"}}>
              Every Patient Deserves the Highest Quality of Care
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every patient deserves the highest quality of care, delivered with compassion, precision, and respect. My approach combines cutting-edge surgical techniques with personalized treatment plans that address each patient's unique needs.
            </p>
            <div className="space-y-4">
              {[
                {icon:"⭐", title:"Patient-Centered Care", desc:"Every treatment plan is tailored to the individual patient's condition and lifestyle."},
                {icon:"⭐", title:"Minimally Invasive Approach", desc:"Utilizing advanced techniques for faster recovery and better outcomes."},
                {icon:"⭐", title:"Continuous Innovation", desc:"Staying at the forefront of surgical advances and medical technology."},
              ].map(item=>(
                <div key={item.title} className="flex gap-3">
                  <span className="text-[#4db8c8] text-lg shrink-0">⭐</span>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{color:"#4db8c8"}}>{item.title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Surgeon photo */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img
              src="/dr-or-photo.png"
              alt="Dr. Howdy in the operating room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── Navy bg */}
      <section className="py-16 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-3">Experience Expert Spinal Care</h2>
          <p className="text-white/70 mb-8">
            Take the first step towards better spinal health. Schedule your consultation with Professor Dr. Mohamed Sediq Howdy today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={16}/>Book Consultation
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors">
              <Stethoscope size={16}/>View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
