const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-light dark:hover:text-primary-dark mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-primary-light dark:hover:text-primary-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

