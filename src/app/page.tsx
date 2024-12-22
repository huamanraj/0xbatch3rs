import Header from "@/components/header/header";
import RadialBinaryBg from "@/components/radial-binary-bg/radial-binary-bg";
import MatrixRainBg from "@/components/matrix-rain-bg/matrix-rain-bg";
import Footer from "@/components/footer/footer";
import Hero from "@/components/landing-page/hero";


export default function Home() {

  return (
    <>
      <Header />
      {/* <MatrixRainBg 
        speed={10} 
        intensity={90} 
        matrixFontSize={10} 
      /> */}
      <Hero />
      {/* <RadialBinaryBg /> */}
      <Footer />
    </>
  );
}
