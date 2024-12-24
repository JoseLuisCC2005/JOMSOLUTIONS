'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-light dark:text-primary-dark">
            Your Name
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#packages">Packages</NavLink>
            <NavLink href="#payment-methods">Payment Methods</NavLink>
            <NavLink href="#working-benefits">Why Us</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="hidden md:flex space-x-4">
            <SocialIcon href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialIcon href="https://github.com" icon={<FaGithub />} />
            <SocialIcon href="https://facebook.com" icon={<FaFacebook />} />
            <SocialIcon href="https://instagram.com" icon={<FaInstagram />} />
          </div>
          <button
            className="md:hidden text-text-light dark:text-text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#services" mobile>Services</NavLink>
            <NavLink href="#benefits" mobile>Benefits</NavLink>
            <NavLink href="#portfolio" mobile>Portfolio</NavLink>
            <NavLink href="#testimonials" mobile>Testimonials</NavLink>
            <NavLink href="#packages" mobile>Packages</NavLink>
            <NavLink href="#payment-methods" mobile>Payment Methods</NavLink>
            <NavLink href="#working-benefits" mobile>Why Us</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link
    href={href}
    className={`text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition duration-300 ${
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
    className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition duration-300"
  >
    {icon}
  </a>
)

export default Header

