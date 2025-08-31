import Hero from "./components/home/Hero";
import { Header } from "./components/Header";
import CounterSection from "./components/home/CounterSection";
import GrowthSection from "./components/home/GrowthSection";
import Timeline from "./components/home/Timeline";
import { HotServicesSection } from "./components/home/HotServicesSection";
import Footer from "./components/Footer";
import "./page.css";
import Box from "./components/home/Box";
import TestimonialsSlider from "./components/home/TestimonialsSlider";
import Timeline2 from "./components/home/Timeline2";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CounterSection />
      <Timeline2 />

      <section className="w-full pt-16 px-4 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-['Be_Vietnam_Pro'] font-semibold text-[#05325f] text-[46.6px]">
              Achieving Business Growth
            </h2>
          </div>
        </div>
      </section>
      <Box />
      {/* <GrowthSection /> */}
      <HotServicesSection />
      <TestimonialsSlider />
      {/* <Timeline2 /> */}
      <Footer />
    </>
  );
}
