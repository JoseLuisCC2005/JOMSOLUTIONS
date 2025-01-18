"use client";

import { FaDesktop, FaFacebookF, FaSearch, FaChartBar, FaTools, FaWhatsapp } from 'react-icons/fa';

const Services = () => {
  return (
    <section
      id="services"
      className="py-20"
      style={{ backgroundColor: '#01030e' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Nuestros servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaDesktop />}
            title="Desarrollo Web Personalizado"
            description="Diseño responsivo, certificado SSL y optimización de rendimiento para una experiencia de usuario sin interrupciones."
          />
          <ServiceCard
            icon={<FaFacebookF />}
            title="Desarrollo de Páginas en Facebook"
            description="Crea y optimiza páginas de Facebook para mejorar tu presencia en redes sociales e interactuar con tus clientes."
          />
          <ServiceCard
            icon={<FaSearch />}
            title="Optimización SEO"
            description="Mejora la visibilidad de tu sitio web en Google y atrae más visitantes de manera orgánica, sin necesidad de pagar por anuncios"
          />
          <ServiceCard
            icon={<FaChartBar />}
            title="Integración de Google Analytics"
            description="Configura Google Analytics para hacer un seguimiento del rendimiento del sitio web y del comportamiento de los usuarios."
          />
          <ServiceCard
            icon={<FaTools />}
            title="Mantenimiento de Sitios Web"
            description="Actualizaciones regulares, parches de seguridad y optimización de rendimiento para mantener tu sitio funcionando sin problemas."
          />
        </div>
      </div>
    </section>
  );
}

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
    <div className="text-4xl text-primary-light dark:text-primary-dark mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{title}</h3>
    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">{description}</p>
    <div className="flex items-center w-full">
      <a
        href="https://wa.me/3314757456"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 w-full"
      >
        <FaWhatsapp size={20} className="mr-2" />
        Solicitar Información
      </a>
    </div>
  </div>
);

export default Services;
