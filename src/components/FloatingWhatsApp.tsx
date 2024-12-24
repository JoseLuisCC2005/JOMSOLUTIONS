import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

export default FloatingWhatsApp

