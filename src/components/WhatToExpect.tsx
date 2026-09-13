import { Shield, Clock, Compass } from "lucide-react";

export default function WhatToExpect() {
  const steps = [
    {
      icon: Clock,
      title: "A Gentle, Paced Rhythm",
      description:
        "There is no pressure to reveal everything at once. We move at a pace that respects your readiness, focusing first on safety, stabilization, and helping your body feel grounded.",
    },
    {
      icon: Compass,
      title: "Structure & Space to Reflect",
      description:
        "Sessions are structured enough to feel supportive and focused, while leaving room for deep self-reflection, emotional processing, and non-judgmental exploration.",
    },
    {
      icon: Shield,
      title: "Practical Tools & Insight",
      description:
        "You’ll gain practical cognitive, somatic, and mindfulness tools to manage worry and tension in your daily life—not just during our session hours.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#F2EEE7]/60 border-b border-[#E2DDD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="px-3.5 py-1 rounded-full bg-[#E6ECE8] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#C9D7CF]">
            Reducing Uncertainty
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1C2522]">
            What Working Together Feels Like
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            Beginning therapy can bring up uncertainty. Here is what you can expect when we work together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBF9F5] p-7 rounded-2xl border border-[#E2DDD5] space-y-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-[#1C2522]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
