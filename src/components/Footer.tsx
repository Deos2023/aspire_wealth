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
            <p className="mb-4 text-gray-200">
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
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-200 hover:text-white transition-colors">
                  Client Segments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-200 hover:text-white transition-colors">Equity</li>
              <li className="text-gray-200 hover:text-white transition-colors">Mutual Funds</li>
              <li className="text-gray-200 hover:text-white transition-colors">Life Insurance</li>
              <li className="text-gray-200 hover:text-white transition-colors">Health Insurance</li>
              <li className="text-gray-200 hover:text-white transition-colors">Bonds</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-start text-gray-200">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>
                  Vinayak Enclave, 4th Floor, room no 4A, near panchpota 20 foot road, garia, 700152 West Bengal
                </span>
              </p>
              <p className="flex items-center text-gray-200">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+91 9231855644</span>
              </p>
              <p className="flex items-center text-gray-200">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>bskwealthadvisorypvtltd@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700/30 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} BSK ASPIRE PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
