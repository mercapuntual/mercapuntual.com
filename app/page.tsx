import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import CiudadYogaCase from "@/components/CiudadYogaCase";
import Products from "@/components/Products";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Modules />
      <CiudadYogaCase />
      <Products />
      <CTA />
      <Footer />
    </>
  );
}
