import { HeartHandshake, Compass, Shield, UserCheck } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FBF9F5] border-b border-[#E2DDD5]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2EEE7] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#E2DDD5]">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>A Grounded, Human Partnership</span>
        </div>

        {/* Section Headline */}
        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2522] leading-tight max-w-3xl mx-auto">
          First and foremost, what you&apos;re going through is real, valid, and worthy of attentive support.
        </h2>

        {/* Empathetic Narrative Copy */}
        <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto text-left sm:text-center font-normal">
          <p>
            I’m a licensed clinical psychologist based in Santa Monica, California, offering individual therapy for adults. Many of the people I work with are high-achieving, thoughtful, and self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <p>
            You might feel &ldquo;functional&rdquo; on the outside while quietly struggling with constant worry, physical tension in your body, difficulty sleeping, or a sense that you&apos;re always bracing for something to go wrong.
          </p>
          <p className="font-medium text-[#1C2522]">
            I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive and safe, while still leaving ample space for reflection, depth, and genuine healing.
          </p>
        </div>

        {/* 3 Reassuring Feature Cards */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="bg-[#F2EEE7] p-6 rounded-2xl border border-[#E2DDD5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#1C2522]">
              Paced & Non-Rushed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We move at a pace that respects your safety and readiness, integrating practical tools with depth-oriented self-reflection.
            </p>
          </div>

          <div className="bg-[#F2EEE7] p-6 rounded-2xl border border-[#E2DDD5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#1C2522]">
              Evidence-Based Modalities
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Integrating CBT, EMDR, mindfulness-based practices, and body-oriented somatic techniques for mind-body regulation.
            </p>
          </div>

          <div className="bg-[#F2EEE7] p-6 rounded-2xl border border-[#E2DDD5] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6ECE8] text-[#3D5A50] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif-title text-xl font-semibold text-[#1C2522]">
              Respectful Partnership
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Therapy works best when you feel understood, respected, and actively involved in shaping your own growth over time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
