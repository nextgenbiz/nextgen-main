import Image from "next/image";
import Hero from "../components/solution/Hero";
import { Header } from "../components/Header";
import Support from "../components/solution/Support";
import { HotServicesSection } from "../components/solution/HotServicesSection";
import FAQ from "../components/solution/FAQ";
import CTA from "../components/solution/CTA";
import Footer from "../components/Footer";
import "./page.css";
export default function solution() {
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
