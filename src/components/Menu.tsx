import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Menu = () => {
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Molho de tomate, mussarela, manjericão fresco e azeite",
      price: "R$ 38,90",
      image: "/images/margherita.jpg",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Molho de tomate, mussarela e pepperoni artesanal",
      price: "R$ 42,90",
      image: "/images/pepperoni.jpg",
    },
    {
      id: 3,
      name: "Quattro Formaggi",
      description: "Mussarela, gorgonzola, parmesão e provolone",
      price: "R$ 46,90",
      image: "/images/quattroformaggi.jpg",
    },
    {
      id: 4,
      name: "Calabresa",
      description: "Molho de tomate, mussarela, calabresa e cebola",
      price: "R$ 39,90",
      image: "/images/calabresa.jpg",
    },
    {
      id: 5,
      name: "Portuguesa",
      description: "Presunto, ovos, ervilha, cebola, azeitona e mussarela",
      price: "R$ 44,90",
      image: "/images/portuguesa.jpg",
    },
    {
      id: 6,
      name: "Napolitana",
      description: "Molho de tomate, mussarela, tomate, atum e azeitona",
      price: "R$ 43,90",
      image: "/images/napolitana.jpg",
    },
  ];

  // Pré-carregar imagens no background
  useEffect(() => {
    pizzas.forEach((pizza) => {
      const img = new Image();
      img.src = pizza.image + "?q=70&auto=format";
    });
  }, []);

  return (
    <section id="cardapio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl md:text-6xl text-pizza-red mb-4">
            Nosso Cardápio
          </h2>
          <div className="w-24 h-1 bg-pizza-yellow mx-auto mb-8"></div>
          <p className="font-lora text-lg text-pizza-brown max-w-2xl mx-auto">
            Pizzas artesanais feitas com ingredientes frescos e muito amor
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pizzas.map((pizza) => (
            <Card
              key={pizza.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pizza-green shadow-lg overflow-hidden bg-pizza-cream"
            >
              <div className="relative overflow-hidden">
                <img
                  src={pizza.image + "?q=70&auto=format"}
                  alt={pizza.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={600}
                  height={300}
                />
                <div className="absolute top-4 right-4 bg-pizza-red text-pizza-cream px-3 py-1 rounded-full border border-pizza-yellow">
                  <span className="font-lora font-bold text-sm">
                    {pizza.price}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-cinzel font-bold text-xl text-pizza-brown mb-2">
                  {pizza.name}
                </h3>
                <p className="font-lora text-pizza-brown opacity-80 mb-4 leading-relaxed">
                  {pizza.description}
                </p>
                <Button
                  className="w-full bg-pizza-yellow hover:bg-pizza-yellow/90 text-pizza-brown font-lora font-semibold border-2 border-pizza-green"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5551991828651?text=Olá! Gostaria de pedir uma pizza ${pizza.name}`,
                      "_blank"
                    )
                  }
                >
                  🛒 Pedir Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-pizza-cream p-6 rounded-lg border-2 border-pizza-green">
          <p className="font-lora text-pizza-brown mb-4">
            🚚 <strong>Delivery Grátis</strong> para pedidos acima de R$ 50,00
          </p>
          <p className="font-lora text-sm text-pizza-brown opacity-80">
            Tempo de entrega: 30-45 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
