import { useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Producción Musical',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '56962181799';
    const whatsappMessage = `*Contacto desde Web - Bside Factory*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Asunto:* ${formData.subject}%0A*Mensaje:* ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-white/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-red-600 italic mb-4 text-center" style={{
          WebkitTextStroke: '2px white',
          paintOrder: 'stroke fill',
        }}>
          CONTACTO
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 italic">
          Conversemos sobre tu próximo proyecto
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Trabaja con Nosotros</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Bside Factory está siempre abierto a nuevos talentos y colaboraciones. Si eres MC, productor,
              o simplemente tienes una idea que quieres desarrollar, estamos aquí para escucharte.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-sky-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@bsidefactory.cl</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-sky-50 p-4 rounded-xl">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+56 9 6218 1799</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500 p-1 rounded-2xl">
              <div className="bg-white p-6 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3">Horario de Atención</h4>
                <p className="text-gray-700">Lunes a Viernes: 10:00 - 19:00 hrs</p>
                <p className="text-gray-700">Sábados: 11:00 - 15:00 hrs</p>
                <p className="text-gray-700">Domingos: Cerrado</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-sky-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border-2 border-sky-200">
              <div className="mb-6">
                <label htmlFor="name" className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                  <User size={20} className="text-sky-600" />
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                  <Mail size={20} className="text-sky-600" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-200 focus:border-sky-500 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                  <MessageSquare size={20} className="text-sky-600" />
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-200 focus:border-sky-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="Producción Musical">Producción Musical</option>
                  <option value="Eventos">Eventos</option>
                  <option value="Merchandise">Merchandise</option>
                  <option value="Colaboración Artística">Colaboración Artística</option>
                  <option value="Prensa y Medios">Prensa y Medios</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                  <MessageSquare size={20} className="text-sky-600" />
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-sky-200 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-sky-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:scale-105 transform"
              >
                <Send size={24} />
                Enviar por WhatsApp
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Tu mensaje será enviado directamente a nuestro WhatsApp oficial
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
