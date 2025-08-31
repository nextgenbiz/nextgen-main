import Hero from "../components/contact/Hero";
import { Header } from "../components/Header";
import Form from "../components/contact/Form";
import Address from "../components/contact/Address";
import CTA from "../components/contact/CTA";
import Footer from "../components/Footer";
import "./page.css";
export default function Contact() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Address />
      <CTA />
      <Footer />
    </>
  );
}
