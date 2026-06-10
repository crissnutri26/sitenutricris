import Especialidades from "../components/Especialidades";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Planos from "../components/Planos";
import Sobre from "../components/Sobre";
import WhatsAppButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Sobre />
      <Especialidades />
      <Planos />
      <Faq />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
