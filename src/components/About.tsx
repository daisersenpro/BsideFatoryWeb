import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="sello" className="py-20 px-4 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-12 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          EL SELLO
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-sky-50 to-cyan-50 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-sky-600 mb-6">Nuestra Historia</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Sello discográfico independiente de origen Chileno, que distribuyen su música en formatos digitales (normalmente MP3) a través de la red.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Creado por <span className="font-bold text-sky-600">Mario Corleone en 1996</span> para producir y promocionar proyectos musicales en las que participa.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Su primer artista en incorporarse al sello fue <span className="font-bold">César Alonso "Musicario"</span>, con el cual después formarían Templo Lado B, junto a Santa Kela, Mr. Cleri.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 to-sky-50 p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-bold text-sky-600 mb-6">Los Inicios</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Durante los primeros meses de actividad del sello, se dedicó a trabajar con el formato <span className="font-bold">Mixtape</span>, debido a la falta de equipos para crear beats propios.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              Se adaptó la técnica utilizada por los DJs Hip-Hop norteamericanos, de copiar la parte más enérgica de una canción y repetirla una gran cantidad de veces, pero en esta ocasión se ocupó cinta cassette en vez de vinilo.
            </p>
            <p className="text-gray-800 leading-relaxed">
              En la navidad de 1996, llegó un <span className="font-bold text-sky-600">Drum Machine Boss DR-5</span>, lo que provocó que el grupo ganara notoriedad mediática debido a la calidad del sonido de sus instrumentales.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-1 rounded-3xl shadow-2xl mb-8">
          <div className="bg-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-sky-600 mb-6">Expansión y Reconocimiento</h3>
            <p className="text-gray-800 leading-relaxed mb-4">
              Lanzando una serie de demos y singles, llamando rápidamente la atención de la emergente escena Hip Hop de <span className="font-bold">La Florida</span>, por la calidad y variedad en el flow de sus integrantes.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4">
              La producción musical se disparó de forma exponencial, resultando que una gran cantidad de MCs de muchos barrios de Santiago desearan una participación en algún proyecto musical de la banda.
            </p>
            <p className="text-gray-800 leading-relaxed">
              <span className="font-bold text-sky-600">Colaboraciones destacadas:</span> Escuadra Copihuana, Dalonso, Los Tapia, Almas en Pena, Ki Klan, Puño en Alto.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#artistas"
            className="inline-flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            Ver Artistas
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
