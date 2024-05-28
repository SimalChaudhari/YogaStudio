import React, { useState } from 'react';
// import hero1 from '../../assets/images/1.jpg';
// import hero2 from '../../assets/images/2.jpg';
// import hero3 from '../../assets/images/3.jpg';
// import hero4 from '../../assets/images/4.jpg';
// import hero5 from '../../assets/images/5.jpg';
// import hero6 from '../../assets/images/6.jpg';
import LG from "../../assets/images/logo.png";

const HeroSection = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='Hero_section'>
     <div className="cont_extra cont">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto py-7">
          <a
            href="//yogastudio.ancorathemes.com/"
            target="_blank"
            className="logo"
          >
            <img src={LG} alt="Eject" className="lg:w-1/2 md:w-auto w-1/2" />
          </a>
        </div>
        <div className="w-full md:w-auto">
          <nav className={showMenu ? "block md:hidden" : "hidden md:block"}>
            <ul className="flex">
              <li><a href="#" data-goto="#demo">Demos</a></li>
              <li><a href="#" data-goto="#features">Features</a></li>
              <li><a href="//doc.themerex.net/yogastudio/" target="_blank">Documentation</a></li>
              <li><a href="//themerex.net/support/" target="_blank">Support</a></li>
            </ul>
          </nav>
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="btn btn_header">
              {showMenu ? "Close Menu" : "Menu"}
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <button
            className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"
            type="button"
            onClick={() => {
              window.open("https://1.envato.market/dokLY7", "_blank");
            }}
          >
            Purchase Theme
          </button>
        </div>
      </div>
    </div>

      <section className="hero center relative overflow-hidden bg-transparent text-gray-900">
        <div className="container mx-auto p-4 text-center">
          <h1
            className="text-4xl md:text-9xl font-bold mb-4 animate__animated animate__fadeInUp custom-title"
            data-animation="animate__fadeInUp"
            data-delay="300">
            Gym & Healthcare
          </h1>
          <p
            className="text-lg mb-4 animate__animated animate__fadeInUp"
            data-animation="animate__fadeInUp"
            data-delay="500">
            Powerful WordPress Theme
          </p>
        </div>

        {/* <div id="scene" className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-1/2" data-depth=".08">
          <img src={hero1} alt="1" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2" data-depth=".05">
          <img src={hero2} alt="2" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2" data-depth=".07">
          <img src={hero3} alt="3" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2" data-depth=".06">
          <img src={hero4} alt="4" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-1/2 h-1/2" data-depth=".09">
          <img src={hero5} alt="5" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-1/2 h-1/2" data-depth=".07">
          <img src={hero6} alt="6" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="scroll_wrap absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <a href="#" className="scroll_btn" data-goto="#demo">
          <i className="demo-icon icon-down-arrow" data-goto="#demo"></i>
        </a>
      </div> */}
      </section>
    </div>
  );
};

export default HeroSection;
