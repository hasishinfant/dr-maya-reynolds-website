"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

interface AreasOfExpertiseProps {
  onOpenBooking: () => void;
}

export default function AreasOfExpertise({ onOpenBooking }: AreasOfExpertiseProps) {
  const approaches = [
    {
      id: "trauma",
      badge: "APPROACH 01",
      title: "Trauma & EMDR Therapy",
      headline: "Processing past experiences to restore emotional safety and nervous system regulation.",
      description:
        "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing childhood or relational stress patterns. Our work is paced carefully, focusing on safety, stabilization, and helping you feel grounded.",
      image: "/images/approach-trauma.jpg",
      imageAlt: "Abstract 3D tactile relief artwork symbolizing emotional grounding and trauma stabilization",
      tags: [
        "Eye Movement Desensitization & Reprocessing (EMDR)",
        "Single-incident trauma & complex relational patterns",
        "Paced stabilization to prioritize safety",
        "Nervous system regulation & body calm",
      ],
    },
    {
      id: "anxiety",
      badge: "APPROACH 02",
      title: "Anxiety & Panic Management",
      headline: "Easing constant worry, physical tension, and sleep disruption.",
      description:
        "Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, somatic tension in their body, or difficulty sleeping. We address both the cognitive overthinking and the physiological signals your body is holding.",
      image: "/images/approach-anxiety.jpg",
      imageAlt: "Abstract 3D tactile relief artwork symbolizing nervous system calm and easing anxiety",
      tags: [
        "Easing constant worry & cognitive overthinking",
        "Body-oriented somatic tension release",
        "Cognitive-Behavioral Therapy (CBT) tools",
        "Improving sleep & calming reactivity",
      ],
    },
    {
      id: "burnout",
      badge: "APPROACH 03",
      title: "Burnout & High Pressure",
      headline: "Navigating professional exhaustion, perfectionism, and internal strain.",
      description:
        "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through relentless stress. Therapy becomes a private, quiet space to slow down, reconnect, and develop more sustainable ways of living and working.",
      tags: [
        "Relief from relentless internal pressure & perfectionism",
        "Establishing healthy boundaries without guilt",
        "Slowing down to prevent chronic burnout",
        "Developing self-compassion & clarity",
      ],
      image: "/images/approach-burnout.jpg",
      imageAlt: "Abstract 3D tactile relief artwork symbolizing burnout recovery and spacious breathing room",
    },
    {
      id: "modalities",
      badge: "APPROACH 04",
      title: "Integrative Body & Mind Modalities",
      headline: "Evidence-based methods tailored specifically to your unique needs.",
      description:
        "No two people are the same. I integrate evidence-based therapeutic methods to help you understand both the emotional and physiological sides of what you're experiencing.",
      image: "/images/approach-integrative.jpg",
      imageAlt: "Abstract 3D tactile relief artwork symbolizing mind and body integration and balance",
      tags: [
        "Cognitive-Behavioral Therapy (CBT)",
        "EMDR (Eye Movement Desensitization & Reprocessing)",
        "Mindfulness-Based Practices",
        "Somatic & Body-Oriented Techniques",
      ],
    },
  ];

  return (
    <section id="specialties" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E2DDD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <span className="px-3.5 py-1 rounded-full bg-[#E6ECE8] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#C9D7CF]">
            Clinical Modalities & Expertise
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2522]">
            Evidence-Based Support Tailored to Your Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Grounding depth-oriented reflection with practical tools to help you heal from what’s hurting and build meaningful resilience.
          </p>
        </div>

        {/* Visual Editorial Storytelling System */}
        <div className="space-y-16 lg:space-y-24">
          {approaches.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F2EEE7]/60 p-6 sm:p-10 rounded-3xl border border-[#E2DDD5] shadow-xs ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Column: Custom 3D Abstract Artwork */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isEven ? "" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden bg-white border border-[#E2DDD5] shadow-md group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                {/* Content Column: Editorial Copy & Scannable Details */}
                <div
                  className={`space-y-5 ${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-1"
                  }`}
                >
                  {/* Badge */}
                  <div className="inline-block px-3 py-1 rounded-md bg-[#3D5A50] text-white text-[11px] font-bold tracking-widest uppercase">
                    {item.badge}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1C2522] leading-tight">
                    {item.title}
                  </h3>

                  {/* One-Sentence Emotional Summary */}
                  <p className="text-base sm:text-lg font-semibold text-[#3D5A50] leading-snug">
                    {item.headline}
                  </p>

                  {/* Short Explanation */}
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Compact Modality Chips */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                    {item.tags.map((tag, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-xl border border-[#E2DDD5] shadow-2xs"
                      >
                        <Check className="w-3.5 h-3.5 text-[#3D5A50] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-3">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-xs font-semibold rounded-full shadow-xs hover:shadow-md transition-all group"
                    >
                      <span>Reach Out for a Conversation</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
