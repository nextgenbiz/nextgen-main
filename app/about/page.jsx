import Hero from "../components/about/Hero";
import { Header } from "../components/Header";
import Services from "../components/about/Services";
import Timeline from "../components/about/Timeline";
import Values from "../components/about/Values";
// import Process from "./components/about/Process";
import Impact from "../components/about/Impact";
import CTA from "../components/about/CTA";
import Footer from "../components/Footer";
import "./page.css";
// import Box from "./components/about/Box";
export default function About() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Timeline />
      <Values />
      {/* <Process /> */}
      <Impact />
      <CTA />
      <Footer />
    </>
  );
}
