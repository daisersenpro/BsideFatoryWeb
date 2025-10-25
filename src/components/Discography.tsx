import { Disc3, ArrowRight } from 'lucide-react';

const Discography = () => {
  const discography = [
    {
      year: '1996',
      title: 'TEMPLO LADO B MIXTAPE',
      type: 'Mixtape',
      tracks: ['Rimas & Imaginas', 'La crypta más estricta', 'Calibre lado b', 'mi vida es un erial (rima Gustavo A. Bècquer)'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '1997',
      title: 'TEMPLO LADO B DEMO 1 "RAPERO SOY"',
      type: 'Demo',
      tracks: ['Tlb en tu mente', 'El tonto no fuma, mi planta', 'No me toques', 'Rapero soy', 'Parezco solo un titere', 'asesinos al azar'],
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '1998',
      title: 'TEMPLO LADO B DEMO 2 "BIENVENIDO AL PACTO"',
      type: 'Demo',
      tracks: ['Bienvenido al pacto', 'De la antigua Ckn', 'Fuma, canta y vuela', 'Larraguibel sonido', 'Dímelo ¿donde están?', 'Palabras densas'],
      image: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2001',
      title: 'TEMPLO ESCOP ÁLBUM "CREE EN ESTO"',
      type: 'Álbum',
      tracks: ['Intro', 'El mando', 'El poder y el corte', 'La amenaza', 'Interludio', 'En negocios Feat. Zaturno', 'Palabras densas', 'La gente del estado', 'El huracán Orientycal Feat. Sammy houston', 'La mama show', 'Un país en mal estado', 'Todo se invierte', 'Estilo copihuano Tlb', 'Cree en esto'],
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2003',
      title: 'TEMPLO ESCOP "CAPITULO FINAL"',
      type: 'Álbum',
      tracks: ['Intro', 'Amigos falsos', 'El boomerang malvado', 'Con sentimiento', 'El escuadrón', 'Representativo Feat. Subliminal', 'No hay remedio ni cura Feat. Tapia Terapia', 'Como me divierto', 'La fumaton Feat. NegroKal', 'Quien da mas', 'Descanso eterno', 'Enseñanza de vida', 'Te enseño', 'Recuerdos', 'Más fuerte que nunca', 'Ya basta Feat. Tapia terapia, Almas en pena'],
      image: 'https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2008',
      title: 'GANGSTA FAMILIA "GOLPE MUNDIAL"',
      type: 'Álbum',
      tracks: ['Cada paso', 'Pa`rriba', 'Dando Cara', 'Amarillos', 'Amor del Barrio', 'Estilo pandillero', 'Flores por espinas', 'Todo o nada', 'La ganancia de la calle', 'Latino papá', 'Latinos gangstas', 'Mi nena querida', 'Respeto en la calle', 'Todo bien'],
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2010',
      title: 'BSIDE FACTORY "2010"',
      type: 'Álbum',
      tracks: ['Intro', 'Baila para mi', 'Esto es Bside', 'Seguimos Vigentes', 'Regresamos para coronar', 'La gran nave', 'Mundo de raza', 'Fiebre de piel', 'Morena latina', 'Interesadas', 'Confesiones', 'Soy parte de la historia', 'Amame odiame', 'Te haré mover (B.A.I.L.A.)', 'Aces Musicales', 'No te imaginas', 'Delirio de estrellas', 'Outro'],
      image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      year: '2012',
      title: 'GANGSTA FAMILIA "2012"',
      type: 'Álbum',
      tracks: [],
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section id="discografia" className="py-20 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          DISCOGRAFÍA
        </h2>
        <p className="text-xl text-sky-400 text-center mb-16 italic">
          28 años de historia musical documentada
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {discography.slice(0, 4).map((album, index) => (
            <div
              key={index}
              className="group bg-sky-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-sky-600"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={album.image}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full font-bold text-xs">
                  {album.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-sky-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {album.year}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-sky-400 transition-colors line-clamp-2">
                  {album.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  {album.tracks.length} tracks
                </p>
                <button className="w-full bg-sky-600 text-white py-2 rounded-lg font-bold text-sm hover:bg-sky-700 transition-colors flex items-center justify-center gap-2">
                  <Disc3 size={16} />
                  Ver Álbum
                </button>
              </div>
            </div>
          ))}
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
          <a
            href="#discografia"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Ver Discografía Completa
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Discography;
