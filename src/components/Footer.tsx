const Footer = () => {
  return (
    <footer className="bg-[#01030e] text-text-light dark:text-text-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Jom Solutions. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a
              href="/Políticas de Privacidad Jom solutions.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light dark:hover:text-primary-dark mr-4"
            >
              Política de privacidad
            </a>
            <a
              href="/Términos de Servicio Jom Solutions.pdf"  // Ruta corregida aquí
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-light dark:hover:text-primary-dark"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
