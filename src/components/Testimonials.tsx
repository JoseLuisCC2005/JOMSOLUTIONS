"use client";


import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      quote: "Working with this developer was a game-changer for our business. They delivered a website that exceeded our expectations and helped us increase our online presence.",
      author: "John Doe",
      company: "ABC Company",
      image: "/client1.jpg"
    },
    {
      quote: "The attention to detail and the ability to understand our unique needs set this developer apart. Our new website has significantly improved our user engagement.",
      author: "Jane Smith",
      company: "XYZ Corp",
      image: "/client2.jpg"
    },
    {
      quote: "I was impressed by the developer's technical skills and creativity. They transformed our outdated website into a modern, user-friendly platform that our customers love.",
      author: "Mike Johnson",
      company: "123 Industries",
      image: "/client3.jpg"
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">What Clients Say</h2>
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
  )
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

