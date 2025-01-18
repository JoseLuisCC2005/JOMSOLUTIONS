import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const About = () => {
  return (
    <section
      id="about"
      className="py-16"
      style={{
        backgroundColor: '#01030e', 
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-left text-primary-light dark:text-primary-dark">Sobre nosotros</h2>
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative w-72 h-72 mx-auto rounded-full overflow-hidden">
              <Image
                src="/JOM LOGO .png"
                alt="Your Name"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg mb-6 text-text-light dark:text-text-dark text-justify">
              Con más de 3 años de experiencia en desarrollo web, nos especializamos en la creación de sitios web personalizados y receptivos que satisfagan las necesidades únicas de cada cliente. Nuestra experiencia abarca varias tecnologías, lo que nos permite ofrecer soluciones integrales para clientes y empresas de todo tipo.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-light dark:text-secondary-dark">Tecnologías</h3>
            <div className="flex flex-wrap gap-4">
              <Skill icon={<FaHtml5 />} name="HTML5" />
              <Skill icon={<FaCss3Alt />} name="CSS3" />
              <Skill icon={<FaJs />} name="JavaScript" />
              <Skill icon={<FaReact />} name="React" />
              <Skill icon={<SiNextdotjs />} name="Next.js" />
              <Skill icon={<FaPython />} name="Python" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Skill = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex items-center bg-background-light dark:bg-background-dark rounded-full px-4 py-2">
    <span className="text-2xl mr-2 text-primary-light dark:text-primary-dark">{icon}</span>
    <span className="text-text-light dark:text-text-dark">{name}</span>
  </div>
)

export default About
