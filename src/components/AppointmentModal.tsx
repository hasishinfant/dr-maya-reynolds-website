"use client";

import { useState, useEffect, useRef } from "react";
import { X, Calendar, MapPin, Video, CheckCircle, Shield } from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "in-person",
    primaryConcern: "anxiety",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-[#FBF9F5] text-[#1C2522] rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative border border-[#E2DDD5] max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 p-2 rounded-full hover:bg-[#F2EEE7] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-[#E6ECE8] text-[#3D5A50] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif-title text-2xl font-semibold text-[#1C2522]">
              Consultation Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-slate-900">{formData.name}</span>. Dr. Maya Reynolds’ practice will review your request and reach out within 1-2 business days.
            </p>
            <div className="bg-[#F2EEE7] p-4 rounded-xl text-left text-xs space-y-1.5 text-slate-700">
              <p><strong>Session Format:</strong> {formData.sessionType === "in-person" ? "In-Person (Santa Monica Office)" : "Secure Telehealth (California)"}</p>
              <p><strong>Selected Focus:</strong> {formData.primaryConcern.toUpperCase()}</p>
            </div>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-sm font-medium rounded-full transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A50] uppercase mb-1">
              <Calendar className="w-4 h-4" /> Schedule a Consultation
            </div>
            <h2 id="modal-title" className="font-serif-title text-2xl sm:text-3xl font-semibold text-[#1C2522]">
              Work with Dr. Maya Reynolds
            </h2>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Licensed Clinical Psychologist • Santa Monica, CA & Telehealth
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] rounded-xl text-sm focus:border-[#3D5A50] focus:ring-1 focus:ring-[#3D5A50] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] rounded-xl text-sm focus:border-[#3D5A50] focus:ring-1 focus:ring-[#3D5A50] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(310) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] rounded-xl text-sm focus:border-[#3D5A50] focus:ring-1 focus:ring-[#3D5A50] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Preferred Session Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, sessionType: "in-person" })}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                      formData.sessionType === "in-person"
                        ? "border-[#3D5A50] bg-[#E6ECE8] text-[#1F302A]"
                        : "border-[#E2DDD5] bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#3D5A50]" />
                    In-Person (Santa Monica)
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, sessionType: "telehealth" })}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                      formData.sessionType === "telehealth"
                        ? "border-[#3D5A50] bg-[#E6ECE8] text-[#1F302A]"
                        : "border-[#E2DDD5] bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <Video className="w-3.5 h-3.5 text-[#3D5A50]" />
                    Telehealth (California)
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Primary Area of Focus
                </label>
                <select
                  value={formData.primaryConcern}
                  onChange={(e) => setFormData({ ...formData, primaryConcern: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] rounded-xl text-sm focus:border-[#3D5A50] focus:ring-1 focus:ring-[#3D5A50] transition-colors"
                >
                  <option value="anxiety">Anxiety & Somatic Tension</option>
                  <option value="trauma">Trauma & EMDR Therapy</option>
                  <option value="burnout">Professional Burnout & Perfectionism</option>
                  <option value="other">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1">
                  Brief Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of what you're experiencing or questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] rounded-xl text-sm focus:border-[#3D5A50] focus:ring-1 focus:ring-[#3D5A50] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 bg-[#F2EEE7] p-2.5 rounded-lg">
                <Shield className="w-4 h-4 text-[#3D5A50] shrink-0" />
                <span>Your information is handled with absolute privacy and confidentiality.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3D5A50] hover:bg-[#2D443C] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                Submit Consultation Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
