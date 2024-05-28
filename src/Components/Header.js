// Header.js
import React from 'react';
import Logo from '../assets/images/envato_market.svg';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 nav">
      <div className="flex items-center">
        <a href="https://themeforest.net/item/yogastudio-gym-and-healthcare-wp-theme/14121782">
          <img src={Logo} alt="Envato Market" className="w-48" />
        </a>
      </div>
      <div className="flex items-center">
        <a 
          className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300" 
          href="https://themeforest.net/checkout/from_item/14121782?license=regular&amp;support=bundle_6month"
        >
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Header;
