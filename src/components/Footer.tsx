
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pizza-brown text-pizza-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="font-cinzel font-bold text-2xl md:text-3xl text-pizza-yellow mb-4">
              PIZZARIA NAPOLI
            </h3>
            <p className="font-lora text-pizza-cream/80 mb-6 leading-relaxed">
              Desde 1985 levando o verdadeiro sabor da pizza napolitana para sua mesa. 
              Tradição, qualidade e muito amor em cada fatia.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/pizzarianapoli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pizza-red hover:bg-pizza-yellow hover:text-pizza-brown p-3 rounded-full transition-colors duration-300 border-2 border-pizza-green"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/pizzarianapoli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pizza-red hover:bg-pizza-yellow hover:text-pizza-brown p-3 rounded-full transition-colors duration-300 border-2 border-pizza-green"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/pizzarianapoli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pizza-red hover:bg-pizza-yellow hover:text-pizza-brown p-3 rounded-full transition-colors duration-300 border-2 border-pizza-green"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-cinzel font-bold text-lg text-pizza-yellow mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pizza-green" />
                <span className="font-lora text-pizza-cream/80">(51) 99182-8651</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pizza-green" />
                <span className="font-lora text-pizza-cream/80">contato@pizzarianapoli.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-pizza-green mt-1" />
                <div className="font-lora text-pizza-cream/80">
                  <div>Rua dos Andradas, 1001</div>
                  <div>Centro Histórico - Porto Alegre/RS</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Horários */}
          <div>
            <h4 className="font-cinzel font-bold text-lg text-pizza-yellow mb-4">Horários</h4>
            <div className="space-y-2 font-lora text-pizza-cream/80">
              <div>
                <p className="font-semibold text-pizza-cream">Segunda a Quinta</p>
                <p>18h às 23h</p>
              </div>
              <div>
                <p className="font-semibold text-pizza-cream">Sexta e Sábado</p>
                <p>18h às 24h</p>
              </div>
              <div>
                <p className="font-semibold text-pizza-cream">Domingo</p>
                <p>18h às 23h</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha Divisória */}
        <div className="border-t border-pizza-green mt-8 pt-8 text-center">
          <p className="font-lora text-pizza-cream/60">
            © 2025 Pizzaria Napoli. Todos os direitos reservados.
          </p>
          <p className="font-lora text-pizza-cream/50 text-sm mt-2">
            Desenvolvido com 🍕 e muito amor
          </p>
        </div>
      </div>
      
      {/* WhatsApp Button Fixo */}
      <a 
        href="https://wa.me/5551991828651?text=Olá! Gostaria de fazer um pedido!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-pizza-green hover:bg-pizza-green/90 text-white p-4 rounded-full shadow-2xl z-50 transition-all duration-300 transform hover:scale-110 border-2 border-pizza-yellow"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
