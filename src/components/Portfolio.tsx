"use client";
import Image from 'next/image'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      image: "/project1.jpg",
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js",
      link: "https://example.com/project1"
    },
    {
      image: "/project2.jpg",
      title: "Blog Platform",
      description: "A custom blog platform with a CMS built using Next.js and GraphQL",
      link: "https://example.com/project2"
    },
    {
      image: "/project3.jpg",
      title: "Portfolio Website",
      description: "A sleek and modern portfolio website for a professional photographer",
      link: "https://example.com/project3"
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <section id="portfolio" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">My Portfolio</h2>
        <div className="relative">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded-full p-2 z-10">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded-full p-2 z-10">
            <FaChevronRight />
          </button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <PortfolioItem key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PortfolioItem = ({ image, title, description, link }: { image: string; title: string; description: string; link: string }) => (
  <div className="w-full flex-shrink-0">
    <div className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg mx-auto max-w-2xl">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{title}</h3>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark font-semibold transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  </div>
)

export default Portfolio

