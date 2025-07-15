import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Menu = () => {
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Molho de tomate, mussarela, manjericão fresco e azeite",
      price: "R$ 38,90",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Molho de tomate, mussarela e pepperoni artesanal",
      price: "R$ 42,90",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=60",
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
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 5,
      name: "Portuguesa",
      description: "Presunto, ovos, ervilha, cebola, azeitona e mussarela",
      price: "R$ 44,90",
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 6,
      name: "Napolitana",
      description: "Molho de tomate, mussarela, tomate, atum e azeitona",
      price: "R$ 43,90",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=60",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pizzas.map((pizza) => (
            <Card
              key={pizza.id}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-pizza-green shadow-lg overflow-hidden bg-pizza-cream"
            >
              <div className="relative overflow-hidden">
                <img
                  srcSet={`\${pizza.image} 1x, \${pizza.image.replace('w=600', 'w=1200')} 2x`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={pizza.image}
                  alt={pizza.name}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pizza-red text-pizza-cream px-3 py-1 rounded-full border border-pizza-yellow">
                  <span className="font-lora font-bold text-sm">{pizza.price}</span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-pizza-brown mb-2">
                    {pizza.name}
                  </h3>
                  <p className="font-lora text-pizza-brown opacity-80 mb-4 leading-relaxed">
                    {pizza.description}
                  </p>
                </div>
                <Button
                  className="w-full bg-pizza-yellow hover:bg-pizza-yellow/90 text-pizza-brown font-lora font-semibold border-2 border-pizza-green mt-auto"
                  onClick={() =>
                    window.open(
                      `https://wa.me/5551991828651?text=Olá! Gostaria de pedir uma pizza \${pizza.name}`,
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
