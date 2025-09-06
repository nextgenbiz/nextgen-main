import Hero from "../components/contact/Hero";
import { Header } from "../components/Header";
import Form from "../components/contact/Form";
import Address from "../components/contact/Address";
import CTA from "../components/contact/CTA";
import Footer from "../components/Footer";
import "./page.css";
import SEO from "../components/SEO";
export default function Contact() {
  return (
    <>
      <SEO
        title="Reach Out to NextGen Consultancy | Business Growth Partner"
        description="Contact NextGen Business Consultancy today – from compliance to growth strategies, we handle everything so you focus on your business"
        ogTitle="Get in Touch | Expert Business Support at NextGen Consultancy"
        ogDescription="Reach out to NextGen Business Consultancy for registration, compliance, funding, and growth support for your startup or MSME."
        // twitterTitle="NextGen – Startup Growth Partner"
        // twitterDescription="Helping founders with compliance, tax, and funding."
        // url="https://mywebsite.com"
        // image="https://mywebsite.com/og-image.jpg"
      />
      <Header />
      <Hero />
      <Form />
      <Address />
      <CTA />
      <Footer />
    </>
  );
}
