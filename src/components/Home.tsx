'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: "url('/Fondo inicio.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="text-center text-text-light dark:text-text-dark relative z-10">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
We Grow When You Do.       
 </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
We bring your vision to life with cutting-edge web development.
</motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="#services"
            className="bg-primary-light dark:bg-primary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark text-text-light dark:text-text-dark font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Learn about my services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Home

