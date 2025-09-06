import Image from "next/image";
import Hero from "../components/solution/Hero";
import { Header } from "../components/Header";
import Support from "../components/solution/Support";
import { HotServicesSection } from "../components/solution/HotServicesSection";
import FAQ from "../components/solution/FAQ";
import CTA from "../components/solution/CTA";
import Footer from "../components/Footer";
import "./page.css";
import SEO from "../components/SEO";
export default function solution() {
  return (
    <>
      <SEO
        title="NextGen Services | Compliance, Funding & Growth for Startups & MSMEs	"
        description="From registrations to investor access – NextGen Business Consultancy services help businesses grow faster and stay compliant."
        ogTitle="NextGen Services | From Compliance to Digital Marketing & Expansion"
        ogDescription="NextGen Business Consultancy offers tailored services to empower startups & MSMEs with funding, compliance, and digital growth."
        // twitterTitle="NextGen – Startup Growth Partner"
        // twitterDescription="Helping founders with compliance, tax, and funding."
        // url="https://mywebsite.com"
        // image="https://mywebsite.com/og-image.jpg"
      />
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
