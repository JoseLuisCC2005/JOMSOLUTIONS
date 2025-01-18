"use client";

import { FaClock, FaHandshake, FaLightbulb, FaRocket } from 'react-icons/fa';

const BeneficiosTrabajo = () => {
  return (
    <section id="working-benefits" className="py-20" style={{ backgroundColor: '#01030e' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Beneficios de trabajar con nosotros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BeneficioCard
            icon={<FaClock />}
            title="Eficiencia en el Tiempo"
            description="Entregamos los proyectos a tiempo, asegurando que cumplas con tus plazos."
          />
          <BeneficioCard
            icon={<FaHandshake />}
            title="Enfoque Colaborativo"
            description="Trabajamos de cerca contigo para asegurar que tu visión se haga realidad."
          />
          <BeneficioCard
            icon={<FaLightbulb />}
            title="Soluciones Innovadoras"
            description="Aportamos ideas creativas y de vanguardia a tus proyectos."
          />
          <BeneficioCard
            icon={<FaRocket />}
            title="Resultados Escalables"
            description="Nuestras soluciones están diseñadas para crecer junto a tu negocio."
          />
        </div>
      </div>
    </section>
  );
};

const BeneficioCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div
    className="rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
    style={{
      background: 'linear-gradient(to right, #6a11cb, #2575fc)', // Degradado azul-morado
      borderRadius: '10px',
    }}
  >
    <div className="text-6xl mb-4 text-white flex justify-center transition duration-500 ease-in-out hover:text-yellow-400">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white text-sm">{description}</p>
  </div>
);

export default BeneficiosTrabajo;
