import { } from 'lucide-react';

type ArtistsProps = {
  onNavigate?: (path: string) => void;
};

const Artists = ({ onNavigate }: ArtistsProps) => {
  const placeholderImage = 'https://i.postimg.cc/D0ftG3JL/Pronto.png';
  const bandsImage = 'https://i.ibb.co/G4qFw9By/1.jpg';
  const soloistsImage = 'https://i.ibb.co/C55JfMQF/2.jpg';
  const collaborationsImage = 'https://i.ibb.co/BHPrwQdh/3.jpg';

  const cards = [
    {
      title: 'Bandas',
      subtitle: 'Ver Bandas',
      description:
        'Colectivos y bandas representativas del sello. Aquí encontrarás los grupos que han trabajado con Bside Factory y su historia, lanzamientos y colaboraciones.',
      route: '/bandas',
      image: bandsImage,
    },
    {
      title: 'Solistas',
      subtitle: 'Ver Solistas',
      description:
        'Artistas individuales: MCs, cantantes y productores que han publicado trabajos mediante el sello. Biografías, discografía y singles destacados.',
      route: '/solistas',
      image: soloistsImage,
    },
    {
      title: 'Colaboraciones',
      subtitle: 'Ver Colaboraciones',
      description:
        'Proyectos colaborativos entre artistas del sello y colaboradores externos. Singles, remixes y proyectos especiales.',
      route: '/colaboraciones',
      image: collaborationsImage,
    },
  ];

  return (
    <section id="artistas" className="py-20 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-8 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          Artistas
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-sky-600 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                {card.title === 'Bandas' ? (
                  <a href="https://ibb.co/Zp0NsSt5" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.ibb.co/G4qFw9By/1.jpg"
                      alt="Templo Lado B"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="360"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                ) : card.title === 'Solistas' ? (
                  <a href="https://ibb.co/ynnhrYqJ" target="_blank" rel="noopener noreferrer">
                    <img
                      src={soloistsImage}
                      alt="Solistas"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="360"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                ) : card.title === 'Colaboraciones' ? (
                  <a href="https://ibb.co/MyhG9tWz" target="_blank" rel="noopener noreferrer">
                    <img
                      src={collaborationsImage}
                      alt="Colaboraciones"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="360"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                ) : (
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black text-white mb-3">{card.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{card.description}</p>
                <div className="mt-auto text-center">
                  <button
                    onClick={() => onNavigate ? onNavigate(card.route) : window.location.href = card.route}
                    className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-700 transition-colors"
                  >
                    {card.subtitle}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
