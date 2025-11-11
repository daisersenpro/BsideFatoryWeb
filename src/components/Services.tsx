import React from 'react';
import { BookOpen, Music, Sliders } from 'lucide-react';

const WHATSAPP_NUMBER = '56962181799';

const messages = {
  clases: encodeURIComponent(
    'Hola, quiero información sobre clases de producción musical en Bside Factory. ¿Cuáles son los precios y disponibilidad?'
  ),
  beats: encodeURIComponent(
    'Hola, quiero información sobre beats (compra/encargo). ¿Qué estilos tienen, precios y proceso de compra?'
  ),
  mixmaster: encodeURIComponent(
    'Hola, necesito servicio de mezcla y master. ¿Pueden darme presupuesto y tiempos aproximados?'
  ),
};

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 px-4 bg-white/90">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-red-600 italic mb-8 text-center" style={{ WebkitTextStroke: '1px white', paintOrder: 'stroke fill' }}>
          Servicios
        </h2>

        <p className="text-center text-sky-600 mb-8">Soluciones profesionales en producción musical, formación y post-producción.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Clases */}
          <div className="group bg-gradient-to-br from-sky-50 to-cyan-50 p-6 rounded-2xl shadow-lg flex flex-col items-stretch transform transition-transform duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110">
                <BookOpen size={26} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-sky-700 mb-3">Clases</h3>
            <p className="text-gray-700 mb-4 flex-1">
              Clases privadas y grupales de producción musical, mezcla y composición. Instructor con experiencia profesional en DAWs (Ableton, FL Studio, Pro Tools) y técnicas de producción hip hop y electrónica. Programas personalizados según nivel y objetivos.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${messages.clases}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* Beats */}
          <div className="group bg-gradient-to-br from-sky-50 to-cyan-50 p-6 rounded-2xl shadow-lg flex flex-col items-stretch transform transition-transform duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110">
                <Music size={26} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-sky-700 mb-3">Beats</h3>
            <p className="text-gray-700 mb-4 flex-1">
              Producción y venta de beats originales (hip hop, trap, boom-bap, lo-fi). Entregas en stems y WAV de alta calidad, opciones de licencia exclusiva o no exclusiva, y servicios de personalización por encargo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${messages.beats}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>

          {/* Mix & Master */}
          <div className="group bg-gradient-to-br from-sky-50 to-cyan-50 p-6 rounded-2xl shadow-lg flex flex-col items-stretch transform transition-transform duration-500 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110">
                <Sliders size={26} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-sky-700 mb-3">Mix & Master</h3>
            <p className="text-gray-700 mb-4 flex-1">
              Servicio profesional de mezcla y master con referencias del cliente. Procesado con herramientas analógicas y digitales, control de loudness y entrega en formatos listos para distribución. Revisiones incluidas según paquete.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${messages.mixmaster}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
