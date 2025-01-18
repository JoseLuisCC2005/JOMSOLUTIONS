"use client";

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Paquetes = () => {
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState<string>("Básico"); // Primer paquete seleccionado por defecto

  const handlePackageClick = (titulo: string) => {
    setPaqueteSeleccionado(titulo);
  };

  return (
    <section id="packages" className="py-20" style={{ backgroundColor: '#01030e' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Nuestros Paquetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TarjetaPaquete
            titulo="Básico"
            precio="$2099 MXN"
            caracteristicas={[
              "Diseño personalizado de página web",
              "Hasta 5 páginas",
              "Compatible con dispositivos móviles",
              "SEO básico",
            ]}
            seleccionado={paqueteSeleccionado === "Básico"}
            onClick={() => handlePackageClick("Básico")}
          />
          <TarjetaPaquete
            titulo="Profesional"
            precio="$2399 MXN"
            caracteristicas={[
              "Diseño personalizado de página web",
              "Hasta 10 páginas",
              "Compatible con dispositivos móviles",
              "SEO avanzado",
              "Formulario de contacto",
              "Integración con redes sociales (página de Facebook)",
            ]}
            seleccionado={paqueteSeleccionado === "Profesional"}
            onClick={() => handlePackageClick("Profesional")}
          />
        </div>
      </div>
    </section>
  );
};

const TarjetaPaquete = ({ titulo, precio, caracteristicas, seleccionado, onClick }: { titulo: string; precio: string; caracteristicas: string[]; seleccionado: boolean; onClick: () => void }) => (
  <div
    className={`bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg cursor-pointer ${
      seleccionado ? 'border-4 border-white' : 'border border-transparent'
    }`}
    onClick={onClick}
  >
    <h3 className="text-2xl font-semibold mb-2 text-primary-light dark:text-primary-dark">{titulo}</h3>
    <p className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">{precio}</p>
    <ul className="mb-6">
      {caracteristicas.map((caracteristica, index) => (
        <li key={index} className="flex items-center mb-2">
          <FaCheck className="text-primary-light dark:text-primary-dark mr-2" />
          <span className="text-text-secondary-light dark:text-text-secondary-dark">{caracteristica}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Paquetes;
