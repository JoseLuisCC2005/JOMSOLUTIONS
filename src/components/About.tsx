console.log("HOlaaaaa");
import Image from 'next/image'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const About = () => {
  return (
    <section id="about" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/profile-photo.jpg"
              alt="Your Name"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-lg mb-6 text-text-light dark:text-text-dark">
              With over 5 years of experience in web development, I specialize in creating custom, responsive websites that meet the unique needs of each client. My expertise spans across various technologies, allowing me to deliver comprehensive solutions for businesses of all sizes.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-secondary-light dark:text-secondary-dark">Skills</h3>
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

