"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Who I Help", href: "#who-i-help" },
    { name: "Specialties & Approaches", href: "#specialties" },
    { name: "Our Office", href: "#office" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBF9F5]/95 backdrop-blur-md shadow-xs border-b border-[#E2DDD5]/80 py-3"
          : "bg-[#FBF9F5] py-5 border-b border-[#E2DDD5]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Practitioner Title */}
        <a
          href="#"
          className="group flex flex-col focus:outline-hidden"
          aria-label="Dr. Maya Reynolds, PsyD - Home"
        >
          <span className="font-serif-title text-xl sm:text-2xl font-bold tracking-tight text-[#1C2522] group-hover:text-[#3D5A50] transition-colors">
            Dr. Maya Reynolds, PsyD
          </span>
          <span className="text-[11px] sm:text-xs font-medium tracking-wide text-slate-500 uppercase flex items-center gap-1.5">
            <span>Licensed Clinical Psychologist</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline flex items-center text-[#3D5A50]">
              <MapPin className="w-3 h-3 inline mr-0.5" /> Santa Monica, CA
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#3D5A50] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3D5A50] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-xs sm:text-sm font-semibold rounded-full shadow-xs hover:shadow-md transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Start with a Conversation</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-[#F2EEE7] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#E2DDD5] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-[#F2EEE7] hover:text-[#3D5A50] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#E2DDD5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-sm font-semibold rounded-full shadow-xs transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Start with a Conversation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
