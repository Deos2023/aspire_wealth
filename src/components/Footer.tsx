
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">BSK ASPIRE PVT LTD</h3>
            <p className="mb-4 text-gray-300">
              Your trusted partner in wealth management since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-white transition-colors">
                  Client Segments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">Equity</li>
              <li className="text-gray-300 hover:text-white transition-colors">Mutual Funds</li>
              <li className="text-gray-300 hover:text-white transition-colors">Life Insurance</li>
              <li className="text-gray-300 hover:text-white transition-colors">Health Insurance</li>
              <li className="text-gray-300 hover:text-white transition-colors">Bonds</li>
            </ul>
          </div>

          {/* Contact */}
       <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-start text-gray-300">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Vinayak Enclave, 4th Floor, room no 4A, near panchpota 20 foot road, garia, 700152 West Bengal
                </span>
              </p>
              <p className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 9231855644</span>
              </p>
              <p className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>bskwealthadvisorypvtltd@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-center">Our Location</h3>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-lg border border-secondary">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3686.8912698263684!2d88.4110229752975!3d22.470719879564435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI4JzE0LjYiTiA4OMKwMjQnNDkuMCJF!5e0!3m2!1sen!2sin!4v1746600052141!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="BSK ASPIRE PVT LTD Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © {currentYear}. All Rights Reserved. Website Developed & Maintained by Digital Exposure Online Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
