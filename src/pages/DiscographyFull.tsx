import { useState } from 'react';
import { Disc3 } from 'lucide-react';
import discography from '../data/discography';

const PAGE_SIZE = 8;

const DiscographyFull = () => {
  const [page, setPage] = useState(1);
  const total = discography.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const start = (page - 1) * PAGE_SIZE;
  const pageItems = discography.slice(start, start + PAGE_SIZE);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-white mb-6">Discografía completa</h1>
        <p className="text-sky-300 mb-8">Aquí encontrarás todos los discos, demos y mixtapes. Puedes descargar los discos cuando haya enlaces disponibles.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pageItems.map((album, i) => (
            <article key={i} className="bg-sky-800 rounded-xl overflow-hidden shadow-lg border border-sky-600">
              <div className="h-56 overflow-hidden">
                <img src={album.image} alt={album.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{album.title}</h3>
                <p className="text-xs text-gray-300 mb-2">{album.year} • {album.type}</p>
                <p className="text-sm text-gray-200 mb-3 line-clamp-3">{album.tracks.join(' • ')}</p>
                <div className="flex gap-2">
                  <a className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-600 text-white py-2 rounded-md text-sm font-bold" href="#" onClick={(e) => e.preventDefault()}>
                    <Disc3 /> Detalles
                  </a>
                  <a className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-sky-600 py-2 rounded-md text-sm font-bold" href="#" onClick={(e) => e.preventDefault()}>
                    Descargar
                  </a>
                </div>
              </div>
            </article>
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

export default DiscographyFull;
