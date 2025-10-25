import { Calendar, MapPin, Clock, Ticket, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Bside Factory 28 Aniversario',
      date: '15 Diciembre 2024',
      time: '21:00 hrs',
      venue: 'Club Subterráneo',
      address: 'Av. Vicuña Mackenna 2540, La Florida, Santiago',
      description: 'Celebración especial con todos los artistas del sello. Una noche histórica de Hip Hop chileno.',
      price: '$8.000',
      status: 'Próximamente',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Cypher Battle Season 2025',
      date: '20 Enero 2025',
      time: '19:00 hrs',
      venue: 'Centro Cultural Espacio',
      address: 'Calle General Velásquez 1542, Santiago Centro',
      description: 'Competencia de freestyle con los mejores exponentes del rap underground nacional.',
      price: '$5.000',
      status: 'Entradas Disponibles',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Tour Nacional Underground',
      date: '10 Febrero 2025',
      time: '20:00 hrs',
      venue: 'Múltiples Ciudades',
      address: 'Santiago, Valparaíso, Concepción, Temuco',
      description: 'Gira nacional presentando lo mejor del catálogo de Bside Factory. 12 ciudades, un solo movimiento.',
      price: 'Desde $6.000',
      status: 'Preventas Abiertas',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="eventos" className="py-20 px-4 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          EVENTOS
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 italic">
          No te pierdas nuestros próximos shows
        </p>

        <div className="space-y-8 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-sky-50 to-cyan-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:scale-102 transition-all duration-300 border-2 border-sky-200"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-sky-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {event.status}
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{event.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-sky-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-bold text-gray-900">{event.date}</p>
                        <p className="text-sm text-gray-600">Fecha del evento</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-sky-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-bold text-gray-900">{event.time}</p>
                        <p className="text-sm text-gray-600">Hora de inicio</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-sky-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-bold text-gray-900">{event.venue}</p>
                        <p className="text-sm text-gray-600">{event.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ticket className="text-sky-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-bold text-gray-900">{event.price}</p>
                        <p className="text-sm text-gray-600">Precio entrada</p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-sky-600 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Comprar Entradas
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-1 rounded-3xl shadow-2xl mb-8">
          <div className="bg-white p-8 rounded-3xl text-center">
            <Calendar className="w-16 h-16 text-sky-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Quieres que toquemos en tu ciudad?</h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para organizar un evento de Bside Factory en tu localidad
            </p>
            <a
              href="#contacto"
              className="inline-block bg-sky-600 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-700 transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Evento
            </a>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#eventos"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Ver Calendario Completo
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
