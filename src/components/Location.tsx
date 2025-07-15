import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Car } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-pizza-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-4xl md:text-6xl text-pizza-red mb-4">
            Onde Estamos
          </h2>
          <div className="w-24 h-1 bg-pizza-yellow mx-auto mb-8"></div>
          <p className="font-lora text-lg text-pizza-brown max-w-2xl mx-auto">
            Venha nos visitar ou peça delivery para sua casa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mapa */}
          <div className="relative">
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-xl h-96 border-4 border-pizza-green">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1537030579765!2d-51.227080424510826!3d-30.02871213180986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979040758ff13%3A0x154155dbe091e478!2sR.%20dos%20Andradas%2C%201001%20-%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre%20-%20RS%2C%2090020-007!5e0!3m2!1spt-BR!2sbr!4v1721078701015!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Pizzaria Napoli"
              />
            </div>
          </div>

          {/* Informações */}
          <div className="space-y-6">
            <Card className="border-2 border-pizza-green shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pizza-red text-white p-3 rounded-lg border-2 border-pizza-yellow">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-lg text-pizza-brown mb-2">Endereço</h3>
                    <div className="font-lora text-pizza-brown">
                      <div>Rua dos Andradas, 1001</div>
                      <div>Centro Histórico – Porto Alegre/RS</div>
                      <div>CEP: 90020-015</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pizza-green shadow-lg bg-white">
  <CardContent className="p-6">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
      <div className="bg-pizza-yellow text-pizza-brown p-3 rounded-lg border-2 border-pizza-green flex-shrink-0 flex items-center justify-center">
        <Phone className="h-8 w-8 sm:h-6 sm:w-6" />
      </div>
      <div className="w-full text-center sm:text-left">
        <h3 className="font-cinzel font-bold text-xl sm:text-lg text-pizza-brown mb-2">
          Contato
        </h3>
        <div className="font-lora text-pizza-brown space-y-2">
          <div>📞 (51) 99182-8651</div>
          <div>📱 (51) 99182-8651</div>
          <div>✉️ contato@pizzarianapoli.com.br</div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
            <Card className="border-2 border-pizza-green shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pizza-green text-white p-3 rounded-lg border-2 border-pizza-yellow">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-lg text-pizza-brown mb-2">Horário de Funcionamento</h3>
                    <div className="space-y-1 font-lora text-pizza-brown">
                      <p><strong>Segunda a Quinta:</strong> 18h às 23h</p>
                      <p><strong>Sexta e Sábado:</strong> 18h às 24h</p>
                      <p><strong>Domingo:</strong> 18h às 23h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pizza-yellow shadow-lg bg-gradient-to-r from-pizza-red to-pizza-brown">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pizza-cream/20 text-white p-3 rounded-lg border-2 border-pizza-yellow">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-cinzel font-bold text-lg text-pizza-cream mb-2">Delivery</h3>
                    <div className="font-lora text-pizza-cream">
                      <div>🚚 <strong>Grátis</strong> para pedidos acima de R$ 50</div>
                      <div>⏱️ Tempo de entrega: 30-45 minutos</div>
                      <div>📍 Raio de entrega: 10km</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
