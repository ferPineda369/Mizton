import Hero from '@/components/Hero';
import CommunitySection from '@/components/CommunitySection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <CommunitySection />
      <ServicesSection />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </main>
  );
}