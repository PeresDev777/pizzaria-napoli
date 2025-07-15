import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Clock } from "lucide-react";

const Hero = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  const scrollToMenu = () => {
    const menuSection = document.getElementById("cardapio");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5551991828651?text=Olá! Gostaria de fazer um pedido na Pizzaria Napoli",
      "_blank"
    );
  };

  const imageUrl =
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80";

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setBgLoaded(true);
  }, []);

  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        bgLoaded ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: bgLoaded ? `url('${imageUrl}')` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay escura para contraste */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-pizza-cream px-4 max-w-4xl mx-auto">
        <h1 className="font-cinzel font-black text-4xl md:text-7xl lg:text-8xl mb-6 animate-fade-in leading-tight">
          PIZZARIA
          <span className="block text-pizza-yellow drop-shadow-lg">NAPOLI</span>
        </h1>

        <p className="font-lora text-lg md:text-2xl lg:text-3xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Tradição italiana com sabor brasileiro.
          <br />
          <span className="font-semibold text-pizza-cream">
            As melhores pizzas da cidade!
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={scrollToMenu}
            size="lg"
            className="bg-pizza-yellow hover:bg-pizza-yellow/90 text-pizza-brown font-lora font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-pizza-green"
          >
            🍕 FAZER PEDIDO
          </Button>

          <Button
            onClick={openWhatsApp}
            variant="outline"
            size="lg"
            className="border-2 border-pizza-cream text-pizza-cream bg-transparent hover:bg-pizza-cream hover:text-pizza-red font-lora font-semibold px-6 py-4 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Phone className="mr-2 h-5 w-5" />
            (51) 99182-8651
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-pizza-cream font-lora">
          <Clock className="h-5 w-5 text-pizza-green" />
          <span className="text-sm md:text-base">
            Aberto das 18h às 23h • Seg a Dom
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
