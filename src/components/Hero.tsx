import { ChevronDown, Facebook, Instagram, Youtube, Music, X } from 'lucide-react';

interface HeroProps {
  isLoaded: boolean;
}

const Hero = ({ isLoaded }: HeroProps) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url('https://i.postimg.cc/zX3ZnZ4N/Sin-Fondo.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        filter: 'drop-shadow(0 0 20px rgba(135, 206, 235, 0.3))',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-200/30 via-pink-200/20 to-sky-400/40"></div>

      <div className="relative z-10 text-center px-4">
        <div
          className={`transform transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <img
            src="https://i.postimg.cc/FHtf1DHz/BSIDE-WEB-PC-LOGO.png"
            alt="Bside Factory Logo"
            className="w-full max-w-[98vw] mx-auto mb-12 drop-shadow-2xl animate-pulse hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer transform"
          />
        </div>

        {/* Featured Release Banner */}
        <div
          className={`transform transition-all duration-1000 delay-300 mb-8 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <a href="#discografia" className="inline-block group">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 shadow-2xl border-2 border-red-500 hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center gap-6">
                <img 
                  src="https://i.postimg.cc/kG42Zxm1/Tem-Plo-Lado-B-Mixtape.jpg" 
                  alt="1996 TEMPLO LADO B MIXTAPE" 
                  className="w-24 h-24 rounded-lg shadow-lg"
                />
                <div className="text-left">
                  <p className="text-white text-sm font-bold mb-1">🎵 NUEVO LANZAMIENTO</p>
                  <h3 className="text-white text-xl md:text-2xl font-black italic">1996 TEMPLO LADO B MIXTAPE</h3>
                  <p className="text-red-100 text-sm mt-2">Disponible muy pronto</p>
                </div>
                <ChevronDown size={24} className="text-white group-hover:translate-y-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>

        {/* Social icons: placed BELOW the hero text (red ring + white inner circle with red icon) */}

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-xl md:text-3xl font-black text-red-600 italic mb-2" style={{
            WebkitTextStroke: '2px white',
            paintOrder: 'stroke fill',
          }}>
            SELLO DISCOGRÁFICO Y ESTUDIO DE PRODUCCIÓN MUSICAL
          </h2>
          <p className="text-lg md:text-2xl font-bold text-red-600 italic" style={{
            WebkitTextStroke: '2px white',
            paintOrder: 'stroke fill',
          }}>
            DESDE SANTIAGO DE CHILE
          </p>
          <div className="mt-6 flex items-center justify-center gap-6">
            {/** Each icon: red outer circle, white inner circle with red icon to match the attached design */}
            <a href="#" aria-label="Facebook" title="Facebook" className="transform transition-all duration-300 hover:scale-110">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Facebook size={20} className="text-white" />
                </div>
              </div>
            </a>

            <a href="#" aria-label="Instagram" title="Instagram" className="transform transition-all duration-300 hover:scale-110">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Instagram size={20} className="text-white" />
                </div>
              </div>
            </a>

            <a href="#" aria-label="YouTube" title="YouTube" className="transform transition-all duration-300 hover:scale-110">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Youtube size={20} className="text-white" />
                </div>
              </div>
            </a>

            <a href="#" aria-label="Spotify" title="Spotify" className="transform transition-all duration-300 hover:scale-110">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Music size={20} className="text-white" />
                </div>
              </div>
            </a>

            <a href="#" aria-label="Twitter" title="Twitter" className="transform transition-all duration-300 hover:scale-110">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <X size={20} className="text-white" />
                </div>
              </div>
            </a>
          </div>
      </div>

      </div>

      <a
        href="#sello"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-sky-600 animate-bounce"
      >
        <ChevronDown size={48} />
      </a>
    </section>
  );
};

export default Hero;
