import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Education from "./sections/Education";
import Testimonials from "./sections/Testimonials";
import Social from "./sections/Social";
// import Videos from "./sections/Videos"; /* ← Fase 4: descomentar para reactivar videos cortos */
import FAQ from "./sections/FAQ";
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
      <Social />
      {/* <Videos /> ← Fase 4: descomentar para mostrar videos cortos */}
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
