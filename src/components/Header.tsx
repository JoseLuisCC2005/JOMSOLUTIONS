'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? 'md:bg-blue-800' : 'md:bg-transparent'
      } bg-blue-800 shadow-md transition-colors duration-300`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-white">
            JOM SOLUTIONS
          </Link>
          <div className="hidden md:flex space-x-6">
            <NavLink href="#services">Servicios</NavLink>
            <NavLink href="#portfolio">Nuestro portafolio</NavLink>
            <NavLink href="#packages">Paquetes</NavLink>
            <NavLink href="#working-benefits">Beneficios</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin size={24} />} />
            <SocialIcon href="https://github.com" icon={<FaGithub size={24} />} />
            <SocialIcon href="https://facebook.com" icon={<FaFacebook size={24} />} />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram size={24} />} />
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <NavLink href="#services" mobile>Servicios</NavLink>
            <NavLink href="#portfolio" mobile>Nuestro portafolio</NavLink>
            <NavLink href="#packages" mobile>Paquetes</NavLink>
            <NavLink href="#working-benefits" mobile>Beneficios</NavLink>
            <NavLink href="#contact" mobile>Contacto</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`text-white font-bold text-lg hover:scale-110 transition-transform duration-300 ${
      mobile ? 'block py-3' : ''
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
    className="text-white hover:scale-110 transition-transform duration-300"
  >
    {icon}
  </a>
)

export default Header
