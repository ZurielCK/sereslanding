import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Education from "./sections/Education";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Videos from "./sections/Videos";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <About />
      <Education />
      <Testimonials />
      <Videos />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
