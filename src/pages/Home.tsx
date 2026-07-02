import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Differentials from "../components/sections/Differentials";
import Testimonials from "../components/sections/Testimonials";
import LocationContact from "../components/sections/LocationContact";
import ContactForm from "../components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Testimonials />
      <LocationContact />
      <ContactForm />
    </>
  );
}
