import { User, ShieldAlert, Zap, CheckCircle2 } from "lucide-react";

export default function WhoWeHelp() {
  const cards = [
    {
      icon: Zap,
      title: "Exhausted from High Pressure & Burnout",
      subtitle: "Entrepreneurs, Creatives & Professionals",
      description:
        "For adults who feel disconnected from themselves after years of pushing through relentless stress. You may struggle with perfectionism, difficulty unwinding, or feeling that you can never drop your guard.",
      highlights: [
        "Professional exhaustion & quiet burnout",
        "Perfectionism & high internal expectations",
        "Restoring balance & sustainable living",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Carrying the Weight of Past Experiences",
      subtitle: "Single-Incident & Complex Relational Trauma",
      description:
        "For adults navigating earlier life events that continue to impact relationships, confidence, or a sense of safety. Therapy focuses on stabilization, emotional pacing, and feeling regulated.",
      highlights: [
        "Single-incident trauma & painful events",
        "Complex, long-standing childhood or relational stress",
        "EMDR & memory reconsolidation",
      ],
    },
    {
      icon: User,
      title: "Living with Chronic Worry & Anxiety",
      subtitle: "Panic Symptoms & Nervous System Tension",
      description:
        "For high-functioning adults who quietly brace for something to go wrong. We address both emotional overthinking and physiological symptoms like tension and sleep disruption.",
      highlights: [
        "Constant worry & mental exhaustion",
        "Physical tension & insomnia",
        "Mindfulness & body-oriented regulation",
      ],
    },
  ];

  const focusTags = [
    "Anxiety & Panic",
    "Single-Incident Trauma",
    "Complex Relational Patterns",
    "EMDR Therapy",
    "Professional Burnout",
    "Perfectionism & Pressure",
    "Body-Oriented Somatic Tools",
    "Mindfulness Practices",
    "High Achievers",
    "CBT Strategies",
  ];

  return (
    <section id="who-i-help" className="py-12 lg:py-18 bg-[#F2EEE7]/50 border-b border-[#E2DDD5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 lg:mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#E6ECE8] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#C9D7CF]">
            Client Recognition & Specificity
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2522]">
            Is This Therapy Space Right for You?
          </h2>
          <p className="text-base sm:text-lg text-[#3D5A50] font-semibold leading-snug">
            &ldquo;High-functioning on the outside, exhausted on the inside.&rdquo;
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Specialized psychological support tailored specifically for adults who are holding everything together professionally and socially, while quietly struggling internally with worry, burnout, or unaddressed life experiences.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBF9F5] rounded-2xl p-7 border border-[#E2DDD5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center group-hover:bg-[#3D5A50] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-serif-title text-2xl font-bold text-[#1C2522]">
                      {card.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#3D5A50] uppercase tracking-wide mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="space-y-2 pt-2 text-xs text-slate-700 border-t border-[#E2DDD5]/60">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3D5A50] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Focus Tags */}
        <div className="mt-14 pt-10 border-t border-[#E2DDD5] text-center space-y-4">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
            Core Areas of Focus & Modalities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full bg-[#FBF9F5] text-slate-800 text-xs font-medium border border-[#E2DDD5] hover:border-[#3D5A50] hover:bg-[#E6ECE8] hover:text-[#1F302A] transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
