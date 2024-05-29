import React from 'react';
import ftbg from '../assets/images/ftbg.jpg'; // Ensure the correct path

const Footer = () => {
  return (
    <footer
      className="text-white lg:py-8 py-24 bg-cover bg-center flex flex-col justify-between lg:min-h-[700px] "
      style={{ backgroundImage: `url(${ftbg})`}} // Set the height to match the background image
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="text-center mb-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get Yoga Studio and Create a Professional Website Today!
            </h1>
            <div className="mt-4">
              <a 
                href="https://1.envato.market/dokLY7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-lime-600 text-white font-semibold py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 rounded hover:bg-lime-500 transition duration-300"
              >
                Purchase Theme
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-sm sm:text-base md:text-lg">
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
            {/* <p className="text-sm sm:text-base md:text-lg">Powered by WordPress</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
