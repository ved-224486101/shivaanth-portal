
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-foundation-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-6">
              <span className="font-bold text-2xl tracking-tight text-foundation-accent">
                Shiva Aradhya <span className="font-light text-white">Foundation</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering lives through compassion, education, and sustainable development initiatives.
            </p>
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-foundation-accent/20 hover:bg-foundation-accent/30 text-foundation-accent transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#mission" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Our Programs</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Education Initiatives</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Healthcare Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Community Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Environmental Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-foundation-accent transition-colors duration-200">Volunteer Opportunities</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to receive updates on our activities and impact.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 text-foundation-dark rounded-l-md focus:outline-none focus:ring-2 focus:ring-foundation-accent"
              />
              <button className="bg-foundation-accent hover:bg-foundation-accent/90 text-white px-4 py-2 rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shiva Aradhya Foundation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-foundation-accent transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-foundation-accent transition-colors duration-200">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-foundation-accent transition-colors duration-200">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
