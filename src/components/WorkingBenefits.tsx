"use client";

import { FaClock, FaHandshake, FaLightbulb, FaRocket } from 'react-icons/fa';

const WorkingBenefits = () => {
  return (
    <section id="working-benefits" className="py-20" style={{ backgroundColor: '#01030e' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">
          Benefits of Working With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon={<FaClock />}
            title="Time-Efficient"
            description="We deliver projects on time, ensuring you meet your deadlines."
          />
          <BenefitCard
            icon={<FaHandshake />}
            title="Collaborative Approach"
            description="We work closely with you to ensure your vision is realized."
          />
          <BenefitCard
            icon={<FaLightbulb />}
            title="Innovative Solutions"
            description="We bring creative and cutting-edge ideas to your projects."
          />
          <BenefitCard
            icon={<FaRocket />}
            title="Scalable Results"
            description="Our solutions are designed to grow with your business."
          />
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div
    className="rounded-lg shadow-md p-6 text-center"
    style={{
      backgroundColor: '#34495e', // Gris azulado
    }}
  >
    <div className="text-4xl mb-4 text-primary-light dark:text-primary-dark flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">{title}</h3>
    <p className="text-text-secondary-light dark:text-text-secondary-dark">{description}</p>
  </div>
);

export default WorkingBenefits;
