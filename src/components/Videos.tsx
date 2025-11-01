import { Play, ArrowRight } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: 'GANGSTA FAMILIA - ESTILO PANDILLERO',
      description: 'Video oficial: Estilo Pandillero - GANGSTA FAMILIA.',
      youtubeId: 'rQfctPAyX4c',
      views: 'Desconocidas',
    },
    {
      title: 'Mario Corleone - Video oficial',
      description: 'Video agregado: Mario Corleone.',
      youtubeId: 'B6XaObLhhJ0',
      views: '89K',
    },
    {
      title: 'Bside Factory - Scd Show',
      description: 'Presentación en SCD: momento histórico del grupo.',
      youtubeId: 'sHuykpjIlfo',
      views: '67K',
    },
    {
      title: 'Cypher Bside Factory - Edición Especial',
      description: 'Los mejores MCs del sello reunidos en una sesión única de freestyle.',
      youtubeId: 'dQw4w9WgXcQ',
      views: '234K',
    },
    {
      title: 'Escuadra Copihuana - Batalla de Gallos',
      description: 'Competencia épica de freestyle que quedó para la historia del rap nacional.',
      youtubeId: 'dQw4w9WgXcQ',
      views: '178K',
    },
    {
      title: 'Tour Santiago Underground - Recap 2023',
      description: 'Resumen del tour más importante del año con todas las presentaciones del sello.',
      youtubeId: 'dQw4w9WgXcQ',
      views: '125K',
    },
  ];

  return (
    <section id="videos" className="py-20 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          VIDEOS
        </h2>
        <p className="text-xl text-sky-400 text-center mb-16 italic">
          Revive los mejores momentos en video
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videos.slice(0, 3).map((video, index) => (
            <div
              key={index}
              className="group bg-sky-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-sky-600"
            >
              <div className="relative h-48 bg-gradient-to-br from-sky-900 to-blue-900 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{video.description}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sky-400 font-semibold">
                    <Play size={16} />
                    {video.views} vistas
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 p-8 rounded-3xl shadow-2xl mb-8 text-center">
          <h3 className="text-3xl font-black text-white mb-4 italic">
            SUSCRÍBETE A NUESTRO CANAL
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            No te pierdas ningún lanzamiento, batalla o documental exclusivo
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            <Play size={24} fill="currentColor" />
            Ver en YouTube
          </a>
        </div>

        <div className="text-center">
          <a
            href="#videos"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Ver Todos los Videos
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
