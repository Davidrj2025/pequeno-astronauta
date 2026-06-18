import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Gallery from "@/components/Gallery";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <SocialProofBar />
      <Gallery />
      <TestimonialCarousel />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
}
