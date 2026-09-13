"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Heart, ShieldCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] pt-6 pb-12 lg:pt-12 lg:pb-18 border-b border-[#E2DDD5]/60">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#E6ECE8]/50 rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-[#F2EEE7]/80 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Humanized Welcoming Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Location & Format Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6ECE8] text-[#1F302A] text-xs font-semibold tracking-wide border border-[#C9D7CF]/60">
              <MapPin className="w-3.5 h-3.5 text-[#3D5A50]" />
              <span>In-Person in Santa Monica & Telehealth Across California</span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C2522] leading-[1.15]">
              Feeling overwhelmed? You don’t need to have all the answers to <span className="text-[#3D5A50] italic font-normal">begin</span>.
            </h1>

            {/* Lead Paragraph — Crisp 5-Second Clarity */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Grounded psychological therapy with <strong className="font-semibold text-[#1C2522]">Dr. Maya Reynolds, PsyD</strong>—supporting adults exhausted by high pressure, chronic worry, or past trauma through paced, integrative EMDR, CBT, and somatic practices.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Start with a Conversation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#F2EEE7] hover:bg-[#E4DDD2] text-[#1C2522] text-sm font-semibold rounded-full border border-[#E2DDD5] transition-colors"
              >
                Explore How I Work
              </a>
            </div>

            {/* Quick Indicators */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700 border-t border-[#E2DDD5]/70">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#3D5A50] shrink-0" />
                <span>Paced & Non-Judgmental</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3D5A50] shrink-0" />
                <span>CBT, EMDR & Somatic Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3D5A50] shrink-0" />
                <span>Quiet Santa Monica Sanctuary</span>
              </div>
            </div>

          </div>

          {/* Right Column: Perfectly Aligned Portrait Media Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Soft Ambient Glow */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#3D5A50]/25 via-[#E3DAD0]/40 to-[#3D5A50]/15 blur-xl -z-10" />

              <div className="bg-[#F2EEE7] p-4 sm:p-5 rounded-3xl border border-[#E2DDD5] shadow-2xl space-y-4">
                
                {/* High-Res Portrait Frame with Centered Alignment */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-[#E2DDD5] shadow-inner group">
                  <Image
                    src="/images/maya-headshot.jpg"
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  
                  {/* Floating Identity Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 bg-white/95 backdrop-blur-md rounded-xl text-left shadow-md border border-white/50">
                    <p className="text-xs sm:text-sm font-bold text-[#1C2522]">Dr. Maya Reynolds, PsyD</p>
                    <p className="text-[11px] sm:text-xs text-[#3D5A50] font-medium flex items-center gap-1 mt-0.5">
                      <span>Licensed Clinical Psychologist</span>
                    </p>
                  </div>
                </div>

                {/* Grounding Personal Quote Box */}
                <div className="bg-white p-4 rounded-xl border border-[#E2DDD5] text-left text-xs space-y-1 shadow-xs">
                  <p className="text-slate-800 font-medium leading-relaxed">
                    &ldquo;I provide a quiet, collaborative space where your story is heard and respected—helping you slow down, heal, and find your footing.&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
