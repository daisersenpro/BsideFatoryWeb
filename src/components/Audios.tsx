import { Music, ArrowRight } from 'lucide-react';

const Audios = () => {
  const tracks = [
    {
      title: 'Mamacita',
      artist: 'SenPro',
      year: 'Single',
      description: 'Single oficial - SenPro',
      youtubeId: 'DpHmVAPZ--k',
    },
    {
      title: 'En Tranzas',
      artist: 'Los Cazadores',
      year: 'Single',
      description: 'Single de Los Cazadores',
      youtubeId: 'qGU2lo2Gvhw',
    },
    {
      title: 'ESTO TIENE QUE ACABAR',
      artist: 'Los Cazadores',
      year: 'Single',
      description: 'Los Cazadores - Esto Tiene Que Acabar',
      youtubeId: 'G7Vl0AnCjKI',
    },
    {
      title: 'valientino - nadie molesta - prod. mario corleone',
      artist: 'Valientino',
      year: 'Single',
      description: 'valientino - nadie molesta (prod. Mario Corleone)',
      youtubeId: 'qnWeSYtCirM',
    },
  ];

  return (
    <section id="audios" className="py-20 px-4 bg-white/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          AUDIOS
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-sky-200 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${track.youtubeId}`}
                  title={track.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-sky-600 transition-colors">
                  {track.title}
                </h3>
                <p className="text-sky-600 font-semibold mb-2">{track.artist}</p>
                <p className="text-sm text-gray-600 mb-2">{track.description}</p>
                <span className="inline-block bg-sky-600 text-white text-xs px-3 py-1 rounded-full font-bold">
                  {track.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-1 rounded-3xl shadow-2xl mb-8">
          <div className="bg-white p-8 rounded-3xl text-center">
            <Music className="w-16 h-16 text-sky-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Disponible en todas las plataformas</h3>
            <p className="text-gray-600 mb-6">
              Escucha nuestra música en Spotify, Apple Music, YouTube Music y más
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-600 text-white px-6 py-2 rounded-full font-bold">Spotify</span>
              <span className="bg-gray-800 text-white px-6 py-2 rounded-full font-bold">Apple Music</span>
              <span className="bg-sky-600 text-white px-6 py-2 rounded-full font-bold">YouTube Music</span>
              <span className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold">SoundCloud</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#audios"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Escuchar Más Tracks
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Audios;
