import React from 'react';

const Colaboraciones: React.FC = () => {
  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-red-100/20 via-sky-200 to-blue-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-red-600 italic mb-6">Colaboraciones</h1>
        <p className="mb-6 text-gray-700">Proyectos colaborativos entre artistas del sello y colaboradores externos. Aquí se listarán singles, remixes y proyectos especiales.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">Próximamente: Colaboración X</div>
          <div className="bg-white p-6 rounded-2xl shadow">Próximamente: Colaboración Y</div>
        </div>
      </div>
    </main>
  );
};

export default Colaboraciones;
