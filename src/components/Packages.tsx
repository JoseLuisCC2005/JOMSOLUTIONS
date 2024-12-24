import { FaCheck } from 'react-icons/fa'

const Packages = () => {
  return (
    <section id="packages" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Our Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            title="Basic"
            price="$499"
            features={[
              "Custom Website Design",
              "Up to 5 Pages",
              "Mobile Responsive",
              "Basic SEO",
              "Contact Form",
            ]}
          />
          <PackageCard
            title="Professional"
            price="$999"
            features={[
              "Custom Website Design",
              "Up to 10 Pages",
              "Mobile Responsive",
              "Advanced SEO",
              "Contact Form",
              "Social Media Integration",
              "Blog Setup",
            ]}
            highlighted={true}
          />
          <PackageCard
            title="Enterprise"
            price="$1999"
            features={[
              "Custom Website Design",
              "Unlimited Pages",
              "Mobile Responsive",
              "Advanced SEO",
              "Contact Form",
              "Social Media Integration",
              "Blog Setup",
              "E-commerce Integration",
              "Custom Functionality",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

const PackageCard = ({ title, price, features, highlighted = false }: { title: string; price: string; features: string[]; highlighted?: boolean }) => (
  <div className={`bg-surface-light dark:bg-surface-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg ${highlighted ? 'border-2 border-primary-light dark:border-primary-dark' : ''}`}>
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
    <button className="w-full bg-primary-light dark:bg-primary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark text-text-light dark:text-text-dark font-bold py-2 px-4 rounded transition duration-300">
      Choose Plan
    </button>
  </div>
)

export default Packages

