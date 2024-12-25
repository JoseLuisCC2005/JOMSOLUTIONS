"use client";

import { FaDesktop, FaFacebookF, FaSearch, FaChartBar, FaTools, FaWhatsapp } from 'react-icons/fa'

const Services = () => {
  return (
    
    <section id="services" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaDesktop />}
            title="Custom Web Development"
            description="Responsive design, SSL certificate, and performance optimization for a seamless user experience."
          />
          <ServiceCard
            icon={<FaFacebookF />}
            title="Facebook Page Development"
            description="Create and optimize Facebook pages to enhance your social media presence and engage with your audience."
          />
          <ServiceCard
            icon={<FaSearch />}
            title="SEO Optimization"
            description="Improve your website's visibility in search engines and drive organic traffic to your business."
          />
          <ServiceCard
            icon={<FaChartBar />}
            title="Google Analytics Integration"
            description="Set up and configure Google Analytics to track website performance and user behavior."
          />
          <ServiceCard
            icon={<FaTools />}
            title="Website Maintenance"
            description="Regular updates, security patches, and performance optimization to keep your website running smoothly."
          />
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
    <div className="text-4xl text-primary-light dark:text-primary-dark mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{title}</h3>
    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">{description}</p>
    <div className="flex items-center bg-primary-light dark:bg-primary-dark rounded-lg p-2">
      <button className="text-text-light dark:text-text-dark font-bold flex-grow">
        Request Info
      </button>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-light dark:text-text-dark ml-2"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  </div>
)

export default Services

