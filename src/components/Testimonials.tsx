"use client";

import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      quote: "Trabajar con este equipo fue un cambio total para nuestro negocio. Entregaron un sitio web que superó nuestras expectativas y nos ayudaron a aumentar nuestra presencia en línea.",
      author: "UNICOB CEO",
      company: "UNICOB",
      image: "/LOGO UNICOB.png"
    },
    {
      quote: "La atención al detalle y la capacidad de comprender nuestras necesidades únicas hicieron que este equipo se destacara. Nuestro nuevo sitio web ha mejorado significativamente el compromiso de nuestros usuarios.",
      author: "Braulio Hernández",
      company: "Nowya",
      image: "/Logo nowya.png"
    },
    {
      quote: "Me impresionaron las habilidades técnicas y la creatividad que mostraron. Transformaron nuestro sitio web anticuado en una plataforma moderna y fácil de usar que a nuestros clientes les encanta.",
      author: "Juan Cornejo",
      company: "Acquatix",
      image: "/sinfondo.png"
    },
    {
      quote: "Este equipo fue clave para mejorar nuestra presencia en línea. El nuevo diseño de nuestra página web ha aumentado la interacción con nuestros clientes de manera significativa.",
      author: "Paulina Salas",
      company: "TransporJal",
      image: "/sinfondo.png"
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: '#01030e' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Testimonios de nuestros clientes</h2>
        <div className="relative">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded-full p-2 z-10">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded-full p-2 z-10">
            <FaChevronRight />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ quote, author, company, image }: { quote: string; author: string; company: string; image: string }) => (
  <div className="w-full flex-shrink-0">
    <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg mx-auto max-w-2xl">
      <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4 italic">"{quote}"</p>
      <div className="flex items-center">
        <Image
          src={image}
          alt={author}
          width={50}
          height={50}
          className="rounded-full mr-4"
        />
        <div>
          <p className="font-semibold text-text-light dark:text-text-dark">{author}</p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">{company}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials
