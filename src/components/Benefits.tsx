"use client";

import { FaRocket, FaUsers, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-20"
      style={{ backgroundColor: '#01030e' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
        Tu éxito en la web y facebook
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard
            icon={<FaRocket />}
            title="Mayor presencia en línea"
            description="Aumenta tu visibilidad y llega a una audiencia más amplia con páginas web y de Facebook profesionalmente diseñadas."
          />
          <BenefitCard
            icon={<FaUsers />}
            title="Mejor interacción con los clientes"
            description="Interactúa de manera más efectiva con tus clientes a través de interfaces fáciles de usar e integración con redes sociales."
          />
          <BenefitCard
            icon={<FaChartLine />}
            title="Mejores tasas de conversión"
            description="Optimiza tus plataformas en línea para lograr mayores tasas de conversión y aumentar tus ventas."
          />
          <BenefitCard
            icon={<FaMobileAlt />}
            title="Adaptabilidad móvil"
            description="Asegura que tu presencia web se vea genial y funcione perfectamente en todos los dispositivos, incluidos teléfonos y tabletas."
          />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className="rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg"
    style={{
      backgroundColor: '#1E3A8A', // Color gris azulado
    }}
    initial={{ opacity: 0, x: -1000 }} // Inicialmente fuera de la pantalla hacia la izquierda
    animate={{ opacity: 1, x: 0 }} // Se mueve hacia su posición original
    transition={{ duration: 0.0 }}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.0 },
    }}
  >
    <div className="text-4xl text-primary-light dark:text-primary-dark mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
      {title}
    </h3>
    <p className="text-text-secondary-light dark:text-text-secondary-dark">
      {description}
    </p>
  </motion.div>
);

export default Benefits;
