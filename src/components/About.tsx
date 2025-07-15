import { Heart, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-pizza-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl md:text-6xl text-pizza-red mb-4">
            Nossa História
          </h2>
          <div className="w-24 h-1 bg-pizza-yellow mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem à esquerda */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3" 
              alt="Pizza artesanal" 
              className="rounded-lg shadow-xl w-full h-auto animate-fade-in border-4 border-pizza-green"
            />
          </div>

          {/* Texto à direita */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="font-lora text-lg text-pizza-brown leading-relaxed">
              Fundada em 1985 pela tradicional família Rossi, a{' '}
              <strong className="text-pizza-red">Pizzaria Napoli</strong>{' '}
              trouxe para São Paulo a verdadeira essência da pizza napolitana.
            </p>

            <p className="font-lora text-lg text-pizza-brown leading-relaxed">
              Com mais de 35 anos de história, cultivamos uma paixão por ingredientes frescos, 
              massa de fermentação natural e o carinho artesanal em cada detalhe. 
              Cada pizza é uma celebração da tradição italiana com o toque acolhedor do Brasil.
            </p>

            {/* Ícones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-pizza-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-pizza-green">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-cinzel font-semibold text-pizza-brown mb-2">Feito com Amor</h3>
                <p className="font-lora text-sm text-pizza-brown opacity-80">Cada pizza é preparada com carinho</p>
              </div>

              <div className="text-center">
                <div className="bg-pizza-yellow text-pizza-brown w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-pizza-green">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-cinzel font-semibold text-pizza-brown mb-2">Qualidade Premium</h3>
                <p className="font-lora text-sm text-pizza-brown opacity-80">Ingredientes selecionados</p>
              </div>

              <div className="text-center">
                <div className="bg-pizza-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-pizza-red">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-cinzel font-semibold text-pizza-brown mb-2">35+ Anos</h3>
                <p className="font-lora text-sm text-pizza-brown opacity-80">Tradição familiar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
