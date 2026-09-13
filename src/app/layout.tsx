import type { Metadata } from "next";
import { Cormorant_Infant, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Infant({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | Santa Monica, CA",
  description:
    "Evidence-based therapy for adults experiencing anxiety, trauma, and burnout in Santa Monica, CA and via secure telehealth across California. In-person and online sessions.",
  keywords: [
    "Dr. Maya Reynolds",
    "Psychologist Santa Monica",
    "Therapy Santa Monica CA",
    "Trauma Therapist Santa Monica",
    "EMDR Therapy California",
    "Anxiety Specialist Santa Monica",
    "Burnout Therapy for Professionals",
    "Telehealth Therapy California",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description:
      "Grounded, collaborative therapy for adults dealing with anxiety, trauma, EMDR, and burnout in Santa Monica, CA.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-[#1C2522] font-sans selection:bg-[#3D5A50] selection:text-white">
        {children}
      </body>
    </html>
  );
}

