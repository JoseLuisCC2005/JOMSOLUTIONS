"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      image: "/unicob.png",
      title: "Unicob - Sitio Web Escolar",
      description: "Diseño y desarrollo de un sitio web para una escuela,adaptable a dispositivos móviles",
      link: "https://unicob.mx/",
    },
    {
      image: "/araresidencial.png",
      title: "Los Agaves Residencial",
      description: "Desarrollo de una página web moderna y funcional para el condominio Los Agaves Residencial,adaptable a dispositivos móviles.",
      link: "https://araresidencial.com/desarrollos/los-agaves-residencial",
    },
    {
      image: "/FundidosDesign.png",
      title: "Fundidos Design",
      description: "Creación de un sitio web interactivo para una agencia de fabricación de mobiliario,adaptable a dispositivos móviles.",
      link: "https://www.fundidosdesign.com/",
    },
    {
      image: "/nowya.png",
      title: "Nowya",
      description: "Plataforma de reservaciones y gestión de reservaciones, adaptable a dispositivos móviles.",
      link: "https://www.nowya.mx/es",
    },
    {
      image: "/Acquatix.png",
      title: "Acquatix - Escuela de Natación",
      description: "Sitio web moderno para una escuela de natación,adaptable a dispositivos móviles.",
      link: "https://acquatix.com/",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Configuración de auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Cambiar cada 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, []);

  return (
    <section
      id="portfolio"
      className="py-20"
      style={{ backgroundColor: '#01030e' }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
          Nuestro Portafolio
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded-full p-4 z-10 hover:bg-secondary-light dark:hover:bg-secondary-dark transition duration-300 lg:p-4 sm:p-3"
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded-full p-4 z-10 hover:bg-secondary-light dark:hover:bg-secondary-dark transition duration-300 lg:p-4 sm:p-3"
          >
            <FaChevronRight size={30} />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <PortfolioItem key={index} {...project} />
              ))}
            </div>
          </div>
          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-gray-600"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioItem = ({
  image,
  title,
  description,
  link,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
}) => (
  <div className="w-full flex-shrink-0 px-4">
    <div className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg mx-auto max-w-7xl flex flex-col items-center">
      <a href={link} target="_blank" rel="noopener noreferrer" className="w-full">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          quality={100}
          className="w-full h-96 object-contain hover:opacity-90 transition duration-300"
        />
      </a>
      <div className="p-6 w-full flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
          {title}
        </h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark font-semibold transition duration-300"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  </div>
);

export default Portfolio;
