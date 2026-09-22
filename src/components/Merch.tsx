import { useState } from 'react';
import { MessageSquare, ArrowRight, X } from 'lucide-react';

const Merch = () => {
const products = [
  {
    name: 'Polera Bside Factory',
    category: 'Poleras',
    price: 'Consultar precio',
    image: 'https://i.postimg.cc/BtfbY27s/Polera-Bside.png',
    colors: ['Negro', 'Blanco', 'Rojo', 'Azul'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    name: 'Polerón Bside Factory',
    category: 'Polerones',
    price: 'Consultar precio',
    image: 'https://i.postimg.cc/cJxgGMxf/Poleron-Bside.png',
    colors: ['Negro', 'Gris', 'Azul', 'Rojo'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    name: 'Gorra Bside Factory',
    category: 'Gorras',
    price: 'Consultar precio',
    image: 'https://i.postimg.cc/BZVx5ySW/Gorro-Bside.png',
    colors: ['Negro', 'Blanco', 'Azul', 'Rojo'],
    sizes: ['Única'],
  },
];

const [selectedProduct, setSelectedProduct] = useState<typeof products[number] | null>(null);
const [selectedOptions, setSelectedOptions] = useState<Record<string, { color?: string; size?: string }>>({});

const getSelectedOptions = (productName: string) => selectedOptions[productName] ?? {};

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
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  aria-label={`Ver imagen completa de ${product.name}`}
                  className="block w-full h-full cursor-zoom-in"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </button>
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
                      <button
                        type="button"
                        key={i}
                        onClick={() => setSelectedOptions((current) => ({
                          ...current,
                          [product.name]: {
                            ...getSelectedOptions(product.name),
                            color: getSelectedOptions(product.name).color === color ? undefined : color,
                          },
                        }))}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${getSelectedOptions(product.name).color === color ? 'bg-sky-500 text-white ring-2 ring-white/70' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tallas:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, i) => (
                      <button
                        type="button"
                        key={i}
                        disabled={product.sizes.length === 1}
                        onClick={() => setSelectedOptions((current) => ({
                          ...current,
                          [product.name]: {
                            ...getSelectedOptions(product.name),
                            size: getSelectedOptions(product.name).size === size ? undefined : size,
                          },
                        }))}
                        className={`text-xs px-3 py-1 rounded-full transition-colors ${getSelectedOptions(product.name).size === size ? 'bg-sky-500 text-white ring-2 ring-white/70' : 'bg-gray-700 text-gray-300'} ${product.sizes.length > 1 ? 'hover:bg-gray-600' : 'cursor-default opacity-80'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => {
                    const options = getSelectedOptions(product.name);
                    const colorMessage = options.color
                      ? `*Color elegido:* ${options.color}`
                      : `*Colores disponibles:* ${product.colors.join(', ')}`;
                    const sizeMessage = product.sizes.length === 1
                      ? '*Talla:* Única'
                      : options.size
                        ? `*Talla elegida:* ${options.size}`
                        : `*Tallas disponibles:* ${product.sizes.join(', ')}`;
                    const whatsappMessage = `¡Hola! Me interesa el producto: *${product.name}*%0A%0A*Categoría:* ${product.category}%0A${colorMessage}%0A${sizeMessage}%0A%0A¿Podrías darme más información sobre precios y disponibilidad?`;
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

        {selectedProduct ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Imagen completa de ${selectedProduct.name}`}
            onClick={() => setSelectedProduct(null)}
          >
            <div className="relative max-h-[90vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Cerrar imagen"
                className="absolute -right-3 -top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-200"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
          </div>
        ) : null}

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
