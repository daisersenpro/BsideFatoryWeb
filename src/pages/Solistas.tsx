import React from 'react';

const Solistas: React.FC = () => {
  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-red-600 italic mb-6">Solistas</h1>
        <p className="mb-6 text-gray-700">Artistas solistas del sello: perfiles, lanzamientos y singles destacados. (Contenido en construcción)</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">Próximamente: César Alonso "Musicario"</div>
          <div className="bg-white p-6 rounded-2xl shadow">Próximamente: Mr. Cleri</div>
        </div>
      </div>
    </main>
  );
};

export default Solistas;
