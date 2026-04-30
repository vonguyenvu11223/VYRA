import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Collections from "@/components/Collections";
import BestSellers from "@/components/BestSellers";
import Lookbook from "@/components/Lookbook";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Collections />
        <BestSellers />
        <Lookbook />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
