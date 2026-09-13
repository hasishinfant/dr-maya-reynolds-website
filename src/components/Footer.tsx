import { MapPin, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#1C2522] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Practitioner Statement */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif-title text-2xl font-bold text-white tracking-tight">
              Dr. Maya Reynolds, PsyD
            </h3>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#C9D7CF]">
              Licensed Clinical Psychologist
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing grounded, evidence-based therapy for adults navigating anxiety, trauma, and professional burnout. Sessions available in-person in Santa Monica and via secure telehealth statewide across California.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>California Licensed Psychologist</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <p className="font-semibold text-white uppercase tracking-wider">Quick Navigation</p>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Dr. Maya Reynolds
                </a>
              </li>
              <li>
                <a href="#who-i-help" className="hover:text-white transition-colors">
                  Who I Help (Adults)
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-white transition-colors">
                  Specialties & Methods (CBT, EMDR)
                </a>
              </li>
              <li>
                <a href="#office" className="hover:text-white transition-colors">
                  Our Santa Monica Office
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Office Location & Booking Action */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <p className="font-semibold text-white uppercase tracking-wider">Office & Service Area</p>
            
            <div className="flex items-start gap-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-[#C9D7CF] shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Santa Monica Office</p>
                <p className="text-slate-400">123th Street 45 W, Santa Monica, CA 90401</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
              <p className="text-slate-300">Ready to discuss your goals?</p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#3D5A50] hover:bg-[#2D443C] text-white font-semibold rounded-lg transition-colors text-xs"
              >
                Start with a Conversation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Accessibility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Accessibility Statement</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
