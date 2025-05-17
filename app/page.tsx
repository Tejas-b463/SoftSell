import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import WhyChooseUs from './components/sections/WhyChooseUs';
import ContactForm from './components/sections/ContactForm'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <HowItWorks/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactForm/>
    </div>
  );
}
