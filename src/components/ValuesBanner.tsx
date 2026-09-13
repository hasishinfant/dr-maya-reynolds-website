import { Quote } from "lucide-react";

interface ValuesBannerProps {
  onOpenBooking: () => void;
}

export default function ValuesBanner({ onOpenBooking }: ValuesBannerProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#3D5A50] text-white relative overflow-hidden">
      {/* Background Soft Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-emerald-200">
          <Quote className="w-6 h-6" />
        </div>

        <h2 className="font-serif-title text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white max-w-4xl mx-auto">
          &ldquo;Therapy works best when clients feel respected, understood, and actively involved in the process.&rdquo;
        </h2>

        <p className="text-sm sm:text-base text-emerald-100 max-w-2xl mx-auto leading-relaxed font-normal">
          My goal is not just temporary symptom relief, but helping you develop long-term insight, resilience, and a stronger, more compassionate relationship with yourself over time.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 bg-white text-[#1F302A] hover:bg-[#F2EEE7] text-sm font-semibold rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            Start with a Conversation
          </button>
          
          <a
            href="#specialties"
            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full border border-white/20 transition-colors"
          >
            Explore Therapeutic Methods
          </a>
        </div>

      </div>
    </section>
  );
}
