"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Where is your office located, and do you offer online therapy?",
      answer:
        "My physical office is located at 123th Street 45 W, Santa Monica, CA 90401. It is a quiet, private space designed to feel calm and grounding with natural light. I also offer secure telehealth sessions for adult clients residing anywhere in California.",
    },
    {
      question: "What issues and concerns do you specialize in?",
      answer:
        "My clinical work focuses primarily on anxiety, panic, single-incident and complex relational trauma, professional burnout, perfectionism, and high internal pressure. Many of my clients feel high-functioning externally while dealing with constant internal worry, bodily tension, or fatigue.",
    },
    {
      question: "What therapeutic methods or approaches do you integrate?",
      answer:
        "I integrate evidence-based modalities including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented somatic techniques. This helps address both emotional cognitive patterns and physiological nervous system responses.",
    },
    {
      question: "Who is your practice tailored for?",
      answer:
        "My practice offers individual therapy for adults. I frequently support entrepreneurs, creatives, professionals, and high achievers who are ready to slow down, process past trauma, and develop more sustainable, regulated ways of living and working.",
    },
    {
      question: "How are sessions structured?",
      answer:
        "Sessions are structured enough to feel supportive and grounded, while leaving space for reflection, depth, and pacing. Trauma and anxiety work is carefully paced with an emphasis on safety and emotional stabilization.",
    },
  ];

  return (
    <section id="faq" className="py-12 lg:py-18 bg-[#F2EEE7]/40 border-b border-[#E2DDD5]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="px-3.5 py-1 rounded-full bg-[#E6ECE8] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#C9D7CF]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1C2522]">
            Questions About Working Together
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-normal">
            Find answers regarding session formats, specialties, and therapeutic modalities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FBF9F5] rounded-xl border border-[#E2DDD5] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif-title text-lg sm:text-xl font-bold text-[#1C2522] hover:text-[#3D5A50] transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-5 h-5 text-[#3D5A50] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3D5A50] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-slate-700 leading-relaxed border-t border-[#E2DDD5]/60 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
