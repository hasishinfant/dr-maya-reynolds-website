import { ShieldCheck, Heart, Sparkles, Brain, Check } from "lucide-react";

interface AreasOfExpertiseProps {
  onOpenBooking: () => void;
}

export default function AreasOfExpertise({ onOpenBooking }: AreasOfExpertiseProps) {
  const specialties = [
    {
      id: "trauma",
      badge: "Approach 01",
      icon: ShieldCheck,
      title: "Trauma & EMDR Therapy",
      headline: "Processing past experiences to restore emotional safety and nervous system regulation.",
      description:
        "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing childhood or relational stress patterns. Our work is paced carefully, focusing on safety, stabilization, and helping you feel grounded.",
      bullets: [
        "Eye Movement Desensitization & Reprocessing (EMDR)",
        "Single-incident trauma & complex relational patterns",
        "Paced stabilization to prioritize your comfort & safety",
        "Helping your body and mind feel regulated",
      ],
    },
    {
      id: "anxiety",
      badge: "Approach 02",
      icon: Brain,
      title: "Anxiety & Panic Management",
      headline: "Understanding constant worry, physical tension, and sleep disruption.",
      description:
        "Clients frequently come to me feeling 'functional' on the outside while quietly struggling with constant worry, somatic tension in their body, or difficulty sleeping. We address both the cognitive overthinking and the physiological signals your body is holding.",
      bullets: [
        "Easing constant worry & cognitive overthinking",
        "Body-oriented somatic techniques to release physical tension",
        "Cognitive-Behavioral Therapy (CBT) strategies",
        "Improving sleep & calming nervous system reactivity",
      ],
    },
    {
      id: "burnout",
      badge: "Approach 03",
      icon: Heart,
      title: "Burnout & High Pressure",
      headline: "Navigating professional exhaustion and perfectionism.",
      description:
        "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through relentless stress. Therapy becomes a private, quiet space to slow down, reconnect, and develop more sustainable ways of living and working.",
      bullets: [
        "Relief from relentless internal pressure & perfectionism",
        "Establishing healthy boundaries without guilt",
        "Slowing down to prevent chronic burnout",
        "Developing deeper self-compassion & clarity",
      ],
    },
    {
      id: "modalities",
      badge: "Approach 04",
      icon: Sparkles,
      title: "Integrative Body & Mind Modalities",
      headline: "Evidence-based methods tailored specifically to your unique needs.",
      description:
        "No two people are the same. I integrate evidence-based therapeutic methods to help you understand both the emotional and physiological sides of what you're experiencing.",
      bullets: [
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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
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

        {/* 4 Alternating Specialty Blocks */}
        <div className="space-y-12 lg:space-y-16">
          {specialties.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`bg-[#F2EEE7] rounded-3xl p-6 sm:p-10 border border-[#E2DDD5] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Column */}
                <div className={`space-y-4 ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-[#3D5A50] text-white text-[11px] font-bold tracking-wider uppercase">
                      {item.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#1C2522]">
                    {item.title}
                  </h3>

                  <p className="text-base font-semibold text-[#3D5A50]">
                    {item.headline}
                  </p>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 bg-white/70 p-2.5 rounded-lg border border-[#E2DDD5]/60">
                        <Check className="w-3.5 h-3.5 text-[#3D5A50] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Callout Box Column */}
                <div className={`space-y-4 ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
                  <div className="bg-[#FBF9F5] p-6 sm:p-8 rounded-2xl border border-[#E2DDD5] text-center space-y-5 shadow-xs">
                    <div className="w-12 h-12 rounded-full bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif-title text-xl font-bold text-[#1C2522]">
                      Interested in {item.title}?
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sessions are offered in-person at my quiet Santa Monica office or via secure telehealth across California.
                    </p>
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-3 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-xs font-semibold rounded-full shadow-xs transition-colors"
                    >
                      Reach Out for a Conversation
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
