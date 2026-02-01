import { useState } from 'react';
import { Play } from 'lucide-react';

const VideosFull = () => {
  const videos = [
    {
      title: '1996 TEMPLO LADO B MIXTAPE - Video Lyric',
      description: 'Video lírico oficial del nuevo lanzamiento disponible en YouTube.',
      youtubeId: '_QY714NgfOc',
      views: 'Nuevo',
    },
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
  ];

  const PAGE_SIZE = 9;
  const [page, setPage] = useState(1);
  const total = videos.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const start = (page - 1) * PAGE_SIZE;
  const pageItems = videos.slice(start, start + PAGE_SIZE);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-6">Todos los Videos</h1>
        <p className="text-sky-300 mb-8">Disfruta de toda la colección de videos del sello Bside Factory.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pageItems.map((video, i) => (
            <div
              key={i}
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

        <div className="mt-8 flex items-center justify-center gap-3">
          <button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="px-4 py-2 bg-sky-600 text-white rounded disabled:opacity-50">Anterior</button>
          <div className="text-white">Página {page} de {totalPages}</div>
          <button disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="px-4 py-2 bg-sky-600 text-white rounded disabled:opacity-50">Siguiente</button>
        </div>
      </div>
    </section>
  );
};

export default VideosFull;
