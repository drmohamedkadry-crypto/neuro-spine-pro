"use client";
import Link from "next/link";
import { ArrowRight, Calendar, Stethoscope } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { tr, lang } = useLang();
  const a = tr.about;
  const isAr = lang === "ar";

  const qualifications = isAr ? [
    { icon: "🎓", title: "التعليم", items: ["دكتوراه في الطب – كلية الطب، جامعة القاهرة", "إقامة جراحة الأعصاب – جامعة القاهرة", "زمالة في جراحة العمود الفقري", "تدريب متقدم في الجراحة بالمنظار"] },
    { icon: "🏅", title: "الإنجازات", items: ["أستاذ بجامعة القاهرة", "أكثر من 32 عامًا من الخبرة السريرية", "آلاف العمليات الناجحة", "رائد في تقنيات الجراحة الطفيفة التوغل"] },
    { icon: "🩺", title: "التخصصات", items: ["جراحة العمود الفقري العنقي", "جراحة العمود الفقري القطني", "الإجراءات بالمنظار", "إدارة الألم"] },
  ] : [
    { icon: "🎓", title: "Education", items: ["MD, Cairo University Faculty of Medicine", "Neurosurgery Residency, Cairo University", "Fellowship in Spine Surgery", "Advanced Endoscopic Surgery Training"] },
    { icon: "🏅", title: "Achievements", items: ["Professor at Cairo University", "32+ Years Clinical Experience", "Thousands of Successful Surgeries", "Pioneer in Minimally Invasive Techniques"] },
    { icon: "🩺", title: "Specializations", items: ["Cervical Spine Surgery", "Lumbar Spine Surgery", "Endoscopic Procedures", "Pain Management"] },
  ];

  const bioParagraphs = isAr ? [
    "الأستاذ الدكتور محمد صديق هويدي جراح أعصاب وعمود فقري متميز يتمتع بأكثر من 32 عامًا من الخبرة في جامعة القاهرة. كرّس مسيرته المهنية لتطوير مجال رعاية العمود الفقري من خلال تقنيات جراحية مبتكرة ورعاية متعاطفة للمرضى.",
    "يتخصص الدكتور هويدي في جراحة العمود الفقري الطفيفة التوغل، مستخدمًا أحدث تقنيات المنظار والمجهر التي تؤدي إلى أوقات تعافٍ أسرع وآلام أقل ونتائج أفضل لمرضاه. تمتد خبرته لتشمل الطيف الكامل لحالات العمود الفقري، من الاضطرابات التنكسية الشائعة إلى تشوهات العمود الفقري المعقدة.",
    "بصفته أستاذًا في جامعة القاهرة، يلتزم الدكتور هويدي بالتعليم والبحث العلمي، حيث يُعدّ الجيل القادم من جراحي الأعصاب مع الاستمرار في تطوير التقنيات الجراحية ومعايير رعاية المرضى. يضمن نهجه المتمحور حول المريض أن يتلقى كل فرد علاجًا شخصيًا مصممًا وفق احتياجاته وحالته المحددة.",
  ] : [
    "Professor Dr. Mohamed Sediq Howdy is a distinguished neurosurgeon and spine surgery specialist with over 32 years of experience at Cairo University. He has dedicated his career to advancing the field of spinal care through innovative surgical techniques and compassionate patient treatment.",
    "Dr. Howdy specializes in minimally invasive spine surgery, utilizing cutting-edge endoscopic and microscopic techniques that result in faster recovery times, reduced pain, and better outcomes for his patients. His expertise spans the full spectrum of spinal conditions, from common degenerative disorders to complex spinal deformities.",
    "As a professor at Cairo University, Dr. Howdy is committed to education and research, training the next generation of neurosurgeons while continuously advancing surgical techniques and patient care standards. His patient-centered approach ensures that each individual receives personalized treatment tailored to their specific needs and condition.",
  ];

  const heroTags = isAr
    ? ["أكثر من 32 عامًا من الخبرة", "أستاذ جامعة القاهرة", "خبير الجراحة الطفيفة التوغل"]
    : ["32+ Years Experience", "Cairo University Professor", "Minimally Invasive Surgery Expert"];

  const philosophyItems = [
    { title: a.patientCare, desc: a.patientCareDesc },
    { title: a.minimally, desc: a.minimallyDesc },
    { title: a.innovation, desc: a.innovationDesc },
  ];

  const credentials = [a.credential1, a.credential2, a.credential3, a.credential4, a.credential5, a.credential6, a.credential7, a.credential8];

  return (
    <div className="pt-[72px]">

      {/* HERO */}
      <section className="min-h-[75vh] grid lg:grid-cols-2" style={{backgroundColor:"#1a3557"}}>
        <div className="flex flex-col justify-center px-8 lg:px-16 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            {a.title.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br/>}</span>)}
          </h1>
          <p className="text-white/70 text-lg mb-6">{a.subtitle}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {heroTags.map(t => (
              <span key={t} className="text-xs font-semibold px-4 py-1.5 rounded-full" style={{backgroundColor:"#4db8c8",color:"#fff"}}>{t}</span>
            ))}
          </div>
          <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-lg w-fit transition-colors" style={{backgroundColor:"#4db8c8"}}>
            <Calendar size={16}/>{a.schedule}
          </Link>
        </div>
        <div className="relative overflow-hidden min-h-[400px]">
          <img src="/dr-photo.png" alt="Professor Dr. Mohamed Sediq Howdy" className="w-full h-full object-cover object-top"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3557]/40 to-transparent"/>
        </div>
      </section>

      {/* BIO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color:"#1a3557"}}>{a.aboutTitle}</h2>
          <div className="max-w-4xl mx-auto space-y-5 text-gray-600 leading-relaxed text-base">
            {bioParagraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="py-16" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10" style={{color:"#1a3557"}}>{a.credentials}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {qualifications.map(group => (
              <div key={group.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl" style={{backgroundColor:"#e0f0f5"}}>{group.icon}</div>
                <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map(item => (
                    <li key={item} className="block text-sm py-1 px-3 rounded-lg" style={{color:"#4db8c8"}}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{color:"#4db8c8"}}>{a.philosophy}</p>
            <h2 className="text-3xl font-bold mb-4 leading-tight" style={{color:"#1a3557"}}>{a.philoTitle}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{a.philoDesc}</p>
            <div className="space-y-4">
              {philosophyItems.map(item => (
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
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
            <img src="/dr-or-photo.png" alt="Dr. Howdy in the operating room" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-3">{a.ctaTitle}</h2>
          <p className="text-white/70 mb-8">{a.ctaDesc}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/booking" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg transition-colors" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={16}/>{a.schedule}
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-lg border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors">
              <Stethoscope size={16}/>{tr.nav.services}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
