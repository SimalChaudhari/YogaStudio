import React, { useState } from "react";
import LG from "../../assets/images/logo.png";
import INV_LG from "../../assets/images/logo_inverse.png";
// import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
import { List, X } from "@phosphor-icons/react";

const HeroSection = () => {
  const [showMenu, setShowMenu] = useState(false);
  // console.log("showMenu: ", showMenu);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Hero_section">
      {/* <div className="cont_extra cont"> */}
      <div className={showMenu ? "hidden" : ":block"}>
        <div className="flex items-center justify-between lg:px-14 mx-auto">
          <>
            <img src={LG} alt="Eject" className="lg:w-2/12 md:1-4 w-56 py-7" />
          </>

          <div className="w-full md:w-auto">
            {/* <nav className={showMenu ? "block md:hidden" : "hidden md:block"}> */}
            <nav className="hidden md:block">
              <ul className="flex lg:gap-10 gap-5">
                <li>
                  <a href="http://localhost:3000/" data-goto="#demo">
                    Demos
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/" data-goto="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/">Documentation</a>
                </li>
                <li>
                  <a href="http://localhost:3000/">Support</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="block md:hidden">
            <button onClick={toggleMenu} className="btn btn_header">
              {showMenu ? "Close Menu" : <List size={32} />}
            </button>
          </div>
          <div className="w-full md:w-auto hidden md:block">
            <button
              className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300"
              type="button"
              onClick={() => {
                window.open("https://1.envato.market/dokLY7", "_blank");
              }}>
              Purchase Theme
            </button>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="py-7">
          {/* <MobileNavMenu /> */}
          <nav className="nav-mobile is-active fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            <a
              href="//yogastudio.ancorathemes.com/"
              target="_blank"
              className="logo logo_mobile absolute top-0 left-0 py-6 px-3">
              <img src={INV_LG} alt="Eject" className="w-60" />
            </a>
            <div className="absolute top-0 right-0 p-8">
              <X size={32} color="#fff" onClick={toggleMenu} />
            </div>
            <ul className="mt-8">
              <li className="m-5">
                <a href="#" data-goto="#demo">
                  Demos
                </a>
              </li>
              <li className="m-5">
                <a href="#" data-goto="#features">
                  Features
                </a>
              </li>
              <li className="m-5">
                <a href="//doc.themerex.net/yogastudio/" target="_blank">
                  Documentation
                </a>
              </li>
              <li className="m-5">
                <a href="//themerex.net/support/" target="_blank">
                  Support
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="https://1.envato.market/dokLY7"
                  target="_blank"
                  className="btn btn_header bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-500 transition duration-300">
                  Purchase Theme
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
