import { Disc3, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import discography from '../data/discography';

type DiscographyProps = {
  onNavigate?: (path: string) => void;
};

const Discography = ({ onNavigate }: DiscographyProps) => {
  // Carousel shows multiple items per page (4 cards) and rotates by page
  const itemsPerPage = 4;
  // only include entries that have an image (skip empty placeholders)
  // do NOT limit the number here so the carousel will show all albums in groups of 4
  const slides = discography.filter((d) => !!d.image);
  const AUTOPLAY_MS = 6000; // time to wait on each page (ms)
  const TRANSITION_CLASS = 'transition-transform duration-500 ease-in-out';
  const totalPages = Math.max(1, Math.ceil(slides.length / itemsPerPage));
  const [page, setPage] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    autoplayRef.current = window.setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [totalPages]);

  const pause = () => { if (autoplayRef.current) { window.clearInterval(autoplayRef.current); autoplayRef.current = null; } };
  const resume = () => { if (!autoplayRef.current) { autoplayRef.current = window.setInterval(() => setPage((p) => (p + 1) % totalPages), AUTOPLAY_MS); } };

  return (
    <section id="discografia" className="py-20 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          DISCOGRAFÍA
        </h2>
        {/* subtitle removed as requested */}

        <div className="relative mb-12" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="overflow-hidden rounded-2xl border-2 border-sky-600 shadow-2xl">
            <div className="w-full">
        {/* translateX percent is relative to this container's width (totalPages * 100%).
          To move exactly one viewport-width per page we translate by
          (page * 100 / totalPages)%. */}
        <div className={`flex ${TRANSITION_CLASS}`} style={{ transform: `translateX(-${(page * 100) / totalPages}%)`, width: `${totalPages * 100}%` }}>
                {Array.from({ length: totalPages }).map((_, p) => {
                  const start = p * itemsPerPage;
                  const pageItems = slides.slice(start, start + itemsPerPage);
                  return (
                    <div key={p} className="w-full" style={{ width: `${100 / totalPages}%` }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                        {pageItems.map((album, i) => (
                          <div key={i} className="group bg-sky-800 rounded-xl overflow-hidden shadow-lg border border-sky-600 relative">
                            <div className="relative h-48 overflow-hidden">
                              {album.featured && (
                                <div className="absolute top-2 right-2 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                                  DISPONIBLE PRONTO
                                </div>
                              )}
                              <img src={album.image} alt={album.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
                              <div className="absolute top-3 right-3 bg-sky-600 text-white px-2 py-1 rounded-full font-bold text-xs">{album.type}</div>
                              <div className="absolute bottom-3 left-3"><span className="bg-sky-600 text-white px-2 py-1 rounded-full font-bold text-sm">{album.year}</span></div>
                              {/* Show "Próximamente" overlay for all except the 1996 Templo Lado B mixtape */}
                              {!(album.year === '1996' && album.title.toLowerCase().includes('templo lado b')) && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                  <span className="bg-black/60 text-white uppercase px-4 py-2 rounded font-bold text-sm">Próximamente</span>
                                </div>
                              )}
                            </div>
                            <div className="p-4">
                              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-sky-400 transition-colors line-clamp-2">{album.title}</h3>
                              <p className="text-xs text-gray-400 mb-2">{album.tracks.length > 0 ? `${album.tracks.length} tracks` : 'Single'}</p>
                              <div className="flex gap-2">
                                <button className="flex-1 bg-sky-600 text-white py-2 rounded font-bold flex items-center justify-center gap-2"><Disc3 /> Ver Álbum</button>
                                <button className="flex-1 bg-white text-sky-600 py-2 rounded font-bold">Descargar</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button onClick={() => setPage((p) => (p - 1 + totalPages) % totalPages)} className="bg-white/20 backdrop-blur px-3 py-2 rounded-full">‹</button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button onClick={() => setPage((p) => (p + 1) % totalPages)} className="bg-white/20 backdrop-blur px-3 py-2 rounded-full">›</button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 p-1 rounded-3xl shadow-2xl mb-8">
          <div className="bg-blue-900 p-8 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Hitos Importantes</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">1996:</span> Primer Mixtape
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">1997:</span> Debut oficial Templo Lado B
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">2001:</span> Álbum debut "Cree en Esto"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">2008:</span> Gangsta Familia "Golpe Mundial"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 font-bold">2010:</span> Álbum oficial Bside Factory
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Estadísticas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-sky-600 p-4 rounded-xl text-center">
                    <p className="text-3xl font-black text-white">30+</p>
                    <p className="text-sm text-white/90">Producciones</p>
                  </div>
                  <div className="bg-sky-600 p-4 rounded-xl text-center">
                    <p className="text-3xl font-black text-white">28</p>
                    <p className="text-sm text-white/90">Años</p>
                  </div>
                  <div className="bg-sky-600 p-4 rounded-xl text-center">
                    <p className="text-3xl font-black text-white">200+</p>
                    <p className="text-sm text-white/90">Tracks</p>
                  </div>
                  <div className="bg-sky-600 p-4 rounded-xl text-center">
                    <p className="text-3xl font-black text-white">15+</p>
                    <p className="text-sm text-white/90">Artistas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigate && onNavigate('/discografia-completa')}
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Ver Discografía Completa
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discography;
