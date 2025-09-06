import Hero from "../components/about/Hero";
import { Header } from "../components/Header";
import Services from "../components/about/Services";
import Timeline from "../components/about/Timeline";
import Values from "../components/about/Values";
import Process from "../components/about/Process";
import Impact from "../components/about/Impact";
import CTA from "../components/about/CTA";
import Footer from "../components/Footer";
import "./page.css";
import SEO from "../components/SEO";
export default function About() {
  return (
    <>
      <SEO
        title="NextGen Consultancy India | Trusted Startup Growth Partner"
        description="Learn how NextGen Consultancy supports entrepreneurs with Startup India certification, MSME compliance, and strategic business growth."
        ogTitle="Discover NextGen Business Consultancy | From Idea to Growth"
        ogDescription="From registration to business expansion, NextGen Business Consultancy enables founders to focus on growth while we handle the rest."
        // twitterTitle="NextGen – Startup Growth Partner"
        // twitterDescription="Helping founders with compliance, tax, and funding."
        // url="https://mywebsite.com"
        // image="https://mywebsite.com/og-image.jpg"
      />
      <Header />
      <Hero />
      <Services />
      <Timeline />
      <Values />
      <Process />
      <Impact />
      <CTA />
      <Footer />
    </>
  );
}
