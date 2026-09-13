"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import ValuesBanner from "@/components/ValuesBanner";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import WhatToExpect from "@/components/WhatToExpect";
import PracticeFitCallout from "@/components/PracticeFitCallout";
import OurOfficeSection from "@/components/OurOfficeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C2522]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Journey */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 2: Practitioner Intro & Philosophy */}
        <IntroSection />

        {/* Section 3: Recognizing What You Might Be Going Through */}
        <WhoWeHelp />

        {/* Section 4: Restorative Values Banner */}
        <ValuesBanner onOpenBooking={handleOpenBooking} />

        {/* Section 5: Specialties & Modalities */}
        <AreasOfExpertise onOpenBooking={handleOpenBooking} />

        {/* Section 6: What to Expect in Therapy */}
        <WhatToExpect />

        {/* Section 7: Gentle Closing Callout */}
        <PracticeFitCallout onOpenBooking={handleOpenBooking} />

        {/* Section 8: Required Our Office Section */}
        <OurOfficeSection />

        {/* Section 9: Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Consultation Modal */}
      <AppointmentModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
