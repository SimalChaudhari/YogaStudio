import React from "react";
import INV_LG from "../../assets/images/logo_inverse.png";

const MobileNavMenu = () => {
  return (
    <nav className="nav-mobile is-active fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <a href="//yogastudio.ancorathemes.com/" target="_blank" className="logo logo_mobile absolute top-0 left-0 p-4">
        <img src={INV_LG} alt="Eject" className="w-60" />
      </a>
      <ul className="mt-8">
        <li><a href="#" data-goto="#demo">Demos</a></li>
        <li><a href="#" data-goto="#features">Features</a></li>
        <li><a href="//doc.themerex.net/yogastudio/" target="_blank">Documentation</a></li>
        <li><a href="//themerex.net/support/" target="_blank">Support</a></li>
        <li className="btn_mob mt-4">
          <a href="https://1.envato.market/dokLY7" target="_blank" className="btn btn_header">Purchase Theme</a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
