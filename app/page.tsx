import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from '../components/Footer';
import About from "@/components/About";
import Faqs from "@/components/Faq";
import ContactForm from "@/components/Contact";
import CompanyTrust from "@/components/CompanyTrusted";
import Disclaimer from "@/components/Disclaimer";
import Features from '../components/Features';


export default function Home() {
  return (
      <main className="min-h-screen background">
        <Navbar />
        <Hero />
        <CompanyTrust />
        <Features />
        <Services />
        <Faqs />
        <ContactForm />
        <About />
        <Disclaimer />
        <Footer />
      </main>
  );
}
