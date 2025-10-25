import { MessageSquare, ArrowRight } from 'lucide-react';

const Merch = () => {
const products = [
  {
    name: 'Polera Bside Factory',
    category: 'Poleras',
    price: 'Consultar precio',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['Negro', 'Blanco', 'Rojo', 'Azul'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    name: 'Polerón Bside Factory',
    category: 'Polerones',
    price: 'Consultar precio',
    image: 'https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['Negro', 'Gris', 'Azul', 'Rojo'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    name: 'Gorra Bside Factory',
    category: 'Gorras',
    price: 'Consultar precio',
    image: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=400',
    colors: ['Negro', 'Blanco', 'Azul', 'Rojo'],
    sizes: ['Única'],
  },
];

  return (
    <section id="merch" className="py-20 px-4 bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          MERCHANDISE
        </h2>
        <p className="text-xl text-sky-400 text-center mb-16 italic">
          Representa al movimiento con estilo
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-sky-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-sky-600"
            >
              <div className="relative h-72 overflow-hidden bg-blue-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-sky-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-black text-sky-500 mb-4">{product.price}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Colores disponibles:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tallas:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const whatsappMessage = `¡Hola! Me interesa el producto: *${product.name}*%0A%0A*Categoría:* ${product.category}%0A*Colores disponibles:* ${product.colors.join(', ')}%0A*Tallas:* ${product.sizes.join(', ')}%0A%0A¿Podrías darme más información sobre precios y disponibilidad?`;
                    window.open(`https://wa.me/56962181799?text=${whatsappMessage}`, '_blank');
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare size={20} />
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-600 p-8 rounded-3xl shadow-2xl mb-8 text-center">
          <MessageSquare className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl font-black text-white mb-4 italic">PRODUCTOS PERSONALIZADOS</h3>
          <p className="text-white/90 mb-6 text-lg">
            Todos nuestros productos son personalizados con diseños únicos de Bside Factory. 
            Los precios son más elevados debido a la calidad y personalización. 
            Consulta disponibilidad y precios por WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-sky-600 px-6 py-2 rounded-full font-bold">
              Diseños Únicos
            </span>
            <span className="bg-white text-sky-600 px-6 py-2 rounded-full font-bold">
              Calidad Premium
            </span>
            <span className="bg-white text-sky-600 px-6 py-2 rounded-full font-bold">
              Personalizado
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 rounded-3xl shadow-2xl mb-8 text-center">
          <h3 className="text-2xl font-black text-white mb-4 italic">ENVÍOS A TODO CHILE</h3>
          <p className="text-white/90 mb-6 text-lg">
            Envío a todo Chile. El costo del envío se paga por separado y se coordina por WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-green-600 px-6 py-2 rounded-full font-bold">
              Envío Nacional
            </span>
            <span className="bg-white text-green-600 px-6 py-2 rounded-full font-bold">
              Coordinación WhatsApp
            </span>
            <span className="bg-white text-green-600 px-6 py-2 rounded-full font-bold">
              Pago Separado
            </span>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const whatsappMessage = `¡Hola! Me interesa conocer más sobre los productos de Bside Factory.%0A%0A¿Podrías enviarme el catálogo completo y precios?`;
              window.open(`https://wa.me/56962181799?text=${whatsappMessage}`, '_blank');
            }}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transform hover:scale-110 transition-all duration-300 shadow-xl"
          >
            <MessageSquare size={24} />
            Ver Catálogo Completo por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Merch;
