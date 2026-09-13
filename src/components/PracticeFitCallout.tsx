import { Calendar, Shield, Sparkles } from "lucide-react";

interface PracticeFitCalloutProps {
  onOpenBooking: () => void;
}

export default function PracticeFitCallout({ onOpenBooking }: PracticeFitCalloutProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#F2EEE7]/80 border-b border-[#E2DDD5]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6ECE8] text-[#3D5A50] text-xs font-semibold uppercase tracking-wider border border-[#C9D7CF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Taking the First Step</span>
        </div>

        <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#1C2522]">
          You don’t have to navigate this alone.
        </h2>

        <p className="text-base text-slate-700 leading-relaxed max-w-2xl mx-auto font-normal">
          Reaching out can feel daunting when you are exhausted or uncertain, but you deserve a compassionate, non-judgmental space to figure things out. Start with one simple conversation.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-sm font-semibold rounded-full shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Start with One Conversation</span>
          </button>
        </div>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Shield className="w-4 h-4 text-[#3D5A50]" />
          <span>Confidential • In-Person in Santa Monica & Telehealth in California</span>
        </div>

      </div>
    </section>
  );
}
