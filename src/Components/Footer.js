// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Get Yoga Studio and Create a Professional Website Today!
            </h2>
            <div className="mt-4">
              <a 
                href="https://1.envato.market/dokLY7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Purchase Theme
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p>
              <a 
                href="//ancorathemes.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-400 transition duration-300"
              >
                AncoraThemes
              </a> 
              © 2024 All Rights Reserved.
            </p>
            {/* <p>Powered by WordPress</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
