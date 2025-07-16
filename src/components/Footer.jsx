import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">BioOrg</span>
            </div>
            <p className="text-gray-300 mb-4">
              Family-owned guava farm dedicated to providing the freshest, most delicious guavas 
              grown with sustainable farming practices. From our farm to your table.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">akshya@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">+919899799624</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Our Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Farm Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Our Farm</h3>
            <div className="flex items-start space-x-2 mb-4">
              <MapPin className="h-4 w-4 text-green-400 mt-1" />
              <div className="text-sm text-gray-300">
                <p>Khasra # 191, Bhikka Mazara</p>
                <p>Uttar Pradesh 247776</p>
              </div>
            </div>
            <p className="text-xs text-gray-400">
              Farm tours available by appointment
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 BioOrg. All rights reserved. | Growing fresh since 19XX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;