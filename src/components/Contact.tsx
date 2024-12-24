import { FaEnvelope, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-light dark:text-primary-dark">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="bg-background-light dark:bg-background-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-text-secondary-light dark:text-text-secondary-dark bg-surface-light dark:bg-surface-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-text-secondary-light dark:text-text-secondary-dark bg-surface-light dark:bg-surface-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label className="block text-text-light dark:text-text-dark text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-text-secondary-light dark:text-text-secondary-dark bg-surface-light dark:bg-surface-dark leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message here"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-primary-light dark:bg-primary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark text-text-light dark:text-text-dark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="bg-background-light dark:bg-background-dark shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h3 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">Contact Information</h3>
              <div className="mb-4">
                <p className="flex items-center text-text-light dark:text-text-dark">
                  <FaEnvelope className="mr-2 text-primary-light dark:text-primary-dark" />
                  <a href="mailto:your@email.com" className="hover:text-primary-light dark:hover:text-primary-dark transition duration-300">your@email.com</a>
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center text-text-light dark:text-text-dark">
                  <FaWhatsapp className="mr-2 text-primary-light dark:text-primary-dark" />
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light dark:hover:text-primary-dark transition duration-300">+1 (234) 567-890</a>
                </p>
              </div>
              <div className="mb-4">
                <p className="flex items-center text-text-light dark:text-text-dark">
                  <FaFacebookMessenger className="mr-2 text-primary-light dark:text-primary-dark" />
                  <a href="https://m.me/your.facebook.username" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light dark:hover:text-primary-dark transition duration-300">Message on Facebook</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

