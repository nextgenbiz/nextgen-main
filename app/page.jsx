import Hero from "./components/home/Hero";
import { Header } from "./components/Header";
import CounterSection from "./components/home/CounterSection";
import Timeline2 from "./components/home/Timeline2";
import { HotServicesSection } from "./components/home/HotServicesSection";
import Footer from "./components/Footer";
import "./page.css";
import Box from "./components/home/Box";
import TestimonialsSlider from "./components/home/TestimonialsSlider";
import Testimonialmobile from "./components/home/TestimonialsMobile";
import Test from "./components/home/Test";
import CTA from "./components/home/CTA";

export const metadata = {
  title: "NextGen Business Consultancy | India’s Startup Growth Hub",
  description:
    "Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections. NextGen powers India’s startup growth journey.",

  // Open Graph (used by Facebook, LinkedIn, WhatsApp, Slack, etc.)
  openGraph: {
    title: "India’s Trusted Partner for Startup Success | NextGen Consultancy",
    description:
      "Get expert guidance on registrations, tax holidays, compliance & investor linkage with NextGen Consultancy.",
    url: "https://www.nextgenbusiness.co.in/",
    siteName: "NextGen Business Consultancy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.nextgenbusiness.co.in/og-image-home.jpg", // Home page OG image
        width: 1200,
        height: 630,
        alt: "NextGen Consultancy - Startup Growth Hub",
      },
    ],
  },

  // Twitter (Twitter/X cards)
  twitter: {
    card: "summary_large_image",
    title: "India’s Trusted Partner for Startup Success | NextGen Consultancy",
    description:
      "Get expert guidance on registrations, tax holidays, compliance & investor linkage with NextGen Consultancy.",
    images: ["https://www.nextgenbusiness.co.in/og-image-home.jpg"],
    creator: "@NextGenBiz", // optional: your Twitter handle
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CounterSection />
      <Timeline2 />
      <Box />
      <HotServicesSection />
      <Test />

      {/* Desktop / Tablet version */}
      {/* <div className="hidden md:block">
        <TestimonialsSlider />
      </div> */}

      {/* Mobile version */}
      {/* <div className="block md:hidden">
        <Testimonialmobile />
      </div> */}

      <CTA />
      <Footer />
    </>
  );
}
