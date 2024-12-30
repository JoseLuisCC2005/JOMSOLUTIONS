
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaGlobe } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('EN')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'ES' : 'EN'))
    // Aquí puedes añadir la lógica para cambiar el idioma del contenido de la página
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            JOM SOLUTIONS
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#portfolio">Our Portfolio</NavLink>
            <NavLink href="#packages">Packages</NavLink>
            <NavLink href="#working-benefits">Why Us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialIcon href="https://github.com" icon={<FaGithub />} />
            <SocialIcon href="https://facebook.com" icon={<FaFacebook />} />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
            <button
              onClick={toggleLanguage}
              className="flex items-center px-4 py-2 bg-white text-purple-800 font-bold rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition duration-300"
            >
              <FaGlobe className="mr-2" />
              {language}
            </button>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#services" mobile>Services</NavLink>
            <NavLink href="#portfolio" mobile>Our Portfolio</NavLink>
            <NavLink href="#packages" mobile>Packages</NavLink>
            <NavLink href="#working-benefits" mobile>Why Us</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
            <button
              onClick={toggleLanguage}
              className="flex items-center w-full px-4 py-2 mt-2 bg-white text-purple-800 font-bold rounded-lg shadow-md hover:bg-purple-700 hover:text-white transition duration-300"
            >
              <FaGlobe className="mr-2" />
              {language}
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`text-white font-bold hover:underline transition duration-300 ${
      mobile ? 'block py-2' : ''
    }`}
  >
    {children}
  </Link>
)

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:underline transition duration-300"
  >
    {icon}
  </a>
)

export default Header
