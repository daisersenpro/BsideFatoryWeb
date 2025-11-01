import { Music, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Artists = () => {
  const placeholderImage = 'https://i.postimg.cc/D0ftG3JL/Pronto.png';

  const artists = [
    {
      name: 'Mario Corleone',
      role: 'Fundador & Productor',
      description: 'Pionero del Hip Hop chileno, fundador de Bside Factory en 1996. Productor musical y visionario que ha dado forma a la escena del rap en La Florida.',
      image: placeholderImage,
      social: {
        instagram: '#',
        youtube: '#',
        spotify: '#',
      },
    },
    {
      name: 'César Alonso "Musicario"',
      role: 'MC & Letrista',
      description: 'Primer artista en incorporarse al sello. Co-fundador de Templo Lado B, conocido por su flow único y letras profundas que marcan la identidad del Hip Hop nacional.',
      image: placeholderImage,
      social: {
        instagram: '#',
        youtube: '#',
        spotify: '#',
      },
    },
    {
      name: 'Santa Kela',
      role: 'MC',
      description: 'Miembro de Templo Lado B, destacado por su energía en el escenario y su habilidad para conectar con la audiencia a través de letras que reflejan la realidad urbana.',
      image: placeholderImage,
      social: {
        instagram: '#',
        youtube: '#',
        spotify: '#',
      },
    },
    {
      name: 'Mr. Cleri',
      role: 'MC & Beatmaker',
      description: 'Integrante de Templo Lado B. Especializado en la creación de beats innovadores y letras que fusionan la cultura Hip Hop con la identidad chilena.',
      image: placeholderImage,
      social: {
        instagram: '#',
        youtube: '#',
        spotify: '#',
      },
    },
    {
      name: 'Escuadra Copihuana',
      role: 'Crew',
      description: 'Colectivo colaborador del sello, reconocido en la escena underground por sus presentaciones en vivo y su compromiso con el Hip Hop consciente.',
      image: placeholderImage,
      social: {
        instagram: '#',
        youtube: '#',
        spotify: '#',
      },
    },
    {
      name: 'Dalonso',
      role: 'MC',
      description: 'Artista emergente del sello, destacado por su estilo versátil y capacidad para adaptarse a diferentes ritmos manteniendo la esencia del rap chileno.',
      image: placeholderImage,
      social: {
        instagram: '#',
        youtube: '#',
        spotify: '#',
      },
    },
  ];

  return (
    <section id="artistas" className="py-20 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          NUESTROS ARTISTAS
        </h2>
        <p className="text-xl text-sky-400 text-center mb-16 italic">La voz del Hip Hop chileno</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {artists.slice(0, 3).map((artist, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-sky-600"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Music className="text-sky-500" size={24} />
                  <span className="text-sky-400 font-bold uppercase text-sm">{artist.role}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{artist.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{artist.description}</p>
                <div className="flex gap-4">
                  <a
                    href={artist.social.instagram}
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={artist.social.youtube}
                    className="text-red-400 hover:text-red-300 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href={artist.social.spotify}
                    className="text-green-400 hover:text-green-300 transition-colors"
                    aria-label="Spotify"
                  >
                    <Music size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#artistas"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Ver Todos los Artistas
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Artists;
