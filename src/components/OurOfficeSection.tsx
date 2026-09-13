import Image from "next/image";
import { MapPin, Sun, ShieldCheck, Video, Clock } from "lucide-react";

export default function OurOfficeSection() {
  return (
    <section id="office" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E2DDD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#E6ECE8] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#C9D7CF]">
            Physical Location & Ambiance
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2522]">
            Our Santa Monica Therapy Office
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            A quiet, private space designed to feel calm, grounding, and uncluttered from the moment you arrive.
          </p>
        </div>

        {/* Content & Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Office Details & Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#F2EEE7] p-6 sm:p-8 rounded-2xl border border-[#E2DDD5] space-y-6">
              
              {/* Verified Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3D5A50] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-title text-xl font-bold text-[#1C2522]">
                    Santa Monica Practice Location
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    123th Street 45 W, Santa Monica, CA 90401
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Conveniently located for clients in Santa Monica and surrounding Los Angeles Westside communities.
                  </p>
                </div>
              </div>

              {/* Office Characteristics */}
              <div className="space-y-4 pt-4 border-t border-[#E2DDD5]">
                
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[#3D5A50] shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">Abundant Natural Light & Uncluttered Space:</strong> Designed with comfortable seating, warm wooden floors, and expansive windows to foster a soothing environment.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#3D5A50] shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">Quiet & Private Sanctuary:</strong> A peaceful, confidential space where you can step away from daily stressors and focus completely on your healing.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Video className="w-4 h-4 text-[#3D5A50] shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">Flexible Telehealth Option:</strong> In addition to in-person sessions in Santa Monica, secure online video sessions are available for clients anywhere in California.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#3D5A50] shrink-0 mt-1" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-semibold">By Appointment Only:</strong> To ensure complete privacy and undivided focus, all sessions are scheduled in advance.
                  </div>
                </div>

              </div>

            </div>

            {/* Testimonial Quote */}
            <div className="bg-[#E6ECE8]/60 p-4 rounded-xl border border-[#C9D7CF]/60 text-xs text-[#1F302A] italic">
              &ldquo;Clients frequently share that the quiet atmosphere, natural lighting, and comfortable environment help them feel grounded and at ease the moment they enter.&rdquo;
            </div>

          </div>

          {/* Right Column: Authentic Office Image Gallery */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Office Image 1 */}
            <div className="space-y-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-[#E2DDD5] shadow-md group">
                <Image
                  src="/images/office-1.jpg"
                  alt="Dr. Maya Reynolds Santa Monica Therapy Office - Seating area with sofa, glass coffee table, and natural sunlight"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-center text-slate-600 font-medium">
                Seating Area & Natural Light Windows
              </p>
            </div>

            {/* Office Image 2 */}
            <div className="space-y-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 border border-[#E2DDD5] shadow-md group">
                <Image
                  src="/images/office-2.jpg"
                  alt="Dr. Maya Reynolds Santa Monica Therapy Office - Comfortable armchair and custom shelving area"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[11px] text-center text-slate-600 font-medium">
                Quiet & Private Consultation Space
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
