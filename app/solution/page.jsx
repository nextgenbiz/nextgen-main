import Image from "next/image";
import Hero from "../components/solution/Hero";
import { Header } from "../components/Header";
import Support from "../components/solution/Support";
import { HotServicesSection } from "../components/solution/HotServicesSection";
import FAQ from "../components/solution/FAQ";
import CTA from "../components/solution/CTA";
import Footer from "../components/Footer";
import "./page.css";

export const metadata = {
  title: "NextGen Services | Compliance, Funding & Growth for Startups & MSMEs",
  description:
    "From registrations to investor access – NextGen Business Consultancy services help businesses grow faster and stay compliant.",
     alternates: {
    canonical: "https://www.nextgenbusiness.co.in/solution",
  },

  // Open Graph (Facebook, LinkedIn, WhatsApp, Slack, etc.)
  openGraph: {
    title: "NextGen Services | From Compliance to Digital Marketing & Expansion",
    description:
      "NextGen Business Consultancy offers tailored services to empower startups & MSMEs with funding, compliance, and digital growth.",
    url: "https://www.nextgenbusiness.co.in/solution",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nextgenbusiness.co.in/og-image-solution.jpg", // Services page OG image
        width: 1200,
        height: 630,
        alt: "NextGen Consultancy - Services",
      },
    ],
  },

  // Twitter (Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "NextGen Services | From Compliance to Digital Marketing & Expansion",
    description:
      "NextGen Business Consultancy offers tailored services to empower startups & MSMEs with funding, compliance, and digital growth.",
    images: ["https://www.nextgenbusiness.co.in/og-image-solution.jpg"],
    creator: "@NextGenBiz", // optional
  },
};

export default function Solution() {
  return (
    <>
      <Header />
      <Hero />
      <Support />
      <HotServicesSection />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
