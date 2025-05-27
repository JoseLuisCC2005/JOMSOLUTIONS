"use client";

import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Paquetes = () => {
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState<string>("Esencial");

  const handlePackageClick = (titulo: string) => {
    setPaqueteSeleccionado(titulo);
  };

  return (
    <section id="packages" className="py-20" style={{ backgroundColor: '#01030e' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Nuestros Paquetes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <TarjetaPaquete
            titulo="Esencial"
            precio="$3000 MXN"
            caracteristicas={[
              "Landing page de hasta 5 secciones",
              "Diseño moderno y responsive",
              "Botón de WhatsApp y redes sociales",
              "Formulario de contacto",
              "Optimización SEO básica",
              "Entrega en 5 días",
            ]}
            seleccionado={paqueteSeleccionado === "Esencial"}
            onClick={() => handlePackageClick("Esencial")}
          />
          <TarjetaPaquete
            titulo="Premium"
            precio="$4000 MXN"
            caracteristicas={[
              "Landing page de hasta 8 secciones",
              "Diseño avanzado con animaciones",
              "Optimización SEO avanzada",
              "Integración con Google Maps y RRSS",
              "Formularios personalizados",
              "Asesoría de contenido y estructura",
              "Entrega en 7 días",
            ]}
            seleccionado={paqueteSeleccionado === "Premium"}
            onClick={() => handlePackageClick("Premium")}
          />
        </div>

        {/* Servicios Extra */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 mt-8 max-w-2xl mx-auto mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark text-center">
            Servicios Extra
          </h3>
          <ul className="text-center">
            <li className="flex items-center justify-center mb-2">
              <FaCheck className="text-primary-light dark:text-primary-dark mr-2" />
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                Administración mensual de cambios y soporte — <strong>$350 MXN/mes</strong>
              </span>
            </li>
          </ul>
        </div>

        {/* Nota sobre dominio */}
        <p className="text-center text-sm text-text-secondary-light dark:text-text-secondary-dark max-w-xl mx-auto italic">
          Nota: Ninguno de los paquetes incluye el costo del dominio. Este debe ser adquirido por el cliente por separado.
        </p>
      </div>
    </section>
  );
};

const TarjetaPaquete = ({
  titulo,
  precio,
  caracteristicas,
  seleccionado,
  onClick,
}: {
  titulo: string;
  precio: string;
  caracteristicas: string[];
  seleccionado: boolean;
  onClick: () => void;
}) => (
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
