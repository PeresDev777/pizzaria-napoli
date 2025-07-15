
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-lora">
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
