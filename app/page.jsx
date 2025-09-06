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
import SEO from "./components/SEO";
import CTA from "./components/home/CTA";
export default function Home() {
  return (
    <>
      <SEO
        title="NextGen Business Consultancy | India’s Startup Growth Hub"
        description="Your one-stop hub for Startup India, MSME support, tax exemptions, and investor connections. NextGen powers India’s startup growth journey."
        ogTitle="India’s Trusted Partner for Startup Success | NextGen Consultancy"
        ogDescription="Get expert guidance on registrations, tax holidays, compliance & investor linkage with NextGen Consultancy."
        twitterTitle="NextGen – Startup Growth Partner"
        twitterDescription="Helping founders with compliance, tax, and funding."
        // url="https://mywebsite.com"
        // image="https://mywebsite.com/og-image.jpg"
      />
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
