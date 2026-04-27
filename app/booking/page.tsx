"use client";
import { useState } from "react";
import Link from "next/link";
import { Stethoscope, Video, CheckCircle, MessageCircle, Phone, Mail, Calendar, Clock, MapPin, AlertCircle, ArrowRight } from "lucide-react";
import { CLINICS, SITE_CONFIG } from "@/lib/data";

const timeSlots = [
  "09:00 AM","09:30 AM","10:00 AM",
  "10:30 AM","11:00 AM","11:30 AM",
  "02:00 PM","02:30 PM","03:00 PM",
  "03:30 PM","04:00 PM","04:30 PM",
];

const consultationTypes = [
  {
    icon: <Stethoscope size={28} className="mx-auto"/>,
    title: "In-Clinic Visit",
    desc: "Face-to-face consultation at one of our clinic locations",
    duration: "45-60 minutes",
  },
  {
    icon: <Video size={28} className="mx-auto"/>,
    title: "Video Consultation",
    desc: "Remote consultation via secure video call",
    duration: "30-45 minutes",
  },
  {
    icon: <CheckCircle size={28} className="mx-auto"/>,
    title: "Second Opinion",
    desc: "Expert review of your current diagnosis and treatment plan",
    duration: "30 minutes",
  },
];

export default function BookingPage() {
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="pt-[72px]">

      {/* ── HERO ── Navy, left-aligned */}
      <section className="py-16 px-6" style={{backgroundColor:"#1a3557"}}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Book Your Consultation</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Schedule your consultation with Professor Dr. Mohamed Sediq Howdy. Choose between in-clinic or video consultation options.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── 2-col: form left + sidebar right */}
      <section className="py-12" style={{backgroundColor:"#f4f6f9"}}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_320px] gap-8 items-start">

          {/* ── LEFT: MULTI-STEP FORM ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold mb-1" style={{color:"#1a3557"}}>Schedule Your Appointment</h2>
            <p className="text-gray-500 text-sm mb-8">Please fill out the form below to book your consultation.</p>

            {/* ── STEP 1: CONSULTATION TYPE ── */}
            <div className="mb-8">
              <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>
                <span style={{color:"#4db8c8"}}>1.</span> Choose Consultation Type
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {consultationTypes.map((type, idx) => (
                  <button
                    key={type.title}
                    onClick={() => setSelectedType(idx)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      selectedType === idx
                        ? "border-[#4db8c8] bg-[#e0f7fa]"
                        : "border-gray-200 bg-white hover:border-[#4db8c8]"
                    }`}
                  >
                    <div className="mb-2" style={{color: selectedType === idx ? "#4db8c8" : "#9ca3af"}}>
                      {type.icon}
                    </div>
                    <div className="text-xs font-bold mb-1" style={{color:"#1a3557"}}>{type.title}</div>
                    <div className="text-xs text-gray-400 leading-tight mb-2">{type.desc}</div>
                    <span className="text-xs border border-gray-200 px-2 py-0.5 rounded-full text-gray-500">
                      {type.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── STEP 2: PERSONAL INFORMATION ── */}
            <div className="mb-8">
              <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>
                <span style={{color:"#4db8c8"}}>2.</span> Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">First Name *</label>
                  <input type="text" placeholder="Enter your first name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">Last Name *</label>
                  <input type="text" placeholder="Enter your last name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">Email Address *</label>
                  <input type="email" placeholder="Enter your email"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">Phone Number *</label>
                  <input type="tel" placeholder="Enter your phone number"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] transition-colors"/>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Preferred Clinic</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] bg-white text-gray-700">
                  <option value="">Select a clinic location</option>
                  {CLINICS.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                  <option value="online">Online (Video Consultation)</option>
                </select>
              </div>
            </div>

            {/* ── STEP 3: DATE & TIME ── */}
            <div className="mb-8">
              <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>
                <span style={{color:"#4db8c8"}}>3.</span> Preferred Date & Time
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">Preferred Date *</label>
                  <input type="date"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] text-gray-700"/>
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-600 block mb-1.5">Preferred Time *</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map(slot => (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`text-xs py-2 px-1 rounded-lg border transition-all font-medium ${
                          selectedTime === slot
                            ? "text-white border-transparent"
                            : "border-gray-200 text-gray-600 hover:border-[#4db8c8] hover:text-[#4db8c8]"
                        }`}
                        style={selectedTime === slot ? {backgroundColor:"#1a3557", borderColor:"#1a3557"} : {}}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── STEP 4: MEDICAL INFORMATION ── */}
            <div className="mb-8">
              <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>
                <span style={{color:"#4db8c8"}}>4.</span> Medical Information
              </h3>
              <div className="mb-4">
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Chief Complaint / Main Symptom *</label>
                <input type="text" placeholder="e.g., Lower back pain, neck pain, sciatica..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8]"/>
              </div>
              <div className="mb-4">
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Medical History</label>
                <textarea rows={3} placeholder="Previous surgeries, medications, allergies, or relevant medical history..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] resize-none"/>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-600 block mb-1.5">Questions for Dr. Howdy</label>
                <textarea rows={3} placeholder="Any specific questions you'd like to discuss during your consultation..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#4db8c8] resize-none"/>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 transition-colors hover:opacity-90" style={{backgroundColor:"#4db8c8"}}>
              <Calendar size={18}/>
              Book Consultation
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">
              By booking, you agree to our terms. We'll confirm your appointment within 24 hours.
            </p>
          </div>

          {/* ── RIGHT SIDEBAR ── Sticky */}
          <div className="space-y-5 lg:sticky lg:top-24">

            {/* Need Help? */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-base mb-4" style={{color:"#1a3557"}}>Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor:"#e0f0f5"}}>
                    <Phone size={14} style={{color:"#4db8c8"}}/>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{color:"#1a3557"}}>Call Us</div>
                    <div className="text-sm text-gray-600">+20 2 2365 8741</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor:"#e0f0f5"}}>
                    <MessageCircle size={14} style={{color:"#4db8c8"}}/>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{color:"#1a3557"}}>WhatsApp</div>
                    <div className="text-sm text-gray-400">Quick responses</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{backgroundColor:"#e0f0f5"}}>
                    <Mail size={14} style={{color:"#4db8c8"}}/>
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{color:"#1a3557"}}>Email</div>
                    <div className="text-sm text-gray-600">{SITE_CONFIG.appointmentsEmail}</div>
                  </div>
                </div>
              </div>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors">
                <MessageCircle size={15}/>Chat on WhatsApp
              </a>
            </div>

            {/* Clinic Schedule */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-sm mb-4" style={{color:"#1a3557"}}>Clinic Schedule</h3>
              <div className="space-y-3">
                {[
                  {name:"Al Riyadh Hospital", days:"Every Saturday", hours:"2:00 PM – 6:00 PM"},
                  {name:"Giza Clinic", days:"Saturday, Tuesday", hours:"6:00 PM – 9:00 PM"},
                  {name:"6th of October Clinic", days:"Sunday, Wednesday", hours:"6:00 PM – 9:00 PM"},
                  {name:"Fayoum Clinic", days:"Monday", hours:"10:00 AM – 5:00 PM"},
                ].map(clinic => (
                  <div key={clinic.name} className="border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                    <div className="font-semibold text-xs mb-1" style={{color:"#4db8c8"}}>{clinic.name}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{clinic.days}</span>
                      <span className="text-xs text-gray-500">{clinic.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={15} style={{color:"#4db8c8"}}/>
                <h3 className="font-bold text-sm" style={{color:"#1a3557"}}>Important Notes</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-500 leading-relaxed">
                <li className="flex gap-2"><span style={{color:"#4db8c8"}}>•</span>Appointments are subject to availability</li>
                <li className="flex gap-2"><span style={{color:"#4db8c8"}}>•</span>Please arrive 15 minutes early for your first visit</li>
                <li className="flex gap-2"><span style={{color:"#4db8c8"}}>•</span>Bring any previous MRI, CT scans, or X-rays</li>
                <li className="flex gap-2"><span style={{color:"#4db8c8"}}>•</span>Video consultations require a stable internet connection</li>
                <li className="flex gap-2"><span style={{color:"#4db8c8"}}>•</span>Cancellations must be made 24 hours in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
