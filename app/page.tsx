import Details from "@/components/Features";
import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from "@/components/About";
import Faqs from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import CompanyTrust from "@/components/CompanyTrusted";


export default function Home() {
  return (
      <div className="min-h-screen background">
        <Navbar />
        <Hero />
        <CompanyTrust />
        <Faqs />
        <Details />
        <Services />
        <About />
        {/* <Testimonials /> */}
        <ContactForm />
        <Footer />
      </div>
  );
}
