import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import Benefits from '@/components/benefits/Benefits';
import Testimonials from '@/components/testimonials/Testimonials';
import Integrations from '@/components/integrations/Integrations';
import Pricing from '@/components/pricing/Pricing';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Integrations />
      <Pricing />
      <Footer />
    </div>
  );
}
