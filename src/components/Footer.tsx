import { Facebook, Instagram, Youtube, Music, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-black text-sky-600 italic mb-4">BSIDE FACTORY</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Sello discográfico independiente de origen Chileno. Produciendo Hip Hop desde 1996.
            </p>
            <p className="text-gray-500 text-sm">
              Santiago, Chile
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-sky-500 italic mb-4">NAVEGACIÓN</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sello" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Sello
                </a>
              </li>
              <li>
                <a href="#artistas" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Artistas
                </a>
              </li>
              <li>
                <a href="#discografia" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Discografía
                </a>
              </li>
              <li>
                <a href="#audios" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Audios
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Videos
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#merch" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Merch
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-sky-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-sky-500 italic mb-4">SERVICIOS</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-sky-500 transition-colors cursor-pointer">
                Producción Musical
              </li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">
                Grabación de Estudio
              </li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">
                Mezcla y Mastering
              </li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">
                Distribución Digital
              </li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">
                Gestión de Artistas
              </li>
              <li className="hover:text-sky-500 transition-colors cursor-pointer">
                Organización de Eventos
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-sky-500 italic mb-4">CONTACTO</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:info@bsidefactory.cl" className="hover:text-sky-500 transition-colors">
                  info@bsidefactory.cl
                </a>
              </li>
              <li>
                <a href="https://wa.me/56962181799" className="hover:text-sky-500 transition-colors">
                  +56 9 6218 1799
                </a>
              </li>
              <li className="pt-2">
                <p className="text-sm">Lun - Vie: 10:00 - 19:00</p>
                <p className="text-sm">Sáb: 11:00 - 15:00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-6">
                {/** Match hero style: outer red circle with inner red circle and white icon (smaller) */}
                <a href="#" aria-label="Facebook" className="transform transition-all duration-300 hover:scale-110">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Facebook size={18} className="text-white" />
                    </div>
                  </div>
                </a>
                <a href="#" aria-label="Instagram" className="transform transition-all duration-300 hover:scale-110">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Instagram size={18} className="text-white" />
                    </div>
                  </div>
                </a>
                <a href="#" aria-label="YouTube" className="transform transition-all duration-300 hover:scale-110">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube size={18} className="text-white" />
                    </div>
                  </div>
                </a>
                <a href="#" aria-label="Spotify" className="transform transition-all duration-300 hover:scale-110">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <Music size={18} className="text-white" />
                    </div>
                  </div>
                </a>
                <a href="#" aria-label="X" className="transform transition-all duration-300 hover:scale-110">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <X size={18} className="text-white" />
                    </div>
                  </div>
                </a>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-sky-500 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-sky-500 transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2024 Bside Factory. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs italic mb-2">
            Desde 1996 produciendo el mejor Hip Hop chileno
          </p>
          <p className="text-gray-500 text-xs">
            Desarrollada por{' '}
            <a 
              href="https://portafolio-anyelo-bustos-fullstack.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition-colors font-semibold"
            >
              Anyelo Bustos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
