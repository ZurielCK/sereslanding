import { useState, useEffect } from "react";

import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Education from "./sections/Education";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar />

      <Hero />
      <Services />
      <About />
      <Education />
      <Testimonials />
      <CTA />

      <Footer />

      <WhatsAppButton />
    </>
  );
}
