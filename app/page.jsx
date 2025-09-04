import Hero from "./components/home/Hero";
import { Header } from "./components/Header";
import CounterSection from "./components/home/CounterSection";
import Timeline2 from "./components/home/Timeline2";
import { HotServicesSection } from "./components/home/HotServicesSection";
import Footer from "./components/Footer";
import "./page.css";
import Box from "./components/home/Box";
import TestimonialsSlider from "./components/home/TestimonialsSlider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CounterSection />
      <Timeline2 />
      <Box />
      <HotServicesSection />
      <TestimonialsSlider />
      <Footer />
    </>
  );
}
