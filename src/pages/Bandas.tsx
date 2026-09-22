import React from 'react';

const Bandas: React.FC = () => {
  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-red-600 italic mb-6">Bandas</h1>
        <p className="mb-6 text-gray-700">Listado de bandas del sello. Aquí mostraremos cada banda con su biografía, lanzamientos y próximos proyectos. (Próximamente contenido completo)</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <a href="https://ibb.co/Zp0NsSt5" target="_blank" rel="noopener noreferrer">
              <img
                src="https://i.ibb.co/G4qFw9By/1.jpg"
                alt="Templo Lado B"
                loading="lazy"
                className="w-full h-64 object-cover"
              />
            </a>
            <p className="p-6">Próximamente: Templo Lado B</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">Próximamente: Escuadra Copihuana</div>
        </div>
      </div>
    </main>
  );
};

export default Bandas;
