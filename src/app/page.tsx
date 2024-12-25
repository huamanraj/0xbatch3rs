import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import HowItWorks from "@/components/landing-page/how-it-works";
import Faq from "@/components/landing-page/faq";
import CTA from "@/components/landing-page/cta";


export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <div>
        <Features />
        <HowItWorks />
        <Faq />
        <CTA />
      </div>
      <Footer />
    </>
  );
}
