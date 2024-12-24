import { FaRocket, FaUsers, FaChartLine, FaMobileAlt } from 'react-icons/fa'

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Benefits of Our Web and Facebook Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard
            icon={<FaRocket />}
            title="Increased Online Presence"
            description="Boost your visibility and reach a wider audience with professionally designed web and Facebook pages."
          />
          <BenefitCard
            icon={<FaUsers />}
            title="Better Customer Engagement"
            description="Interact with your customers more effectively through user-friendly interfaces and social media integration."
          />
          <BenefitCard
            icon={<FaChartLine />}
            title="Improved Conversion Rates"
            description="Optimize your online platforms for higher conversion rates and increased sales."
          />
          <BenefitCard
            icon={<FaMobileAlt />}
            title="Mobile Responsiveness"
            description="Ensure your web presence looks great and functions perfectly on all devices, including smartphones and tablets."
          />
        </div>
      </div>
    </section>
  )
}

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-md p-6 transition duration-300 hover:shadow-lg">
    <div className="text-4xl text-primary-light dark:text-primary-dark mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">{title}</h3>
    <p className="text-text-secondary-light dark:text-text-secondary-dark">{description}</p>
  </div>
)

export default Benefits

