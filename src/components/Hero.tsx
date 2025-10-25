import { ChevronDown } from 'lucide-react';

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
