"use client";

import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>("Basic") // Primer paquete seleccionado por defecto

  const handlePackageClick = (title: string) => {
    setSelectedPackage(title)
  }

  return (
    <section id="packages" className="py-20" style={{ backgroundColor: '#01030e' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PackageCard
            title="Basic"
            price="$105 USD/ $2099 MXN"
            features={[
              "Custom Website Design",
              "Up to 5 Pages",
              "Mobile Responsive",
              "Basic SEO",
            ]}
            isSelected={selectedPackage === "Basic"}
            onClick={() => handlePackageClick("Basic")}
          />
          <PackageCard
            title="Professional"
            price="$120 USD/ $2399 MXN"
            features={[
              "Custom Website Design",
              "Up to 9 Pages",
              "Mobile Responsive",
              "Advanced SEO",
              "Contact Form",
              "Social Media Integration (Facebook page)",
            ]}
            isSelected={selectedPackage === "Professional"}
            onClick={() => handlePackageClick("Professional")}
          />
      
        </div>
      </div>
    </section>
  )
}

const PackageCard = ({ title, price, features, isSelected, onClick }: { title: string; price: string; features: string[]; isSelected: boolean; onClick: () => void }) => (
  <div
    className={`bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg cursor-pointer ${
      isSelected ? 'border-4 border-white' : 'border border-transparent'
    }`}
    onClick={onClick}
  >
    <h3 className="text-2xl font-semibold mb-2 text-primary-light dark:text-primary-dark">{title}</h3>
    <p className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">{price}</p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <FaCheck className="text-primary-light dark:text-primary-dark mr-2" />
          <span className="text-text-secondary-light dark:text-text-secondary-dark">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default Packages
