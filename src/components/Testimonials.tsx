
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      text: "A melhor pizza da cidade! Massa fina, ingredientes frescos e sabor incomparável. Já sou cliente há 10 anos!",
      rating: 5,
      image: "/images/mariasilva.png"
    },
    {
      id: 2,
      name: "João Santos",
      text: "Delivery sempre pontual e a pizza chega quentinha. A Margherita é simplesmente perfeita!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ana Costa",
      text: "Ambiente aconchegante, atendimento excelente e pizzas deliciosas. Recomendo para toda a família!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-pizza-yellow fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pizza-red to-pizza-brown">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl md:text-6xl text-pizza-cream mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-24 h-1 bg-pizza-yellow mx-auto mb-8"></div>
          <p className="font-lora text-lg text-pizza-cream max-w-2xl mx-auto">
            Mais de 10.000 clientes satisfeitos ao longo dos anos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-pizza-cream border-2 border-pizza-green shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-pizza-yellow"
                />
                
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="font-lora text-pizza-brown mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <h4 className="font-cinzel font-bold text-pizza-red">
                  {testimonial.name}
                </h4>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-pizza-cream/20 backdrop-blur-sm rounded-full px-8 py-4 border-2 border-pizza-green">
            <div className="text-center">
              <div className="font-cinzel font-bold text-2xl text-pizza-yellow">4.9</div>
              <div className="flex justify-center">
                {renderStars(5)}
              </div>
              <div className="font-lora text-sm text-pizza-cream">Google Reviews</div>
            </div>
            <div className="h-12 w-px bg-pizza-cream/30"></div>
            <div className="text-center">
              <div className="font-cinzel font-bold text-2xl text-pizza-yellow">10K+</div>
              <div className="font-lora text-sm text-pizza-cream">Clientes Felizes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
